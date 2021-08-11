Pascal's Triangle is a triangle where all numbers are the sum of the two numbers above it. Here's an example of the Pascal's Triangle of size 5.

    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

Given an integer n, generate the n-th row of the Pascal's Triangle.

Here's an example and some starter code.

def pascal_triangle_row(n):
  # Fill this in.

print(pascal_triangle_row(6))
# [1, 5, 10, 10, 5, 1]



Given two binary numbers represented as strings, return the sum of the two binary numbers as a new binary represented as a string. Do this without converting the whole binary string into an integer.

Here's an example and some starter code.

def sum_binary(bin1, bin2):
  # Fill this in.
  
print(sum_binary("11101", "1011"))
# 101000



Given a list of numbers and a target number n, find 3 numbers in the list that sums closest to the target number n. There may be multiple ways of creating the sum closest to the target number, you can return any combination in any order.

Here's an example and some starter code.

def closest_3sum(nums, target):
  # Fill this in.
  
print(closest_3sum([2, 1, -5, 4], -1))
# Closest sum is -5+1+2 = -2 OR -5+1+4 = 0
# print [-5, 1, 2]




Given an integer, convert the integer to a roman numeral. You can assume the input will be between 1 to 3999.

The rules for roman numerals are as following:

There are 7 symbols, which correspond to the following values.

I   1
V   5
X   10
L   50
C   100
D   500
M   1000

The value of a roman numeral are the digits added together. For example the roman numeral 'XX' is V + V = 10 + 10 = 20. Typically the digits are listed from largest to smallest, so X should always come before I. Thus the largest possible digits should be used first before the smaller digits (so to represent 50, instead of XXXXX, we should use L).

There are a couple special exceptions to the above rule.

To represent 4, we should use IV instead of IIII. Notice that I comes before V.
To represent 9, we should use IX instead of VIIII.
To represent 40, we should use XL instead of XXXX.
To represent 90, we should use XC instead of LXXXX.
To represent 400, we should use CD instead of CCCC.
To represent 900, we should use CM instead of DCCCC.

Here are some examples and some starter code.

def integer_to_roman(num):
  # Fill this in.

print(integer_to_roman(1000))
# M
print(integer_to_roman(48))
# XLVIII
print(integer_to_roman(444))
# CDXLIV


Given an integer, reverse the digits. Do not convert the integer into a string and reverse it.

Here's some examples and some starter code.

def reverse_integer(num):
  # Fill this in.
  
print(reverse_integer(135))
# 531

print(reverse_integer(-321))
# -123



Given a 32-bit integer, swap the 1st and 2nd bit, 3rd and 4th bit, up til the 31st and 32nd bit.

Here's some starting code and an example:

def swap_bits(num):
  # Fill this in.

print(f"0b{swap_bits(0b10101010101010101010101010101010):032b}")
# 0b01010101010101010101010101010101



Given a string, convert it to an integer without using the builtin str function. You are allowed to use ord to convert a character to ASCII code.

Consider all possible cases of an integer. In the case where the string is not a valid integer, return None.

Here's some starting code:

def convert_to_int(s):
  # Fill this in.

print(convert_to_int


Given a square 2D matrix (n x n), rotate the matrix by 90 degrees clockwise.

Here's an example and some starting code:

def rotate(mat):
  # Fill this in.

mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# Looks like
# 1 2 3
# 4 5 6
# 7 8 9

# Looks like
# 7 4 1
# 8 5 2
# 9 6 3
print(rotate(mat))
# [[7, 4, 1], [8, 5, 2], [9, 6, 3]]


The power function calculates x raised to the nth power. If implemented in O(n) it would simply be a for loop over n and multiply x n times. Instead implement this power function in O(log n) time. You can assume that n will be a non-negative integer.

Here's some starting code: 

def pow(x, n):
  # Fill this in.

print(pow(5, 3))
# 125


The power function calculates x raised to the nth power. If implemented in O(n) it would simply be a for loop over n and multiply x n times. Instead implement this power function in O(log n) time. You can assume that n will be a non-negative integer.

Here's some starting code: 

def pow(x, n):
  # Fill this in.

print(pow(5, 3))
# 125

Given a number n, find the least number of squares needed to sum up to the number.

Here's an example and some starting code:

def square_sum(n):
  # Fill this in.

print(square_sum(13))
# Min sum is 3^2 + 2^2
# 2


recently asked by Apple:

Given a non-negative integer n, convert n to base 2 in string form. Do not use any built in base 2 conversion functions like bin.

Here's an example and some starter code:

def base_2(n):
  # Fill this in.

print(base_2(123))
# 1111011

In the above example, 2^6 + 2^5 + 2^4 + 2^3 + 2^1 + 2^0 = 123.



You are only allowed to perform 2 operations, multiply a number by 2, or subtract a number by 1. Given a number x and a number y, find the minimum number of operations needed to go from x to y.

Here's an example and some starter code.

def min_operations(x, y):
  # Fill this in.

print(min_operations(6, 20))
# (((6 - 1) * 2) * 2) = 20 : 3 operations needed only
# print 3


For instance, given the phone number 364
we can construct the words ['dog', 'fog'].

Here's a starting point:

lettersMaps = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    0: []
}

