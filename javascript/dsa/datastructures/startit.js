Given a list of numbers and a target number, find all possible unique subsets of the list of numbers that sum up to the target number. The numbers will all be positive numbers.

Here's an example and some starter code.

def sum_combinations(nums, target):
  # Fill this in.

print(sum_combinations([10, 1, 2, 7, 6, 1, 5], 8))
# [(2, 6), (1, 1, 6), (1, 2, 5), (1, 7)]



Given a sorted list of size n, with m unique elements (thus m < n), modify the list such that the first m unique elements in the list will be sorted, ignoring the rest of the list. Your solution should have a space complexity of O(1). Instead of returning the list (since you are just modifying the original list), you should return what m is.

Here's an example and some starter code.

def remove_dups(nums):
  # Fill this in.

nums = [1, 1, 2, 3, 4, 4, 4, 4, 4, 5, 5, 6, 7, 9]
print(remove_dups(nums))
# 8
print(nums)
# [1, 2, 3, 4, 5, 6, 7, 9]

nums = [1, 1, 1, 1, 1, 1]
print(remove_dups(nums))
print(nums)
# 1
# [1]


Given a number n, generate all possible combinations of n well-formed brackets.

Here are some examples and some starting code.

def generate_brackets(n):
  #Fill this in.
  
print(generate_brackets(1))
# ['()']

print(generate_brackets(3))
# ['((()))', '(()())', '()(())', '()()()', '(())()']



In many spreadsheet applications, the columns are marked with letters. From the 1st to the 26th column the letters are A to Z. Then starting from the 27th column it uses AA, AB, ..., ZZ, AAA, etc.

Given a number n, find the n-th column name.

def column_name(n):
  # Fill this in.

print column_name(26)
print column_name(27)
print column_name(28)
# Z
# AA
# AB


Hi, here's your problem today. This problem was recently asked by Apple:

You are given a tree, and your job is to print it level-by-level with linebreaks.

    a
   / \
  b   c
 / \ / \
d  e f  g


The output should be

a
bc
defg

Here's a starting point:

from collections import deque

class Node(object):
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

  def __str__(self):
    # Fill this in.

tree = Node('a')
tree.left = Node('b')
tree.right = Node('c')
tree.left.left = Node('d')
tree.left.right = Node('e')
tree.right.left = Node('f')
tree.right.right = Node('g')

print tree
# a
# bc
# defg





Given an integer, check if that integer is a palindrome. For this problem do not convert the integer to a string to check if it is a palindrome.

import math

def is_palindrome(n):
  # Fill this in.

print is_palindrome(1234321)
# True
print is_palindrome(1234322)
# False


Given a string with only ( and ), find the minimum number of characters to add or subtract to fix the string such that the brackets are balanced.

Example:

Input: '(()()'
Output: 1

Explanation:

The fixed string could either be ()() by deleting the first bracket, or (()()) by adding a bracket. These are not the only ways of fixing the string, there are many other ways by adding it in different positions!


Here's some code to start with:

def fix_brackets(s):
  # Fill this in.

print fix_brackets('(()()')
# 1





Given a binary tree, find the most frequent subtree sum.

Example:

   3
  / \
 1   -3


The above tree has 3 subtrees. The root node with 3, and the 2 leaf nodes, which gives us a total of 3 subtree sums. The root node has a sum of 1 (3 + 1 + -3), the left leaf node has a sum of 1, and the right leaf node has a sum of -3. Therefore the most frequent subtree sum is 1.

If there is a tie between the most frequent sum, you can return any one of them.

Here's some starter code for the problem:

class Node():
  def __init__(self, value, left=None, right=None):
    self.val = value
    self.left = left
    self.right = right

def most_freq_subtree_sum(root):
  # fill this in.

root = Node(3, Node(1), Node(-3))
print(most_freq_subtree_sum(root))
# 1



We have a list of tasks to perform, with a cooldown period. We can do multiple of these at the same time, but we cannot run the same task simultaneously.

Given a list of tasks, find how long it will take to complete the tasks in the order they are input.

tasks = [1, 1, 2, 1]
cooldown = 2
output: 7 (order is 1 _ _ 1 2 _ 1)

def findTime(arr, cooldown):
  # Fill this in.

print findTime([1, 1, 2, 1], 2)
# 7
A chess board is an 8x8 grid. Given a knight at any position (x, y) and a number of moves k, we want to figure out after k random moves by a knight, the probability that the knight will still be on the chessboard. Once the knight leaves the board it cannot move again and will be considered off the board.

Here's some starter code:

def is_knight_on_board(x, y, k, cache={}):
  # Fill this in.

print is_knight_on_board(0, 0, 1)
# 0.25





Given a sorted list, create a height balanced binary search tree, meaning the height differences of each node can only differ by at most 1.

Here's some code to start with:

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __str__(self):
    answer = str(self.value)
    if self.left:
      answer += str(self.left)
    if self.right:
      answer += str(self.right)
    return answer

def create_height_balanced_bst(nums):
  # Fill this in.

tree = create_height_balanced_bst([1, 2, 3, 4, 5, 6, 7, 8])
# 53214768
#  (pre-order traversal)
#       5
#      / \
#     3    7
#    / \  / \
#   2   4 6  8
#  /
# 1



An IP Address is in the format of A.B.C.D, where A, B, C, D are all integers between 0 to 255.

