---
tags:
  - resources
  - python
  - clean_code
---
Let’s look at a mistake that is mostly stylistic and one of code clarity. An `unpythonic` way of looping over multiple iterables, such as multiple lists, might look like the following code. In the example, the several data files contain information on 1,255 NOAA-monitored weather stations.

Parallel access to multiple lists of the same length

```python
from pprint import pprint
from pathlib import Path
from collections import namedtuple

Station = namedtuple("Station", "name latitude longitude elevation")

names = Path("station-names.txt").read_text().splitlines()
lats = Path("station-latitudes.txt").read_text().splitlines()
lons = Path("station-longitudes.txt").read_text().splitlines()
els = Path("station-elevations.txt").read_text().splitlines()

assert len(names) == len(lats) == len(lons) == len(els)

stations = []

for i in range(1255):
    station = Station(names[i], lats[i], lons[i], els[i])
    stations.append(station)

pprint(stations[:4])

#[Station(name='JAN MAYEN NOR NAVY', latitude='70.9333333',     longitude='-8.6666667', elevation='9.0'),  Station(name='SORSTOKKEN', latitude='59.791925',     longitude='5.34085', elevation='48.76'),  Station(name='VERLEGENHUKEN', latitude='80.05',     longitude='16.25', elevation='8.0'),  Station(name='HORNSUND', latitude='77.0',     longitude='15.5', elevation='12.0')]
```

The assertion in the example checks that all these files indeed have the same amount of data. More robust error handling is possible, of course. The use of `pathlib` in the example assures that files are closed after they are read in. Using `pathlib` gives you a similar guarantee about proper cleanup to using context managers,

The prior code is not terrible, but it can be made more **Pythonic**. As one improvement, we can notice that open file handles are themselves iterable. As the main point, we do not need intermediate lists to perform this action, nor do we need to separately access corresponding index positions within each. This calls back to several mistakes discussed in this chapter of focusing on where a datum occurs in a collection rather than directly on the data itself.

Cleaner code to build a list of station data `namedtuples` might look like this. 

Using [[Python zip() Function]] to read multiple open files

```python
stations = []

# Parenthesized context managers were introduced in python 3.10.
with ( 
    open("station-names.txt") as names,
    open("station-latitudes.txt") as lats,
    open("station-longitudes.txt") as lons,
    open("station-elevations.txt") as els,
):
    for data in zip(names, lats, lons, els):
        data = (field.rstrip() for field in data)
        stations.append(station(*data))

assert len(stations) == 1255

pprint(stations[:4])

# output:
# [station(name='jan mayen nor navy', latitude='70.9333333',
#          longitude='-8.6666667', elevation='9.0'),
#  station(name='sorstokken', latitude='59.791925',
#          longitude='5.34085', elevation='48.76'),
#  station(name='verlegenhuken', latitude='80.05',
#          longitude='16.25', elevation='8.0'),
#  station(name='hornsund', latitude='77.0',
#          longitude='15.5', elevation='12.0')]
```

The aesthetics of having to strip the extra newlines from the file iterators isn’t ideal, but overall this code is just as safe (in terms of guaranteeing closed files), only holds one datum from each file in memory at a given time, and is more concise and expressive. The extra names remain within the namespace, but they are merely closed files that take minimal memory:

```python
>>> names
<_io.TextIOWrapper name='station-names.txt' mode='r' encoding='UTF-8'>
>>> next(names)
Traceback (most recent call last):
[...]
ValueError: I/O operation on closed file.
```

