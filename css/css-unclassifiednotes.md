11 Tips for CSS coding
 
	CSS has an important role in web application development. HTML is the skeleton of the web site. But CSS provides flesh and shape and beauty to the HTML skeleton. Now a days, web is available to common man. They access various websites on different devices. It is interesting that most of the users are particular about the look and feel of a web application which they are using. In this scenario, the importance of CSS comes. Here are some Tips for CSS coding for the UI developer, who is a beginner in this field.

Tips for CSS coding

1. Use Reset CSS
Different browsers have different ways of handling the styles. Or different browsers have different default styles for rendering the HTML, like font size, style, weight, margin, padding etc… All the HTML elements have some default styles and it varies depending on the browser. So how we can manage this is to use reset.css, a seperate style sheet for resetting the browser specific styles. For eg. refer Eric Meyer’s Reset CSS

2. Understanding CSS Selectors
CSS selectors are used for applying css rule to an element. CSS selectors are: element selectors or tag selectors (div, a, span, h1, h2 etc..), class selectors (.myclass, .newclass etc…), ID selectors (#header, #footer, #container etc..), pseudo-class selector (a:hover, a:link etc..), selectors based on relationship (div > span, div ul li). Use the selectors intelligently for the better use of css.

3. Re-usability of CSS
When you code css for a web application, always think about the re-usablity of the css. Use class for adding styles, so that the same styles which is common for different elements or blocks of html can be used. Using classes is always better than using element selectors.

4. CSS Grouping
CSS grouping will help us to reduce the css code. Elements/selectors which has some common styles, can be grouped together.

h2 {
    color: #000;
}
.title {
    color: #000;
}
.secondtitle {
    color: #000;
}

//Grouped css

h2, .title, .secondtitle {
    color: #000;
}
5. Use Short-hand CSS
One of the main advantages of using CSS shorthand is reduction in web page download time. Using CSS shorthand will reduce number of css lines, it makes the code clean and easier to understand. Refer example of font short hand css.
 
6. Avoid Superfluous Selectors
Sometimes our CSS declaration can be simple. Instead of using “ul li”, we can use directly “li”. When we are using multiple list items in a page, it is better to avoid using tag selectors, instead use class selectors.

7. Use of !important
Any style marked with !important will be taken into use regardlessly if there’s a overwriting rule below it. !important is used in situation where you want to force a style without something overwriting it. Or defining a rule with the !important ‘attribute’ discards the normal concerns as regards the ‘later’ rule overriding the ‘earlier’ ones.

.header { background-color:red !important;
	 background-color:green;
	}
Here the background color of the header class will be red even if the green color rule is declared after the first rule.

8. Replace Text with Image
It is a common practice to replace the text title with image. For example, usually image is used for Logo in a web, than using a text.

    #logo {
       background:url("logo.jpg") no-repeat 0 0; 
       display: block;    
       width:150px;  
       height:100px;
      text-indent:-9999px; 
    }  
text-indent:-9999px; throws your text title off screen, replaced by an image declared by background: {…} with a fixed width and height.

9. Use a master stylesheet
It is always better to use a master style sheet which includes other style sheets.

@import url("reset.css");
@import url("global.css");

@import url("structure.css");
10. Keep a library of helpful CSS classes or reusable classes.
.width100 { width: 100%; }
.width75 { width: 75%; }
.width50 { width: 50%; }
.floatLeft { float: left; }
.floatRight { float: right; }
.alignLeft { text-align: left; }
.alignRight { text-align: right; }
.clear { clear: both}
11. Proper naming of classes and IDs
Use a common naming system. Having a naming system for id’s and classes saves you a lot of time when looking for bugs, or updating your document. Especially in large CSS documents, things can get a big confusing quickly if your names are all different. Name your classes and IDs properly, according to their semantics. “We want to avoid names that imply presentational aspects. Otherwise, if we name something right-col, it’s entirely possible that the CSS would change and our “right-col” would end up actually being displayed on the left side of our page. That could lead to some confusion in the future, so it’s best that we avoid these types of presentational naming schemes.


1. Make it to the Point
A website which hits the right note is like a perfect piece for the user. They are often on the lookout of websites that provide info as per their requirements. A website that sticks to the idea and is on the nose is generally considered most suitable by the users. Circling around the subject rather than focusing on the center or the main theme can deter the interest from the product. So, frame such kind of content that stands relative to the purpose, whilst taking in all the SEO words.

