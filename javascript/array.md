## Array

### Create
1. []
2. new Array()
3. create new array from existing array

//shallow copy
.slice

### Creating an array using the result of a match

Array.from()

join

rest operator

concat

copyWithin    [1,2,3,4,5].copyWithin(2, 3, 4) ==> [1,2,4,4,5]

### Update an array
reverse

fill

sort

### subset of array
1. slice

2. splice

3. filter


### single element
push

pop

shift

unshift

### Check
Array.isArray

Array.of

every    [1,2,3,4,5].every(num => num > 0)  //true

find

includes

some

### Read an array
anIndividual elements in an array``

forEach

map

### read subset of an array

filter

reduce

### Search in an array
find
some

### Get individual elements
indexOf

lastIndexOf

at

findIndex


### Properties
length

toString

### Array Vs Set
Set: For verifying element existence in large collection


array.includes()   // O complexity O(n^2)

set.has()  // O complexity O(n)
