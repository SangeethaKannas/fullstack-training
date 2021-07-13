/*Given a string, we want to remove 2 adjacent characters that are the same, and repeat the process with the new string until we can no longer perform the operation.

Here's an example and some starter code:

def remove_adjacent_dup(s):
  # Fill this in.

print(remove_adjacent_dup("cabba"))
# Start with cabba
# After remove bb: caa
# After remove aa: c
# print c
*/



Given two strings which represent non-negative integers, multiply the two numbers and return the product as a string as well. You should assume that the numbers may be sufficiently large such that the built-in integer type will not be able to store the input (Python does have BigNum, but assume it does not exist).

Here's an example and some starter code.

def multiply(str1, str2):
  # Fill this in.

print(multiply("11", "13"))
# 143

Given a list of strings, find the list of characters that appear in all strings.

Here's an example and some starter code:

def common_characters(strs):
  # Fill this in.

print(common_characters(['google', 'facebook', 'youtube']))
# ['e', 'o']

Given a non-negative integer n, convert the integer to hexadecimal and return the result as a string. Hexadecimal is a base 16 representation of a number, where the digits are 0123456789ABCDEF. Do not use any builtin base conversion functions like hex.

Here's an example and some starter code.

def to_hex(n):
  # Fill this in.
  
print(to_hex(123))
# 7B


Given a positive integer n, find all primes less than n.

Here's an example and some starter code:

def find_primes(n):
  # Fill this in.

print(find_primes(14))
# [2, 3, 5, 7, 11, 13]



Given 2 strings s and t, find and return all indexes in string s where t is an anagram.

Here's an example and some starter code:

def find_anagrams(s, t):
  # Fill this in.

print(find_anagrams('acdbacdacb', 'abc'))
# [3, 7]


Given a list of words in a string, reverse the words in-place (ie don't create a new string and reverse the words). Since python strings are not mutable, you can assume the input will be a mutable sequence (like list).

Here's an example and some starting code:

def reverse_words(words):
  # Fill this in.

s = list("can you read this")
reverse_words(s)
print(''.join(s))
# this read you can


