### CSS
CSS3 is a latest standard of earlier versions(CSS2). The main difference between CSS2 and CSS3 is as follows:
⦁ Media Queries
⦁ Namespaces
⦁ Selectors Level 3
⦁ Color

Some of the most important CSS3 modules are:
⦁ Selectors
⦁ Box Model
⦁ Backgrounds and Borders
⦁ Image Values and Replaced Content
⦁ Text Effects
⦁ 2D/3D Transformations
⦁ Animations
⦁ Multiple Column Layout
⦁ User Interface

# Mask image
.mask-image-in-div {
  mask-image: url('image.png');
  mask-repeat: no-repeat;
}

# Aspect-ratio

.media {
  width: 100%;
  padding-top: 56.25%;
}

- 16/9 aspect ratio = 0.5625 = padding-top: 56.25%

.media {
  width: 100%;
  aspect-ratio: 16/9;
}

# Layout Models
- flexbox
- flow - one dimensional layout
- grid - two dimensional layout
- positional - extract from normal flow to precise position
- table - for structural table data
- float - for floating images inside of text; occasionaly used for layouts

# Font size
  html {
    font-size: 62.5%
  }

  body {
    font-size: 1.6rem;
  }

  .element {
    font-size: 1.3rem;
  }

# Border radius

- responsive

.element {
  border-radius: 1vw\
}

- chat bubbles
.buble {
   border-radius: 20px 20px 0;
 }

- active items
.active {
  border-radius: 0 20px 20px 0;
}

- labels
.corner-label {
   border-radius : 0 0 1.5rem 0;
}

- buttons
.button {
   border-radius: 20px 4px;
}

.semi-circle {
    border-radius : 0 0 100% 100%;
}

# layer
@layer reset, special;

@layer special {
  .item {
    border-color: red;
  }
}

@layer reset {
  .item {
    border: 3px dashed black;
    background-color: #aabbcc;
  }
}


## Other tips and resources

.darken {
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(YOUR IMAGE HERE);
}

### Put text in a box
.text-box {
	background-color: rgba(0, 0, 0, 0.5);
	color: #fff;
	display: inline;
	padding: 10px;
}

### Floor fade
.floor-fade {
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) ), url(YOUR IMAGE HERE);
}


.test {
    width: 500px;
    height: 400px;
    background-size: cover;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) ), url("https://download.unsplash.com/photo-1428604467652-115d9d71a7f1");
    position: relative;
}

.test p {
    font-size: 24px;
    color: #fff;
    text-transform: uppercase;
    font-family: sans-serif;
    position: absolute;
    bottom: 10px;
    left: 25px;
}

<div class="test">
    <p>Beautiful image with dark overlay</p>
</div>

.test {
    width: 500px;
    height: 400px;
    background-size: cover;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://download.unsplash.com/photo-1428604467652-115d9d71a7f1");
    position: relative;
}

.test p {
    font-size: 23px;
    color: #fff;
    text-transform: uppercase;
    font-family: sans-serif;
    position: absolute;
    top: 160px;
    left: 22px;
}
------------------------------------------

<div class="test">
    <p>Beautiful image with some text in a box</p>
</div>


.test {
    width: 500px;
    height: 400px;
    background-size: cover;
    position: relative;
    background-image: url("https://download.unsplash.com/photo-1428604467652-115d9d71a7f1");
}

.test p {
    background-color: rgba(0,0,0,0.6);
    color: #fff;
    display: inline;
    padding: 10px;
    font-size: 30px;
    color: #fff;
    text-transform: uppercase;
    font-family: sans-serif;
    width: 440px;
    position: absolute;
    top: 120px;
    left: 20px;
}


# filters
filter: invert(99%) sepia(95%) saturate(0%) hue-rotate(244deg) brightness(101%) contrast(106%);


### CSS points

em vs rem

em: Relative to the font size of the parent element
rem: Relative to the font size of the root element

### css-all

  button {
    all: unset;
  }

instead of

  button {
    background: none;
    border: none;
    color: inherit;
    font: inherit;
    outline: none;
    padding: 0;
  }

### Content-box

content-box = content;
border-box = content + padding + border


### Reponsidve bolumns

  .container {
    columns: 300px;
  }


### Change default selection color

::selection {
  color: red;
  background: yellow;
}

CSS

   Separation of Concerns
    Document structure and Semantics - HTML	
	Logic - JS	
	Formatting and Display - CSS
	
CSS Syntax

	Selector -  What	
		property : value -- How and where
	Class
		
		#id and name

Cascading Style Sheets
	
Conflicts

Style Application
   Same property has two different values   
   Closest to the element takes precedence   
   Last Write wins  
   
	Wastage

Code Wise
	 Repeated Code	 
	 Unused Code	 
	 Inline Style Elements - 	 
	 Default Values	 
	 Downloading codes which already exists	 
	 Inline Downloading Codes

### CSS Performance
section:not(.page-first-told) {
  content-visibility: auto;
  contain-intrinsic-size: auto 300px;
}
