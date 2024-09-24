```c++
void f(int& x, int*y, int z) {
	x =5; //main()'s i changed to 5
	*y =6; // main()'s i changed to 6
	z =7; // no change to main()'s i
}
```

This declares a function `void f(int& x, int*y, int z)` that takes three parameters:
- `x` is passed by reference (using &)
- `y` is a pointer (using \*)
- `z` is passed by value

and `main()`, which initializes `i` to `4`, then calls function f, passing: (i by reference, address of i as a pointer, value of i) respectively.

ddd