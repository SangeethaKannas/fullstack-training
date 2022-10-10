Given a list of strings, find the longest common prefix between all strings.

Here's some examples and some starter code.

def longest_common_prefix(strs):
  # Fill this in.
  
print(longest_common_prefix(['helloworld', 'hellokitty', 'hell']))
# hell

print(longest_common_prefix(['daily', 'interview', 'pro']))
# ''



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



Reshaping a matrix means to take the same elements in a matrix but change the row and column length. This means that the new matrix needs to have the same elements filled in the same row order as the old matrix. Given a matrix, a new row size x and a new column size y, reshape the matrix. If it is not possible to reshape, return None.

Here's an example and some starter code.

def reshape_matrix(mat, x, y):
  # Fill this in.

print(reshape_matrix([[1, 2], [3, 4]], 1, 4))
# [[1], [2], [3], [4]]

print(reshape_matrix([[1, 2], [3, 4]], 2, 3))
# None



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




Given a string s and a character c, find the distance for all characters in the string to the character c in the string s. You can assume that the character c will appear at least once in the string.

Here's an example and some starter code:

def shortest_dist(s, c):
  # Fill this in.

print(shortest_dist('helloworld', 'l'))
# [2, 1, 0, 0, 1, 2, 2, 1, 0, 1]



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




Given a string, return the first recurring letter that appears. If there are no recurring letters, return None.

Example:

Input: qwertty
Output: t

Input: qwerty
Output: None

Here's some starter code:

def first_recurring_char(s):
  # Fill this in.
  
print(first_recurring_char('qwertty'))
# t

print(first_recurring_char('qwerty'))
# None



A maze is a matrix where each cell can either be a 0 or 1. A 0 represents that the cell is empty, and a 1 represents a wall that cannot be walked through. You can also only travel either right or down.

Given a nxm matrix, find the number of ways someone can go from the top left corner to the bottom right corner. You can assume the two corners will always be 0.

Example:

Input: [[0, 1, 0], [0, 0, 1], [0, 0, 0]]
# 0 1 0
# 0 0 1
# 0 0 0
Output: 2

The two paths that can only be taken in the above example are: down -> right -> down -> right, and down -> down -> right -> right.

Here's some starter code:

def paths_through_maze(maze):
  # Fill this in.

print(paths_through_maze([[0, 1, 0],
                          [0, 0, 1],
                          [0, 0, 0]]))
# 2




Given a string, determine if there is a way to arrange the string such that the string is a palindrome. If such arrangement exists, return a palindrome (There could be many arrangements). Otherwise return None.

Here's some starter code:

def find_palindrome(s):
  # Fill this in.

print(find_palindrome('momom'))
# momom




Given a list of points, an interger k, and a point p, find the k closest points to p.

Here's an example and some starter code:

class Point:
  def __init__(self, x=0, y=0):
    self.x = x
    self.y = y

  def __repr__(self):
    return f"({self.x}, {self.y})"

def closest_points(points, k, p):
  # Fill this in.

points = [
    Point(0, 0),
    Point(1, 1),
    Point(2, 2),
    Point(3, 3),
]
print(closest_points(points, 2, Point(0, 2)))
# [(0, 0), (1, 1)]




Given a binary tree and an integer k, filter the binary tree such that its leaves don't contain the value k. Here are the rules:

- If a leaf node has a value of k, remove it.
- If a parent node has a value of k, and all of its children are removed, remove it.

Here's an example and some starter code:

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    return f"value: {self.value}, left: ({self.left.__repr__()}), right: ({self.right.__repr__()})"

def filter(tree, k):
  # Fill this in.

#     1
#    / \
#   1   1
#  /   /
# 2   1
n5 = Node(2)
n4 = Node(1)
n3 = Node(1, n4)
n2 = Node(1, n5)
n1 = Node(1, n2, n3)

print(filter(n1, 1))
#     1
#    /
#   1
#  /
# 2
# value: 1, left: (value: 1, left: (value: 2, left: (None), right: (None)), right: (None)), right: (None)







Given a list of possible coins in cents, and an amount (in cents) n, return the minimum number of coins needed to create the amount n. If it is not possible to create the amount using the given coin denomination, return None.

