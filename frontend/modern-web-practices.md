Modern Web Practices
Nicholas Cloud, Phillip Conaway, Ted Waller, Aaron Bushnell,
Trevan Hetzel and Bob Yexley  This book is for sale at http://leanpub.com/modernwebpractices

Contents
Credits and Acknowledgements . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
Automate Your Workflow with Grunt . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
Offline Web Applications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
Data Binding . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
Making Things Move with CSS3 Transitions and Animations . . . . . . . . . . . . . . . . 5
HTML and CSS Bad Practices . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
Bower in Practice: A Package Manager for the Web . . . . . . . . . . . . . . . . . . . . . . 7
Credits and Acknowledgements
Contributing authors
• Aaron Bushnell
• Nicholas Cloud
• Ryan Conaway
• Trevan Hetzel
• Ted Waller
• Bob Yexley

Offline Web Applications
by Nicholas Cloud
There was a time not long ago when my mobile phone was just a phone. I made phone calls and
cursed it when those calls got dropped. Now I have a “smart” phone with the web at my fingertips.
Well, when I have data connectivity that is. If my call is dropped I can dial a phone number again
with little effort. If my network connection stalls while I’m submitting a lengthy form or while I’m
retrieving critical data the impact may be far more substantial. If I’m just browsing reddit or reading
the news, connectivity loss can be mildly annoying. If I’m entering data at a client site for my job,
it can be downright vexing and potentially costly.
Mobile web traffic now accounts for more than 50% of total internet traffic, of which 8% comes
from mobile browsers². Users expect applications on mobile devices to behave like applications on
traditional computers when their devices go offline; that is, they expect the application to keep
working, though in a limited capacity.
Read the rest of Nicholas’s chapter in the full Modern Web Practices ebook³!
²http://money.cnn.com/2014/02/28/technology/mobile/mobile-apps-internet
³http://bit.ly/mwpebook
Data Binding
by Ryan Conaway
What exactly is data binding?
In the simplest terms (and in the scope of this chapter), data binding in the web development space
is attaching JavaScript data, whether that be a simple variable or a complex object, to a DOM node
or vice versa by using DOM node information as a value for said variable or object. If both cases are
present then you have a 2-way binding.
You might also view data binding as extending HTML and the DOM’s API in a way that seamlessly
integrates JavaScript and HTML content. When done right, the DOM and your JavaScript are
decoupled so that neither is dependent on the other and should also be able to fail without any
dire consequences.
Read the rest of Ryan’s chapter in the full Modern Web Practices ebook⁴!
⁴http://bit.ly/mwpebook
Making Things Move with CSS3
Transitions and Animations
by Trevan Hetzel
Modern web browsers have supported CSS3 transitions and animations for a few years now.
Transitions, especially, are becoming pretty common ways of visualizing changes to elements on
a website. Many animating effects for which that developers often rely on jQuery are now available
as plain CSS.
For readability and future relevance, I’m omitting vendor prefixes in my code examples. You should
always check the browser support when using transition and animation properties, though. The Can
I use…⁵ website is a great reference to check CSS3 property availability in different browsers.
While oftentimes used together, transitions and animations are a completely different set of CSS
properties that work independent of each other. Transitions are typically used to animate state
changes, while animations are used for more robust motion sequences. For example, fading a
button’s background color in and out when a user hovers over it would be done with a transition,
while bouncing a ball or spinning a wheel would be done with an animation. Transitions can only
be initialized when a CSS property has changed and they can only run once. Animations, however,
run automatically and can be programmed to loop as many times as specified.
Read the rest of Trevan’s chapter in the full Modern Web Practices ebook⁶!
⁵http://caniuse.com
⁶http://bit.ly/mwpebook
HTML and CSS Bad Practices
by Ted Waller
This chapter covers a number of things I’ve learned to avoid over my years of reading, writing,
and maintaining CSS and HTML. Although some of these have been bad practices for a long time,
this chapter is written in the context of modern front-end development and responsive web design.
Some of the examples are perhaps worse than you’ll typically encounter, but they are that way for
demonstrative purposes and serve as an example of what these patterns can devolve into over the
life of a project.
Best practices vary from team to team and even project to project. I’m not going to pretend to know
what works for every circumstance. However, the bad practices and patterns identified here are
almost always unhelpful in the long-run.
Read the rest of Ted’s chapter in the full Modern Web Practices ebook⁷!
⁷http://bit.ly/mwpebook
