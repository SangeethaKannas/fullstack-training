/**
 * Linked List 
 * 
 * Similar to arrays but dynamic 
 * 
 * Insertion and deletion is very efficient
 */

 let LinkedNode = function(element) {
    this.element = element;
    this.next = null;
 }

 function LinkedList() {
     var length = 0 ;
     var head = null;

     this.size = function () {
         return length;
     }

     this.head = function () {
         return head;
     }

     this.print = function () {
        var currentNode = head;
        if(currentNode === null){
            console.log("List is empty");
            return false;
        }

        while(currentNode != null) {
            console.log(currentNode.element);
            currentNode = currentNode.next;
        }
     }

     this.add = function (element) {
         var node = new LinkedNode(element);

         if(head === null) {
            head = node;
         } else {
            var currentNode = head;

            while(currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
         }

         length++;
     }

     this.remove = function(element) {
         var currentNode = head;
         var previousNode;
         if(currentNode.element === element) {
            head = currentNode.next;
         } else {
            while(currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
             }
    
             previousNode.next = currentNode.next;
         }        

         length--;
     }

     this.isEmpty = function() {
         return length === 0;
     }

     this.indexOf = function(element){
         var currentNode = head;
         var index = -1;

         while(currentNode) {
             index++;
             if(currentNode.element === element) {
                 return index;
             }
             currentNode = currentNode.next;
         }

         return -1;
     }
    
     this.elementAt = function(index) {
        var currentNode = head;
        var count = 0;
        while(count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
     }

     this.addAt = function(index, element) {
         var node = new LinkedNode(element);
         var currentNode = head;

         if(index > length ){
             return false;
         } else if (index === 0 ) { 
            currentNode.next = head;
            head = currentNode;
         } else {
             var currentIndex = 0;
             while(currentIndex < index) {
                 currentIndex++;
                 previousNode = currentNode;
                 currentNode = currentNode.next;
             }
             node.next = currentNode;
             previousNode.next = node;
         }
         length++;         
     }

     this.removeAt = function(index, element){
         var node = new LinkedNode (element);
         var currentNode = head;

         if( index < 0 || index >= length) {
             return null;
         }
         
         if(index === 0 ) {
            head = currentNode.next;            
         } else {
            var currentIndex = 0;
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }            
            previousNode.next = currentNode.next;
         }
         length--;
         return currentNode.element;
     }

     
 }

/**
Given a linked list, swap the position of the 1st and 2nd node, then swap the position of the 3rd and 4th node etc.

Here's some starter code:

class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next

  def __repr__(self):
    return f"{self.value}, ({self.next.__repr__()})"

def swap_every_two(llist):
  # Fill this in.

llist = Node(1, Node(2, Node(3, Node(4, Node(5)))))
print(swap_every_two(llist))
# 2, (1, (4, (3, (5, (None)))))



Given a singly-linked list, reverse the list. This can be done iteratively or recursively. Can you get both solutions?

Example:

Input: 4 -> 3 -> 2 -> 1 -> 0 -> NULL
Output: 0 -> 1 -> 2 -> 3 -> 4 -> NULL

class ListNode(object):
  def __init__(self, x):
    self.val = x
    self.next = None
  
  # Function to print the list
  def printList(self):
    node = self
    output = '' 
    while node != None:
      output += str(node.val)
      output += " "
      node = node.next
    print(output)

  # Iterative Solution
  def reverseIteratively(self, head):
    # Implement this.

  # Recursive Solution      
  def reverseRecursively(self, head):
    # Implement this.

# Test Program
# Initialize the test list: 
testHead = ListNode(4)
node1 = ListNode(3)
testHead.next = node1
node2 = ListNode(2)
node1.next = node2
node3 = ListNode(1)
node2.next = node3
testTail = ListNode(0)
node3.next = testTail

print("Initial list: ")
testHead.printList()
# 4 3 2 1 0
testHead.reverseIteratively(testHead)
#testHead.reverseRecursively(testHead)
print("List after reversal: ")
testTail.printList()
# 0 1 2 3 4



You are given two singly linked lists. The lists intersect at some node. Find, and return the node. Note: the lists are non-cyclical.

Example:

A = 1 -> 2 -> 3 -> 4
B = 6 -> 3 -> 4

This should return 3 (you may assume that any nodes with the same value are the same node).

Here is a starting point:

def intersection(a, b):
  # fill this in.

class Node(object):
  def __init__(self, val):
    self.val = val
    self.next = None
  def prettyPrint(self):
    c = self
    while c:
      print c.val,
      c = c.next

a = Node(1)
a.next = Node(2)
a.next.next = Node(3)
a.next.next.next = Node(4)

b = Node(6)
b.next = a.next.next

c = intersection(a, b)
c.prettyPrint()
# 3 4




You are given a singly linked list and an integer k. Return the linked list, removing the k-th last element from the list.

Try to do it in a single pass and using constant space.

Here's a starting point:

class Node:
  def __init__(self, val, next=None):
    self.val = val
    self.next = next
  def __str__(self):
    current_node = self
    result = []
    while current_node:
      result.append(current_node.val)
      current_node = current_node.next
    return str(result)

def remove_kth_from_linked_list(head, k):
  # Fill this in

head = Node(1, Node(2, Node(3, Node(4, Node(5)))))
print(head)
# [1, 2, 3, 4, 5]
head = remove_kth_from_linked_list(head, 3)
print(head)
# [1, 2, 4, 5]



There are n people lined up, and each have a height represented as an integer. A murder has happened right in front of them, and only people who are taller than everyone in front of them are able to see what has happened. How many witnesses are there?

Example:

Input: [3, 6, 3, 4, 1]  
Output: 3

Explanation: Only [6, 4, 1] were able to see in front of them.

 #
 #
 # #
####
####
#####
36341                                 x (murder scene)

Here's your starting point:

def witnesses(heights):
  # Fill this in.

print witnesses([3, 6, 3, 4, 1])
# 3


You are given a hash table where the key is a course code, and the value is a list of all the course codes that are prerequisites for the key. Return a valid ordering in which we can complete the courses. If no such ordering exists, return NULL.

Example:

{
  'CSC300': ['CSC100', 'CSC200'], 
  'CSC200': ['CSC100'], 
  'CSC100': []
}


This input should return the order that we need to take these courses:

 ['CSC100', 'CSC200', 'CSCS300']


Here's your starting point:

def courses_to_take(course_to_prereqs):
  # Fill this in.

courses = {
  'CSC300': ['CSC100', 'CSC200'], 
  'CSC200': ['CSC100'], 
  'CSC100': []
}
print courses_to_take(courses)
# ['CSC100', 'CSC200', 'CSC300']



Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

Here is a starting point:

class Solution:
  def moveZeros(self, nums):
    # Fill this in.

nums = [0, 0, 0, 2, 0, 1, 3, 4, 0, 0]
Solution().moveZeros(nums)
print(nums)
# [2, 1, 3, 4, 0, 0, 0, 0, 0, 0]



Given a list, find the k-th largest element in the list.

Input: list = [3, 5, 2, 4, 6, 8], k = 3
Output: 5

Here is a starting point:

def findKthLargest(nums, k):
  # Fill this in.

print findKthLargest([3, 5, 2, 4, 6, 8], 3)
# 5


You are given a 2D array of integers. Print out the clockwise spiral traversal of the matrix.

Example:

grid = [[1,  2,  3,  4,  5],
        [6,  7,  8,  9,  10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]]


The clockwise spiral traversal of this array is:

1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12

Here is a starting point:

def matrix_spiral_print(M):
  # Fill this in.

grid = [[1,  2,  3,  4,  5],
        [6,  7,  8,  9,  10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]]

matrix_spiral_print(grid)
# 1 2 3 4 5 10 15 20 19 18 17 16 11 6 7 8 9 14 13 12



You are given an array of integers. Return the largest product that can be made by multiplying any 3 integers in the array.

Example:

[-4, -4, 2, 8] should return 128 as the largest product can be made by multiplying -4 * -4 * 8 = 128.

Here's a starting point:

def maximum_product_of_three(lst):
  # Fill this in.

print maximum_product_of_three([-4, -4, 2, 8])
# 128


You are given an array of intervals - that is, an array of tuples (start, end). The array may not be sorted, and could contain overlapping intervals. Return another array where the overlapping intervals are merged.

For example:
[(1, 3), (5, 8), (4, 10), (20, 25)]

This input should return [(1, 3), (4, 10), (20, 25)] since (5, 8) and (4, 10) can be merged into (4, 10).

Here's a starting point:

def merge(intervals):
  # Fill this in.
  
print merge([(1, 3), (5, 8), (4, 10), (20, 25)])
# [(1, 3), (4, 10), (20, 25)]



You are given an array. Each element represents the price of a stock on that particular day. Calculate and return the maximum profit you can make from buying and selling that stock only once.

For example: [9, 11, 8, 5, 7, 10]

Here, the optimal trade is to buy when the price is 5, and sell when it is 10, so the return value should be 5 (profit = 10 - 5 = 5).

Here's your starting point:

def buy_and_sell(arr):
  #Fill this in.
  
print buy_and_sell([9, 11, 8, 5, 7, 10])
# 5


Implement a queue class using two stacks. A queue is a data structure that supports the FIFO protocol (First in = first out). Your class should support the enqueue and dequeue methods like a standard queue.

Here's a starting point:

class Queue:
  def __init__(self):
    # Fill this in.
    
  def enqueue(self, val):
    # Fill this in.

  def dequeue(self):
    # Fill this in.

q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
print q.dequeue()
print q.dequeue()
print q.dequeue()
# 1 2 3



You are given an array of integers. Find the maximum sum of all possible contiguous subarrays of the array.

Example:

[34, -50, 42, 14, -5, 86]

Given this input array, the output should be 137. The contiguous subarray with the largest sum is [42, 14, -5, 86].

Your solution should run in linear time.

Here's a starting point:

def max_subarray_sum(arr):
  # Fill this in.

print max_subarray_sum([34, -50, 42, 14, -5, 86])
# 137



You are given an array of k sorted singly linked lists. Merge the linked lists into a single sorted linked list and return it.

Here's your starting point:

class Node(object):
  def __init__(self, val, next=None):
    self.val = val
    self.next = next

  def __str__(self):
    c = self
    answer = ""
    while c:
      answer += str(c.val) if c.val else ""
      c = c.next
    return answer

def merge(lists):
  # Fill this in.

a = Node(1, Node(3, Node(5)))
b = Node(2, Node(4, Node(6)))
print merge([a, b])
# 123456


Given a sorted list of numbers, change it into a balanced binary search tree. You can assume there will be no duplicate numbers in the list.

Here's a starting point:

from collections import deque

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  def __str__(self):
    # level-by-level pretty-printer
    nodes = deque([self])
    answer = ''
    while len(nodes):
      node = nodes.popleft()
      if not node:
        continue
      answer += str(node.value)
      nodes.append(node.left)
      nodes.append(node.right)
    return answer


def createBalancedBST(nums):
  # Fill this in.

print createBalancedBST([1, 2, 3, 4, 5, 6, 7])
# 4261357
#   4
#  / \
# 2   6
#/ \ / \
#1 3 5 7


You have a landscape, in which puddles can form. You are given an array of non-negative integers representing the elevation at each location. Return the amount of water that would accumulate if it rains.

For example: [0,1,0,2,1,0,1,3,2,1,2,1] should return 6 because 6 units of water can get trapped here.

       X               
   Xâ–ˆâ–ˆâ–ˆXXâ–ˆX              
 Xâ–ˆXXâ–ˆXXXXXX                   
# [0,1,0,2,1,0,1,3,2,1,2,1]

Here's your starting pont:

def capacity(arr):
  # Fill this in.

print capacity([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
# 6


You are given the root of a binary search tree. Return true if it is a valid binary search tree, and false otherwise. Recall that a binary search tree has the property that all values in the left subtree are less than or equal to the root, and all values in the right subtree are greater than or equal to the root.

Here's a starting point:

class TreeNode:
  def __init__(self, key):
    self.left = None
    self.right = None
    self.key = key

def is_bst(root):
  # Fill this in.

a = TreeNode(5)
a.left = TreeNode(3)
a.right = TreeNode(7)
a.left.left = TreeNode(1)
a.left.right = TreeNode(4)
a.right.left = TreeNode(6)
print is_bst(a)

#    5
#   / \
#  3   7
# / \ /
#1  4 6



Given a binary tree, return all values given a certain height h.

Here's a starting point:

class Node():
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

def valuesAtHeight(root, height):
  # Fill this in.

#     1
#    / \
#   2   3
#  / \   \
# 4   5   7

a = Node(1)
a.left = Node(2)
a.right = Node(3)
a.left.left = Node(4)
a.left.right = Node(5)
a.right.right = Node(7)
print valuesAtHeight(a, 3)
# [4, 5, 7]



You are given a string s, and an integer k. Return the length of the longest substring in s that contains at most k distinct characters.

For instance, given the string:
aabcdefff and k = 3, then the longest substring with 3 distinct characters would be defff. The answer should be 5.

Here's a starting point:

def longest_substring_with_k_distinct_characters(s, k):
  # Fill this in.

print longest_substring_with_k_distinct_characters('aabcdefff', 3)
# 5 (because 'defff' has length 5 with 3 characters)


A unival tree is a tree where all the nodes have the same value. Given a binary tree, return the number of unival subtrees in the tree.

For example, the following tree should return 5:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1


The 5 trees are:
- The three single '1' leaf nodes. (+3)
- The single '0' leaf node. (+1)
- The [1, 1, 1] tree at the bottom. (+1)

Here's a starting point:

class Node(object):
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

def count_unival_subtrees(root):
  # Fill this in.

a = Node(0)
a.left = Node(1)
a.right = Node(0)
a.right.left = Node(1)
a.right.right = Node(0)
a.right.left.left = Node(1)
a.right.left.right = Node(1)

print count_unival_subtrees(a)
# 5



You are given the preorder and inorder traversals of a binary tree in the form of arrays. Write a function that reconstructs the tree represented by these traversals.

Example:
Preorder: [a, b, d, e, c, f, g]
Inorder: [d, b, e, a, f, c, g]

The tree that should be constructed from these traversals is:

    a
   / \
  b   c
 / \ / \
d  e f  g


Here's a start:

from collections import deque

class Node(object):
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

  def __str__(self):
    q = deque()
    q.append(self)
    result = ''
    while len(q):
      n = q.popleft()
      result += n.val
      if n.left:
        q.append(n.left)
      if n.right:
        q.append(n.right)

    return result


def reconstruct(preorder, inorder):
  # Fill this in.

tree = reconstruct(['a', 'b', 'd', 'e', 'c', 'f', 'g'],
                   ['d', 'b', 'e', 'a', 'f', 'c', 'g'])
print tree
# abcdefg



Given a list of words, and an arbitrary alphabetical order, verify that the words are in order of the alphabetical order.

Example:

Input:
words = ["abcd", "efgh"], order="zyxwvutsrqponmlkjihgfedcba"

Output: False

Explanation: 'e' comes before 'a' so 'efgh' should come before 'abcd'

Example 2:

Input:
words = ["zyx", "zyxw", "zyxwy"],
order="zyxwvutsrqponmlkjihgfedcba"

Output: True

Explanation: The words are in increasing alphabetical order

Here's a starting point:

def isSorted(words, order):
  # Fill this in.

print isSorted(["abcd", "efgh"], "zyxwvutsrqponmlkjihgfedcba")
# False
print isSorted(["zyx", "zyxw", "zyxwy"],
               "zyxwvutsrqponmlkjihgfedcba")
# True


You are given a stream of numbers. Compute the median for each new element.
Eg. Given [2, 1, 4, 7, 2, 0, 5], the algorithm should output [2, 1.5, 2, 3.0, 2, 2, 2]

def running_median(stream):   # Fill this in.

running_median([2, 1, 4, 7, 2, 0, 5]) # 2 1.5 2 3.0 2 2.0 2


You are given an array of tuples (start, end) representing time intervals for lectures. The intervals may be overlapping. Return the number of rooms that are required.
For example. [(30, 75), (0, 50), (60, 150)] should return 2.


*/


Given a linked list, determine if the linked list has a cycle in it. For notation purposes, we use an integer pos which represents the zero-indexed position where the tail connects to.

Example:

Input: head = [4,3,2,1,0], pos = 1.  
Output: true

The example indicates a list where the tail connects to the second node.

class ListNode(object):
  def __init__(self, x):
    self.val = x
    self.next = None

class Solution(object):
  def hasCycle(self, head):
    # Fill this in.

testHead = ListNode(4)
node1 = ListNode(3)
testHead.next = node1
node2 = ListNode(2)
node1.next = node2
node3 = ListNode(1)
node2.next = node3
testTail = ListNode(0)
node3.next = testTail
testTail.next = node1

print(Solution().hasCycle(testHead))
# True


Given a sorted list of positive numbers, find the smallest positive number that cannot be a sum of any subset in the list.

Example:

Input: [1, 2, 3, 8, 9, 10]
Output: 7

Numbers 1 to 6 can all be summed by a subset of the list of numbers, but 7 cannot.

def findSmallest(nums):
  # Fill this in.

print findSmallest([1, 2, 3, 8, 9, 10])
# 7



You are given a doubly linked list. Determine if it is a palindrome.

Can you do this for a singly linked list?

class Node(object):
  def __init__(self, val):
    self.val = val
    self.next = None
    self.prev = None

def is_palindrome(node):
  # Fill this in.

node = Node('a')
node.next = Node('b')
node.next.prev = node
node.next.next = Node('b')
node.next.next.prev = node.next
node.next.next.next = Node('a')
node.next.next.next.prev = node.next.next

print is_palindrome(node)
# True




You are given a list of n numbers, where every number is at most k indexes away from its properly sorted index. Write a sorting algorithm (that will be given the number k) for this list that can solve this in O(n log k)

Example:

Input: [3, 2, 6, 5, 4], k=2
Output: [2, 3, 4, 5, 6]

As seen above, every number is at most 2 indexes away from its proper sorted index.

Here's a starting point:

def sort_partially_sorted(nums, k):
  # Fill this in.

print sort_partially_sorted([3, 2, 6, 5, 4], 2)
# [2, 3, 4, 5, 6]


Given a linked list and a number k, rotate the linked list by k places.

Here's some starter code and an example:

class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next

  def __str__(self):
    current = self
    ret = ''
    while current:
      ret += str(current.value)
      current = current.next
    return ret

def rotate_list(list, k):
  # Fill this in.

# Order is 1, 2, 3, 4
llist = Node(1, Node(2, Node(3, Node(4))))

# Order should now be 3, 4, 1, 2
print(rotate_list(llist, 2))
# 3412


Create a class that initializes with a list of numbers and has one method called sum. sum should take in two parameters, start_idx and end_idx and return the sum of the list from start_idx (inclusive) to end_idx` (exclusive).

You should optimize for the sum method.

Here's the class:

class ListFastSum:
  def __init__(self, nums):
    self.nums = nums

  def sum(self, start_idx, end_idx):
    # Fill this in.

print(ListFastSum([1, 2, 3, 4, 5, 6, 7]).sum(2, 5))
# 12 because 3 + 4 + 5 = 12


Given a list of numbers and an integer k, partition/sort the list such that the all numbers less than k occur before k, and all numbers greater than k occur after the number k.

def partition_list(nums, k):
  # Fill this in.

print(partition_list([2, 2, 2, 5, 2, 2, 2, 2, 5], 3))
# [2, 2, 2, 2, 2, 2, 2, 2, 5]