Here's an example and some starter code:

def make_change(coins, n):
  # Fill this in.
  
print(make_change([1, 5, 10, 25], 36))
# 3 coins (25 + 10 + 1)




Given a binary tree, find and return the largest path from root to leaf.

Here's an example and some starter code:

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

def largest_path_sum(tree):
  # Fill this in.

tree = Node(1)
tree.left = Node(3)
tree.right = Node(2)
tree.right.left = Node(4)
tree.left.right = Node(5)
#    1
#  /   \
# 3     2
#  \   /
#   5 4
print(largest_path_sum(tree))
# [1, 3, 5]



Given a node in a binary search tree (may not be the root), find the next largest node in the binary search tree (also known as an inorder successor). The nodes in this binary search tree will also have a parent field to traverse up the tree.

Here's an example and some starter code:

class Node:
  def __init__(self, value, left=None, right=None, parent=None):
    self.value = value
    self.left = left
    self.right = right
    self.parent = parent

  def __repr__(self):
    return f"(Value: {self.value}, Left: {self.left}, Right: {self.right})"

def inorder_successor(node):
  # Fill this in.

tree = Node(3)
tree.left = Node(2)
tree.right = Node(4)
tree.left.parent = tree
tree.right.parent = tree
tree.left.left = Node(1)
tree.left.left.parent = tree.left
tree.right.right = Node(5)
tree.right.right.parent = tree.right
#     3
#    / \
#   2   4
#  /     \
# 1       5
print(inorder_successor(tree.left))
# 3
print(inorder_successor(tree.right))
# 5



Given an array and an integer k, rotate the array by k spaces. Do this without generating a new array and without using extra space.

Here's an example and some starter code

def rotate_list(nums, k):
  # Fill this in.

a = [1, 2, 3, 4, 5]
rotate_list(a, 2)
print(a)
# [3, 4, 5, 1, 2]




Given a 2d n x m matrix where each cell has a certain amount of change on the floor, your goal is to start from the top left corner mat[0][0] and end in the bottom right corner mat[n - 1][m - 1] with the most amount of change. You can only move either left or down.

Here's some starter code:

def max_change(mat):
  # Fill this in.

mat = [
    [0, 3, 0, 2],
    [1, 2, 3, 3],
    [6, 0, 3, 2]
]

print(max_change(mat))
# 13




Given a binary tree, find the level in the tree where the sum of all nodes on that level is the greatest.

Here's an example and some starter code.

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    return f"(Value: {self.value} Left: {self.left} Right: {self.right})"


def tree_level_max_sum(root):
  # Fill this in.

n3 = Node(4, Node(3), Node(2))
n2 = Node(5, Node(4), Node(-1))
n1 = Node(1, n2, n3)

"""
    1          Level 0 - Sum: 1
   / \
  4   5        Level 1 - Sum: 9 
 / \ / \
3  2 4 -1      Level 2 - Sum: 8

"""

print(tree_level_max_sum(n1))
# Should print 1 as level 1 has the highest level sum



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


Given two rectangles, find the area of intersection.

Here's some starter code and a starter example:

class Rectangle():
  def __init__(self, min_x=0, min_y=0, max_x=0, max_y=0):
    self.min_x = min_x
    self.min_y = min_y
    self.max_x = max_x
    self.max_y = max_y

def intersection_area(rect1, rect2):
  # Fill this in.

#  BBB
# AXXB
# AAA
rect1 = Rectangle(0, 0, 3, 2)
rect2 = Rectangle(1, 1, 3, 3)

print(intersection_area(rect1, rect2))
# 2



Given a postorder traversal for a binary search tree, reconstruct the tree. A postorder traversal is a traversal order where the left child always comes before the right child, and the right child always comes before the parent for all nodes.

Here's some starter code:

class Node():
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    return "(" + str(self.value) + ", " + self.left.__repr__() + ", " + self.right.__repr__() + ")"


def create_tree(postorder):
  # Fill this in.

# 2 is the root node, with 1 as the left child and 3 as the right child
print(create_tree([1, 3, 2]))




Given two strings, find if there is a one-to-one mapping of characters between the two strings.

Example

Input: abc, def
Output: True # a -> d, b -> e, c -> f