Given a string of numbers, return the possible IP addresses you can make with that string by splitting into 4 parts of A, B, C, D.

Keep in mind that integers can't start with a 0! (Except for 0)

Example:

Input: 1592551013
Output: ['159.255.101.3', '159.255.10.13']

def ip_addresses(s, ip_parts=[]):
  # Fill this in.

print ip_addresses('1592551013')
# ['159.255.101.3', '159.255.10.13']



Return the longest run of 1s for a given integer n's binary representation.

Example:

Input: 242
Output: 4

242 in binary is 0b11110010, so the longest run of 1 is 4.

def longest_run(n):
  # Fill this in.

print longest_run(242)
# 4


MS Excel column titles have the following pattern: A, B, C, ..., Z, AA, AB, ..., AZ, BA, BB, ..., ZZ, AAA, AAB, ... etc. In other words, column 1 is named "A", column 2 is "B", column 26 is "Z", column 27 is "AA" and so forth. Given a positive integer, find its corresponding column name.
Examples:

Input: 26
Output: Z

Input: 51
Output: AY

Input: 52
Output: AZ

Input: 676
Output: YZ

Input: 702
Output: ZZ

Input: 704
Output: AAB

Here is a starting point:

class Solution:
  def convertToTitle(self, n):
    # Fill this in.

input1 = 1
input2 = 456976
input3 = 28
print(Solution().convertToTitle(input1))
# A
print(Solution().convertToTitle(input2))
# YYYZ
print(Solution().convertToTitle(input3))
# AB



Given a directed graph, reverse the directed graph so all directed edges are reversed.

Example:

Input:
A -> B, B -> C, A ->C

Output:
B->A, C -> B, C -> A

Here's a starting point:

from collections import defaultdict

class Node:
  def __init__(self, value):
    self.adjacent = []
    self.value = value

def reverse_graph(graph):
  # Fill this in.

a = Node('a')
b = Node('b')
c = Node('c')

a.adjacent += [b, c]
b.adjacent += [c]

graph = {
    a.value: a,
    b.value: b,
    c.value: c,
}

for _, val in reverse_graph(graph).items():
  print(val.adjacent)
# []
# ['a', 'b']
# ['a']



Given a file path with folder names, '..' (Parent directory), and '.' (Current directory), return the shortest possible file path (Eliminate all the '..' and '.').

Example

Input: '/Users/Joma/Documents/../Desktop/./../'
Output: '/Users/Joma/'

def shortest_path(file_path):
  # Fill this in.

print shortest_path('/Users/Joma/Documents/../Desktop/./../')
# /Users/Joma/



Design a Tic-Tac-Toe game played between two players on an n x n grid. A move is guaranteed to be valid, and a valid move is one placed on an empty block in the grid. A player who succeeds in placing n of their marks in a horizontal, diagonal, or vertical row wins the game. Once a winning condition is reached, the game ends and no more moves are allowed. Below is an example game which ends in a winning condition:

Given n = 3, assume that player 1 is "X" and player 2 is "O" 
board = TicTacToe(3);

board.move(0, 0, 1); -> Returns 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

board.move(0, 2, 2); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

board.move(2, 2, 1); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

board.move(1, 1, 2); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

board.move(2, 0, 1); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

board.move(1, 0, 2); -> Returns 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

board.move(2, 1, 1); -> Returns 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|


Here's a starting point:

class TicTacToe(object):
  def __init__(self, n):
    # Fill this in.

  def move(self, row, col, player):
    # Fill this in.

board = TicTacToe(3)
board.move(0, 0, 1)
board.move(0, 2, 2)
board.move(2, 2, 1)
board.move(1, 1, 2)
board.move(2, 0, 1)
board.move(1, 0, 2)
print(board.move(2, 1, 1))



Given a non-empty list of words, return the k most frequent words. The output should be sorted from highest to lowest frequency, and if two words have the same frequency, the word with lower alphabetical order comes first. Input will contain only lower-case letters.

Example:

Input: ["daily", "interview", "pro", "pro", 
"for", "daily", "pro", "problems"], k = 2
Output: ["pro", "daily"]

class Solution(object):
  def topKFrequent(self, words, k):
    # Fill this in.

words = ["daily", "interview", "pro", "pro", "for", "daily", "pro", "problems"]
k = 2
print(Solution().topKFrequent(words, k))
# ['pro', 'daily']



