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




You are given an array of integers, and an integer K. Return the subarray which sums to K. You can assume that a solution will always exist.

def find_continuous_k(list, k):
  # Fill this in.

print find_continuous_k([1, 3, 2, 5, 7, 2], 14)
# [2, 5, 7]


Can you do this in linear time?





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


Given an array and an integer k, rotate the array by k spaces. Do this without generating a new array and without using extra space.

Here's an example and some starter code

def rotate_list(nums, k):
  # Fill this in.

a = [1, 2, 3, 4, 5]
rotate_list(a, 2)
print(a)
# [3, 4, 5, 1, 2]



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



A fixed point in a list is where the value is equal to its index. So for example the list [-5, 1, 3, 4], 1 is a fixed point in the list since the index and value is the same. Find a fixed point (there can be many, just return 1) in a sorted list of distinct elements, or return None if it doesn't exist.

Here is a starting point:

def find_fixed_point(nums):
  # Fill this in.

print find_fixed_point([-5, 1, 3, 4])
# 1


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

Given 3 sorted lists, find the intersection of those 3 lists.

Here's an example and some starter code.

def intersection(list1, list2, list3):
  # Fill this in.

print(intersection([1, 2, 3, 4], [2, 4, 6, 8], [3, 4, 5]))
# [4]


mGiven a numerator and a denominator, find what the equivalent decimal representation is as a string. If the decimal representation has recurring digits, then put those digits in brackets (ie 4/3 should be represented by 1.(3) to represent 1.333...). Do not use any built in evaluator functions like python's eval. You can also assume that the denominator will be nonzero.

Here's some examples and some starter code:

def frac_to_dec(numerator, denominator):
  # Fill this in.

print(frac_to_dec(-3, 2))
# -1.5

print(frac_to_dec(4, 3))
# 1.(3)

print(frac_to_dec(1, 6))
# 0.1(6)


Given a valid parenthesis string (with only '(' and ')', an open parenthesis will always end with a close parenthesis, and a close parenthesis will never start first), remove the outermost layers of the parenthesis string and return the new parenthesis string.

If the string has multiple outer layer parenthesis (ie (())()), remove all outer layers and construct the new string. So in the example, the string can be broken down into (()) + (). By removing both components outer layer we are left with () + '' which is simply (), thus the answer for that input would be ().

Here are some examples and some starter code.

def remove_outermost_parenthesis(s):
  # Fill this in.

print(remove_outermost_parenthesis('(())()'))
# ()

print(remove_outermost_parenthesis('(()())'))
# ()()

print(remove_outermost_parenthesis('()()()'))
# ' '


Given a sorted linked list of integers, remove all the duplicate elements in the linked list so that all elements in the linked list are unique.

Here's an example and some starter code:

class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next

  def __repr__(self):
    return f"({self.value}, {self.next})"


def remove_dup(lst):
  # Fill this in.

lst = Node(1, Node(2, Node(2, Node(3, Node(3)))))

remove_dup(lst)
print(lst)
# (1, (2, (3, None)))


Given a list of tasks (each task will be represented by a string), and a positive integer n representing the time it takes to run the same task again, find the minimum amount of time needed to run all tasks.

Here's an example and some starter code:

def schedule_tasks(tasks, n):
  # Fill this in.

print(schedule_tasks(['q', 'q', 's', 'q', 'w', 'w'], 4))
# print 6
# one of the possible orders to run the task would be
# 'q', 'w', idle, idle, 'q', 'w'



Given a list of meetings that will happen during a day, find the minimum number of meeting rooms that can fit all meetings.

Each meeting will be represented by a tuple of (start_time, end_time), where both start_time and end_time will be represented by an integer to indicate the time. 
start_time will be inclusive, and end_time will be exclusive, meaning a meeting of (0, 10) and (10, 20) will only require 1 meeting room.

Here's some examples and some starting code:

print(meeting_rooms([(0, 10), (10, 20)]))
# 1

print(meeting_rooms([(20, 30), (10, 21), (0, 50)]))
# 3 (all meetings overlap at time 20)
 
   Answer
     1. sort the array based on lowest starting time
     2. 


Given a list of undirected edges which represents a graph, find out the number of connected components.

def num_connected_components(edges):
	# Fill this in.

print(num_connected_components([(1, 2), (2, 3), (4, 1), (5, 6)]))
# 2


/**
 * Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library’s sort function for this problem.
 * 
 * 
 */