Input: aab, def
Ouput: False # a can't map to d and e 

Here's some starter code:

def has_character_map(str1, str2):
  # Fill this in.

print(has_character_map('abc', 'def'))
# True
print(has_character_map('aac', 'def'))
# False




Given a nested dictionary, flatten the dictionary, where nested dictionary keys can be represented through dot notation.

Example:

Input: {
  'a': 1,
  'b': {
    'c': 2,
    'd': {
      'e': 3
    }
  }
}
Output: {
  'a': 1,
  'b.c': 2,
  'b.d.e': 3
}

You can assume there will be no arrays, and all keys will be strings.

Here's some starter code:

def flatten_dictionary(d):
  # Fill this in.

d = {
    'a': 1,
    'b': {
        'c': 2,
        'd': {
            'e': 3
        }
    }
}
print(flatten_dictionary(d))
# {'a': 1, 'b.c': 2, 'b.d.e': 3}




Given an expression (as a list) in reverse polish notation, evaluate the expression. Reverse polish notation is where the numbers come before the operand. Note that there can be the 4 operands '+', '-', '*', '/'. You can also assume the expression will be well formed.

Example

Input: [1, 2, 3, '+', 2, '*', '-']
Output: -9

The equivalent expression of the above reverse polish notation would be (1 - ((2 + 3) * 2)).

Here's some starter code:

def reverse_polish_notation(expr):
  # Fill this in.
  
# 1 - (2 + 3) * 2
print(reverse_polish_notation([1, 2, 3, '+', 2, '*', '-']))
# -9





A UTF-8 character encoding is a variable width character encoding that can vary from 1 to 4 bytes depending on the character. The structure of the encoding is as follows:

1 byte:  0xxxxxxx
2 bytes: 110xxxxx 10xxxxxx
3 bytes: 1110xxxx 10xxxxxx 10xxxxxx
4 bytes: 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

For more information, you can read up on the Wikipedia Page.

Given a list of integers where each integer represents 1 byte, return whether or not the list of integers is a valid UTF-8 encoding.

BYTE_MASKS = [
    None,
    0b10000000,
    0b11100000,
    0b11110000,
    0b11111000,
]
BYTE_EQUAL = [
    None,
    0b00000000,
    0b11000000,
    0b11100000,
    0b11110000,
]

def utf8_validator(bytes):
  # Fill this in.

print utf8_validator([0b00000000])
# True
print utf8_validator([0b00000000, 10000000])
# False
print utf8_validator([0b11000000, 10000000])
# True



Given a binary tree and a given node value, return all of the node's cousins. Two nodes are considered cousins if they are on the same level of the tree with different parents. You can assume that all nodes will have their own unique value.

Here's some starter code:

class Node(object):
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

class Solution(object):
  def list_cousins(self, tree, val):
    # Fill this in.

#     1
#    / \
#   2   3
#  / \   \
# 4   6   5
root = Node(1)
root.left = Node(2)
root.left.left = Node(4)
root.left.right = Node(6)
root.right = Node(3)
root.right.right = Node(5)

print Solution().list_cousins(root, 5)
# [4, 6]


Given a number n, generate all binary search trees that can be constructed with nodes 1 to n.

Here's some code to start with:

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __str__(self):
    result = str(self.value)
    if self.left:
      result = result + str(self.left)
    if self.right:
      result = result + str(self.right)
    return result

def generate_bst(n):
  # Fill this in.

for tree in generate_bst(3):
  print tree

# Pre-order traversals of binary trees from 1 to n.
# 123
# 132
# 213
# 312
# 321

#   1      1      2      3      3
#    \      \    / \    /      /
#     2      3  1   3  1      2
#      \    /           \    /
#       3  2             2  1




A fixed point in a list is where the value is equal to its index. So for example the list [-5, 1, 3, 4], 1 is a fixed point in the list since the index and value is the same. Find a fixed point (there can be many, just return 1) in a sorted list of distinct elements, or return None if it doesn't exist.

Here is a starting point:

def find_fixed_point(nums):
  # Fill this in.

print find_fixed_point([-5, 1, 3, 4])
# 1



Given a binary tree, return the list of node values in zigzag order traversal. Here's an example

