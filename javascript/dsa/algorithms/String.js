//Given a list of strings, find the longest common prefix between all strings.

//Here's some examples and some starter code.

def longest_common_prefix(strs):
  # Fill this in.
  
print(longest_common_prefix(['helloworld', 'hellokitty', 'hell']))
# hell

print(longest_common_prefix(['daily', 'interview', 'pro']))
# ''


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




Given a string s and a character c, find the distance for all characters in the string to the character c in the string s. You can assume that the character c will appear at least once in the string.

Here's an example and some starter code:

def shortest_dist(s, c):
  # Fill this in.

print(shortest_dist('helloworld', 'l'))
# [2, 1, 0, 0, 1, 2, 2, 1, 0, 1]



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



Given a string, determine if there is a way to arrange the string such that the string is a palindrome. If such arrangement exists, return a palindrome (There could be many arrangements). Otherwise return None.

Here's some starter code:

def find_palindrome(s):
  # Fill this in.

print(find_palindrome('momom'))
# momom



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




Given a list of words, for each word find the shortest unique prefix. You can assume a word will not be a substring of another word (ie play and playing won't be in the same words list)

Example

Input: ['joma', 'john', 'jack', 'techlead']
Output: ['jom', 'joh', 'ja', 't']

Here's some starter code:

def shortest_unique_prefix(words):
  # Fill this in.

print(shortest_unique_prefix(['joma', 'john', 'jack', 'techlead']))
# ['jom', 'joh', 'ja', 't']





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


Given a file path with folder names, '..' (Parent directory), and '.' (Current directory), return the shortest possible file path (Eliminate all the '..' and '.').

Example

Input: '/Users/Joma/Documents/../Desktop/./../'
Output: '/Users/Joma/'

def shortest_path(file_path):
  # Fill this in.

print shortest_path('/Users/Joma/Documents/../Desktop/./../')
# /Users/Joma/


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


You are given two strings, A and B. Return whether A can be shifted some number of times to get B.

Eg. A = abcde, B = cdeab should return true because A can be shifted 3 times to the right to get B. A = abc and B= acb should return false.

def is_shifted(a, b):
  # Fill this in.
  
print is_shifted('abcde', 'cdeab')
# True



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


/**Given two strings A and B of lowercase letters,
 *  return true if and only if we can swap two letters in A so that the result equals **/

function checkIfSwapWorks(newStringA, newStringB) { 
    

}

function buddyStrings(stringA, stringB, cb) {
    let result = true;
    console.log(stringA + ' ' + stringB)
    if(stringA.length === 0 || stringB.length === 0 || stringA.length !== stringB.length) {
        result = false;
    } else {
        if(stringA === stringB) {
            result = true;
        } else {
            let newStringA = [], newStringB = []
            for(let index = 0;index < stringA.length;index++) {
                
                if(stringA.charAt(index) === stringB.charAt(index) ) {
                    // stringA = stringA.slice(index + 1, stringA.length);
                    // stringB = stringB.slice(index + 1, stringB.length);                    
                }else {                    
                    newStringA.push(stringA.charAt(index))
                    newStringB.push(stringB.charAt(index))
                }                
                
            }
            
            if(newStringA.length > 0 && newStringA.length === newStringB.length) {
                result = checkIfSwapWorks(newStringB, newStringB);
            }
        }
    }    

    return result;
}


/**
 * Given a string, return the first recurring letter that appears. If there are no recurring letters, return None.

Example:

Input: qwertty
Output: t

Input: qwerty
Output: None
 */

const firstRecurringCharacter = (string) => {
  var answer = "None";
  if(string) {
      
  } else {
      //String is not valid
  }

  return answer;
}

/**
 * 
 * Given a list of words, group the words that are anagrams of each other. (An anagram are words made up of the same letters).

Example:

Input: ['abc', 'bcd', 'cba', 'cbd', 'efg']
Output: [['abc', 'cba'], ['bcd', 'cbd'], ['efg']]
 * 
 */


 /**
 * 
 * Given a string of parenthesis. Return the minimum number of parenthesis that would need to be removed in order to make the string valid. "Valid" means that each open parenthesis has a matching closed parenthesis.

Example:

"()())()"

The following input should return 1.
 * 
 * 
 */