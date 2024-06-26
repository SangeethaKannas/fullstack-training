### Tips
In JavaScript, we normally use 𝗠𝗮𝘁𝗵.𝗳𝗹𝗼𝗼𝗿 method to get a value rounded to the number less than or equal to the provided number like this:

𝘔𝘢𝘵𝘩.𝘧𝘭𝘰𝘰𝘳(𝟧.𝟥); // 𝘳𝘦𝘵𝘶𝘳𝘯𝘴 𝟧
𝘔𝘢𝘵𝘩.𝘧𝘭𝘰𝘰𝘳(𝟩.𝟪); // 𝘳𝘦𝘵𝘶𝘳𝘯𝘴 𝟩

But If the provided number is negative, the result is not what you might have expected as can be seen below:

𝘔𝘢𝘵𝘩.𝘧𝘭𝘰𝘰𝘳(-𝟥.𝟦); // 𝘳𝘦𝘵𝘶𝘳𝘯s -𝟦 𝘪𝘯𝘴𝘵𝘦𝘢𝘥 𝘰𝘧 𝘺𝘰𝘶𝘳 𝘦𝘹𝘱𝘦𝘤𝘵𝘦𝘥 -𝟥

This is because -4 is a smaller number than -3.

So to fix this, ES6 has added 𝗠𝗮𝘁𝗵.𝘁𝗿𝘂𝗻𝗰 method using which you can get the expected result.

𝘔𝘢𝘵𝘩.𝘵𝘳𝘶𝘯𝘤(𝟧.𝟥); // 𝘳𝘦𝘵𝘶𝘳𝘯𝘴 𝟧
𝘔𝘢𝘵𝘩.𝘵𝘳𝘶𝘯𝘤(𝟩.𝟪); // 𝘳𝘦𝘵𝘶𝘳𝘯𝘴 𝟩
𝘔𝘢𝘵𝘩.𝘵𝘳𝘶𝘯𝘤(-𝟥.𝟦); // 𝘳𝘦𝘵𝘶𝘳𝘯𝘴 -𝟥

As you can see the 𝗠𝗮𝘁𝗵.𝘁𝗿𝘂𝗻𝗰 method truncates the part after the decimal point producing the expected value.

So using 𝗠𝗮𝘁𝗵.𝘁𝗿𝘂𝗻𝗰 method makes it easy to get a whole number along with the sign with the

#### Regexp
decimal point removed.

/\//ig;


\d matches a digit

[a-zA-Z] matches a letter

{3} is the quantifier that matches exactly 3 repetitions

^ Anchor to match the start of the string

$ Anchor to match the end of the string

So if you use all this new knowledge, you will come to a regex like this:

^\d{3}[a-zA-Z]{3}$
Update:
Since the input example has changed after I wrote my answer, here the update:

If your word is part of a larger string, you don't need the anchors ^ and $ instead you have to use word boundaries \b.

\b\d{3}[a-zA-Z]{3}\b

var numberPattern = /\d+/g;

'something102asdfkj1948948'.match( numberPattern )

var a =  333/2020;

### Steps to improve performance
1. Audit your site = current performance
2. Priorotize potential fixes
3. Evaluate your current hosting provider - geographical location, BW, type of hosting website
4. Use CDNs
5. Optimize images
6. Reduce total redirects
7. Limit HTTP requests
8. Compress, Compress and Compress
9. Capitalize on Caching
10. Track 404 errors - Mix Panel
11. Make Mobile a priority
12. Migrate to a CMS
13. Combine and Minify JS and CSS files
14. Determine DNS speed ( Time to First Byte (TTFB))
15. Opt for Async loading
16. Choose fewer and optimized fonts

### Best Practices for Speeding Up Your Web Site

- Minimize HTTP Requests
- Use a Content Delivery Network
- Add an Expires or a Cache-Control Header
- Gzip Components
- Put Stylesheets at the Top
- Put Scripts at the Bottom
- Avoid CSS Expressions
- Make JavaScript and CSS External
- Reduce DNS Lookups
- Minify JavaScript and CSS
- No 404s
- Avoid Redirects
- Remove Duplicate Scripts
- Configure ETags
- Make Ajax Cacheable
- Flush the Buffer Early
- Use GET for AJAX Requests
- Post-load Components
- Split Components Across Domains
- Optimize Images
- Choose <link> over @import
- Minimize the Number of iframes

35 Total Rules → http://developer.yahoo.com/performance/rules.html

### Page Speed Project
- YSlow
- Server Recommendations
- Suggested Code Changes
- Staging got a B and Production got an F
- Enable Compression
- Add Expires Headers
- Optimizing Images (25% savings)
- Reduce HTTP Requests
- CSS Image sprites

### Themes
 -- Variables

### Videos
Performance Tooling by Paul Irish (#perfmatters at SFHTML5)

### Obect destructuring
while destructing of objects, default values would only be assigned when the key doesn't exist or value is undefined. If the state is the following

because we are passing an arrow function to the setTimeout. Arrow functions retains the scope of their definition. Hence, when the arrow function will be called then context will be same as sayName function.

### Short hand methods

- Repeat a string - 'string'.repeat(numberof times);
- number of params accepted by a function - <functionname>.length
- Max and Min in array: Math.max(...arr) and Math.min(...arr)
- Exponent power:   a**b
- Remove duplicates in an array - using a set  // [...new Set(arr)]
- string to number   +<stringvariable>
- remove false values from an array:   arr.filter(Boolean)
- Assigning values to multiple variables  :  let [a, b, c] = ['a', 'b', 'c']
- Swap two variables :   [a, b] = [b, a]
- Object property assignment    :   - object destructuring
- Multiple condition checking   :  if( ['a', 'b', 'c'].includes(var))
- Check if a key exists in object   :   'name' in obj   or   Reflect.has(obj, 'name')
- For flooring :  instead of Math.floor use  Double bitwise or ~~
- And ( && )  Short circuit evaluation
- Removing multiple properties from an obj :   const {a, b, ...newObj } = obj
- Default value to function params
- Assign default value using OR       a || false
- Covnert string to array.   string.split(''), [...str], ...Array.from(str), Object.assign([], str)


### Performance comparison
Object creation

Object.assign

custom implementation

lodash deep clone

angular copy

Json.stringify

jquery.extend


### Courses

Udemy courses
https://www.udemy.com/online-business-selling-simple-products-amazon/
https://www.udemy.com/learn-responsive-web-development-from-scratch/learn/v4/overview
https://www.udemy.com/html-css-build-a-dashboard/
https://www.udemy.com/become-a-full-stack-developer-with-spring-aws-and-stripe/
https://www.udemy.com/photoshop-for-web-design-beginners/
https://www.udemy.com/regex-academy-an-introduction-to-text-parsing-sorcery/
https://www.udemy.com/learn-angular-from-scratch/


### Dom node removal
1. Removing a dom node removal without removing associated event listeners --> memory leaks
2. Detecting and resolving memory leaks can be challenging, but essential for maintaining performance and reliability of JS applications
3. Advanced tools like memory profilers and heap snapshots in browser developer tools can help identify and diagnose memory leaks in more complex scenarios


