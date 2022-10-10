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


Given a binary tree, find all duplicate subtrees (subtrees with the same value and same structure) and return them as a list of list [subtree1, subtree2, ...] where subtree1 is a duplicate of subtree2 etc.

Here's an example and some starter code:

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    if self.left and self.right:
      return f"({self.value}, {self.left}, {self.right})"
    if self.left:
      return f"({self.value}, {self.left})"
    if self.right:
      return f"({self.value}, None, {self.right})"
    return f"({self.value})"

def dup_trees(root):
  # Fill this in.

n3_1 = Node(3)
n2_1 = Node(2, n3_1)
n3_2 = Node(3)
n2_2 = Node(2, n3_2)
n1 = Node(1, n2_1, n2_2)
# Looks like
#     1
#    / \
#   2   2
#  /   /
# 3   3

print(dup_trees(n1))
# [[(3), (3)], [(2, (3)), (2, (3))]]
# There are two duplicate trees
#
#     2
#    /
#   3
# and just the leaf
#
# 3



Given a list of points as a tuple (x, y) and an integer k, find the k closest points to the origin (0, 0).

Here's an example and some starter code:

def closest_points(points, k):
  # Fill this in.

print(closest_points([(0, 0), (1, 2), (-3, 4), (3, 1)], 2))
# [(1, 2), (0, 0)]




Given a binary search tree (BST) and a value s, split the BST into 2 trees, where one tree has all values less than or equal to s, and the other tree has all values greater than s while maintaining the tree structure of the original BST. You can assume that s will be one of the node's value in the BST. Return both tree's root node as a tuple.

Here's an example and some starting code:

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __repr__(self):
    if self.left and self.right:
      return f"({self.value}, {self.left}, {self.right})"
    if self.left:
      return f"({self.value}, {self.left})"
    if self.right:
      return f"({self.value}, None, {self.right})"
    return f"({self.value})"

def split_bst(bst, s):
  # Fill this in.

n2 = Node(2)
n1 = Node(1, None, n2)

n5 = Node(5)
n4 = Node(4, None, n5)

root = Node(3, n1, n4)

print(root)
# (3, (1, (2)), (4, None, (5)))
# How the tree looks like
#     3
#   /   \
#  1     4
#   \     \
#    2     5

print(split_bst(root, 2))
# ((1, None, (2)), (3, None, (4, None, (5))))
# Split into two trees
# 1    And   3
#  \          \
#   2          4
#               \
#                5

Given a list of undirected edges which represents a graph, find out the number of connected components.

def num_connected_components(edges):
	# Fill this in.

print(num_connected_components([(1, 2), (2, 3), (4, 1), (5, 6)]))
# 2

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
