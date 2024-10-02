---
tags:
  - resources
  - python
  - clean_code
---
In the [[zip() Simplifies Using Multiple Iterables|preceding section]], we looked at improvements in readability that use of `zip()` can often accomplish. But that section also glossed over a possible problem in the underlying task. The iterables that we zip() together might be different lengths, and when they are, zip() will silently ignore the unconsumed items from the longer iterator.

Recall that we had several data files with information on the name, latitude, longitude, and elevation of NOAA-monitored weather stations. One can notice pretty quickly that this is a fragile arrangement of data, since the process that created the files may fail to assure accurate synchronization of their data. However, data often becomes available to us in forms that have upstream flaws that we cannot control.

The code we wrote to illustrate the good use of zip() was a good approach to remedying some flaws in the format of the original data by putting all attributes of each station within the same object (a `namedtuple` in the example, although other objects like `dataclasses`, `dictionaries`, or custom objects might also be good choices).

The use of zip() in its simplest form, from the “solution” to the prior section, can actually mask errors rather than the much better option of failing noisily. Recall the sound advice from The Zen of Python: “Errors should never pass silently.”

Previously we had used this code, but let’s substitute the data file *station-lattrunc.txt* for *station-latitude.txt*. That is, the former is a truncated version of the latter, which I have constructed for this example.

Using zip() can mask mismatches in iterables

```python
stations = []
with (
    open("station-names.txt") as names,
    open("station-lattrunc.txt") as lats,
    open("station-longitudes.txt") as lons,
    open("station-elevations.txt") as els,
):
    for datum in zip(names, lats, lons, els):
        datum = (d.rstrip() for d in datum)
        stations.append(Station(*datum))

assert len(stations) == 1255
# Traceback (most recent call last):
# [...]
# AssertionError
len(stations)
# Output: 1250
```

The assertion shown catches that the length of the generated list of objects isn’t exactly 1,255; but we would like code that is flexible enough to handle corresponding data with a different number of items than that precise number.

There are two reasonable approaches we can take when we want to enforce a degree of data consistency but do not necessarily know an exact data size to expect: requiring that all the data files in fact are of matching length, or padding fields where data is not available. Either is reasonable, depending on your purpose.

Using zip(strict=True) to enforce iterator length consistency

```python
stations = []
with (
    open("station-names.txt") as names,
    open("station-lattrunc.txt") as lats,
    open("station-longitudes.txt") as lons,
    open("station-elevations.txt") as els,
):
    for datum in zip(names, lats, lons, els, strict=True):
        datum = (d.rstrip() for d in datum)  # ➊
        stations.append(Station(*datum))

# Traceback (most recent call last):
# [...]
# ValueError: zip() argument 2 is shorter than argument 1
```

❶ The optional strict argument was added in Python 3.10.

This approach is very helpful in working independently of the length of the several streams of data, merely enforcing that they are the same. And it is very much a “fail fast” approach, which is almost universally desirable.

However, there are likewise definitely situations where imputing sentinel values for missing data is more appropriate. A sentinel is a special value that can mark a “special” situation for a data point. A very common sentinel, in many contexts, is None. Sometimes you might use a value like -1 as a sentinel to indicate that “normal” values are positive. At other times, you might include a defined name like my_sentinel = object() to guarantee that this value is distinct from everything else in your program. Filling in imputed values is easy with zip_longest().

Using itertools.zip_longest() to impute missing data

```python
from itertools import zip_longest
stations = []

with (
    open("station-names.txt") as names,
    open("station-lattrunc.txt") as lats,
    open("station-longitudes.txt") as lons,
    open("station-elevations.txt") as els,
):
    for datum in zip_longest(
        names, lats, lons, els, fillvalue="-1"
    ):
        datum = (d.rstrip() for d in datum)
        stations.append(Station(*datum))

pprint(stations[-6:])

# [Station(name='SCUOL', latitude='46.8', longitude='10.2833333', elevation='1295.0'), Station(name='NALUNS', latitude='-1', longitude='10.2666666', elevation='2400.0'), Station(name='BUOCHS AIRPORT STANS', latitude='-1', longitude='8.4', elevation='450.0'), Station(name='SITTERDORF', latitude='-1', longitude='9.2666666', elevation='506.0'), Station(name='SCALOTTAS', latitude='-1', longitude='9.5166666', elevation='2323.0'), Station(name='VADUZ', latitude='-1', longitude='9.5166666', elevation='463.0')]
```

In the case of zip_longest(), shorter iterables are simply filled in with some sentinel. None is the default, but it is configurable using the argument fillvalue.

Neither of the approaches in this section is flawless, of course. In particular, having items from iterables correspond correctly is a much stricter requirement than having them align correctly. If one series drops item 10 and another drops item 20, they could still fortuitously be the same length overall.

These functions are powerful, but they cannot answer all the important questions about data consistency.