By the way, check out our NEW project AlgoPro (http://algopro.com) for over 60+ video coding sessions with ex-Google/ex-Facebook engineers.

Given a non-empty array where each element represents a digit of a non-negative integer, add one to the integer. The most significant digit is at the front of the array and each element in the array contains only one digit. Furthermore, the integer does not have leading zeros, except in the case of the number '0'.

Example:

Input: [2,3,4]
Output: [2,3,5]

class Solution():
  def plusOne(self, digits):
    # Fill this in.

num = [2, 9, 9]
print(Solution().plusOne(num))
# [3, 0, 0]


You are given the root of a binary tree. Find the level for the binary tree with the minimum sum, and return that value.

For instance, in the example below, the sums of the trees are 10, 2 + 8 = 10, and 4 + 1 + 2 = 7. So, the answer here should be 7.

class Node:
  def __init__(self, value, left=None, right=None):
    self.val = value
    self.left = left
    self.right = right

def minimum_level_sum(root):
  # Fill this in.

#     10
#    /  \
#   2    8
#  / \    \
# 4   1    2
node = Node(10)
node.left = Node(2)
node.right = Node(8)
node.left.left = Node(4)
node.left.right = Node(1)
node.right.right = Node(2)

print minimum_level_sum(node)



By the way, check out our NEW project AlgoPro (http://algopro.com) for over 60+ video coding sessions with ex-Google/ex-Facebook engineers.

You are given the root of a binary tree, along with two nodes, A and B. Find and return the lowest common ancestor of A and B. For this problem, you can assume that each node also has a pointer to its parent, along with its left and right child.

class TreeNode:
  def __init__(self, val):
    self.left = None
    self.right = None
    self.parent = None
    self.val = val


def lowestCommonAncestor(root, a, b):
  # Fill this in.

#   a
#  / \
# b   c
#    / \
#   d*  e*
root = TreeNode('a')
root.left = TreeNode('b')
root.left.parent = root
root.right = TreeNode('c')
root.right.parent = root
a = root.right.left = TreeNode('d')
root.right.left.parent = root.right
b = root.right.right = TreeNode('e')
root.right.right.parent = root.right

print lowestCommonAncestor(root, a, b).val
# c



You are given two strings, A and B. Return whether A can be shifted some number of times to get B.

Eg. A = abcde, B = cdeab should return true because A can be shifted 3 times to the right to get B. A = abc and B= acb should return false.

def is_shifted(a, b):
  # Fill this in.
  
print is_shifted('abcde', 'cdeab')
# True


You are given an array of integers, and an integer K. Return the subarray which sums to K. You can assume that a solution will always exist.

def find_continuous_k(list, k):
  # Fill this in.

print find_continuous_k([1, 3, 2, 5, 7, 2], 14)
# [2, 5, 7]


Can you do this in linear time?


You are given the root of a binary tree. Find the path between 2 nodes that maximizes the sum of all the nodes in the path, and return the sum. The path does not necessarily need to go through the root.

class Node:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

def maxPathSum(root):
  # Fill this in.

# (* denotes the max path)
#       *10
#       /  \
#     *2   *10
#     / \     \
#   *20  1    -25
#             /  \
#            3    4
root = Node(10)
root.left = Node(2)
root.right = Node(10)
root.left.left = Node(20)
root.left.right = Node(1)
root.right.right = Node(-25)
root.right.right.left = Node(3)
root.right.right.right = Node(4)
print maxPathSum(root)
# 42


Given an array of characters with repeats, compress it in place. The length after compression should be less than or equal to the original array.

Example:

Input: ['a', 'a', 'b', 'c', 'c', 'c']
Output: ['a', '2', 'b', 'c', '3']

Here's a starting point:

class Solution(object):
  def compress(self, chars):
    # Fill this in.

print Solution().compress(['a', 'a', 'b', 'c', 'c', 'c'])
# ['a', '2', 'b', 'c', '3']



Given a Roman numeral, find the corresponding decimal value. Inputs will be between 1 and 3999.

Example:

Input: IX
Output: 9

Input: VII
Output: 7

Input: MCMIV
Output: 1904

Roman numerals are based on the following symbols:

I     1
IV    4
V     5
IX    9 
X     10
XL    40
L     50
XC    90
C     100
CD    400
D     500
CM    900
M     1000

Numbers are strings of these symbols in descending order. In some cases, subtractive notation is used to avoid repeated characters. The rules are as follows:
1.) I placed before V or X is one less, so 4 = IV (one less than 5), and 9 is IX (one less than 10)
2.) X placed before L or C indicates ten less, so 40 is XL (10 less than 50) and 90 is XC (10 less than 100).
3.) C placed before D or M indicates 100 less, so 400 is CD (100 less than 500), and 900 is CM (100 less than 1000).

class Solution():
  def romanToInt(self, s):
    # Fill this in.
    
n = 'MCMX'
print(Solution().romanToInt(n))
# 1910



Given an array of integers, arr, where all numbers occur twice except one number which occurs once, find the number. Your solution should ideally be O(n) time and use constant extra space.
Example:

Input: arr = [7, 3, 5, 5, 4, 3, 4, 8, 8]
Output: 7

class Solution(object):
  def findSingle(self, nums):
    # Fill this in.

nums = [1, 1, 3, 4, 4, 5, 6, 5, 6]
print(Solution().findSingle(nums))
# 3


Given a list of numbers of size n, where n is greater than 3, find the maximum and minimum of the list using less than 2 * (n - 1) comparisons.

Here's a start:

def find_min_max(nums):
  # Fill this in.

print find_min_max([3, 5, 1, 2, 4, 8])
# (1, 8)


A k-ary tree is a tree with k-children, and a tree is symmetrical if the data of the left side of the tree is the same as the right side of the tree.

Here's an example of a symmetrical k-ary tree.

        4
     /     \
    3        3
  / | \    / | \
9   4  1  1  4  9

Given a k-ary tree, figure out if the tree is symmetrical.

Here is a starting point:

class Node():
  def __init__(self, value, children=[]):
    self.value = value
    self.children = children

def is_symmetric(root):
  # Fill this in.

tree = Node(4)
tree.children = [Node(3), Node(3)]
tree.children[0].children = [Node(9), Node(4), Node(1)]
tree.children[1].children = [Node(1), Node(4), Node(9)]
print is_symmetric(tree)
# True


