
/*Given a binary tree, find the level in the tree where the sum of all nodes on that level is the greatest.

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


/**
 * 
 * You are given the root of a binary tree. Find and return the largest subtree of that tree, which is a valid binary search tree.
 */