validWords = ['dog', 'fish', 'cat', 'fog']

def makeWords(phone):
  #Fill this in

print(makeWords('364'))
# ['dog', 'fog']


Given a string that may represent a number, determine if it is a number. Here's some of examples of how the number may be presented:

"123" # Integer
"12.3" # Floating point
"-123" # Negative numbers
"-.3" # Negative floating point
"1.5e5" # Scientific notation

Here's some examples of what isn't a proper number:

"12a" # No letters
"1 2" # No space between numbers
"1e1.2" # Exponent can only be an integer (positive or negative or 0)

Scientific notation requires the first number to be less than 10, however to simplify the solution assume the first number can be greater than 10. Do not parse the string with int() or any other python functions.

Here's some starting code:

def parse_number(s):
   # Fill this in.
   
print(parse_number("12.3"))
# True

print(parse_number("12a"))
# False


Given a list of numbers, where every number shows up twice except for one number, find that one number.

Example:

Input: [4, 3, 2, 4, 1, 3, 2]
Output: 1

Here's the function signature:

def singleNumber(nums):
  # Fill this in.

print singleNumber([4, 3, 2, 4, 1, 3, 2])
# 1


Version numbers are strings that are used to identify unique states of software products. A version number is in the format a.b.c.d. and so on where a, b, etc. are numeric strings separated by dots. These generally represent a hierarchy from major to minor changes. Given two version numbers version1 and version2, conclude which is the latest version number. Your code should do the following:
If version1 > version2 return 1.
If version1 < version2 return -1.
Otherwise return 0.

Note that the numeric strings such as a, b, c, d, etc. may have leading zeroes, and that the version strings do not start or end with dots. Unspecified level revision numbers default to 0.

Example:

Input: 
version1 = "1.0.33"
version2 = "1.0.27"
Output: 1 
#version1 > version2

Input:
version1 = "0.1"
version2 = "1.1"
Output: -1
#version1 < version2

Input: 
version1 = "1.01"
version2 = "1.001"
Output: 0
#ignore leading zeroes, 01 and 001 represent the same number. 

Input:
version1 = "1.0"
version2 = "1.0.0"
Output: 0
#version1 does not have a 3rd level revision number, which
defaults to "0"

Here's a starting point

class Solution:
  def compareVersion(self, version1, version2):
    # Fill this in.

version1 = "1.0.1"
version2 = "1"
print(Solution().compareVersion(version1, version2))
# 1


Given a number of integers, combine them so it would create the largest number.

Example:

Input:  [17, 7, 2, 45, 72]
Output:  77245217

def largestNum(nums):
  # Fill this in.

print largestNum([17, 7, 2, 45, 72])
# 77245217



The Fibonacci sequence is the integer sequence defined by the recurrence relation: F(n) = F(n-1) + F(n-2), where F(0) = 0 and F(1) = 1. In other words, the nth Fibonacci number is the sum of the prior two Fibonacci numbers. Below are the first few values of the sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

Given a number n, print the n-th Fibonacci Number.
Examples:

Input: n = 3
Output: 2

Input: n = 7
Output: 13

Here's a starting point:

class Solution():
  def fibonacci(self, n):
    # fill this in.