The h-index is a metric that attempts to measure the productivity and citation impact of the publication of a scholar. The definition of the h-index is if a scholar has at least h of their papers cited h times.

Given a list of publications of the number of citations a scholar has, find their h-index.

Example:

Input: [3, 5, 0, 1, 3]
Output: 3

Explanation:
There are 3 publications with 3 or more citations, hence the h-index is 3.

Here's a starting point:

def hIndex(publications):
  # Fill this in.

print hIndex([5, 3, 3, 1, 0])
# 3



Starting at index 0, for an element n at index i, you are allowed to jump at most n indexes ahead. Given a list of numbers, find the minimum number of jumps to reach the end of the list.

Example:

Input: [3, 2, 5, 1, 1, 9, 3, 4]
Output: 2

Explanation:

The minimum number of jumps to get to the end of the list is 2:
3 -> 5 -> 4

Here's a starting point:

def jumpToEnd(nums):
  # Fill this in.

print jumpToEnd([3, 2, 5, 1, 1, 9, 3, 4])
# 2


Two words can be 'chained' if the last character of the first word is the same as the first character of the second word.

Given a list of words, determine if there is a way to 'chain' all the words in a circle.

Example:

Input: ['eggs', 'karat', 'apple', 'snack', 'tuna']
Output: True

Explanation:
The words in the order of ['apple', 'eggs', 'snack', 'karat', 'tuna'] creates a circle of chained words.

Here's a start:

from collections import defaultdict

def chainedWords(words):
  # Fill this in.

print chainedWords(['apple', 'eggs', 'snack', 'karat', 'tuna'])
# True



Given a string with a certain rule: k[string] should be expanded to string k times. So for example, 3[abc] should be expanded to abcabcabc. Nested expansions can happen, so 2[a2[b]c] should be expanded to abbcabbc.

Your starting point:

def decodeString(s):
  # Fill this in.

print decodeString('2[a2[b]c]')
# abbcabbc


Given a binary tree, remove the nodes in which there is only 1 child, so that the binary tree is a full binary tree.

So leaf nodes with no children should be kept, and nodes with 2 children should be kept as well.

Here's a starting point:

from collections import deque

class Node(object):
  def __init__(self, value, left=None, right=None):
    self.left = left
    self.right = right
    self.value = value
  def __str__(self):
    q = deque()
    q.append(self)
    result = ''
    while len(q):
      num = len(q)
      while num > 0:
        n = q.popleft()
        result += str(n.value)
        if n.left:
          q.append(n.left)
        if n.right:
          q.append(n.right)
        num = num - 1
      if len(q):
        result += "\n"

    return result

def fullBinaryTree(node):
  # Fill this in.

# Given this tree:
#     1
#    / \ 
#   2   3
#  /   / \
# 0   9   4

# We want a tree like:
#     1
#    / \ 
#   0   3
#      / \
#     9   4

tree = Node(1)
tree.left = Node(2)
tree.right = Node(3)
tree.right.right = Node(4)
tree.right.left = Node(9)
tree.left.left = Node(0)
print fullBinaryTree(tree)
# 1
# 03
# 94


Design a simple stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

Note: be sure that pop() and top() handle being called on an empty stack.

class minStack(object):
  def __init__(self):
    # Fill this in.

  def push(self, x):
    # Fill this in.

  def pop(self):
    # Fill this in.

  def top(self):
    # Fill this in.

  def getMin(self):
    # Fill this in.

x = minStack()
x.push(-2)
x.push(0)
x.push(-3)
print(x.getMin())
# -3
x.pop()
print(x.top())
# 0
print(x.getMin())
# -2



Write a function that reverses the digits a 32-bit signed integer, x. Assume that the environment can only store integers within the 32-bit signed integer range, [-2^31, 2^31 - 1]. The function returns 0 when the reversed integer overflows.

Example:

Input: 123
Output: 321

class Solution:
  def reverse(self, x):
    # Fill this in.

print(Solution().reverse(123))
# 321
print(Solution().reverse(2**31))
# 0



Given a list of integers, return the bounds of the minimum range that must be sorted so that the whole list would be sorted.

Example:

Input: [1, 7, 9, 5, 7, 8, 10]
Output: (1, 5)

Explanation:
The numbers between index 1 and 5 are out of order and need to be sorted.

Here's your starting point:

def findRange(nums):
  # Fill this in.

print findRange([1, 7, 9, 5, 7, 8, 10])
# (1, 5)


You are the manager of a number of employees who all sit in a row. The CEO would like to give bonuses to all of your employees, but since the company did not perform so well this year the CEO would like to keep the bonuses to a minimum.

The rules of giving bonuses is that:
- Each employee begins with a bonus factor of 1x.
- For each employee, if they perform better than the person sitting next to them, the employee is given +1 higher bonus (and up to +2 if they perform better than both people to their sides).

Given a list of employee's performance, find the bonuses each employee should get.

Example:

Input: [1, 2, 3, 2, 3, 5, 1]
Output: [1, 2, 3, 1, 2, 3, 1]

Here's your starting point:

def getBonuses(performance):
  # Fill this in.

print getBonuses([1, 2, 3, 2, 3, 5, 1])
# [1, 2, 3, 1, 2, 3, 1]