2. Make it Responsive
With so many devices setting pace in the web world, optimized websites have become the need of the hour in order to make the most of the multi-device experiences. The websites should be compatible for view in all the mediums like smartphones and tablets so that the users can fully enjoy their online presence. Now Google also support mobile compatible websites and giving good rank on search engine.

3. Let it be Simple
The simpler, the better. The website should have less interpretation and more understanding. That’s the reason it is best to keep it simple. Follow the KISS (Keep It Simple Stupid) rule. Do not add complex matter which makes it difficult for the user to operate it in the first place, else, exit will follow entry.

4. Navigate Clearly
A website should have a regular design with proper navigation tools so that it is easy to operate. The users will find it appealing only if they can follow the layout and get the flow of direction. It should come across as clean in its design and clear in its navigation.

5. Get the User Point of View
For any website to be user centric, you need to get to know what the user wants. Work on the aspects that are an instant favorite amongst the user and influence them a lot. Understanding the user behavior can help to build a website that is feature rich yet user friendly. There are various tools available that can determine the action or the trend of the usage.

6. The Usual Approach
When it comes to usability, it is better to follow the conventional style. No need to experiment or play with various add-on features here and there. The users are more comfortable with the age long usual methods and trust the websites with such patterns. For instance, the main navigation is tabbed on the top and leads the page, the users are in ease with such set up and would like see the same in other websites as well.

7. Go With Priority
The content of the website needs to be prioritized so as to ensure the user’s readability. Only the significant details must capture the view and should be highlighted. Mark the areas that require attention and use techniques that will immediately bring such elements to the notice of the audience.

8. Get those Colors Right
A website that is usable must score high on visual appeal. Use such a combination of text and colors that the two enhance the value of each other and create a good effect. The text should be readable and clearly visible. Specialized tools like Adobe Color can be used to get that perfect palette.

9. Keep the User Information Limited
Websites containing sign up forms loaded with information are a big no-no. The users are not very keen to share their personal information like address and phone numbers and thus can avoid such sites. Just a simple email id would do the needful.

10. Use Typography Smartly
Websites that enable comfortable reading stand high in preference. Use a font that is clear and legible so that the eyes follow a fixed direction with the text and can easily grasp whatever is written. Difficulty in reading can lead to withdrawal from the website. Avoid the usage of random popups.

11. The Crisp Touch
The user browses the search engine with the intent to get quick fixes to his problem. Make the websites that are direct and crisp in their content and do not confuse in return. Let the info be as clear as possible.

12. Get It Right Away
Let the content be accessed straightway by the users. If there are other steps or links that leads to the information and make the user work for it, forget the retaining factor. The users will hit the back button if the accessibility is poor.

13. Look Says it All
It is important to give a systematic look to your content so that it is easily read by the users. Be careful to insert paragraphs, heading and bullet points in the subheading categories to make it more time worthy. Users tend to skip lengthy articles and generally skim and scan the major points that are highlighted and bulleted properly.

14. The White That Works
Let the page breathe. Do not clutter the website with design or content. White space has been an absolute favorite amongst the users and gives the website a neat and a more compact look. Make sure that the pixels ditch the color or text.

15. The Test Run
To determine website usability it is necessary to run it through various tests like A/B testing. Check the reactions and feedback of the visitors and see if they find it usable. There are various tools to assist you in this task which can help you judge the efficiency of the website amongst the wide audience.



/* cyrillic-ext */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7qsDJT9g.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7jsDJT9g.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7rsDJT9g.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7ksDJT9g.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7osDJT9g.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7psDJT9g.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: italic;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7nsDI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmhduz8A.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwkxduz8A.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmxduz8A.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlBduz8A.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmBduz8A.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmRduz8A.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNa7lqDY.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qPK7lqDY.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNK7lqDY.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qO67lqDY.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qN67lqDY.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNq7lqDY.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmhduz8A.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwkxduz8A.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmxduz8A.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;ழழழ்ழழ்ழழ்ழழ்ழழ்ழழ்ழழ்ழழ்ழழ்ழழ்ழழ்ழழ்ழழ்ழழ்ழழ்ழழ்ழழ்ழழ்ழழ்ழழ..ழ.ழ.ழ.ழ.ழ.ழ.ழ....,.தழ்ழழ்ழழ்ழ.ழ்ழழ்ழ.?.?.?.
  
  ழ.?.
  .
  ழ.?.
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlBduz8A.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmBduz8A.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmRduz8A.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlxdu.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