n = 9
print(Solution().fibonacci(n))
# 34


You are given an array of integers. Return all the permutations of this array.

def permute(nums):
  # Fill this in.

print permute([1, 2, 3])
# [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]




Given an array of integers of size n, where all elements are between 1 and n inclusive, find all of the elements of [1, n] that do not appear in the array. Some numbers may appear more than once.

Example:

Input: [4,5,2,6,8,2,1,5]
Output: [3,7]

class Solution(object):
  def findDisappearedNumbers(self, nums):
    # Fill this in.

nums = [4, 6, 2, 6, 7, 2, 1]
print(Solution().findDisappearedNumbers(nums))
# [3, 5]



Given a sorted list of numbers, return a list of strings that represent all of the consecutive numbers.

Example:

Input: [0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15]
Output: ['0->2', '5->5', '7->11', '15->15']

Assume that all numbers will be greater than or equal to 0, and each element can repeat.

Here is a starting point:

def findRanges(nums):
  # Fill this in.

print findRanges([0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15])
# ['0->2', '5->5', '7->11', '15->15']


Given a sequence of numbers, find the longest sequence that contains only 2 unique numbers.

Example:

Input: [1, 3, 5, 3, 1, 3, 1, 5]
Output: 4

The longest sequence that contains just 2 unique numbers is [3, 1, 3, 1]

Here's the solution signature:

def findSequence(seq):
  # Fill this in.

print findSequence([1, 3, 5, 3, 1, 3, 1, 5])
# 4



Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.

Example 1:

Input: [3, 3, 2, 1, 3, 2, 1]
Output: [1, 1, 2, 2, 3, 3, 3]

def sortNums(nums):
  # Fill this in.

print sortNums([3, 3, 2, 1, 3, 2, 1])
# [1, 1, 2, 2, 3, 3, 3]




Given a 32 bit integer, reverse the bits and return that number.

Example:

Input: 1234 
# In bits this would be 0000 0000 0000 0000 0000 0100 1101 0010
Output: 1260388352
# Reversed bits is 0100 1011 0010 0000 0000 0000 0000 0000

Here's some starter code:

def to_bits(n):
  return '{0:08b}'.format(n)

def reverse_num_bits(num):
  # Fill this in.

print(to_bits(1234))
# 10011010010
print(reverse_num_bits(1234))
# 1260388352
print(to_bits(reverse_num_bits(1234)))
# 1001011001000000000000000000000



Kaprekar's Constant is the number 6174. This number is special because it has the property where for any 4-digit number that has 2 or more unique digits, if you repeatedly apply a certain function it always reaches the number 6174.

This certain function is as follows:
- Order the number in ascending form and descending form to create 2 numbers.
- Pad the descending number with zeros until it is 4 digits in length.
- Subtract the ascending number from the descending number.
- Repeat.

Given a number n, find the number of times the function needs to be applied to reach Kaprekar's constant. Here's some starter code:

KAPREKAR_CONSTANT = 6174

def num_kaprekar_iterations(n):
  # Fill this in.

print num_kaprekar_iterations(123)
# 3
# Explanation:
#  3210 - 123 = 3087
#  8730 - 0378 = 8352
#  8532 - 2358 = 6174 (3 iterations)



Given a list of numbers, and a target number n, find all unique combinations of a, b, c, d, such that a + b + c + d = n.

Here's some examples and some starting code.

def fourSum(nums, target):
  # Fill this in.

print(fourSum([1, 1, -1, 0, -2, 1, -1], 0))
# print [[-1, -1, 1, 1], [-2, 0, 1, 1]]

print(fourSum([3, 0, 1, -5, 4, 0, -1], 1))
# print [[-5, -1, 3, 4]]

print(fourSum([0, 0, 0, 0, 0], 0))
# print ([0, 0, 0, 0])



Given a list of numbers, find the smallest window to sort such that the whole list will be sorted. If the list is already sorted return (0, 0). You can assume there will be no duplicate numbers.

Example:

Input: [2, 4, 7, 5, 6, 8, 9]
Output: (2, 4)

Explanation: Sorting the window (2, 4) which is [7, 5, 6] will also means that the whole list is sorted.

def min_window_to_sort(nums):
  # Fill this in.
  