You are given the root of a binary tree. You need to implement 2 functions:

1. serialize(root) which serializes the tree into a string representation
2. deserialize(s) which deserializes the string back to the original tree that it represents

For this problem, often you will be asked to design your own serialization format. However, for simplicity, let's use the pre-order traversal of the tree. Here's your starting point:

class Node:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

  def __str__(self):
    # pre-order printing of the tree.
    result = ''
    result += str(self.val)
    if self.left:
      result += str(self.left)
    if self.right:
      result += str(self.right)
    return result

def serialize(root):
  # Fill this in.

def deserialize(data):
  # Fill this in.

#     1
#    / \
#   3   4
#  / \   \
# 2   5   7
tree = Node(1)
tree.left = Node(3)
tree.left.left = Node(2)
tree.left.right = Node(5)
tree.right = Node(4)
tree.right.right = Node(7)

print serialize(tree)
# 1 3 2 # # 5 # # 4 # 7 # #
print deserialize('1 3 2 # # 5 # # 4 # 7 # #')
# 132547


You are given a binary tree representation of an arithmetic expression. In this tree, each leaf is an integer value,, and a non-leaf node is one of the four operations: '+', '-', '*', or '/'.

Write a function that takes this tree and evaluates the expression.

Example:

    *
   / \
  +    +
 / \  / \
3  2  4  5


This is a representation of the expression (3 + 2) * (4 + 5), and should return 45.

Here's a starting point:

class Node:
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

PLUS = "+"
MINUS = "-"
TIMES = "*"
DIVIDE = "/"

def evaluate(root):
  # Fill this in.

tree = Node(TIMES)
tree.left = Node(PLUS)
tree.left.left = Node(3)
tree.left.right = Node(2)
tree.right = Node(PLUS)
tree.right.left = Node(4)
tree.right.right = Node(5)
print evaluate(tree)
# 45



Given a time in the format of hour and minute, calculate the angle of the hour and minute hand on a clock.

def calcAngle(h, m):
  # Fill this in.

print calcAngle(3, 30)
# 75
print calcAngle(12, 30)
# 165



You are given an array of integers. Return the length of the longest increasing subsequence (not necessarily contiguous) in the array.

Example:
[0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]

The following input should return 6 since the longest increasing subsequence is 0, 2, 6, 9 , 11, 15.



Given two arrays, write a function to compute their intersection - the intersection means the numbers that are in both arrays.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]

Note:
Each element in the result must be unique.
The result can be in any order.

Here's a starting point:

class Solution:
  def intersection(self, nums1, nums2):
    # Fill this in.

print Solution().intersection([4, 9, 5], [9, 4, 9, 8, 4])
# [9, 4]



You are given an array of integers. Return an array of the same size where the element at each index is the product of all the elements in the original array except for the element at that index.

For example, an input of [1, 2, 3, 4, 5] should return [120, 60, 40, 30, 24].

You cannot use division in this problem.

Here's a start:

def products(nums):
  # Fill this in.

print products([1, 2, 3, 4, 5])
# [120, 60, 40, 30, 24]



Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: "The cat in the hat"
Output: "ehT tac ni eht tah"

Note: In the string, each word is separated by single space and there will not be any extra space in the string.

Here's a starting point:

class Solution:
  def reverseWords(self, str):
    # Fill this in.

print Solution().reverseWords("The cat in the hat")
# ehT tac ni eht tah



Given a linked list of integers, remove all consecutive nodes that sum up to 0.

Example:

Input: 10 -> 5 -> -3 -> -3 -> 1 -> 4 -> -4
Output: 10


The consecutive nodes 5 -> -3 -> -3 -> 1 sums up to 0 so that sequence should be removed. 4 -> -4 also sums up to 0 too so that sequence should also be removed.

Here's a starting point:

class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next

def removeConsecutiveSumTo0(node):
  # Fill this in.

node = Node(10)
node.next = Node(5)
node.next.next = Node(-3)
node.next.next.next = Node(-3)
node.next.next.next.next = Node(1)
node.next.next.next.next.next = Node(4)
node.next.next.next.next.next.next = Node(-4)
node = removeConsecutiveSumTo0(node)
while node:
  print node.value,
  node = node.next
# 10



Given a string with the initial condition of dominoes, where:

. represents that the domino is standing still
L represents that the domino is falling to the left side
R represents that the domino is falling to the right side

Figure out the final position of the dominoes. If there are dominoes that get pushed on both ends, the force cancels out and that domino remains upright.

Example:

Input:  ..R...L..R.
Output: ..RR.LL..RR

Here is your starting point:

class Solution(object):
  def pushDominoes(self, dominoes):
    # Fill this in.

print Solution().pushDominoes('..R...L..R.')
# ..RR.LL..RR



You 2 integers n and m representing an n by m grid, determine the number of ways you can get from the top-left to the bottom-right of the matrix y going only right or down.

Example:
n = 2, m = 2

This should return 2, since the only possible routes are:
Right, down
Down, right.

Here's the signature:

def num_ways(n, m):
  # Fill this in.

print num_ways(2, 2)
# 2





Given a sorted list with duplicates, and a target number n, find the range in which the number exists (represented as a tuple (low, high), both inclusive. If the number does not exist in the list, return (-1, -1)).

Here's some examples and some starter code.

def find_num(nums, target):
  # Fill this in.

