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

----------------------------------------

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


# Color names
Colors Names

ultramarine50: "#f5f7ff",
ultramarine100: "#e8ecff",
ultramarine200: "#d2d8f9",
ultramarine300: "#b2bdf5",
ultramarine400: "#778bee",
ultramarine500: "#4a64e9",
ultramarine600: "#3c53c2",
ultramarine800: "#30418c",
ultramarine900: "#393c4b",
white: "#ffffff",
coolgrey50: "#f8f9fa",
coolgrey100: "#f5f7f9",
coolgrey200: "#e9edf1",
coolgrey300: "#dbdfe4",
coolgrey400: "#b6bfc9",
coolgrey500: "#7e8891",
coolgrey600: "#5d666f",
coolgrey800: "#3b4148",
coolgrey900: "#252b30",
black: "#000000",
warmgrey300: "#e0e0e0",
warmgrey500: "#9e9e9e",
warmgrey600: "#737373",
warmgrey700: "#424242",
warmgrey750: "#2f3129",
warmgrey800: "#272822",
warmgrey900: "#1d1e19",
sunset100: "#ffec4d",
sunset300: "#ffdd4d",
sunset500: "#ffcb45",
sunset600: "#ffba4d",
sunset800: "#ffa04d",
blue: "#78CCFA",
green: "#87CC43",
orange: "#FAB54E",
red500: "#e85858",
red600: "#db3939",
red700: "#c93434",
lavender100: "#eceffd",
lavender400: "#d9dffb",
lavender600: "#b4beed",
aqua100: "#e6f4fd",
aqua400: "#bee5fa",
aqua600: "#abe2ff",
mint100: "#e6fbf3",
mint400: "#c9f2e3",
mint600: "#a2ebd0",
lime100: "#ebf9de",
lime400: "#d6eebf",
lime600: "#bce099",
lemon100: "#fffedf",
lemon400: "#fff5b3",
lemon600: "#fff196",
mango100: "#fff1d6",
mango400: "#ffe2a9",
mango600: "#ffcb7d",
strawberry100: "#ffe6e6",
strawberry400: "#ffc8c8",
strawberry600: "#fc9797",
raspberry100: "#feeaf3",
raspberry400: "#fcd7e8",
raspberry600: "#fcbddb"

coolgrey550: "#888A93",
coolgrey450: "#9DA3A8",
coolgrey350: "#D3D8DE",
coolgrey250: "#E9EBEE",
warmgrey550: "#969694",
warmgrey650: "#6E6E6C",
warmgrey725: "#343431",
strawberry700: "#E98888",
ultramarine350: "#8A97DA",
ultramarine950: "#32343B",
golden: "#A9943C"

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