print(min_window_to_sort([2, 4, 7, 5, 6, 8, 9]))
# (2, 4)


Given a list of numbers and a target number, find all possible unique subsets of the list of numbers that sum up to the target number. The numbers will all be positive numbers.

Here's an example and some starter code.

def sum_combinations(nums, target):
  # Fill this in.

print(sum_combinations([10, 1, 2, 7, 6, 1, 5], 8))
# [(2, 6), (1, 1, 6), (1, 2, 5), (1, 7)]


Given a number n, generate all possible combinations of n well-formed brackets.

Here are some examples and some starting code.

def generate_brackets(n):
  #Fill this in.
  
print(generate_brackets(1))
# ['()']

print(generate_brackets(3))
# ['((()))', '(()())', '()(())', '()()()', '(())()']




Given an integer, check if that integer is a palindrome. For this problem do not convert the integer to a string to check if it is a palindrome.

import math

def is_palindrome(n):
  # Fill this in.

print is_palindrome(1234321)
# True
print is_palindrome(1234322)
# False




Return the longest run of 1s for a given integer n's binary representation.

Example:

Input: 242
Output: 4

242 in binary is 0b11110010, so the longest run of 1 is 4.

def longest_run(n):
  # Fill this in.

print longest_run(242)
# 4



The Fibonacci sequence is the integer sequence defined by the recurrence relation: F(n) = F(n-1) + F(n-2), where F(0) = 0 and F(1) = 1. In other words, the nth Fibonacci number is the sum of the prior two Fibonacci numbers. Below are the first few values of the sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

Given a number n, print the n-th Fibonacci Number.
Examples:
Input: n = 3
Output: 2

Input: n = 7
Output: 13
Here's a starting point:

class Solution():
  def fibonacci(self, n):
    # fill this in.

n = 9
print(Solution().fibonacci(n))
# 34


Given an integer, check if that integer is a palindrome. For this problem do not convert the integer to a string to check if it is a palindrome.

import math

def is_palindrome(n):
  # Fill this in.

print is_palindrome(1234321)
# True
print is_palindrome(1234322)
# False


Given an integer, find the number of 1 bits it has.

Here's an example and some starting code.

def one_bits(num):
  # Fill this in.

print(one_bits(23))
# 4
# 23 = 0b10111



Given a list of numbers, for each element find the next element that is larger than the current element. Return the answer as a list of indices. If there are no elements larger than the current element, then use -1 instead.

Here's an example and some starter code:

def larger_number(nums):
  # Fill this in.

# print [2, 2, 3, 4, -1, -1]
print(larger_number([3, 2, 5, 6, 9, 8]))



Given a list of sorted numbers, and two integers k and x, find k closest numbers to the pivot x.

Here's an example and some starter code:

def closest_nums(nums, k, x):
 # Fill this in.

print(closest_nums([1, 3, 7, 8, 9], 3, 5))
# [7, 3, 8]

Given a list of points as a tuple (x, y) and an integer k, find the k closest points to the origin (0, 0).

Here's an example and some starter code:

def closest_points(points, k):
  # Fill this in.

print(closest_points([(0, 0), (1, 2), (-3, 4), (3, 1)], 2))
# [(1, 2), (0, 0)]


/**
 * 
 * Given an array, nums, of n integers, find all unique triplets (three numbers, a, b, & c) in nums such that a + b + c = 0. Note that there may not be any triplets that sum to zero in nums, and that the triplets must not be duplicates.

Example:
Input: nums = [0, -1, 2, -3, 1]
Output: [0, -1, 1], [2, -3, 1]
 * 
 */

 /**
You are given an array of integers. Return the smallest positive integer that is not present in the array. The array may contain duplicate entries.
For example, the input [3, 4, -1, 1] should return 2 because it is the smallest positive integer that doesn't exist in the array.
*/


/**

A look-and-say sequence is defined as the integer sequence beginning with a single digit in which the next term is obtained by describing the previous term. An example is easier to understand:

Each consecutive value describes the prior value.

1      #
11     # one 1's
21     # two 1's
1211   # one 2, and one 1.
111221 # #one 1, one 2, and two 1's.

Your task is, return the nth term of this sequence. 
*/