print(find_num([1, 1, 3, 5, 7], 1))
# (0, 1)

print(find_num([1, 2, 3, 4], 5))


Implement a class for a stack that supports all the regular functions (push, pop) and an additional function of max() which returns the maximum element in the stack (return None if the stack is empty). Each method should run in constant time.

class MaxStack:
  def __init__(self):
    # Fill this in.

  def push(self, val):
    # Fill this in.

  def pop(self):
    # Fill this in.

  def max(self):
    # Fill this in.

s = MaxStack()
s.push(1)
s.push(2)
s.push(3)
s.push(2)
print s.max()
# 3
s.pop()
s.pop()
print s.max()
# 2


You are given a positive integer N which represents the number of steps in a staircase. You can either climb 1 or 2 steps at a time. Write a function that returns the number of unique ways to climb the stairs.

def staircase(n):
  # Fill this in.
  
print staircase(4)
# 5
print staircase(5)
# 8


Can you find a solution in O(n) time?




Given a list of numbers, find if there exists a pythagorean triplet in that list. A pythagorean triplet is 3 variables a, b, c where a^2 + b^2 = c^2

Example:

Input: [3, 5, 12, 5, 13]
Output: True

Here, 5^2 + 12^2 = 13^2.

def findPythagoreanTriplets(nums):
  # Fill this in.

print findPythagoreanTriplets([3, 12, 5, 13])
# True



Given two strings, determine the edit distance between them. The edit distance is defined as the minimum number of edits (insertion, deletion, or substitution) needed to change one string to the other.

For example, "biting" and "sitting" have an edit distance of 2 (substitute b for s, and insert a t).

Here's the signature:

def distance(s1, s2):
  # Fill this in.
         
print distance('biting', 'sitting')
# 2


Given a mathematical expression with just single digits, plus signs, negative signs, and brackets, evaluate the expression. Assume the expression is properly formed.

Example:

Input: - ( 3 + ( 2 - 1 ) )
Output: -4

Here's the function signature:

def eval(expression):
  # Fill this in.

print eval('- (3 + ( 2 - 1 ) )')
# -4



Given an undirected graph, determine if a cycle exists in the graph.

Here is a function signature:

def find_cycle(graph):
  # Fill this in.

graph = {
  'a': {'a2':{}, 'a3':{} },
  'b': {'b2':{}},
  'c': {}
}
print find_cycle(graph)
# False
graph['c'] = graph
print find_cycle(graph)
# True




You are given a 2D array of characters, and a target string. Return whether or not the word target word exists in the matrix. Unlike a standard word search, the word must be either going left-to-right, or top-to-bottom in the matrix.

Example:

[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]


Given this matrix, and the target word FOAM, you should return true, as it can be found going up-to-down in the first column.

Here's the function signature:

def word_search(matrix, word):
  # Fill this in.
  
matrix = [
  ['F', 'A', 'C', 'I'],
  ['O', 'B', 'Q', 'P'],
  ['A', 'N', 'O', 'B'],
  ['M', 'A', 'S', 'S']]
print word_search(matrix, 'FOAM')
# True



Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum â‰¥ s. If there isn't one, return 0 instead.

Example:

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2

Explanation: the subarray [4,3] has the minimal length under the problem constraint.

Here is the method signature:

class Solution:
  def minSubArrayLen(self, nums, s):
    # Fill this in

print Solution().minSubArrayLen([2, 3, 1, 2, 4, 3], 7)
# 2



You are given the root of a binary tree. Invert the binary tree in place. That is, all left children should become right children, and all right children should become left children.

Example:

    a
   / \
  b   c
 / \  /
d   e f


The inverted version of this tree is as follows:

  a
 / \
 c  b
 \  / \
  f e  d


Here is the function signature:

class Node:
  def __init__(self, value):
    self.left = None
    self.right = None
    self.value = value
  def preorder(self):
    print self.value,
    if self.left: self.left.preorder()
    if self.right: self.right.preorder()

def invert(node):
  # Fill this in.

root = Node('a') 
root.left = Node('b') 
root.right = Node('c') 
root.left.left = Node('d') 
root.left.right = Node('e') 
root.right.left = Node('f') 

root.preorder()
# a b d e c f 
print "\n"
invert(root)
root.preorder()
# a c f b e d



Given an integer k and a binary search tree, find the floor (less than or equal to) of k, and the ceiling (larger than or equal to) of k. If either does not exist, then print them as None.

Here is the definition of a node for the tree.

class Node:
  def __init__(self, value):
    self.left = None
    self.right = None
    self.value = value

def findCeilingFloor(root_node, k, floor=None, ceil=None):
  # Fill this in.

root = Node(8) 
root.left = Node(4) 
root.right = Node(12) 
  
root.left.left = Node(2) 
root.left.right = Node(6) 
  
root.right.left = Node(10) 
root.right.right = Node(14) 

print findCeilingFloor(root, 5)
# (4, 6)




You are given an array of integers in an arbitrary order. Return whether or not it is possible to make the array non-decreasing by modifying at most 1 element to any value.

We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).

Example:

[13, 4, 7] should return true, since we can modify 13 to any value 4 or less, to make it non-decreasing.

[13, 4, 1] however, should return false, since there is no way to modify just one element to make the array non-decreasing.

Here is the function signature:

def check(lst):
  # Fill this in.

print check([13, 4, 7])
# True
print check([5,1,3,2,5])
# False


Can you find a solution in O(n) time?



You are given a list of numbers, and a target number k. Return whether or not there are two numbers in the list that add up to k.

Example:
Given [4, 7, 1 , -3, 2] and k = 5,
return true since 4 + 1 = 5.

def two_sum(list, k):
  # Fill this in.

print two_sum([4,7,1,-3,2], 5)
# True


Try to do it in a single pass of the list.



Given a sorted array, A, with possibly duplicated elements, find the indices of the first and last occurrences of a target element, x. Return -1 if the target is not found.

Example:

Input: A = [1,3,3,5,7,8,9,9,9,15], target = 9
Output: [6,8]

Input: A = [100, 150, 150, 153], target = 150
Output: [1,2]

Input: A = [1,2,3,4,5,6,10], target = 9
Output: [-1, -1]

Here is a function signature example:

class Solution: 
  def getRange(self, arr, target):
    # Fill this in.
  
# Test program 
arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8] 
x = 2
print(Solution().getRange(arr, x))
# [1, 4]


Imagine you are building a compiler. Before running any code, the compiler must check that the parentheses in the program are balanced. Every opening bracket must have a corresponding closing bracket. We can approximate this using strings.

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
- Open brackets are closed by the same type of brackets.
- Open brackets are closed in the correct order.
- Note that an empty string is also considered valid.

Example:

Input: "((()))"
Output: True

Input: "[()]{}"
Output: True

Input: "({[)]"
Output: False

class Solution:
  def isValid(self, s):
    # Fill this in.

# Test Program
s = "()(){(())" 
# should return False
print(Solution().isValid(s))

s = ""
# should return True
print(Solution().isValid(s))

s = "([{}])()"
# should return True
print(Solution().isValid(s))


Given a binary tree, and a target number, find if there is a path from the root to any leaf that sums up to the target.

Here's an example and some starter code.

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

def target_sum_bst(root, target):
  # Fill this in.

#      1
#    /   \
#   2     3
#    \     \
#     6     4
n6 = Node(6)
n4 = Node(4)
n3 = Node(3, None, n4)
n2 = Node(2, None, n6)
n1 = Node(1, n2, n3)

print(target_sum_bst(n1, 9))
# True
# Path from 1 -> 2 -> 6




A majority element is an element that appears more than half the time. Given a list with a majority element, find the majority element.

Here's an example and some starting code.

def majority_element(nums):
  # Fill this in.

print(majority_element([3, 5, 3, 3, 2, 4, 3]))
# 3


Given a list of positive numbers, find the largest possible set such that no elements are adjacent numbers of each other.

Here's some example and some starter code

def maxNonAdjacentSum(nums):
  # Fill this in.
  
print(maxNonAdjacentSum([3, 4, 1, 1]))
# 5
# max sum is 4 (index 1) + 1 (index 3)

print(maxNonAdjacentSum([2, 1, 2, 7, 3]))
# 9
# max sum is 2 (index 0) + 7 (index 3)


Given an integer, find the number of 1 bits it has.

Here's an example and some starting code.

def one_bits(num):
  # Fill this in.

print(one_bits(23))
# 4
# 23 = 0b10111

Given a matrix that is organized such that the numbers will always be sorted left to right, and the first number of each row will always be greater than the last element of the last row (mat[i][0] > mat[i - 1][-1]), search for a specific value in the matrix and return whether it exists.

Here's an example and some starter code.

def searchMatrix(mat, value):
  # Fill this in.
  
mat = [
    [1, 3, 5, 8],
    [10, 11, 15, 16],
    [24, 27, 30, 31],
]

print(searchMatrix(mat, 4))
# False

print(searchMatrix(mat, 10))
# True


A Sudoku board is a 9x9 grid, where each row, column and each 3x3 subbox contains the number from 1-9. Here's an example of a Sudoku board.
-------------
|534|678|912|
|672|195|348|
|198|342|567|
|------------
|859|761|423|
|426|853|791|
|713|924|856|
|------------
|961|537|284|
|287|419|635|
|345|286|179|
|------------

Given a 9x9 board, determine if it is a valid Sudoku board. The board may be partially filled, where an empty cell will be represented by the space character ' '.

Here's an example and some starting code:

def validate_sudoku(board):
  # Fill this in.

board = [
    [5, ' ', 4, 6, 7, 8, 9, 1, 2],
    [6, ' ', 2, 1, 9, 5, 3, 4, 8],
    [1,   9, 8, 3, 4, 2, 5, 6, 7],
    [8,   5, 9, 7, 6, 1, 4, 2, 3],
    [4,   2, 6, 8, 5, 3, 7, 9, 1],
    [7,   1, 3, 9, 2, 4, 8, 5, 6],
    [9,   6, 1, 5, 3, 7, 2, 8, 4],
    [2,   8, 7, 4, 1, 9, 6, 3, 5],
    [3,   4, 5, 2, 8, 6, 1, 7, 9],
]

print(validate_sudoku(board))
# True



Daily Interview Pro
Hi, here's your problem today. (You've reached the end of the problems for now - in the meanwhile, here is a random question. And visit CoderPro for more practice!) This problem was recently asked by Apple:

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



Find all words that are concatenations of a list.