# Input:
#         1
#       /   \
#      2     3
#     / \   / \
#    4   5 6   7
#
# Output: [1, 3, 2, 4, 5, 6, 7]


Here's some starter code

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

def zigzag_order(tree):
  # Fill this in.

n4 = Node(4)
n5 = Node(5)
n6 = Node(6)
n7 = Node(7)
n2 = Node(2, n4, n5)
n3 = Node(3, n6, n7)
n1 = Node(1, n2, n3)

print(zigzag_order(n1))
# [1, 3, 2, 4, 5, 6, 7]



Given a list of numbers, find the smallest window to sort such that the whole list will be sorted. If the list is already sorted return (0, 0). You can assume there will be no duplicate numbers.

Example:

Input: [2, 4, 7, 5, 6, 8, 9]
Output: (2, 4)

Explanation: Sorting the window (2, 4) which is [7, 5, 6] will also means that the whole list is sorted.

def min_window_to_sort(nums):
  # Fill this in.
  
print(min_window_to_sort([2, 4, 7, 5, 6, 8, 9]))
# (2, 4)



Given a tree, find if the binary tree is height balanced or not. A height balanced binary tree is a tree where every node's 2 subtree do not differ in height by more than 1.

Here's some starter code:

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

def is_height_balanced(tree):
  # Fill this in.

#     1
#    / \
#   2   3
#  /
# 4  
n4 = Node(4)
n3 = Node(3)
n2 = Node(2, n4)
n1 = Node(1, n2, n3)

print(is_height_balanced(n1))
# True

#     1
#    / 
#   2   
#  /
# 4  
n1 = Node(1, n2)
print(is_height_balanced(n1))
# False




Given a list of words, for each word find the shortest unique prefix. You can assume a word will not be a substring of another word (ie play and playing won't be in the same words list)

Example

Input: ['joma', 'john', 'jack', 'techlead']
Output: ['jom', 'joh', 'ja', 't']

Here's some starter code:

def shortest_unique_prefix(words):
  # Fill this in.

print(shortest_unique_prefix(['joma', 'john', 'jack', 'techlead']))
# ['jom', 'joh', 'ja', 't']




Given a binary tree, find the level in the tree where the sum of all nodes on that level is the greatest.

Here's an example and some starter code.

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    return f"(Value: {self.value} Left: {self.left} Right: {self.right})"


def tree_level_max_sum(root):
  # Fill this in.

n3 = Node(4, Node(3), Node(2))
n2 = Node(5, Node(4), Node(-1))
n1 = Node(1, n2, n3)

"""
    1          Level 0 - Sum: 1
   / \
  4   5        Level 1 - Sum: 9 
 / \ / \
3  2 4 -1      Level 2 - Sum: 8

"""

print(tree_level_max_sum(n1))
# Should print 1 as level 1 has the highest level sum



Given 2 binary trees t and s, find if s has an equal subtree in t, where the structure and the values are the same. Return True if it exists, otherwise return False.

Here's some starter code and an example:

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    return f"(Value: {self.value} Left: {self.left} Right: {self.right})"

def find_subtree(s, t):
  # Fill this in.

t3 = Node(4, Node(3), Node(2))
t2 = Node(5, Node(4), Node(-1))
t = Node(1, t2, t3)

s = Node(4, Node(3), Node(2))
"""
Tree t:
    1
   / \
  4   5 
 / \ / \
3  2 4 -1

Tree s:
  4 
 / \
3  2 
"""

print(find_subtree(s, t))
# True



Given a list of building in the form of (left, right, height), return what the skyline should look like. The skyline should be in the form of a list of (x-axis, height), where x-axis is the next point where there is a change in height starting from 0, and height is the new height starting from the x-axis.

Here's some starter code:

def generate_skyline(buildings):
  # Fill this in.

#            2 2 2
#            2 2 2
#        1 1 2 2 2 1 1
#        1 1 2 2 2 1 1
#        1 1 2 2 2 1 1
# pos: 1 2 3 4 5 6 7 8 9
print generate_skyline([(2, 8, 3), (4, 6, 5)])
# [(2, 3), (4, 5), (7, 3), (9, 0)]




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