Input:
["tech", "lead", "techlead", "cat", "cats", "dog", "catsdog"]

Output:
['techlead', 'catsdog']

class Solution(object):
  def findAllConcatenatedWordsInADict(self, words):
    # Fill this in.
    
input = ["tech", "lead", "techlead", "cat", "cats", "dog", "catsdog"]

print(Solution().findAllConcatenatedWordsInADict(input))

Note: This question is classified as "hard."
HINT: Start with a brute-force solution.

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


Starting at index 0, for an element n at index i, you are allowed to jump at most n indexes ahead. Given a list of numbers, find the minimum number of jumps to reach the end of the list.

Example:
Input: [3, 2, 5, 1, 1, 9, 3, 4]
Output: 2
Explanation:

The minimum number of jumps to get to the end of the list is 2:
3 -> 5 -> 4

Here's a starting point:

def jumpToEnd(nums):
  # Fill this in.

print jumpToEnd([3, 2, 5, 1, 1, 9, 3, 4])
# 2


LRU cache is a cache data structure that has limited space, and once there are more items in the cache than available space, it will preempt the least recently used item. What counts as recently used is any item a key has 'get' or 'put' called on it.

Implement an LRU cache class with the 2 functions 'put' and 'get'. 'put' should place a value mapped to a certain key, and preempt items if needed. 'get' should return the value for a given key if it exists in the cache, and return None if it doesn't exist.

Here's some examples and some starter code.

class LRUCache:
  def __init__(self, space):
    # Fill this in.

  def get(self, key):
    # Fill this in.

  def put(self, key, value):
    # Fill this in.

cache = LRUCache(2)

cache.put(3, 3)
cache.put(4, 4)
print(cache.get(3))
# 3
print(cache.get(2))
# None

cache.put(2, 2)

print(cache.get(4))
# None (pre-empted by 2)
print(cache.get(3))
# 3


Daily Interview Pro
Hi, here's your problem today. This problem was recently asked by Amazon:

Given a binary tree, flatten the binary tree using inorder traversal. Instead of creating a new list, reuse the nodes, where the list is represented by following each right child. As such the root should always be the first element in the list so you do not need to return anything in the implementation, just rearrange the nodes such that following the right child will give us the list.

Here's an example and some starter code.

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    return f"({self.value}, {self.left}, {self.right})"

def flatten_bst(root):
  # Fill this in.
  
n5 = Node(5)
n4 = Node(4)
n3 = Node(3, n4)
n2 = Node(2, n5)
n1 = Node(1, n2, n3)

#      1
#    /   \
#   2     3
#  /     /
# 5     4

flatten_bst(n1)
print(n1)

# n1 should now look like
#   1
#    \
#     2
#      \
#       5
#        \
#         3
#          \
#           4


A number can be constructed by a path from the root to a leaf. Given a binary tree, sum all the numbers that can be constructed from the root to all leaves.

Here's an example and some starter code.

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    return f"({self.value}, {self.left}, {self.right})"


def bst_numbers_sum(root, num=0):
  # Fill this in.

n5 = Node(5)
n4 = Node(4)
n3 = Node(3)
n2 = Node(2, n4, n5)
n1 = Node(1, n2, n3)

#      1
#    /   \
#   2     3
#  / \
# 4   5

print(bst_numbers_sum(n1))
# 262
# Explanation: 124 + 125 + 13 = 262


Given a node in a connected directional graph, create a copy of it.

Here's an example and some starter code.

class Node:
  def __init__(self, value, adj=None):
    self.value = value
    self.adj = adj

    # Variable to help print graph
    self._print_visited = set()
    if self.adj is None:
      self.adj = []

  # Able to print graph
  def __repr__(self):
    if self in self._print_visited:
      return ''
    else:
      self._print_visited.add(self)
      final_str = ''
      for n in self.adj:
        final_str += f'{n}\n'

      self._print_visited.remove(self)
      return final_str + f'({self.value}, ({[n.value for n in self.adj]}))'


def deep_copy_graph(graph_node, visited=None):
  # Fill this in.

n5 = Node(5)
n4 = Node(4)
n3 = Node(3, [n4])
n2 = Node(2)
n1 = Node(1, [n5])
n5.adj = [n3]
n4.adj = [n3, n2]
n2.adj = [n4]
graph_copy = deep_copy_graph(n1)
print(graph_copy)
# (2, ([4]))
# (4, ([3, 2]))
# (3, ([4]))
# (5, ([3]))
# (1, ([5]))


Daily Interview Pro
Hi, here's your problem today. This problem was recently asked by Amazon:

Given a binary tree, flatten the binary tree using inorder traversal. Instead of creating a new list, reuse the nodes, where the list is represented by following each right child. As such the root should always be the first element in the list so you do not need to return anything in the implementation, just rearrange the nodes such that following the right child will give us the list.

Here's an example and some starter code.

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    return f"({self.value}, {self.left}, {self.right})"

def flatten_bst(root):
  # Fill this in.
  
n5 = Node(5)
n4 = Node(4)
n3 = Node(3, n4)
n2 = Node(2, n5)
n1 = Node(1, n2, n3)

#      1
#    /   \
#   2     3
#  /     /
# 5     4

flatten_bst(n1)
print(n1)

# n1 should now look like
#   1
#    \
#     2
#      \
#       5
#        \
#         3
#          \
#           4

