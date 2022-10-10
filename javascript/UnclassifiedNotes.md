 pdf js
 Crypto js
 https://michalsnik.github.io/aos/
 https://animate.style/
 https://www.icofont.com/
 http://www.javascriptkit.com/script/script2/doctextresizer.shtml
 MooTools: the javascript framework 
 BxSlider v4.1.2 - Fully loaded, responsive content slider  * http://bxslider.com
 Ditty News Ticker
 JSZip v3.1.3 - A Javascript class for generating and reading zip files   <http://stuartk.com/jszip>
 /*! pdfmake v0.1.53, @license MIT, @link http://pdfmake.org */
/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

 * AdminLTE v3.0.5 (https://adminlte.io)

/*!
 * EventEmitter v4.2.6 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */
 //Style Sheet Switcher version 1.1 Oct 10th, 2006
 
 d3.min.js
 c3.min.js
  saveSvgaspng.js  
  
EasyCookie=(function(){var EPOCH='Thu, 01-Jan-1970 00:00:01 GMT',RATIO=1000*60*60*24,KEYS=['expires','path','domain'],esc=escape,un=unescape,doc=document,me;var get_now=function(){var r=new Date();r.setTime(r.getTime());return r;}
    var cookify=function(c_key,c_val){var i,key,val,r=[],opt=(arguments.length>2)?arguments[2]:{};r.push(esc(c_key)+'='+esc(c_val));for(i=0;i<KEYS.length;i++){key=KEYS[i];if(val=opt[key])
        r.push(key+'='+val);}
        if(opt.secure)
            r.push('secure');return r.join('; ');}
    var alive=function(){var k='__EC_TEST__',v=new Date();v=v.toGMTString();this.set(k,v);this.enabled=(this.remove(k)==v);return this.enabled;}
    me={set:function(key,val){var opt=(arguments.length>2)?arguments[2]:{},now=get_now(),expire_at,cfg={};if(opt.expires){opt.expires*=RATIO;cfg.expires=new Date(now.getTime()+opt.expires);cfg.expires=cfg.expires.toGMTString();}
        var keys=['path','domain','secure'];for(i=0;i<keys.length;i++)
            if(opt[keys[i]])
                cfg[keys[i]]=opt[keys[i]];var r=cookify(key,val,cfg);doc.cookie=r;return val;},has:function(key){key=esc(key);var c=doc.cookie,ofs=c.indexOf(key+'='),len=ofs+key.length+1,sub=c.substring(0,key.length);return((!ofs&&key!=sub)||ofs<0)?false:true;},get:function(key){key=esc(key);var c=doc.cookie,ofs=c.indexOf(key+'='),len=ofs+key.length+1,sub=c.substring(0,key.length),end;if((!ofs&&key!=sub)||ofs<0)
        return null;end=c.indexOf(';',len);if(end<0)
        end=c.length;return un(c.substring(len,end));},remove:function(k){var r=me.get(k),opt={expires:EPOCH};doc.cookie=cookify(k,'',opt);return r;},keys:function(){var c=doc.cookie,ps=c.split('; '),i,p,r=[];for(i=0;i<ps.length;i++){p=ps[i].split('=');r.push(un(p[0]));}
        return r;},all:function(){var c=doc.cookie,ps=c.split('; '),i,p,r=[];for(i=0;i<ps.length;i++){p=ps[i].split('=');r.push([un(p[0]),un(p[1])]);}
        return r;},version:'0.2.1',enabled:false};me.enabled=alive.call(me);return me;}());

window.Ngg_Store = {

    get: function(key){
        return EasyCookie.get(key);
    },

    set: function(key, value){
        if (typeof(value) == 'object') {
            value = JSON.stringify(value);
        }
        return EasyCookie.set(key, value, {
            expires: 10,
            path: '/',
            secure: false
        });
    },

    del: function(key){
        EasyCookie.remove(key);
        return !this.has(key);
    },

    has: function(key){
        var value = this.get(key);
        return typeof(value) != 'undefined' && value != null;
    },

    save: function(){
        return true;
    }
};

jQuery(function($){

$(window).unload(function(){
    Ngg_Store.save();
})

});




// http://cpojer.net/PowerTools/#select=Mobile/Swipe  
// packager build Mobile/Swipe
/*
---

name: Element.defineCustomEvent

description: Allows to create custom events based on other custom events.

authors: Christoph Pojer (@cpojer)

license: MIT-style license.

requires: [Core/Element.Event]

provides: Element.defineCustomEvent

...
*/

(function(){

[Element, Window, Document].invoke('implement', {hasEvent: function(event){
	var events = this.retrieve('events'),
		list = (events && events[event]) ? events[event].values : null;
	if (list){
		var i = list.length;
		while (i--) if (i in list){
			return true;
		}
	}
	return false;
}});

var wrap = function(custom, method, extended){
	method = custom[method];
	extended = custom[extended];

	return function(fn, name){
		if (extended && !this.hasEvent(name)) extended.call(this, fn, name);
		if (method) method.call(this, fn, name);
	};
};

var inherit = function(custom, base, method){
	return function(fn, name){
		base[method].call(this, fn, name);
		custom[method].call(this, fn, name);
	};
};

var events = Element.Events;

Element.defineCustomEvent = function(name, custom){
	var base = events[custom.base];

	custom.onAdd = wrap(custom, 'onAdd', 'onSetup');
	custom.onRemove = wrap(custom, 'onRemove', 'onTeardown');

	events[name] = base ? Object.append({}, custom, {

		base: base.base,

		condition: function(event, name){
			return (!base.condition || base.condition.call(this, event, name)) &&
				(!custom.condition || custom.condition.call(this, event, name));
		},

		onAdd: inherit(custom, base, 'onAdd'),
		onRemove: inherit(custom, base, 'onRemove')

	}) : custom;

	return this;
};

Element.enableCustomEvents = function(){
  Object.each(events, function(event, name){
    if (event.onEnable) event.onEnable.call(event, name);
  });
};

Element.disableCustomEvents = function(){
  Object.each(events, function(event, name){
    if (event.onDisable) event.onDisable.call(event, name);
  });
};

})();


/*
---

name: Browser.Features.Touch

description: Checks whether the used Browser has touch events

authors: Christoph Pojer (@cpojer)

license: MIT-style license.

requires: [Core/Browser]

provides: Browser.Features.Touch

...
*/

Browser.Features.Touch = (function(){
	try {
		document.createEvent('TouchEvent').initTouchEvent('touchstart');
		return true;
	} catch (exception){}
	
	return false;
})();

// Android doesn't have a touch delay and dispatchEvent does not fire the handler
Browser.Features.iOSTouch = (function(){
	var name = 'cantouch', // Name does not matter
		html = document.html,
		hasTouch = false;

	if (!html.addEventListener) return false;

	var handler = function(){
		html.removeEventListener(name, handler, true);
		hasTouch = true;
	};

	try {
		html.addEventListener(name, handler, true);
		var event = document.createEvent('TouchEvent');
		event.initTouchEvent(name);
		html.dispatchEvent(event);
		return hasTouch;
	} catch (exception){}

	handler(); // Remove listener
	return false;
})();


/*
---

name: Swipe

description: Provides a custom swipe event for touch devices

authors: Christopher Beloch (@C_BHole), Christoph Pojer (@cpojer), Ian Collins (@3n)

license: MIT-style license.

requires: [Core/Element.Event, Custom-Event/Element.defineCustomEvent, Browser.Features.Touch]

provides: Swipe

...
*/

(function(){

var name = 'swipe',
	distanceKey = name + ':distance',
	cancelKey = name + ':cancelVertical',
	dflt = 50;

var start = {}, disabled, active;

var clean = function(){
	active = false;
};

var events = {

	touchstart: function(event){
		if (event.touches.length > 1) return;

		var touch = event.touches[0];
		active = true;
		start = {x: touch.pageX, y: touch.pageY};
	},
	
	touchmove: function(event){
		if (disabled || !active) return;
		
		var touch = event.changedTouches[0],
			end = {x: touch.pageX, y: touch.pageY};
		if (this.retrieve(cancelKey) && Math.abs(start.y - end.y) > 10){
			active = false;
			return;
		}
		
		var distance = this.retrieve(distanceKey, dflt),
			delta = end.x - start.x,
			isLeftSwipe = delta < -distance,
			isRightSwipe = delta > distance;

		if (!isRightSwipe && !isLeftSwipe)
			return;
		
		event.preventDefault();
		active = false;
		event.direction = (isLeftSwipe ? 'left' : 'right');
		event.start = start;
		event.end = end;
		
		this.fireEvent(name, event);
	},

	touchend: clean,
	touchcancel: clean

};

Element.defineCustomEvent(name, {

	onSetup: function(){
		this.addEvents(events);
	},

	onTeardown: function(){
		this.removeEvents(events);
	},

	onEnable: function(){
		disabled = false;
	},

	onDisable: function(){
		disabled = true;
		clean();
	}

});

})();

////////////////////////////////////////////////////DSA

Given a list of coins i.e 1 cents, 5 cents and 10 cents, can you determine the total number of combinations of the coins in the given list to make up the number N?
Suppose you are given the coins 1 cent, 5 cents, and 10 cents with N = 8 cents, what are the total number of combinations of the coins you can arrange to obtain 8 cents. 

Input: N=8
        Coins : 1, 5, 10
Output: 2

Explanation: 
1 way: 
      1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 8 cents.
2 way:
      1 + 1 + 1 + 5 = 8 cents.      
      
      1 way = 1 + 1 + 1... N
      
      N > 5 and N < 10
          N % 5
          
      N > 10
         N % 10
     
     function countCombinations(totalCents) {
         let count = 1; // 1 + 1 + 1 +... N
         if(totalCents > 4 and totalCents < 10) {
             count++;
         }         
         
         if (totalCents >= 10 ) {
             count += 2;
         }
     }
///////////////////////////////////////////////////////////////////////////////////////////////
DB Construction String
`mongodb://${dbname}${dbkey}@${dbname}.documents.azure.com:10255/${dbname}ssl=true&appName=@${dbname}@";`

/////////////////////////////////////////////////////////////////////////////

range(
            Number(pagesList[pages].split("-")[0]), 
            Number(pagesList[pages].split("-")[1])
          )
		  
$(document).ready(function(){
						   
 //$("body").append("<a target='_blank' class='ico-responsive' href='devise/responsive.html'>Check Responsive</a>");
						   
	//contrast
	if(getCookie('contrast') == 0 || getCookie('contrast') == null){
	$(".light").hide();
	$(".dark").show();
    }else{
	$(".light").show();
	$(".dark").hide();
}

// Fix Header

var num = 36; //number of pixels before modifying styles
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
        $('.fixed-wrapper').addClass('sticky');
		
    
        } else {
        $('.fixed-wrapper').removeClass('sticky');
    
        }
    });

	
/*	var num = 146; //number of pixels before modifying styles
            $(window).bind('scroll', function () {
                if ($(window).scrollTop() > num) {
                $('.nav-wrapper').addClass('sticky');				
            
                } else {
                $('.nav-wrapper').removeClass('sticky');
            
                }
            });*/
			
	/*var num = 146; //number of pixels before modifying styles
            $(window).bind('scroll', function () {
                if ($(window).scrollTop() > num) {
                $('.search-el').addClass('sticky');
				
            
                } else {
                $('.search-el').removeClass('sticky');
            
                }
            });*/		
	
// Mobile Nav	
$('.sub-menu').append('<i class="fa fa-caret-right"></i>');
	$('.toggle-nav-bar').click(function(){	
	$('#nav').slideToggle();
	$('#nav li').removeClass('open');
    $("#nav li").click(function(){
		$("#nav li").removeClass('open');
		$(this).addClass('open');
	}); 
		
	});
	
//Skip Content
$('a[href^="#skipCont"]').click(function() {
$('html,body').animate({ scrollTop: $(this.hash).offset().top}, 500);
return false;
e.preventDefault();

});

// Toggle Search

    $("#toggleSearch").click(function(e) {
        $(".search-drop").toggle();
        e.stopPropagation();
    });

    $(document).click(function(e) {
        if (!$(e.target).is('.search-drop, .search-drop *')) {
            $(".search-drop").hide();
        }
    });

// Toggle social
/*$('#toggleSocial').click(function(){
$('.social-drop').slideToggle();
})*/

// Toggle social
/*$('#toggleAccessibility').click(function(){
$('.access-drop').slideToggle();
})*/


})


//Drop down menu for Keyboard accessing

function dropdown1(dropdownId, hoverClass, mouseOffDelay) { 
	if(dropdown = document.getElementById(dropdownId)) {
		var listItems = dropdown.getElementsByTagName('li');
		for(var i = 0; i < listItems.length; i++) {
			listItems[i].onmouseover = function() { this.className = addClass(this); }
			listItems[i].onmouseout = function() {
				var that = this;
				setTimeout(function() { that.className = removeClass(that); }, mouseOffDelay);
				this.className = that.className;
			}
			var anchor = listItems[i].getElementsByTagName('a');
			anchor = anchor[0];
			anchor.onfocus = function() { tabOn(this.parentNode); }
			anchor.onblur = function() { tabOff(this.parentNode); }
		}
	}
	
	function tabOn(li) {
		if(li.nodeName == 'LI') {
			li.className = addClass(li);
			tabOn(li.parentNode.parentNode);
		}
	}
	
	function tabOff(li) {
		if(li.nodeName == 'LI') {
			li.className = removeClass(li);
			tabOff(li.parentNode.parentNode);
		}
	}
	
	function addClass(li) { return li.className + ' ' + hoverClass; }
	function removeClass(li) { return li.className.replace(hoverClass, ""); }
}

jQuery(document).ready(function(){
	dropdown1('header-nav','hover',10);

});


(function() {
  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in defaults) {
        value = defaults[key];
        if (custom[key] == null) {
          custom[key] = value;
        }
      }
      return custom;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    Util.prototype.createEvent = function(event, bubble, cancel, detail) {
      var customEvent;
      if (bubble == null) {
        bubble = false;
      }
      if (cancel == null) {
        cancel = false;
      }
      if (detail == null) {
        detail = null;
      }
      if (document.createEvent != null) {
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(event, bubble, cancel, detail);
      } else if (document.createEventObject != null) {
        customEvent = document.createEventObject();
        customEvent.eventType = event;
      } else {
        customEvent.eventName = event;
      }
      return customEvent;
    };

    Util.prototype.emitEvent = function(elem, event) {
      if (elem.dispatchEvent != null) {
        return elem.dispatchEvent(event);
      } else if (event in (elem != null)) {
        return elem[event]();
      } else if (("on" + event) in (elem != null)) {
        return elem["on" + event]();
      }
    };

    Util.prototype.addEvent = function(elem, event, fn) {
      if (elem.addEventListener != null) {
        return elem.addEventListener(event, fn, false);
      } else if (elem.attachEvent != null) {
        return elem.attachEvent("on" + event, fn);
      } else {
        return elem[event] = fn;
      }
    };

    Util.prototype.removeEvent = function(elem, event, fn) {
      if (elem.removeEventListener != null) {
        return elem.removeEventListener(event, fn, false);
      } else if (elem.detachEvent != null) {
        return elem.detachEvent("on" + event, fn);
      } else {
        return delete elem[event];
      }
    };

    Util.prototype.innerHeight = function() {
      if ('innerHeight' in window) {
        return window.innerHeight;
      } else {
        return document.documentElement.clientHeight;
      }
    };

    return Util;

  })();

  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
    function WeakMap() {
      this.keys = [];
      this.values = [];
    }

    WeakMap.prototype.get = function(key) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          return this.values[i];
        }
      }
    };

    WeakMap.prototype.set = function(key, value) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          this.values[i] = value;
          return;
        }
      }
      this.keys.push(key);
      return this.values.push(value);
    };

    return WeakMap;

  })());

  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
    function MutationObserver() {
      if (typeof console !== "undefined" && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
      }
      if (typeof console !== "undefined" && console !== null) {
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    MutationObserver.notSupported = true;

    MutationObserver.prototype.observe = function() {};

    return MutationObserver;

  })());

  getComputedStyle = this.getComputedStyle || function(el, pseudo) {
    this.getPropertyValue = function(prop) {
      var ref;
      if (prop === 'float') {
        prop = 'styleFloat';
      }
      if (getComputedStyleRX.test(prop)) {
        prop.replace(getComputedStyleRX, function(_, _char) {
          return _char.toUpperCase();
        });
      }
      return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
    };
    return this;
  };

  getComputedStyleRX = /(\-([a-z]){1})/g;

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      callback: null,
      scrollContainer: null
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = bind(this.scrollCallback, this);
      this.scrollHandler = bind(this.scrollHandler, this);
      this.resetAnimation = bind(this.resetAnimation, this);
      this.start = bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
      if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      }
      this.animationNameCache = new WeakMap();
      this.wowEvent = this.util().createEvent(this.config.boxClass);
    }

    WOW.prototype.init = function() {
      var ref;
      this.element = window.document.documentElement;
      if ((ref = document.readyState) === "interactive" || ref === "complete") {
        this.start();
      } else {
        this.util().addEvent(document, 'DOMContentLoaded', this.start);
      }
      return this.finished = [];
    };

    WOW.prototype.start = function() {
      var box, j, len, ref;
      this.stopped = false;
      this.boxes = (function() {
        var j, len, ref, results;
        ref = this.element.querySelectorAll("." + this.config.boxClass);
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      this.all = (function() {
        var j, len, ref, results;
        ref = this.boxes;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      if (this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle();
        } else {
          ref = this.boxes;
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            this.applyStyle(box, true);
          }
        }
      }
      if (!this.disabled()) {
        this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
        this.util().addEvent(window, 'resize', this.scrollHandler);
        this.interval = setInterval(this.scrollCallback, 50);
      }
      if (this.config.live) {
        return new MutationObserver((function(_this) {
          return function(records) {
            var k, len1, node, record, results;
            results = [];
            for (k = 0, len1 = records.length; k < len1; k++) {
              record = records[k];
              results.push((function() {
                var l, len2, ref1, results1;
                ref1 = record.addedNodes || [];
                results1 = [];
                for (l = 0, len2 = ref1.length; l < len2; l++) {
                  node = ref1[l];
                  results1.push(this.doSync(node));
                }
                return results1;
              }).call(_this));
            }
            return results;
          };
        })(this)).observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    };

    WOW.prototype.stop = function() {
      this.stopped = true;
      this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
      this.util().removeEvent(window, 'resize', this.scrollHandler);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.sync = function(element) {
      if (MutationObserver.notSupported) {
        return this.doSync(this.element);
      }
    };

    WOW.prototype.doSync = function(element) {
      var box, j, len, ref, results;
      if (element == null) {
        element = this.element;
      }
      if (element.nodeType !== 1) {
        return;
      }
      element = element.parentNode || element;
      ref = element.querySelectorAll("." + this.config.boxClass);
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        if (indexOf.call(this.all, box) < 0) {
          this.boxes.push(box);
          this.all.push(box);
          if (this.stopped || this.disabled()) {
            this.resetStyle();
          } else {
            this.applyStyle(box, true);
          }
          results.push(this.scrolled = true);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      box.className = box.className + " " + this.config.animateClass;
      if (this.config.callback != null) {
        this.config.callback(box);
      }
      this.util().emitEvent(box, this.wowEvent);
      this.util().addEvent(box, 'animationend', this.resetAnimation);
      this.util().addEvent(box, 'oanimationend', this.resetAnimation);
      this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
      this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
      return box;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return this.animate((function(_this) {
        return function() {
          return _this.customStyle(box, hidden, duration, delay, iteration);
        };
      })(this));
    };

    WOW.prototype.animate = (function() {
      if ('requestAnimationFrame' in window) {
        return function(callback) {
          return window.requestAnimationFrame(callback);
        };
      } else {
        return function(callback) {
          return callback();
        };
      }
    })();

    WOW.prototype.resetStyle = function() {
      var box, j, len, ref, results;
      ref = this.boxes;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        results.push(box.style.visibility = 'visible');
      }
      return results;
    };

    WOW.prototype.resetAnimation = function(event) {
      var target;
      if (event.type.toLowerCase().indexOf('animationend') >= 0) {
        target = event.target || event.srcElement;
        return target.className = target.className.replace(this.config.animateClass, '').trim();
      }
    };

    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
      if (hidden) {
        this.cacheAnimationName(box);
      }
      box.style.visibility = hidden ? 'hidden' : 'visible';
      if (duration) {
        this.vendorSet(box.style, {
          animationDuration: duration
        });
      }
      if (delay) {
        this.vendorSet(box.style, {
          animationDelay: delay
        });
      }
      if (iteration) {
        this.vendorSet(box.style, {
          animationIterationCount: iteration
        });
      }
      this.vendorSet(box.style, {
        animationName: hidden ? 'none' : this.cachedAnimationName(box)
      });
      return box;
    };

    WOW.prototype.vendors = ["moz", "webkit"];

    WOW.prototype.vendorSet = function(elem, properties) {
      var name, results, value, vendor;
      results = [];
      for (name in properties) {
        value = properties[name];
        elem["" + name] = value;
        results.push((function() {
          var j, len, ref, results1;
          ref = this.vendors;
          results1 = [];
          for (j = 0, len = ref.length; j < len; j++) {
            vendor = ref[j];
            results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
          }
          return results1;
        }).call(this));
      }
      return results;
    };

    WOW.prototype.vendorCSS = function(elem, property) {
      var j, len, ref, result, style, vendor;
      style = getComputedStyle(elem);
      result = style.getPropertyCSSValue(property);
      ref = this.vendors;
      for (j = 0, len = ref.length; j < len; j++) {
        vendor = ref[j];
        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
      }
      return result;
    };

    WOW.prototype.animationName = function(box) {
      var animationName, error;
      try {
        animationName = this.vendorCSS(box, 'animation-name').cssText;
      } catch (error) {
        animationName = getComputedStyle(box).getPropertyValue('animation-name');
      }
      if (animationName === 'none') {
        return '';
      } else {
        return animationName;
      }
    };

    WOW.prototype.cacheAnimationName = function(box) {
      return this.animationNameCache.set(box, this.animationName(box));
    };

    WOW.prototype.cachedAnimationName = function(box) {
      return this.animationNameCache.get(box);
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var j, len, ref, results;
          ref = this.boxes;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            results.push(box);
          }
          return results;
        }).call(this);
        if (!(this.boxes.length || this.config.live)) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      while (element.offsetTop === void 0) {
        element = element.parentNode;
      }
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset;
      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util != null ? this._util : this._util = new Util();
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);

<script>window.alert("test")</script>


function numbersOnly(field) {
	var valo = new String();
	var numere = "0123456789";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) != -1) 
			valo += chars[i];	
	}
	if (field.value != valo) field.value = valo;
}
function numbersOnly1(field) {
	var valo = new String();
	var numere = "0123456789/_";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) != -1) 
			valo += chars[i];	
	}
	if (field.value != valo) field.value = valo;
	
	
}

function date(field) {
	var valo = new String();
	var numere = "0123456789-";
	
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) != -1) 
			valo += chars[i];	
	}
	if (field.value != valo) field.value = valo;
}
function toUpperCase(field)
{	
	var valo = new String();
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		valo += chars[i].toUpperCase();
	}
	if (field.value != valo) field.value = valo; 
}

function notAllowedChars(field) {
	var valo = new String();
	var numere = "<>&\\\'~!^|";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) == -1) 
			valo += chars[i];
	}
	if (field.value != valo) field.value = valo;
}

function notAllowedChars1(field) {
	var valo = new String();
	var numere = "<>&\\\'~!^|@#$%()+*<>?,./}{][;':";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) == -1) 
			valo += chars[i];
	}
	if (field.value != valo) field.value = valo;
}

function allowedChars(field) {
	var valo = new String();
	var numere = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/-";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		
		if (numere.indexOf(chars[i]) != -1) 
			valo += chars[i];
	}
	if (field.value != valo) field.value = valo;
}

function allowedChars1(field) {
	//alert("hai");
	var valo = new String();
	var numere = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/-";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) != -1) 
			valo += chars[i];
	}
	if (field.value != valo) field.value = valo;
}


function notAllowSpace(field) {
	var valo = new String();
	var numere = " ";
	var chars = field.value.split("");
	for (i = 0; i < chars.length; i++) {
		if (numere.indexOf(chars[i]) == -1) 
			valo += chars[i];
	}
	if (field.value != valo) field.value = valo;
}

function getReq() {
    var req = false;
    try {
         req = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch(Ex) {
         try {
             req = new ActiveXObject("Microsoft.XMLHTTP");
         }
         catch(ex1) {
             req = false;
         }
    }
    if(!req && typeof XMLHttpRequest != 'undefined') {
            req = new XMLHttpRequest();
    }
    return req;
}

function ltrim(testStr) { 
       if (testStr == "") 
              return ""; 
       else { 
              var pattern = /[^\s]+.*/; 
              result = testStr.match(pattern); 
              return result[0]; 
       } 
} 
function rtrim(testStr) { 
       if (testStr == "") 
              return ""; 
       else { 
              var pattern = /.*[\S]/; 
              result = testStr.match(pattern); 
              return result[0]; 
       } 
} 
function trim(testStr) { 
   return rtrim(ltrim(testStr)); 
}

function val_space(text) {  
	var result=false;
	for (i=0,n=text.length;i<n;i++){
		if(text.charCodeAt(i)!=32){
		result=true;				
		}
  	}
  	if (result==false){
  			text="";
  	}
  		return text; 	
}

function getTaluksTamil(districtCode) {		
	var url = "ajax.html?page=talukTamil&districtCode=" + districtCode;

	var HttpRequest = getReq();
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
            getTalukLists(HttpRequest);
    }
    HttpRequest.send(null);
}

function getTaluks(districtCode) {	
//alert("===getTaluks===");
	/*if(districtCode == "02"){
		document.getElementById("street").style.display="block";
	}else{
		document.getElementById("street").style.display="block";
		document.getElementById("street").value="";
	}*/
	var url = "ajax.html?page=taluk&districtCode=" + districtCode;
	
	var HttpRequest = getReq();
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
            getTalukLists(HttpRequest);
    }
   
    HttpRequest.send(null);
}



function getTaluksAreg(districtCode) {	
	
		var url = "ajax.html?page=taluk&districtCode=" + districtCode;
		
		var HttpRequest = getReq();
	    HttpRequest.open("GET", url, true);    
	    HttpRequest.onreadystatechange = function(){
	            getTalukLists(HttpRequest);
	    }
	   
	    HttpRequest.send(null);
	}

function getEncroachmentType(i)
{
	//alert("getEncroachmentType"+i);
	var url = "ajax.html?page=encr_type";var HttpRequest = getReq();
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
            getencrLists(HttpRequest,i);
    }
   
    HttpRequest.send(null);
}

function getTalukLists(HttpRequest) {
	
var taluk = document.forms[0].talukCode;

	if(HttpRequest.readyState == 4){
		
        if(HttpRequest.status == 200){
        	
        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];       
            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;                        
            if(flag == "false") {   
            	for(i = taluk.length; i > 0; i--){
					taluk.options[i] = null;
				}          
            }
            else {            	
            	var list = root.getElementsByTagName('taluk');
            	for(i = taluk.length; i > 0; i--){
					taluk.options[i] = null;
				}
				for(i = 0; i < list.length; i++){	
					
					var talukCode = list[i].getElementsByTagName('talukcode')[0].firstChild.nodeValue;
					
					var talukName = list[i].getElementsByTagName('talukname')[0].firstChild.nodeValue;
					
					taluk.options[i+1] = new Option(talukName, talukCode);
				}	            	
            }
        }
    }
}


/**/

function getUrbanTalukLists(HttpRequest) {
	
	var taluk = document.forms[0].talukCode;

		if(HttpRequest.readyState == 4){
			
	        if(HttpRequest.status == 200){
	        	
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];       
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;                        
	            if(flag == "false") {   
	            	for(i = taluk.length; i > 0; i--){
						taluk.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('taluk');
	            	for(i = taluk.length; i > 0; i--){
						taluk.options[i] = null;
					}
					for(i = 0; i < list.length; i++){	
						
						var talukCode = list[i].getElementsByTagName('talukcode')[0].firstChild.nodeValue;
						
						var talukName = list[i].getElementsByTagName('talukname')[0].firstChild.nodeValue;
						
						taluk.options[i+1] = new Option(talukName, talukCode);
					}	            	
	            }
	        }
	    }
	}

function getVillages(districtCode, talukCode) {	
//alert("hai"+districtCode+talukCode);
	var url = "ajax.html?page=village&districtCode=" + districtCode + "&talukCode=" + talukCode;
	var HttpRequest = getReq();
	
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
            getVillageLists(HttpRequest);
    }
    HttpRequest.send(null);
}

function getUrbanVillages(districtCode, talukCode) {	
	//alert("inside js"+districtCode+talukCode);
		var url = "ajax.html?page=getUrbanVillages&districtCode=" + districtCode + "&talukCode=" + talukCode;
		var HttpRequest = getReq();
		
	    HttpRequest.open("GET", url, true);    
	    HttpRequest.onreadystatechange = function(){
	    	
	    	getUrbanVillageListsNew(HttpRequest);
	    }
	    HttpRequest.send(null);
	}

function getUrbanVillagesTamil(districtCode, talukCode) {	
	//alert("inside js"+districtCode+talukCode);
		var url = "ajax.html?page=getUrbanVillagesTamil&districtCode=" + districtCode + "&talukCode=" + talukCode;
		var HttpRequest = getReq();
		
	    HttpRequest.open("GET", url, true);    
	    HttpRequest.onreadystatechange = function(){
	    	getUrbanVillageListsNew(HttpRequest);
	    }
	    HttpRequest.send(null);
	}

function getVillagesfromStreet(districtCode, streetCode) {	
	//alert("hai"+districtCode+talukCode);
		var url = "ajax.html?page=getVillagesfromStreet&districtCode=" + districtCode + "&streetCode=" + streetCode;
		var HttpRequest = getReq();
		
	    HttpRequest.open("GET", url, true);    
	    HttpRequest.onreadystatechange = function(){
	            getVillageListsfromStreet(HttpRequest);
	    }
	    HttpRequest.send(null);
	    document.forms[0].wardNo.value = "001";
	   document.forms[0].villageCode.disabled = true;
	   document.forms[0].wardNo.disabled = true;
	  // alert(document.forms[0].villageCode.value);
	   
	}

function getVillagesTamilfromStreet(districtCode, streetCode) {	
	//alert("hai"+districtCode+talukCode);
		var url = "ajax.html?page=getVillagesTamilfromStreet&districtCode=" + districtCode + "&streetCode=" + streetCode;
		var HttpRequest = getReq();
		
	    HttpRequest.open("GET", url, true);    
	    HttpRequest.onreadystatechange = function(){
	            getVillageListsfromStreet(HttpRequest);
	    }
	    HttpRequest.send(null);
	    document.forms[0].wardNo.value = "001";
	    document.forms[0].villageCode.disabled = true;
	    document.forms[0].wardNo.disabled = true;
	  // alert(document.forms[0].villageCode.value);
	   
	}

function getStreets(districtCode, talukCode) {	
	//alert("hai"+districtCode+talukCode);
		var url = "ajax.html?page=streets&districtCode=" + districtCode + "&talukCode=" + talukCode;
		var HttpRequest = getReq();
		
	    HttpRequest.open("GET", url, true);    
	    HttpRequest.onreadystatechange = function(){
	    	getStreetsLists(HttpRequest);
	    }
	    HttpRequest.send(null);
	}

function getStreetsTamil(districtCode, talukCode) {	
	//alert("hai"+districtCode+talukCode);
		var url = "ajax.html?page=streetsTamil&districtCode=" + districtCode + "&talukCode=" + talukCode;
		var HttpRequest = getReq();
		
	    HttpRequest.open("GET", url, true);    
	    HttpRequest.onreadystatechange = function(){
	    	getStreetsLists(HttpRequest);
	    }
	    HttpRequest.send(null);
	}
//new funstion gettin subdiv no. form tamilnilam web service
function getSubdivNo(districtCode,talukCode,villageCode,surveyno) {	
		
	
	if(districtCode!='' && talukCode!='' && villageCode != '' && surveyno!= ''){
	

	var url = "ajax.html?page=getSubdivNo&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode+"&surveyno=" + surveyno;
	//alert("url"+url);

/*	else{
	var wardCode = document.forms[0].wardNo.value;
	var blockCode = document.forms[0].blockCode.value;
	var url = "ajax.html?page=getUrbanSubdivNo&districtCode=" + districtCode + "&talukCode=" + talukCode + 
				"&villageCode="+villageCode+"&wardCode="+wardCode+"&blockCode="+blockCode+"&surveyno="+surveyno;
	}*/
	
	var HttpRequest = getReq();
	
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
        getSubdivLists(HttpRequest);

    };
    HttpRequest.send(null);
	}
}

/*new*/
function getUrbanSubdivNo(districtCode,talukCode,villageCode,wardCode,blockCode,surveyno) {	
		
	
	if(districtCode!='' && talukCode!='' && villageCode != '' && wardCode!= '' && blockCode!='' && surveyno!=''){
	
	
	var wardCode = document.forms[0].wardNo.value;
	var blockCode = document.forms[0].blockCode.value;
	var url = "ajax.html?page=getUrbanSubdivNo&districtCode=" + districtCode + "&talukCode=" + talukCode + 
				"&villageCode="+villageCode+"&wardCode="+wardCode+"&blockCode="+blockCode+"&surveyno="+surveyno;
	
	
	//alert("url"+url);
	
	
	var HttpRequest = getReq();
	
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
        getSubdivLists(HttpRequest);

    };
    HttpRequest.send(null);
	}
}

/**/

function getUrbanTalukSubdivNo(districtCode,talukCode,villageCode,wardCode,blockCode,surveyno) {		
	if(districtCode!='' && talukCode!='' && villageCode != '' && wardCode!= '' && blockCode!='' && surveyno!=''){	
	
	var wardCode = document.forms[0].wardNo.value;
	var blockCode = document.forms[0].blockCode.value;
	var url = "ajax.html?page=getUrbanTalukSubdivNo&districtCode=" + districtCode + "&talukCode=" + talukCode + 
				"&villageCode="+villageCode+"&wardCode="+wardCode+"&blockCode="+blockCode+"&surveyno="+surveyno;
	
	var HttpRequest = getReq();
	
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
        getSubdivLists(HttpRequest);

    };
    HttpRequest.send(null);
	}
}

function getUrbanSurveyNo(districtCode,talukCode,villageCode,wardCode,blockCode) {	
	//var wardCode = document.forms[0].wardNo.value;
	
	if(districtCode!='' && talukCode!='' && villageCode != '' && wardCode!= '' && blockCode!=''){
		var url = "ajax.html?page=getUrbanSurveyNo&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode+"&wardCode=" + wardCode+"&blockCode="+blockCode;
		//alert("url"+url);
		var HttpRequest = getReq();
		
	    HttpRequest.open("GET", url, true);    
	    HttpRequest.onreadystatechange = function(){
	    	getUrbanSurveyNoLists(HttpRequest);

	    };
	    HttpRequest.send(null);
		}	
}


function getUrTalSurveyNo(districtCode,talukCode,villageCode,wardCode,blockCode) {	
	
	//var wardCode = document.forms[0].wardNo.value;
	
	if(districtCode!='' && talukCode!='' && villageCode != '' && wardCode!= '' && blockCode!=''){
		var url = "ajax.html?page=getUrTalSurveyNo&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode+"&wardCode=" + wardCode+"&blockCode="+blockCode;
		//alert("url"+url);
		var HttpRequest = getReq();
		
	    HttpRequest.open("GET", url, true);    
	    HttpRequest.onreadystatechange = function(){
	    	getUrbanSurveyNoLists(HttpRequest);

	    };
	    HttpRequest.send(null);
		}
	
}

function getBlocks(districtCode,talukCode,villageCode,wardNo) {	
	
	if(districtCode!='' && talukCode!='' && villageCode != '' && wardNo!= ''){
	var url = "ajax.html?page=getBlocks&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode+"&wardNo=" + wardNo;
	//alert("url"+url);
	var HttpRequest = getReq();
	
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
    	getBlocksLists(HttpRequest);

    };
    HttpRequest.send(null);
	}
}


function getWard(districtCode,talukCode,villageCode) {	
	
	if(districtCode!='' && talukCode!='' && villageCode != ''){
	var url = "ajax.html?page=getWard&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode;
	//alert("url"+url);
	var HttpRequest = getReq();
	
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
    	getWardLists(HttpRequest);

    };
    HttpRequest.send(null);
	}
}

function getWardTamil(districtCode,talukCode,villageCode) {	
	//alert("districtCode"+districtCode);

	if(districtCode!='' && talukCode!='' && villageCode != ''){
	var url = "ajax.html?page=getWardTamil&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode;
	//alert("url"+url);
	var HttpRequest = getReq();
	
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
    	getWardLists(HttpRequest);

    };
    HttpRequest.send(null);
	}
}


/*function getBlocks(districtCode,talukCode,streetCode,wardNo) {	
	//alert("districtCode"+districtCode);
	//alert("talukCode"+talukCode);
	
	//alert("wardNo"+wardNo);

	//("streetCode"+streetCode);
	if(districtCode!='' && talukCode!='' && streetCode != '' && wardNo!= ''){
	var url = "ajax.html?page=getBlocks&districtCode=" + districtCode + "&talukCode=" + talukCode + "&streetCode="+streetCode+"&wardNo=" + wardNo;
	//alert("url"+url);
	var HttpRequest = getReq();
	
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
    	getBlocksLists(HttpRequest);

    };
    HttpRequest.send(null);
	}
}*/

function getsubdiv(districtCode,talukCode,villageCode,surveyno) {	
	//alert("districtCode"+districtCode);
	//alert("talukCode"+talukCode);
	//alert("villageCode"+villageCode);

	//alert("surveyno"+surveyno);


	var url = "ajax.html?page=surno&districtCode=" + districtCode + "&talukCode=" + talukCode + "&villageCode="+villageCode+"&surveyno=" + surveyno;
	var HttpRequest = getReq();
	
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
        getSurveyLists(HttpRequest);

    }
    HttpRequest.send(null);
}

function getclaCode(claType,claDesc)
{
	//alert("getclaCode=================>"+claType+claDesc);
	var url = "ajax.html?page=getClaCode&claType=" + claType  + "&claDesc=" + claDesc;
	var HttpRequest = getReq();

	 HttpRequest.open("GET", url, true);    
	    HttpRequest.onreadystatechange = function(){
	        getClaCodeLists(HttpRequest);

	    }
	    HttpRequest.send(null);
	
 }
 
function getVillagesTamil(districtCode, talukCode) {	
	
	var url = "ajax.html?page=villageTamil&districtCode=" + districtCode + "&talukCode=" + talukCode;
	
	var HttpRequest = getReq();
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
            getVillageLists(HttpRequest)
    }
    HttpRequest.send(null);
}

function getLandType(districtCode) {	
	//alert("hai");
//	alert("haigetLandType"+districtCode);
	document.getElementById("landtype").style.display="block";
	var url = "ajax.html?page=landType&districtCode=" + districtCode ;
	
	var HttpRequest = getReq();
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
            getLandLists(HttpRequest)
    }
    HttpRequest.send(null);
}
function getLandLists(HttpRequest) {
	var landtype = document.forms[0].typeCd;

		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	        	
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	            
	            if(flag == "false") {   
	            	for(i = landtype.length; i > 0; i--){
	            		landtype.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('landtype');
	            	for(i = landtype.length; i > 0; i--){
	            		landtype.options[i] = null;
					}
					for(i = 0; i < list.length; i++){	
						
						var typeCode = list[i].getElementsByTagName('typecode')[0].firstChild.nodeValue;
						
						var typeEcate = list[i].getElementsByTagName('typeecate')[0].firstChild.nodeValue;
						landtype.options[i+1] = new Option(typeEcate, typeCode);
						
					}	            	
	            }
	        }
	    }
	}

function getencrLists(HttpRequest,val) {
	
	var encr = document.getElementById("mydropdown")+val;
	//alert("id ====="+encr);

		if(HttpRequest.readyState == 4){
			
	        if(HttpRequest.status == 200){
	        	
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];       
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;                        
	            if(flag == "false") {   
	            	for(i = encr.length; i > 0; i--){
	            		encr.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('encrtype');
	            	for(i = encr.length; i > 0; i--){
	            		encr.options[i] = null;
					}
					for(i = 0; i < list.length; i++){	
						
						var encrCode = list[i].getElementsByTagName('encrcode')[0].firstChild.nodeValue;
						
						var encrName = list[i].getElementsByTagName('encrname')[0].firstChild.nodeValue;
						//alert(encrName)
						encr.options[i+1] = new Option(encrName, encrCode);
					}	            	
	            }
	        }
	    }
	}

function getVillageLists(HttpRequest) {
	
	
var village = document.forms[0].villageCode;

	if(HttpRequest.readyState == 4){
        if(HttpRequest.status == 200){
        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
        	
            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
            
            if(flag == "false") {   
            	for(i = village.length; i > 0; i--){
					village.options[i] = null;
				}          
            }
            else {            	
            	var list = root.getElementsByTagName('village');
            	for(i = village.length; i > 0; i--){
					village.options[i] = null;
				}
            	village.options.length=1; 
				for(i = 0; i < list.length; i++){	
					
					var villageCode = list[i].getElementsByTagName('villagecode')[0].firstChild.nodeValue;
					
					var villageName = list[i].getElementsByTagName('villagename')[0].firstChild.nodeValue;
				//	village.options[village.options.length] = new Option(trim(name), id);		
					
					village.options[i+1] = new Option(villageName, villageCode);
					
				}	            	
            }
        }
    }
	
}

function getUrbanVillageListsNew(HttpRequest) {
		
	var town = document.forms[0].villageCode;
	
		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	        	//alert(root);
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	            
	            if(flag == "false") {   
	            	for(i = town.length; i > 0; i--){
	            		town.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('town');
	            	for(i = town.length; i > 0; i--){
	            		town.options[i] = null;
					}
	            	town.options.length=1; 
					for(i = 0; i < list.length; i++){	
						
						var townCode = list[i].getElementsByTagName('townCode')[0].firstChild.nodeValue;
						
						var townName = list[i].getElementsByTagName('townName')[0].firstChild.nodeValue;
						//town.options[town.options.length] = new Option(trim(townname), id);		
						
						
						town.options[i+1] = new Option(townName,townCode);
						
						
					}	            	
	            }
	        }
	    }
		
	}

function getVillageListsfromStreet(HttpRequest) {
	
	var village = document.forms[0].villageCode;
	

		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	        	
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	            
	            if(flag == "false") {   
	            	for(i = village.length; i > 0; i--){
						village.options[i] = null;
					}          
	            }
	            else {            	
	            	var villageCode = root.getElementsByTagName('villagecode')[0].firstChild.nodeValue;
	            
	            	
	            		
							document.forms[0].villageCode.value = villageCode;
						
	            						
	            }
	        }
	    }
		//alert("in " + document.forms[0].villageCode.value);
	}


function getStreetsLists(HttpRequest) {
	
	var street = document.forms[0].streetCode;
	//alert("village"+village);
	//alert("state"+HttpRequest.readyState);
	//alert("status"+HttpRequest.status);
		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	        	
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	         //  alert(flag);
	            if(flag == "false") {   
	            	for(i = street.length; i > 0; i--){
	            		street.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('street');
	            	//alert( list.length);
	            	for(i = street.length; i > 0; i--){
	            		street.options[i] = null;
					}
	            	street.options.length=1; 
					for(i = 0; i < list.length; i++){	
						
						var streetCode = list[i].getElementsByTagName('streetcode')[0].firstChild.nodeValue;
						
						var streetName = list[i].getElementsByTagName('streetname')[0].firstChild.nodeValue;
					//	village.options[village.options.length] = new Option(trim(name), id);		
						
						street.options[i+1] = new Option(streetName, streetCode);
						//alert("streetName"+streetName);
						
					}	            	
	            }
	        }
	    }
		
	}

function getClaCodeLists(HttpRequest) {
	var claCode = document.forms[0].claCode;
	//alert("getClaCodeLists=====>"+claCode);

		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	        	
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	            
	            if(flag == "false") {   
	            	//alert("false");
	            	for(i = claCode.length; i > 0; i--){
	            		claCode.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('clacode');
	            //	alert("list"+list.value);
	            	for(i = claCode.length; i > 0; i--){
	            		claCode.options[i] = null;
					}
					for(i = 0; i < list.length; i++){	
						var ClaType = list[i].getElementsByTagName('claCode')[0].firstChild.nodeValue;
					//	alert("ClaType====>"+ClaType);

						var ClaDesc = list[i].getElementsByTagName('claCodeName')[0].firstChild.nodeValue;
					//	alert("ClaDesc====>"+ClaDesc);
						claCode.options[i+1] = new Option(ClaDesc,ClaType);
						
					}	            	
	            }
	        }
	    }
		
	}
function getSurveyLists(HttpRequest) {
	var subdivision = document.forms[0].subdivision;
	//alert("subdivision=====>"+subdivision);

		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	        	
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	            
	            if(flag == "false") {   
	            	for(i = subdivision.length; i > 0; i--){
	            		subdivision.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('subdiv');
	            	for(i = subdivision.length; i > 0; i--){
	            		subdivision.options[i] = null;
					}
					for(i = 0; i < list.length; i++){	
						
						var villageCode = list[i].getElementsByTagName('subdivcode')[0].firstChild.nodeValue;
						
						var villageName = list[i].getElementsByTagName('subdivcode')[0].firstChild.nodeValue;
						subdivision.options[i+1] = new Option(villageName, villageCode);
						
					}	            	
	            }
	        }
	    }
		
	}

function getSubdivLists(HttpRequest) {
	var subdivision = document.forms[0].subdivNo;
	//alert("subdivision=====>"+subdivision);

		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	                  	
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	        	
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	            
	            if(flag == "false") {   
	            	for(i = subdivision.length; i > 0; i--){
	            		subdivision.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('subdiv');
	            	for(i = subdivision.length; i > 0; i--){
	            		subdivision.options[i] = null;
					}
					for(i = 0; i < list.length; i++){	
						
						var villageCode = list[i].getElementsByTagName('subdivcode')[0].firstChild.nodeValue;
						
						var villageName = list[i].getElementsByTagName('subdivcode')[0].firstChild.nodeValue;
						subdivision.options[i+1] = new Option(villageName, villageCode);
						
					}	            	
	            }          	
	            
	        }
	    }
		
	}


function getUrbanSurveyNoLists(HttpRequest) {
	var subdivision = document.forms[0].surveyNo;
	

	if(HttpRequest.readyState == 4){
        if(HttpRequest.status == 200){
                  	
        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
        	
            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
          //  alert(flag);
            if(flag == "false") {   
            	for(i = subdivision.length; i > 0; i--){
            		subdivision.options[i] = null;
				}          
            }
            else {            	
            	var list = root.getElementsByTagName('survey');
            //	alert(list.length);
            	
				for(i = 0; i < list.length; i++){	
					
					var blockCode = list[i].getElementsByTagName('surveyNo')[0].firstChild.nodeValue;
					
					var blockName = list[i].getElementsByTagName('surveyNo')[0].firstChild.nodeValue;
					subdivision.options[i+1] = new Option(blockCode, blockName);
					
				}	            	
            }          	
            
        }
    }
		
	}


function getBlocksLists(HttpRequest) {
	var subdivision = document.forms[0].blockCode;
	//alert("subdivision=====>"+subdivision);

		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	                  	
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	        	
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	            
	            if(flag == "false") {   
	            	for(i = subdivision.length; i > 0; i--){
	            		subdivision.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('block');
	            	for(i = subdivision.length; i > 0; i--){
	            		subdivision.options[i] = null;
					}
					for(i = 0; i < list.length; i++){	
						
						var blockCode = list[i].getElementsByTagName('blockCode')[0].firstChild.nodeValue;
						
						var blockName = list[i].getElementsByTagName('blockCode')[0].firstChild.nodeValue;
						subdivision.options[i+1] = new Option(blockCode, blockName);
						
					}	            	
	            }          	
	            
	        }
	    }
		
	}



function getWardLists(HttpRequest) {
	var ward = document.forms[0].wardNo;
	//alert("ward=====>"+ward);

		if(HttpRequest.readyState == 4){
	        if(HttpRequest.status == 200){
	                  	
	        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];   
	        	
	            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;  
	            
	            if(flag == "false") {   
	            	for(i = ward.length; i > 0; i--){
	            		ward.options[i] = null;
					}          
	            }
	            else {            	
	            	var list = root.getElementsByTagName('ward');
	            	for(i = ward.length; i > 0; i--){
	            		ward.options[i] = null;
					}
					for(i = 0; i < list.length; i++){	
						
						var wardCode = list[i].getElementsByTagName('wardCode')[0].firstChild.nodeValue;
						
						var wardName = list[i].getElementsByTagName('wardName')[0].firstChild.nodeValue;
						ward.options[i+1] = new Option(wardName, wardCode);
						
					}	            	
	            }          	
	            
	        }
	    }
		
	}

function getActions(stage, letter) {	
	var url = "ajax.html?page=actionTaken&letter=" + letter;
	var HttpRequest = getReq();
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
            getActionTakenLists(HttpRequest, stage)
    }
    HttpRequest.send(null);
}
function getActionTakenLists(HttpRequest, stage) {
	var action = document.forms[0].actionTaken;
	if(HttpRequest.readyState == 4){
        if(HttpRequest.status == 200){
        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];       
            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;                        
            if(flag == "false") {   
            	for(i = action.length; i > 0; i--){
					action.options[i] = null;
				}          
            }
            else {            	
            	var list = root.getElementsByTagName('action');
            	for(i = action.length; i > 0; i--){
					action.options[i] = null;
				}				
				var j = 0;				
				if(stage == 'new' || stage == 'pending') {
					for(i = 0; i < list.length; i++){				
						var actionCode = list[i].getElementsByTagName('actioncode')[0].firstChild.nodeValue;
						var actionDesc = list[i].getElementsByTagName('actiondesc')[0].firstChild.nodeValue;
						if(actionDesc.indexOf('Forward') != -1 || actionDesc.indexOf('Reject') != -1) {		
							action.options[j+1] = new Option(actionDesc, actionCode);
							j++;
						}
						
					}
				} else {
					for(i = 0; i < list.length; i++){				
						var actionCode = list[i].getElementsByTagName('actioncode')[0].firstChild.nodeValue;
						var actionDesc = list[i].getElementsByTagName('actiondesc')[0].firstChild.nodeValue;
						action.options[i+1] = new Option(actionDesc, actionCode);
					}
				}	            	
            }
        }
    }
}

function getActionsNew(letter) {	
	var url = "ajax.html?page=actionTaken&letter=" + letter;
	var HttpRequest = getReq();
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
            getActionTakenListsNew(HttpRequest)
    }
    HttpRequest.send(null);
}

function getActionTakenListsNew(HttpRequest) {
	var action = document.forms[0].actionCode;
	if(HttpRequest.readyState == 4){
        if(HttpRequest.status == 200){
        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];       
            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;                        
            if(flag == "false") {   
            	for(i = action.length; i > 0; i--){
					action.options[i] = null;
				}          
            }
            else {            	
            	var list = root.getElementsByTagName('action');
            	for(i = action.length; i > 0; i--){
					action.options[i] = null;
				}				
				var j = 0;
				for(i = 0; i < list.length; i++){				
					var actionCode = list[i].getElementsByTagName('actioncode')[0].firstChild.nodeValue;
					var actionDesc = list[i].getElementsByTagName('actiondesc')[0].firstChild.nodeValue;
					action.options[i+1] = new Option(actionDesc, actionCode);
				}           	
            }
        }
    }
}


function getGrievanceSubType(grievanceMajorCode) {	
	var url = "ajax.html?page=grievance&grievMajCode=" + grievanceMajorCode;
	var HttpRequest = getReq();
    HttpRequest.open("GET", url, true);    
    HttpRequest.onreadystatechange = function(){
            getGrievanceSubLists(HttpRequest)
    }
    HttpRequest.send(null);
}
function getGrievanceSubLists(HttpRequest) {
var grievMin = document.forms[0].grievMinCode;
	if(HttpRequest.readyState == 4){
        if(HttpRequest.status == 200){
        	var root = HttpRequest.responseXML.getElementsByTagName('root')[0];  
            var flag = root.getElementsByTagName('flag')[0].firstChild.nodeValue;                        
            if(flag == "false") {   
            	for(i = grievMin.length; i > 0; i--){
					grievMin.options[i] = null;
				}          
            }
            else {            	
            	var list = root.getElementsByTagName('grievSub');
            	for(i = grievMin.length; i > 0; i--){
					grievMin.options[i] = null;
				}
				for(i = 0; i < list.length; i++){				
					var Code = list[i].getElementsByTagName('code')[0].firstChild.nodeValue;
					var Name = list[i].getElementsByTagName('name')[0].firstChild.nodeValue;
					grievMin.options[i+1] = new Option(Name, Code);
				}	            	
            }
        }
    }
}


function getCount() {
	
	var url = "ajax.html?page=getCount";
	//alert(url);
	var HttpRequest = getReq();
	//alert("HttpRequest"+HttpRequest);
     
    HttpRequest.onreadystatechange = function(){
            getCountReply(HttpRequest);
    }
    HttpRequest.open("GET", url, true); 
    HttpRequest.send(null);
}


function getVisitedCount() {
	
	var url = "ajax.html?page=getVisitedCount";
	//alert(url);
	var HttpRequest = getReq();
	//alert("HttpRequest"+HttpRequest);
     
    HttpRequest.onreadystatechange = function(){
            getCountReply(HttpRequest);
    }
    HttpRequest.open("GET", url, true); 
    HttpRequest.send(null);
}


function getCountReply(HttpRequest) {
	if(HttpRequest.readyState == 4){
        if(HttpRequest.status == 200){
        	document.getElementById('count').innerHTML = HttpRequest.responseText;
        }
    }
	
}


function noBack() {
window.history.forward();
}
function setCookie() {	
	var name = "page";
	var value = "talukAdmin";
	var days = 0;
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";	
	window.location="logout.html";
}
function readCookie() {	
	var values;
	var nameEQ = "page=";
	var ca = document.cookie.split(';');	
	for(var i=0;i < ca.length;i++) {	
		var c = ca[i];	
		while (c.charAt(0)==' ') 
			c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) 
	    	values = c.substring(nameEQ.length,c.length);    
		if(values == "talukAdmin")   {
			window.location="../logout.html";
		}
	}	
}
function removeCookie() {	

	var name = "page";
	var value = "";
	var days = 0;
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
	window.location="mainMenu.html";
}


function closeWindow()
{
	self.close();
	opener.document.forms[0].mode.value="unspecified";
	opener.document.forms[0].submit();
}
function closeCurrentWindow()
{
  self.close();
}
function refreshParent()
{
  	self.close();
  	window.opener.location.reload();
}
function intOnly(i) 
{
	if(i.value.length>0) 
	{ 
		i.value = i.value.replace(/[^\d]+/g, ''); 
	}
}

function disableControl(control1,control2)
{
	var control1Value=document.getElementById(control1).value;
	if (isNaN(control1Value))
	{
		alert("Enter numerics only");
		document.getElementById(control1).value="";
	}
	else
	{
	if (control1Value!="")
		document.getElementById(control2).disabled=true;
	else
		document.getElementById(control2).disabled=false;
	}
}

			
function LTrim( value ) {
var re = /\s*((\S+\s*)*)/;
return value.replace(re, "$1");
}

// Removes ending whitespaces
function RTrim( value ) {
	var re = /((\s*\S+)*)\s*/;
	return value.replace(re, "$1");
}

// Removes leading and ending whitespaces
function trim( value ) {
	return LTrim(RTrim(value));
}

function OpenWindow(url)
{

    closePopup("popup1");
	var features="width=800,height=600,menubar=no,status=no,location=no,toolbar=no,scrollbars=yes ,top=10,left=50";
	popup1 =window.open(url,"_blank",features);
}

function closePopup(popupHandle){
	if (window[popupHandle] && !window[popupHandle].closed){
	window[popupHandle].close();
	}
}

function PrintThisPage()
{
	var sOption="toolbar=yes,location=no,directories=yes,menubar=yes,";
	sOption+="scrollbars=yes,left=100,top=25";
	var sWinHTML = document.getElementById('PrintContent').innerHTML;	
	var sHeadingHTML = '';
	if(document.getElementById('headingContent')!=null)
	{
		sHeadingHTML = document.getElementById('headingContent').innerHTML;
	}
	var winprint=window.open("","",sOption);
	winprint.document.open();
	winprint.document.write('<html><LINK href=/apportal/appstyles.css rel=Stylesheet><body>');
	winprint.document.write('<table align=center>');
	if(sHeadingHTML!='')
	{
		winprint.document.write('<tr><td>' + sHeadingHTML + '</td></tr>');
	}
	winprint.document.write('<tr><td>' + sWinHTML + '</td></tr>');
	winprint.document.write('</table>');
	winprint.document.write('</body></html>');				
	winprint.document.close();
	winprint.focus();
	winprint.print();
	winprint.close();
}
function letternumber(e)
{
		var key;
		var keychar;

		if (window.event)
   			key = window.event.keyCode;
		else if (e)
   			key = e.which;
		else
   			return true;

		keychar = String.fromCharCode(key);
		keychar = keychar.toLowerCase();

// control keys
		if ((key==0) || (key==8) || (key==9) || (key==13) || (key==27) || (key==127))
   			return true;

// alphas and numbers
		else if ((("0123456789.").indexOf(keychar) > -1))
   			return true;
		else
   			return false;
}
function lettercapsalphanumber(e)
{
		var key;
		var keychar;

		if (window.event)
   			key = window.event.keyCode;
		else if (e)
   			key = e.which;
		else
   			return true;

		keychar = String.fromCharCode(key);
		//keychar = keychar.toLowerCase();
		//t.value=t.value.toUpperCase();
// control keys
		if ((key==0) || (key==8) || (key==9) || (key==13) || (key==27) || (key==127))
   			return true;

// alphas and numbers
		else if ((("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ").indexOf(keychar) > -1))
   			return true;
		else
   			return false;
}
function letternumberWithOutDot(e)
{
		var key;
		var keychar;

		if (window.event)
   			key = window.event.keyCode;
		else if (e)
   			key = e.which;
		else
   			return true;

		keychar = String.fromCharCode(key);
		keychar = keychar.toLowerCase();

// control keys
		if ((key==0) || (key==8) || (key==9) || (key==13) || (key==27) || (key==127))
   			return true;

// alphas and numbers
		else if ((("0123456789").indexOf(keychar) > -1))
   			return true;
		else
   			return false;
}
function lettercharacter(e)
{
		var key;
		var keychar;

		if (window.event)
   			key = window.event.keyCode;
		else if (e)
   			key = e.which;
		else
   			return false;

		keychar = String.fromCharCode(key);
		keychar = keychar.toLowerCase();

	// control keys
		if ((key==0) || (key==8) || (key==9) || (key==13) || (key==27) || (key==127) || (key==32))
   			return true;

	// alphas and numbers
		else if ((("0123456789.").indexOf(keychar) > -1))
   			return false;
		 else
   			 return true;
}	
function scriptCharacters(e)
{
		var key;
		var keychar;

		if (window.event)
   			key = window.event.keyCode;
		else if (e)
   			key = e.which;
		else
   			return false;

		keychar = String.fromCharCode(key);
		keychar = keychar.toLowerCase();

	// control keys
		if ((key==0) || (key==8) || (key==9) || (key==13) || (key==27) || (key==127))
   			return true;

	// alphas and numbers
		else if ((("<>").indexOf(keychar) > -1))
   			return true;
		 else
   			 return false;
}	

function DecimalValCheck(data)
{
    var sFullNumber = data;
    var IsDotPres=0;
    var Char;
    for (var i = 0; i < sFullNumber.length; i++) 
    { 
        Char = sFullNumber.charAt(i); 
        if(Char == '.' ) 
        {
        	IsDotPres++;
        }
    }
    if(IsDotPres=="0")
    	return false;
    else 
    	return true;
  }

function DecimalValCheckForMax(data)
{
    var sFullNumber = data.value;
    var IsDotPres=0;
    var Char;
    for (var i = 0; i < sFullNumber.length; i++) 
    { 
        Char = sFullNumber.charAt(i); 
        if(Char == '.' ) 
        {
        	IsDotPres++;
        }
    }
    if(IsDotPres>0)
    {
    	alert("The Decimal value "+data.value+" is not allowed");
    	data.value=parseInt(data.value);
    	data.focus();
    	return false;
    }else 
    	return false;
  }
var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
function checkmail(e)
{
	if (trim(e.value)=='')
	{
		return false;
	}
	else
	{
		var returnval=emailfilter.test(e.value);
		if (returnval==false){
		alert("Please enter a valid email address.");
		e.value="";
		e.select();
		}
		return returnval;
	}
}	function stringTrim(ctrl)
	{
		ctrl.value = ctrl.value.replace(/^\s+|\s+$/g, "");
	}
	
	function isNumberKey(evt)
	{
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57))
			return false;
		return true;
	}
	function isAlpha(evt)
	{
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if(charCode >= 65 && charCode <= 90) return true;
		if(charCode == 32) return true;
		if(charCode >= 97 && charCode <= 122) return true;
		if(charCode==8 || charCode==9) return true;
		//alert(charCode);
		return false;
	}
	function isUserAlpha(evt)
	{
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if(charCode >= 65 && charCode <= 90) return true;
		if(charCode == 32 || charCode==192) return true;
		if(charCode >= 97 && charCode <= 122) return true;
		if(charCode==8 || charCode==9) return true;
		//alert(charCode);
		return false;
	}
	function isDecimalKey(e) 
	{
		var key;
		var keychar;
		
		if (window.event) {
		   key = window.event.keyCode;
		}
		else if (e) {
		   key = e.which;
		}
		else {
		   return true;
		}
		keychar = String.fromCharCode(key);
		
		if ((key==null) || (key==0) || (key==8) ||  (key==9) || (key==13) || (key==27) ) {
		   return true;
		}
		else if ((("0123456789.").indexOf(keychar) > -1)) {
		   return true;
		}
		else
		   return false;
	}
	function isHouseNumberKey(e) 
	{
		var key;
		var keychar;
		
		if (window.event) {
		   key = window.event.keyCode;
		}
		else if (e) {
		   key = e.which;
		}
		else {
		   return true;
		}
		keychar = String.fromCharCode(key);
		
		if ((key==null) || (key==0) || (key==8) ||  (key==9) || (key==13) || (key==27) ) {
		   return true;
		}
		else if ((("0123456789/-,").indexOf(keychar) > -1)) {
		   return true;
		}
		else
		   return false;
	}
	function isUserKey(e) 
	{
		var key;
		var keychar;
		
		if (window.event) {
		   key = window.event.keyCode;
		}
		else if (e) {
		   key = e.which;
		}
		else {
		   return true;
		}
		keychar = String.fromCharCode(key);
		
		if ((key==null) || (key==0) || (key==8) ||  (key==9) || (key==13) || (key==27) || (key==32)) {
		   return true;
		}
		else if ((("0123456789/-_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,").indexOf(keychar) > -1)) {
		   return true;
		}
		else
		   return false;
	}
	function isUserKey1(e) 
	{
		var key;
		var keychar;
		
		if (window.event) {
		   key = window.event.keyCode;
		}
		else if (e) {
		   key = e.which;
		}
		else {
		   return true;
		}
		keychar = String.fromCharCode(key);
		
		if ((key==null) || (key==0) || (key==8) ||  (key==9) || (key==13) || (key==27) || (key==32)) {
		   return true;
		}
		else if ((("0123456789/-_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,()").indexOf(keychar) > -1)) {
		   return true;
		}
		else
		   return false;
	}
	
	function convertToUpper(ctrl)
	{
		ctrl.value = ctrl.value.toUpperCase();
	}

	function convertToLower(ctrl)
	{
		ctrl.value = ctrl.value.toLowerCase();
	}

//*********operations on a select box ************

	// adding a new option
	function addOptionToSelectBox(selectbox,text,value )
	{
		var optn = document.createElement("OPTION");
		optn.text = text;
		optn.value = value;
		selectbox.options.add(optn);
	}
	
	// emptying a select box
	function emptySelectBox(selectbox)
	{
		selectbox.options.length = 0;
	}
	
	// this function sorts all the list items
    function sortlist(selectbox) {
		var lb = selectbox;
		arrTexts = new Array();
		
		for(i=1; i<lb.length; i=i+1)  {
		  arrTexts[i] = lb.options[i].text;
		}
		
		arrTexts.sort();
		
		for(i=1; i<lb.length; i=i+1)  {
		  lb.options[i].text = arrTexts[i];
		  lb.options[i].value = arrTexts[i];
		}
	}
	
	/************************************************/
	
	        // sort function - ascending (case-insensitive)
        function sortFuncAsc(record1, record2) {
            var value1 = record1.optText.toLowerCase();
            var value2 = record2.optText.toLowerCase();
            if (value1 > value2) return(1);
            if (value1 < value2) return(-1);
            return(0);
        }

        // sort function - descending (case-insensitive)
        function sortFuncDesc(record1, record2) {
            var value1 = record1.optText.toLowerCase();
            var value2 = record2.optText.toLowerCase();
            if (value1 > value2) return(-1);
            if (value1 < value2) return(1);
            return(0);
        }

        function sortSelect(selectToSort, ascendingOrder) {
            if (arguments.length == 1) ascendingOrder = true;    // default to ascending sort

            // copy options into an array
            var myOptions = [];
            for (var loop=0; loop<selectToSort.options.length; loop++) {
                myOptions[loop] = { optText:selectToSort.options[loop].text, optValue:selectToSort.options[loop].value };
            }

            // sort array
            if (ascendingOrder) {
                myOptions.sort(sortFuncAsc);
            } else {
                myOptions.sort(sortFuncDesc);
            }

            // copy sorted options from array back to select box
            selectToSort.options.length = 0;
            for (var loop=0; loop<myOptions.length; loop++) {
                var optObj = document.createElement('option');
                optObj.text = myOptions[loop].optText;
                optObj.value = myOptions[loop].optValue;
                selectToSort.options.add(optObj);
            }
        }
	
	/*************************************************/
	
	// returns select boxs selected index
	function getSelectBoxText(ctrl)
	{
		return ctrl.options[ctrl.selectedIndex].text;
	}
//*********End of operations on a select box ************

	function getSelectedValueRadioButton(ctrl)
	{
		for(var i=0;i<ctrl.length;i=i+1)
		{
			if(ctrl[i].checked==true)
			{
				return ctrl[i].value;
			}
		}
		return "#";
	}

	function getCheckBoxStatus(ctrl)
	{
		if(ctrl.checked==true) { return 'Y'; } else { return 'N'; }
	}

	function checkSameOrNot(ctrl1,ctrl2)
	{
		if(ctrl1.value==ctrl2.value)
		{
			return true;
		}
		return false;
	}
	
	// detecting the browser
	
	function detectBrowser()
	{
	var browser=navigator.appName;
	var b_version=navigator.appVersion;
	var version=parseFloat(b_version);
	if ((browser=="Microsoft Internet Explorer") && (version>=4))
	{
		//alert("Your browser is good enough!");
	}
	else
	{
		alert("This application is only compatilbe with 'Internet Explorer' and your browser is " + browser);
		window.location="notCompatible.appsc";
	}
	}
	

	
	
	/*** e-Mail validation	 ***/
	function echeck(str) 
	{
		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   return false
		}
		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   return false
		}
		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    return false
		}
		 if (str.indexOf(at,(lat+1))!=-1){
		    return false
		 }
		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    return false
		 }
		 if (str.indexOf(dot,(lat+2))==-1){
		    return false
		 }
		 if (str.indexOf(" ")!=-1){
		    return false
		 }
		 if (str.indexOf("..")!=-1){
		    return false
		 }

 		 return true					
	}
	
	
	String.prototype.trim = String.prototype.trim || function () {return this.replace(/^\s+|\s+$/g, "");};String.prototype.ltrim = String.prototype.ltrim ||function(){return this.replace(/^\s+/, "");};String.prototype.rtrim = String.prototype.rtrim || function(){return this.replace(/\s+$/, "");};
String.prototype.fulltrim = String.prototype.fulltrim || function () {return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ");};String.prototype.startsWith = String.prototype.startsWith || function(str) {return this.indexOf(str)===0;};




/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.0 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Ydnar
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }

/* Backwards compatibility - same as hex_md5() */
function calcMD5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}

/* 
 * Perform a simple self-test to see if the VM is working 
 */
function md5_vm_test()
{
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;
  
  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
 
    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);
  
}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function core_hmac_md5(key, data)
{
  var bkey = str2binl(key);
  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++) 
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function binl2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}

! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.Promise = t()
    }
}(function() {
    return function t(e, n, r) {
        function i(s, a) {
            if (!n[s]) {
                if (!e[s]) {
                    var c = "function" == typeof _dereq_ && _dereq_;
                    if (!a && c) return c(s, !0);
                    if (o) return o(s, !0);
                    var l = new Error("Cannot find module '" + s + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var u = n[s] = {
                    exports: {}
                };
                e[s][0].call(u.exports, function(t) {
                    var n = e[s][1][t];
                    return i(n ? n : t)
                }, u, u.exports, t, e, n, r)
            }
            return n[s].exports
        }
        for (var o = "function" == typeof _dereq_ && _dereq_, s = 0; s < r.length; s++) i(r[s]);
        return i
    }({
        1: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                function e(t) {
                    var e = new n(t),
                        r = e.promise();
                    return e.setHowMany(1), e.setUnwrap(), e.init(), r
                }
                var n = t._SomePromiseArray;
                t.any = function(t) {
                    return e(t)
                }, t.prototype.any = function() {
                    return e(this)
                }
            }
        }, {}],
        2: [function(t, e, n) {
            "use strict";

            function r() {
                this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new l(16), this._normalQueue = new l(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;
                var t = this;
                this.drainQueues = function() {
                    t._drainQueues()
                }, this._schedule = c
            }

            function i(t, e, n) {
                this._lateQueue.push(t, e, n), this._queueTick()
            }

            function o(t, e, n) {
                this._normalQueue.push(t, e, n), this._queueTick()
            }

            function s(t) {
                this._normalQueue._pushOne(t), this._queueTick()
            }
            var a;
            try {
                throw new Error
            } catch (t) {
                a = t
            }
            var c = t("./schedule"),
                l = t("./queue"),
                u = t("./util");
            r.prototype.setScheduler = function(t) {
                var e = this._schedule;
                return this._schedule = t, this._customScheduler = !0, e
            }, r.prototype.hasCustomScheduler = function() {
                return this._customScheduler
            }, r.prototype.enableTrampoline = function() {
                this._trampolineEnabled = !0
            }, r.prototype.disableTrampolineIfNecessary = function() {
                u.hasDevTools && (this._trampolineEnabled = !1)
            }, r.prototype.haveItemsQueued = function() {
                return this._isTickUsed || this._haveDrainedQueues
            }, r.prototype.fatalError = function(t, e) {
                e ? (process.stderr.write("Fatal " + (t instanceof Error ? t.stack : t) + "\n"), process.exit(2)) : this.throwLater(t)
            }, r.prototype.throwLater = function(t, e) {
                if (1 === arguments.length && (e = t, t = function() {
                        throw e
                    }), "undefined" != typeof setTimeout) setTimeout(function() {
                    t(e)
                }, 0);
                else try {
                    this._schedule(function() {
                        t(e)
                    })
                } catch (t) {
                    throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
                }
            }, u.hasDevTools ? (r.prototype.invokeLater = function(t, e, n) {
                this._trampolineEnabled ? i.call(this, t, e, n) : this._schedule(function() {
                    setTimeout(function() {
                        t.call(e, n)
                    }, 100)
                })
            }, r.prototype.invoke = function(t, e, n) {
                this._trampolineEnabled ? o.call(this, t, e, n) : this._schedule(function() {
                    t.call(e, n)
                })
            }, r.prototype.settlePromises = function(t) {
                this._trampolineEnabled ? s.call(this, t) : this._schedule(function() {
                    t._settlePromises()
                })
            }) : (r.prototype.invokeLater = i, r.prototype.invoke = o, r.prototype.settlePromises = s), r.prototype._drainQueue = function(t) {
                for (; t.length() > 0;) {
                    var e = t.shift();
                    if ("function" == typeof e) {
                        var n = t.shift(),
                            r = t.shift();
                        e.call(n, r)
                    } else e._settlePromises()
                }
            }, r.prototype._drainQueues = function() {
                this._drainQueue(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, this._drainQueue(this._lateQueue)
            }, r.prototype._queueTick = function() {
                this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues))
            }, r.prototype._reset = function() {
                this._isTickUsed = !1
            }, e.exports = r, e.exports.firstLineError = a
        }, {
            "./queue": 26,
            "./schedule": 29,
            "./util": 36
        }],
        3: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e, n, r) {
                var i = !1,
                    o = function(t, e) {
                        this._reject(e)
                    },
                    s = function(t, e) {
                        e.promiseRejectionQueued = !0, e.bindingPromise._then(o, o, null, this, t)
                    },
                    a = function(t, e) {
                        0 === (50397184 & this._bitField) && this._resolveCallback(e.target)
                    },
                    c = function(t, e) {
                        e.promiseRejectionQueued || this._reject(t)
                    };
                t.prototype.bind = function(o) {
                    i || (i = !0, t.prototype._propagateFrom = r.propagateFromFunction(), t.prototype._boundValue = r.boundValueFunction());
                    var l = n(o),
                        u = new t(e);
                    u._propagateFrom(this, 1);
                    var p = this._target();
                    if (u._setBoundTo(l), l instanceof t) {
                        var h = {
                            promiseRejectionQueued: !1,
                            promise: u,
                            target: p,
                            bindingPromise: l
                        };
                        p._then(e, s, void 0, u, h), l._then(a, c, void 0, u, h), u._setOnCancel(l)
                    } else u._resolveCallback(p);
                    return u
                }, t.prototype._setBoundTo = function(t) {
                    void 0 !== t ? (this._bitField = 2097152 | this._bitField, this._boundTo = t) : this._bitField = -2097153 & this._bitField
                }, t.prototype._isBound = function() {
                    return 2097152 === (2097152 & this._bitField)
                }, t.bind = function(e, n) {
                    return t.resolve(n).bind(e)
                }
            }
        }, {}],
        4: [function(t, e, n) {
            "use strict";

            function r() {
                try {
                    Promise === o && (Promise = i)
                } catch (t) {}
                return o
            }
            var i;
            "undefined" != typeof Promise && (i = Promise);
            var o = t("./promise")();
            o.noConflict = r, e.exports = o
        }, {
            "./promise": 22
        }],
        5: [function(t, e, n) {
            "use strict";
            var r = Object.create;
            if (r) {
                var i = r(null),
                    o = r(null);
                i[" size"] = o[" size"] = 0
            }
            e.exports = function(e) {
                function n(t, n) {
                    var r;
                    if (null != t && (r = t[n]), "function" != typeof r) {
                        var i = "Object " + a.classString(t) + " has no method '" + a.toString(n) + "'";
                        throw new e.TypeError(i)
                    }
                    return r
                }

                function r(t) {
                    var e = this.pop(),
                        r = n(t, e);
                    return r.apply(t, this)
                }

                function i(t) {
                    return t[this]
                }

                function o(t) {
                    var e = +this;
                    return 0 > e && (e = Math.max(0, e + t.length)), t[e]
                }
                var s, a = t("./util"),
                    c = a.canEvaluate;
                a.isIdentifier, e.prototype.call = function(t) {
                    var e = [].slice.call(arguments, 1);
                    return e.push(t), this._then(r, void 0, void 0, e, void 0)
                }, e.prototype.get = function(t) {
                    var e, n = "number" == typeof t;
                    if (n) e = o;
                    else if (c) {
                        var r = s(t);
                        e = null !== r ? r : i
                    } else e = i;
                    return this._then(e, void 0, void 0, t, void 0)
                }
            }
        }, {
            "./util": 36
        }],
        6: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i) {
                var o = t("./util"),
                    s = o.tryCatch,
                    a = o.errorObj,
                    c = e._async;
                e.prototype.break = e.prototype.cancel = function() {
                    if (!i.cancellation()) return this._warn("cancellation is disabled");
                    for (var t = this, e = t; t._isCancellable();) {
                        if (!t._cancelBy(e)) {
                            e._isFollowing() ? e._followee().cancel() : e._cancelBranched();
                            break
                        }
                        var n = t._cancellationParent;
                        if (null == n || !n._isCancellable()) {
                            t._isFollowing() ? t._followee().cancel() : t._cancelBranched();
                            break
                        }
                        t._isFollowing() && t._followee().cancel(), t._setWillBeCancelled(), e = t, t = n
                    }
                }, e.prototype._branchHasCancelled = function() {
                    this._branchesRemainingToCancel--
                }, e.prototype._enoughBranchesHaveCancelled = function() {
                    return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0
                }, e.prototype._cancelBy = function(t) {
                    return t === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0) : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), !0))
                }, e.prototype._cancelBranched = function() {
                    this._enoughBranchesHaveCancelled() && this._cancel()
                }, e.prototype._cancel = function() {
                    this._isCancellable() && (this._setCancelled(), c.invoke(this._cancelPromises, this, void 0))
                }, e.prototype._cancelPromises = function() {
                    this._length() > 0 && this._settlePromises()
                }, e.prototype._unsetOnCancel = function() {
                    this._onCancelField = void 0
                }, e.prototype._isCancellable = function() {
                    return this.isPending() && !this._isCancelled()
                }, e.prototype.isCancellable = function() {
                    return this.isPending() && !this.isCancelled()
                }, e.prototype._doInvokeOnCancel = function(t, e) {
                    if (o.isArray(t))
                        for (var n = 0; n < t.length; ++n) this._doInvokeOnCancel(t[n], e);
                    else if (void 0 !== t)
                        if ("function" == typeof t) {
                            if (!e) {
                                var r = s(t).call(this._boundValue());
                                r === a && (this._attachExtraTrace(r.e), c.throwLater(r.e))
                            }
                        } else t._resultCancelled(this)
                }, e.prototype._invokeOnCancel = function() {
                    var t = this._onCancel();
                    this._unsetOnCancel(), c.invoke(this._doInvokeOnCancel, this, t)
                }, e.prototype._invokeInternalOnCancel = function() {
                    this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel())
                }, e.prototype._resultCancelled = function() {
                    this.cancel()
                }
            }
        }, {
            "./util": 36
        }],
        7: [function(t, e, n) {
            "use strict";
            e.exports = function(e) {
                function n(t, n, a) {
                    return function(c) {
                        var l = a._boundValue();
                        t: for (var u = 0; u < t.length; ++u) {
                            var p = t[u];
                            if (p === Error || null != p && p.prototype instanceof Error) {
                                if (c instanceof p) return o(n).call(l, c)
                            } else if ("function" == typeof p) {
                                var h = o(p).call(l, c);
                                if (h === s) return h;
                                if (h) return o(n).call(l, c)
                            } else if (r.isObject(c)) {
                                for (var f = i(p), _ = 0; _ < f.length; ++_) {
                                    var d = f[_];
                                    if (p[d] != c[d]) continue t
                                }
                                return o(n).call(l, c)
                            }
                        }
                        return e
                    }
                }
                var r = t("./util"),
                    i = t("./es5").keys,
                    o = r.tryCatch,
                    s = r.errorObj;
                return n
            }
        }, {
            "./es5": 13,
            "./util": 36
        }],
        8: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                function e() {
                    this._trace = new e.CapturedTrace(r())
                }

                function n() {
                    return i ? new e : void 0
                }

                function r() {
                    var t = o.length - 1;
                    return t >= 0 ? o[t] : void 0
                }
                var i = !1,
                    o = [];
                return t.prototype._promiseCreated = function() {}, t.prototype._pushContext = function() {}, t.prototype._popContext = function() {
                    return null
                }, t._peekContext = t.prototype._peekContext = function() {}, e.prototype._pushContext = function() {
                    void 0 !== this._trace && (this._trace._promiseCreated = null, o.push(this._trace))
                }, e.prototype._popContext = function() {
                    if (void 0 !== this._trace) {
                        var t = o.pop(),
                            e = t._promiseCreated;
                        return t._promiseCreated = null, e
                    }
                    return null
                }, e.CapturedTrace = null, e.create = n, e.deactivateLongStackTraces = function() {}, e.activateLongStackTraces = function() {
                    var n = t.prototype._pushContext,
                        o = t.prototype._popContext,
                        s = t._peekContext,
                        a = t.prototype._peekContext,
                        c = t.prototype._promiseCreated;
                    e.deactivateLongStackTraces = function() {
                        t.prototype._pushContext = n, t.prototype._popContext = o, t._peekContext = s, t.prototype._peekContext = a, t.prototype._promiseCreated = c, i = !1
                    }, i = !0, t.prototype._pushContext = e.prototype._pushContext, t.prototype._popContext = e.prototype._popContext, t._peekContext = t.prototype._peekContext = r, t.prototype._promiseCreated = function() {
                        var t = this._peekContext();
                        t && null == t._promiseCreated && (t._promiseCreated = this)
                    }
                }, e
            }
        }, {}],
        9: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n) {
                function r(t, e) {
                    return {
                        promise: e
                    }
                }

                function i() {
                    return !1
                }

                function o(t, e, n) {
                    var r = this;
                    try {
                        t(e, n, function(t) {
                            if ("function" != typeof t) throw new TypeError("onCancel must be a function, got: " + N.toString(t));
                            r._attachCancellationCallback(t)
                        })
                    } catch (t) {
                        return t
                    }
                }

                function s(t) {
                    if (!this._isCancellable()) return this;
                    var e = this._onCancel();
                    void 0 !== e ? N.isArray(e) ? e.push(t) : this._setOnCancel([e, t]) : this._setOnCancel(t)
                }

                function a() {
                    return this._onCancelField
                }

                function c(t) {
                    this._onCancelField = t
                }

                function l() {
                    this._cancellationParent = void 0, this._onCancelField = void 0
                }

                function u(t, e) {
                    if (0 !== (1 & e)) {
                        this._cancellationParent = t;
                        var n = t._branchesRemainingToCancel;
                        void 0 === n && (n = 0), t._branchesRemainingToCancel = n + 1
                    }
                    0 !== (2 & e) && t._isBound() && this._setBoundTo(t._boundTo)
                }

                function p(t, e) {
                    0 !== (2 & e) && t._isBound() && this._setBoundTo(t._boundTo)
                }

                function h() {
                    var t = this._boundTo;
                    return void 0 !== t && t instanceof e ? t.isFulfilled() ? t.value() : void 0 : t
                }

                function f() {
                    this._trace = new S(this._peekContext())
                }

                function _(t, e) {
                    if (H(t)) {
                        var n = this._trace;
                        if (void 0 !== n && e && (n = n._parent), void 0 !== n) n.attachExtraTrace(t);
                        else if (!t.__stackCleaned__) {
                            var r = j(t);
                            N.notEnumerableProp(t, "stack", r.message + "\n" + r.stack.join("\n")), N.notEnumerableProp(t, "__stackCleaned__", !0)
                        }
                    }
                }

                function d(t, e, n, r, i) {
                    if (void 0 === t && null !== e && W) {
                        if (void 0 !== i && i._returnedNonUndefined()) return;
                        if (0 === (65535 & r._bitField)) return;
                        n && (n += " ");
                        var o = "",
                            s = "";
                        if (e._trace) {
                            for (var a = e._trace.stack.split("\n"), c = w(a), l = c.length - 1; l >= 0; --l) {
                                var u = c[l];
                                if (!U.test(u)) {
                                    var p = u.match(M);
                                    p && (o = "at " + p[1] + ":" + p[2] + ":" + p[3] + " ");
                                    break
                                }
                            }
                            if (c.length > 0)
                                for (var h = c[0], l = 0; l < a.length; ++l)
                                    if (a[l] === h) {
                                        l > 0 && (s = "\n" + a[l - 1]);
                                        break
                                    }
                        }
                        var f = "a promise was created in a " + n + "handler " + o + "but was not returned from it, see http://goo.gl/rRqMUw" + s;
                        r._warn(f, !0, e)
                    }
                }

                function v(t, e) {
                    var n = t + " is deprecated and will be removed in a future version.";
                    return e && (n += " Use " + e + " instead."), y(n)
                }

                function y(t, n, r) {
                    if (ot.warnings) {
                        var i, o = new L(t);
                        if (n) r._attachExtraTrace(o);
                        else if (ot.longStackTraces && (i = e._peekContext())) i.attachExtraTrace(o);
                        else {
                            var s = j(o);
                            o.stack = s.message + "\n" + s.stack.join("\n")
                        }
                        tt("warning", o) || E(o, "", !0)
                    }
                }

                function g(t, e) {
                    for (var n = 0; n < e.length - 1; ++n) e[n].push("From previous event:"), e[n] = e[n].join("\n");
                    return n < e.length && (e[n] = e[n].join("\n")), t + "\n" + e.join("\n")
                }

                function m(t) {
                    for (var e = 0; e < t.length; ++e)(0 === t[e].length || e + 1 < t.length && t[e][0] === t[e + 1][0]) && (t.splice(e, 1), e--)
                }

                function b(t) {
                    for (var e = t[0], n = 1; n < t.length; ++n) {
                        for (var r = t[n], i = e.length - 1, o = e[i], s = -1, a = r.length - 1; a >= 0; --a)
                            if (r[a] === o) {
                                s = a;
                                break
                            }
                        for (var a = s; a >= 0; --a) {
                            var c = r[a];
                            if (e[i] !== c) break;
                            e.pop(), i--
                        }
                        e = r
                    }
                }

                function w(t) {
                    for (var e = [], n = 0; n < t.length; ++n) {
                        var r = t[n],
                            i = "    (No stack trace)" === r || q.test(r),
                            o = i && nt(r);
                        i && !o && ($ && " " !== r.charAt(0) && (r = "    " + r), e.push(r))
                    }
                    return e
                }

                function C(t) {
                    for (var e = t.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < e.length; ++n) {
                        var r = e[n];
                        if ("    (No stack trace)" === r || q.test(r)) break
                    }
                    return n > 0 && "SyntaxError" != t.name && (e = e.slice(n)), e
                }

                function j(t) {
                    var e = t.stack,
                        n = t.toString();
                    return e = "string" == typeof e && e.length > 0 ? C(t) : ["    (No stack trace)"], {
                        message: n,
                        stack: "SyntaxError" == t.name ? e : w(e)
                    }
                }

                function E(t, e, n) {
                    if ("undefined" != typeof console) {
                        var r;
                        if (N.isObject(t)) {
                            var i = t.stack;
                            r = e + Q(i, t)
                        } else r = e + String(t);
                        "function" == typeof D ? D(r, n) : ("function" == typeof console.log || "object" == typeof console.log) && console.log(r)
                    }
                }

                function k(t, e, n, r) {
                    var i = !1;
                    try {
                        "function" == typeof e && (i = !0, "rejectionHandled" === t ? e(r) : e(n, r))
                    } catch (t) {
                        I.throwLater(t)
                    }
                    "unhandledRejection" === t ? tt(t, n, r) || i || E(n, "Unhandled rejection ") : tt(t, r)
                }

                function F(t) {
                    var e;
                    if ("function" == typeof t) e = "[function " + (t.name || "anonymous") + "]";
                    else {
                        e = t && "function" == typeof t.toString ? t.toString() : N.toString(t);
                        var n = /\[object [a-zA-Z0-9$_]+\]/;
                        if (n.test(e)) try {
                            var r = JSON.stringify(t);
                            e = r
                        } catch (t) {}
                        0 === e.length && (e = "(empty array)")
                    }
                    return "(<" + x(e) + ">, no stack trace)"
                }

                function x(t) {
                    var e = 41;
                    return t.length < e ? t : t.substr(0, e - 3) + "..."
                }

                function T() {
                    return "function" == typeof it
                }

                function P(t) {
                    var e = t.match(rt);
                    return e ? {
                        fileName: e[1],
                        line: parseInt(e[2], 10)
                    } : void 0
                }

                function R(t, e) {
                    if (T()) {
                        for (var n, r, i = t.stack.split("\n"), o = e.stack.split("\n"), s = -1, a = -1, c = 0; c < i.length; ++c) {
                            var l = P(i[c]);
                            if (l) {
                                n = l.fileName, s = l.line;
                                break
                            }
                        }
                        for (var c = 0; c < o.length; ++c) {
                            var l = P(o[c]);
                            if (l) {
                                r = l.fileName, a = l.line;
                                break
                            }
                        }
                        0 > s || 0 > a || !n || !r || n !== r || s >= a || (nt = function(t) {
                            if (B.test(t)) return !0;
                            var e = P(t);
                            return !!(e && e.fileName === n && s <= e.line && e.line <= a)
                        })
                    }
                }

                function S(t) {
                    this._parent = t, this._promisesCreated = 0;
                    var e = this._length = 1 + (void 0 === t ? 0 : t._length);
                    it(this, S), e > 32 && this.uncycle()
                }
                var O, A, D, V = e._getDomain,
                    I = e._async,
                    L = t("./errors").Warning,
                    N = t("./util"),
                    H = N.canAttachTrace,
                    B = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
                    U = /\((?:timers\.js):\d+:\d+\)/,
                    M = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,
                    q = null,
                    Q = null,
                    $ = !1,
                    G = !(0 == N.env("BLUEBIRD_DEBUG") || !N.env("BLUEBIRD_DEBUG") && "development" !== N.env("NODE_ENV")),
                    z = !(0 == N.env("BLUEBIRD_WARNINGS") || !G && !N.env("BLUEBIRD_WARNINGS")),
                    X = !(0 == N.env("BLUEBIRD_LONG_STACK_TRACES") || !G && !N.env("BLUEBIRD_LONG_STACK_TRACES")),
                    W = 0 != N.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (z || !!N.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
                e.prototype.suppressUnhandledRejections = function() {
                    var t = this._target();
                    t._bitField = -1048577 & t._bitField | 524288
                }, e.prototype._ensurePossibleRejectionHandled = function() {
                    0 === (524288 & this._bitField) && (this._setRejectionIsUnhandled(), I.invokeLater(this._notifyUnhandledRejection, this, void 0))
                }, e.prototype._notifyUnhandledRejectionIsHandled = function() {
                    k("rejectionHandled", O, void 0, this)
                }, e.prototype._setReturnedNonUndefined = function() {
                    this._bitField = 268435456 | this._bitField
                }, e.prototype._returnedNonUndefined = function() {
                    return 0 !== (268435456 & this._bitField)
                }, e.prototype._notifyUnhandledRejection = function() {
                    if (this._isRejectionUnhandled()) {
                        var t = this._settledValue();
                        this._setUnhandledRejectionIsNotified(), k("unhandledRejection", A, t, this)
                    }
                }, e.prototype._setUnhandledRejectionIsNotified = function() {
                    this._bitField = 262144 | this._bitField
                }, e.prototype._unsetUnhandledRejectionIsNotified = function() {
                    this._bitField = -262145 & this._bitField
                }, e.prototype._isUnhandledRejectionNotified = function() {
                    return (262144 & this._bitField) > 0
                }, e.prototype._setRejectionIsUnhandled = function() {
                    this._bitField = 1048576 | this._bitField
                }, e.prototype._unsetRejectionIsUnhandled = function() {
                    this._bitField = -1048577 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled())
                }, e.prototype._isRejectionUnhandled = function() {
                    return (1048576 & this._bitField) > 0
                }, e.prototype._warn = function(t, e, n) {
                    return y(t, e, n || this)
                }, e.onPossiblyUnhandledRejection = function(t) {
                    var e = V();
                    A = "function" == typeof t ? null === e ? t : N.domainBind(e, t) : void 0
                }, e.onUnhandledRejectionHandled = function(t) {
                    var e = V();
                    O = "function" == typeof t ? null === e ? t : N.domainBind(e, t) : void 0
                };
                var K = function() {};
                e.longStackTraces = function() {
                    if (I.haveItemsQueued() && !ot.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                    if (!ot.longStackTraces && T()) {
                        var t = e.prototype._captureStackTrace,
                            r = e.prototype._attachExtraTrace;
                        ot.longStackTraces = !0, K = function() {
                            if (I.haveItemsQueued() && !ot.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                            e.prototype._captureStackTrace = t, e.prototype._attachExtraTrace = r, n.deactivateLongStackTraces(), I.enableTrampoline(), ot.longStackTraces = !1
                        }, e.prototype._captureStackTrace = f, e.prototype._attachExtraTrace = _, n.activateLongStackTraces(), I.disableTrampolineIfNecessary()
                    }
                }, e.hasLongStackTraces = function() {
                    return ot.longStackTraces && T()
                };
                var J = function() {
                        try {
                            if ("function" == typeof CustomEvent) {
                                var t = new CustomEvent("CustomEvent");
                                return N.global.dispatchEvent(t),
                                    function(t, e) {
                                        var n = new CustomEvent(t.toLowerCase(), {
                                            detail: e,
                                            cancelable: !0
                                        });
                                        return !N.global.dispatchEvent(n)
                                    }
                            }
                            if ("function" == typeof Event) {
                                var t = new Event("CustomEvent");
                                return N.global.dispatchEvent(t),
                                    function(t, e) {
                                        var n = new Event(t.toLowerCase(), {
                                            cancelable: !0
                                        });
                                        return n.detail = e, !N.global.dispatchEvent(n)
                                    }
                            }
                            var t = document.createEvent("CustomEvent");
                            return t.initCustomEvent("testingtheevent", !1, !0, {}), N.global.dispatchEvent(t),
                                function(t, e) {
                                    var n = document.createEvent("CustomEvent");
                                    return n.initCustomEvent(t.toLowerCase(), !1, !0, e), !N.global.dispatchEvent(n)
                                }
                        } catch (t) {}
                        return function() {
                            return !1
                        }
                    }(),
                    Y = function() {
                        return N.isNode ? function() {
                            return process.emit.apply(process, arguments)
                        } : N.global ? function(t) {
                            var e = "on" + t.toLowerCase(),
                                n = N.global[e];
                            return !!n && (n.apply(N.global, [].slice.call(arguments, 1)), !0)
                        } : function() {
                            return !1
                        }
                    }(),
                    Z = {
                        promiseCreated: r,
                        promiseFulfilled: r,
                        promiseRejected: r,
                        promiseResolved: r,
                        promiseCancelled: r,
                        promiseChained: function(t, e, n) {
                            return {
                                promise: e,
                                child: n
                            }
                        },
                        warning: function(t, e) {
                            return {
                                warning: e
                            }
                        },
                        unhandledRejection: function(t, e, n) {
                            return {
                                reason: e,
                                promise: n
                            }
                        },
                        rejectionHandled: r
                    },
                    tt = function(t) {
                        var e = !1;
                        try {
                            e = Y.apply(null, arguments)
                        } catch (t) {
                            I.throwLater(t), e = !0
                        }
                        var n = !1;
                        try {
                            n = J(t, Z[t].apply(null, arguments))
                        } catch (t) {
                            I.throwLater(t), n = !0
                        }
                        return n || e
                    };
                e.config = function(t) {
                    if (t = Object(t), "longStackTraces" in t && (t.longStackTraces ? e.longStackTraces() : !t.longStackTraces && e.hasLongStackTraces() && K()), "warnings" in t) {
                        var n = t.warnings;
                        ot.warnings = !!n, W = ot.warnings, N.isObject(n) && "wForgottenReturn" in n && (W = !!n.wForgottenReturn)
                    }
                    if ("cancellation" in t && t.cancellation && !ot.cancellation) {
                        if (I.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
                        e.prototype._clearCancellationData = l, e.prototype._propagateFrom = u, e.prototype._onCancel = a, e.prototype._setOnCancel = c, e.prototype._attachCancellationCallback = s, e.prototype._execute = o, et = u, ot.cancellation = !0
                    }
                    return "monitoring" in t && (t.monitoring && !ot.monitoring ? (ot.monitoring = !0, e.prototype._fireEvent = tt) : !t.monitoring && ot.monitoring && (ot.monitoring = !1, e.prototype._fireEvent = i)), e
                }, e.prototype._fireEvent = i, e.prototype._execute = function(t, e, n) {
                    try {
                        t(e, n)
                    } catch (t) {
                        return t
                    }
                }, e.prototype._onCancel = function() {}, e.prototype._setOnCancel = function(t) {}, e.prototype._attachCancellationCallback = function(t) {}, e.prototype._captureStackTrace = function() {}, e.prototype._attachExtraTrace = function() {}, e.prototype._clearCancellationData = function() {}, e.prototype._propagateFrom = function(t, e) {};
                var et = p,
                    nt = function() {
                        return !1
                    },
                    rt = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                N.inherits(S, Error), n.CapturedTrace = S, S.prototype.uncycle = function() {
                    var t = this._length;
                    if (!(2 > t)) {
                        for (var e = [], n = {}, r = 0, i = this; void 0 !== i; ++r) e.push(i), i = i._parent;
                        t = this._length = r;
                        for (var r = t - 1; r >= 0; --r) {
                            var o = e[r].stack;
                            void 0 === n[o] && (n[o] = r)
                        }
                        for (var r = 0; t > r; ++r) {
                            var s = e[r].stack,
                                a = n[s];
                            if (void 0 !== a && a !== r) {
                                a > 0 && (e[a - 1]._parent = void 0, e[a - 1]._length = 1), e[r]._parent = void 0, e[r]._length = 1;
                                var c = r > 0 ? e[r - 1] : this;
                                t - 1 > a ? (c._parent = e[a + 1], c._parent.uncycle(), c._length = c._parent._length + 1) : (c._parent = void 0, c._length = 1);
                                for (var l = c._length + 1, u = r - 2; u >= 0; --u) e[u]._length = l, l++;
                                return
                            }
                        }
                    }
                }, S.prototype.attachExtraTrace = function(t) {
                    if (!t.__stackCleaned__) {
                        this.uncycle();
                        for (var e = j(t), n = e.message, r = [e.stack], i = this; void 0 !== i;) r.push(w(i.stack.split("\n"))), i = i._parent;
                        b(r), m(r), N.notEnumerableProp(t, "stack", g(n, r)), N.notEnumerableProp(t, "__stackCleaned__", !0)
                    }
                };
                var it = function() {
                    var t = /^\s*at\s*/,
                        e = function(t, e) {
                            return "string" == typeof t ? t : void 0 !== e.name && void 0 !== e.message ? e.toString() : F(e)
                        };
                    if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                        Error.stackTraceLimit += 6, q = t, Q = e;
                        var n = Error.captureStackTrace;
                        return nt = function(t) {
                                return B.test(t)
                            },
                            function(t, e) {
                                Error.stackTraceLimit += 6, n(t, e), Error.stackTraceLimit -= 6
                            }
                    }
                    var r = new Error;
                    if ("string" == typeof r.stack && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return q = /@/, Q = e, $ = !0,
                        function(t) {
                            t.stack = (new Error).stack
                        };
                    var i;
                    try {
                        throw new Error
                    } catch (t) {
                        i = "stack" in t
                    }
                    return "stack" in r || !i || "number" != typeof Error.stackTraceLimit ? (Q = function(t, e) {
                        return "string" == typeof t ? t : "object" != typeof e && "function" != typeof e || void 0 === e.name || void 0 === e.message ? F(e) : e.toString()
                    }, null) : (q = t, Q = e, function(t) {
                        Error.stackTraceLimit += 6;
                        try {
                            throw new Error
                        } catch (e) {
                            t.stack = e.stack
                        }
                        Error.stackTraceLimit -= 6
                    })
                }([]);
                "undefined" != typeof console && "undefined" != typeof console.warn && (D = function(t) {
                    console.warn(t)
                }, N.isNode && process.stderr.isTTY ? D = function(t, e) {
                    var n = e ? "[33m" : "[31m";
                    console.warn(n + t + "[0m\n")
                } : N.isNode || "string" != typeof(new Error).stack || (D = function(t, e) {
                    console.warn("%c" + t, e ? "color: darkorange" : "color: red")
                }));
                var ot = {
                    warnings: z,
                    longStackTraces: !1,
                    cancellation: !1,
                    monitoring: !1
                };
                return X && e.longStackTraces(), {
                    longStackTraces: function() {
                        return ot.longStackTraces
                    },
                    warnings: function() {
                        return ot.warnings
                    },
                    cancellation: function() {
                        return ot.cancellation
                    },
                    monitoring: function() {
                        return ot.monitoring
                    },
                    propagateFromFunction: function() {
                        return et
                    },
                    boundValueFunction: function() {
                        return h
                    },
                    checkForgottenReturns: d,
                    setBounds: R,
                    warn: y,
                    deprecated: v,
                    CapturedTrace: S,
                    fireDomEvent: J,
                    fireGlobalEvent: Y
                }
            }
        }, {
            "./errors": 12,
            "./util": 36
        }],
        10: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                function e() {
                    return this.value
                }

                function n() {
                    throw this.reason
                }
                t.prototype.return = t.prototype.thenReturn = function(n) {
                    return n instanceof t && n.suppressUnhandledRejections(), this._then(e, void 0, void 0, {
                        value: n
                    }, void 0)
                }, t.prototype.throw = t.prototype.thenThrow = function(t) {
                    return this._then(n, void 0, void 0, {
                        reason: t
                    }, void 0)
                }, t.prototype.catchThrow = function(t) {
                    if (arguments.length <= 1) return this._then(void 0, n, void 0, {
                        reason: t
                    }, void 0);
                    var e = arguments[1],
                        r = function() {
                            throw e
                        };
                    return this.caught(t, r)
                }, t.prototype.catchReturn = function(n) {
                    if (arguments.length <= 1) return n instanceof t && n.suppressUnhandledRejections(), this._then(void 0, e, void 0, {
                        value: n
                    }, void 0);
                    var r = arguments[1];
                    r instanceof t && r.suppressUnhandledRejections();
                    var i = function() {
                        return r
                    };
                    return this.caught(n, i)
                }
            }
        }, {}],
        11: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e) {
                function n() {
                    return o(this)
                }

                function r(t, n) {
                    return i(t, n, e, e)
                }
                var i = t.reduce,
                    o = t.all;
                t.prototype.each = function(t) {
                    return i(this, t, e, 0)._then(n, void 0, void 0, this, void 0)
                }, t.prototype.mapSeries = function(t) {
                    return i(this, t, e, e)
                }, t.each = function(t, r) {
                    return i(t, r, e, 0)._then(n, void 0, void 0, t, void 0)
                }, t.mapSeries = r
            }
        }, {}],
        12: [function(t, e, n) {
            "use strict";

            function r(t, e) {
                function n(r) {
                    return this instanceof n ? (p(this, "message", "string" == typeof r ? r : e), p(this, "name", t), void(Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this))) : new n(r)
                }
                return u(n, Error), n
            }

            function i(t) {
                return this instanceof i ? (p(this, "name", "OperationalError"), p(this, "message", t), this.cause = t, this.isOperational = !0, void(t instanceof Error ? (p(this, "message", t.message), p(this, "stack", t.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor))) : new i(t)
            }
            var o, s, a = t("./es5"),
                c = a.freeze,
                l = t("./util"),
                u = l.inherits,
                p = l.notEnumerableProp,
                h = r("Warning", "warning"),
                f = r("CancellationError", "cancellation error"),
                _ = r("TimeoutError", "timeout error"),
                d = r("AggregateError", "aggregate error");
            try {
                o = TypeError, s = RangeError
            } catch (t) {
                o = r("TypeError", "type error"), s = r("RangeError", "range error")
            }
            for (var v = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), y = 0; y < v.length; ++y) "function" == typeof Array.prototype[v[y]] && (d.prototype[v[y]] = Array.prototype[v[y]]);
            a.defineProperty(d.prototype, "length", {
                value: 0,
                configurable: !1,
                writable: !0,
                enumerable: !0
            }), d.prototype.isOperational = !0;
            var g = 0;
            d.prototype.toString = function() {
                var t = Array(4 * g + 1).join(" "),
                    e = "\n" + t + "AggregateError of:\n";
                g++, t = Array(4 * g + 1).join(" ");
                for (var n = 0; n < this.length; ++n) {
                    for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", i = r.split("\n"), o = 0; o < i.length; ++o) i[o] = t + i[o];
                    r = i.join("\n"), e += r + "\n"
                }
                return g--, e
            }, u(i, Error);
            var m = Error.__BluebirdErrorTypes__;
            m || (m = c({
                CancellationError: f,
                TimeoutError: _,
                OperationalError: i,
                RejectionError: i,
                AggregateError: d
            }), a.defineProperty(Error, "__BluebirdErrorTypes__", {
                value: m,
                writable: !1,
                enumerable: !1,
                configurable: !1
            })), e.exports = {
                Error: Error,
                TypeError: o,
                RangeError: s,
                CancellationError: m.CancellationError,
                OperationalError: m.OperationalError,
                TimeoutError: m.TimeoutError,
                AggregateError: m.AggregateError,
                Warning: h
            }
        }, {
            "./es5": 13,
            "./util": 36
        }],
        13: [function(t, e, n) {
            var r = function() {
                "use strict";
                return void 0 === this
            }();
            if (r) e.exports = {
                freeze: Object.freeze,
                defineProperty: Object.defineProperty,
                getDescriptor: Object.getOwnPropertyDescriptor,
                keys: Object.keys,
                names: Object.getOwnPropertyNames,
                getPrototypeOf: Object.getPrototypeOf,
                isArray: Array.isArray,
                isES5: r,
                propertyIsWritable: function(t, e) {
                    var n = Object.getOwnPropertyDescriptor(t, e);
                    return !(n && !n.writable && !n.set)
                }
            };
            else {
                var i = {}.hasOwnProperty,
                    o = {}.toString,
                    s = {}.constructor.prototype,
                    a = function(t) {
                        var e = [];
                        for (var n in t) i.call(t, n) && e.push(n);
                        return e
                    },
                    c = function(t, e) {
                        return {
                            value: t[e]
                        }
                    },
                    l = function(t, e, n) {
                        return t[e] = n.value, t
                    },
                    u = function(t) {
                        return t
                    },
                    p = function(t) {
                        try {
                            return Object(t).constructor.prototype
                        } catch (t) {
                            return s
                        }
                    },
                    h = function(t) {
                        try {
                            return "[object Array]" === o.call(t)
                        } catch (t) {
                            return !1
                        }
                    };
                e.exports = {
                    isArray: h,
                    keys: a,
                    names: a,
                    defineProperty: l,
                    getDescriptor: c,
                    freeze: u,
                    getPrototypeOf: p,
                    isES5: r,
                    propertyIsWritable: function() {
                        return !0
                    }
                }
            }
        }, {}],
        14: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e) {
                var n = t.map;
                t.prototype.filter = function(t, r) {
                    return n(this, t, r, e)
                }, t.filter = function(t, r, i) {
                    return n(t, r, i, e)
                }
            }
        }, {}],
        15: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n) {
                function r(t, e, n) {
                    this.promise = t, this.type = e, this.handler = n, this.called = !1, this.cancelPromise = null
                }

                function i(t) {
                    this.finallyHandler = t
                }

                function o(t, e) {
                    return null != t.cancelPromise && (arguments.length > 1 ? t.cancelPromise._reject(e) : t.cancelPromise._cancel(), t.cancelPromise = null, !0)
                }

                function s() {
                    return c.call(this, this.promise._target()._settledValue())
                }

                function a(t) {
                    return o(this, t) ? void 0 : (p.e = t, p)
                }

                function c(t) {
                    var r = this.promise,
                        c = this.handler;
                    if (!this.called) {
                        this.called = !0;
                        var l = this.isFinallyHandler() ? c.call(r._boundValue()) : c.call(r._boundValue(), t);
                        if (void 0 !== l) {
                            r._setReturnedNonUndefined();
                            var h = n(l, r);
                            if (h instanceof e) {
                                if (null != this.cancelPromise) {
                                    if (h._isCancelled()) {
                                        var f = new u("late cancellation observer");
                                        return r._attachExtraTrace(f), p.e = f, p
                                    }
                                    h.isPending() && h._attachCancellationCallback(new i(this))
                                }
                                return h._then(s, a, void 0, this, void 0)
                            }
                        }
                    }
                    return r.isRejected() ? (o(this), p.e = t, p) : (o(this), t)
                }
                var l = t("./util"),
                    u = e.CancellationError,
                    p = l.errorObj;
                return r.prototype.isFinallyHandler = function() {
                    return 0 === this.type
                }, i.prototype._resultCancelled = function() {
                    o(this.finallyHandler)
                }, e.prototype._passThrough = function(t, e, n, i) {
                    return "function" != typeof t ? this.then() : this._then(n, i, void 0, new r(this, e, t), void 0)
                }, e.prototype.lastly = e.prototype.finally = function(t) {
                    return this._passThrough(t, 0, c, c)
                }, e.prototype.tap = function(t) {
                    return this._passThrough(t, 1, c)
                }, r
            }
        }, {
            "./util": 36
        }],
        16: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i, o, s) {
                function a(t, n, r) {
                    for (var o = 0; o < n.length; ++o) {
                        r._pushContext();
                        var s = f(n[o])(t);
                        if (r._popContext(), s === h) {
                            r._pushContext();
                            var a = e.reject(h.e);
                            return r._popContext(), a
                        }
                        var c = i(s, r);
                        if (c instanceof e) return c
                    }
                    return null
                }

                function c(t, n, i, o) {
                    if (s.cancellation()) {
                        var a = new e(r),
                            c = this._finallyPromise = new e(r);
                        this._promise = a.lastly(function() {
                            return c
                        }), a._captureStackTrace(), a._setOnCancel(this)
                    } else {
                        var l = this._promise = new e(r);
                        l._captureStackTrace()
                    }
                    this._stack = o, this._generatorFunction = t, this._receiver = n, this._generator = void 0, this._yieldHandlers = "function" == typeof i ? [i].concat(_) : _, this._yieldedPromise = null, this._cancellationPhase = !1
                }
                var l = t("./errors"),
                    u = l.TypeError,
                    p = t("./util"),
                    h = p.errorObj,
                    f = p.tryCatch,
                    _ = [];
                p.inherits(c, o), c.prototype._isResolved = function() {
                    return null === this._promise
                }, c.prototype._cleanup = function() {
                    this._promise = this._generator = null, s.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), this._finallyPromise = null)
                }, c.prototype._promiseCancelled = function() {
                    if (!this._isResolved()) {
                        var t, n = "undefined" != typeof this._generator.return;
                        if (n) this._promise._pushContext(), t = f(this._generator.return).call(this._generator, void 0), this._promise._popContext();
                        else {
                            var r = new e.CancellationError("generator .return() sentinel");
                            e.coroutine.returnSentinel = r, this._promise._attachExtraTrace(r), this._promise._pushContext(), t = f(this._generator.throw).call(this._generator, r), this._promise._popContext()
                        }
                        this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(t)
                    }
                }, c.prototype._promiseFulfilled = function(t) {
                    this._yieldedPromise = null, this._promise._pushContext();
                    var e = f(this._generator.next).call(this._generator, t);
                    this._promise._popContext(), this._continue(e)
                }, c.prototype._promiseRejected = function(t) {
                    this._yieldedPromise = null, this._promise._attachExtraTrace(t), this._promise._pushContext();
                    var e = f(this._generator.throw).call(this._generator, t);
                    this._promise._popContext(), this._continue(e)
                }, c.prototype._resultCancelled = function() {
                    if (this._yieldedPromise instanceof e) {
                        var t = this._yieldedPromise;
                        this._yieldedPromise = null, t.cancel()
                    }
                }, c.prototype.promise = function() {
                    return this._promise
                }, c.prototype._run = function() {
                    this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0)
                }, c.prototype._continue = function(t) {
                    var n = this._promise;
                    if (t === h) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._rejectCallback(t.e, !1);
                    var r = t.value;
                    if (t.done === !0) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._resolveCallback(r);
                    var o = i(r, this._promise);
                    if (!(o instanceof e) && (o = a(o, this._yieldHandlers, this._promise), null === o)) return void this._promiseRejected(new u("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", r) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                    o = o._target();
                    var s = o._bitField;
                    0 === (50397184 & s) ? (this._yieldedPromise = o, o._proxy(this, null)) : 0 !== (33554432 & s) ? e._async.invoke(this._promiseFulfilled, this, o._value()) : 0 !== (16777216 & s) ? e._async.invoke(this._promiseRejected, this, o._reason()) : this._promiseCancelled()
                }, e.coroutine = function(t, e) {
                    if ("function" != typeof t) throw new u("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                    var n = Object(e).yieldHandler,
                        r = c,
                        i = (new Error).stack;
                    return function() {
                        var e = t.apply(this, arguments),
                            o = new r((void 0), (void 0), n, i),
                            s = o.promise();
                        return o._generator = e, o._promiseFulfilled(void 0), s
                    }
                }, e.coroutine.addYieldHandler = function(t) {
                    if ("function" != typeof t) throw new u("expecting a function but got " + p.classString(t));
                    _.push(t)
                }, e.spawn = function(t) {
                    if (s.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof t) return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                    var r = new c(t, this),
                        i = r.promise();
                    return r._run(e.spawn), i
                }
            }
        }, {
            "./errors": 12,
            "./util": 36
        }],
        17: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i, o, s) {
                var a = t("./util");
                a.canEvaluate, a.tryCatch, a.errorObj, e.join = function() {
                    var t, e = arguments.length - 1;
                    if (e > 0 && "function" == typeof arguments[e]) {
                        t = arguments[e];
                        var r
                    }
                    var i = [].slice.call(arguments);
                    t && i.pop();
                    var r = new n(i).promise();
                    return void 0 !== t ? r.spread(t) : r
                }
            }
        }, {
            "./util": 36
        }],
        18: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i, o, s) {
                function a(t, e, n, r) {
                    this.constructor$(t), this._promise._captureStackTrace();
                    var i = l();
                    this._callback = null === i ? e : u.domainBind(i, e), this._preservedValues = r === o ? new Array(this.length()) : null, this._limit = n, this._inFlight = 0, this._queue = [], f.invoke(this._asyncInit, this, void 0)
                }

                function c(t, n, i, o) {
                    if ("function" != typeof n) return r("expecting a function but got " + u.classString(n));
                    var s = 0;
                    if (void 0 !== i) {
                        if ("object" != typeof i || null === i) return e.reject(new TypeError("options argument must be an object but it is " + u.classString(i)));
                        if ("number" != typeof i.concurrency) return e.reject(new TypeError("'concurrency' must be a number but it is " + u.classString(i.concurrency)));
                        s = i.concurrency
                    }
                    return s = "number" == typeof s && isFinite(s) && s >= 1 ? s : 0, new a(t, n, s, o).promise()
                }
                var l = e._getDomain,
                    u = t("./util"),
                    p = u.tryCatch,
                    h = u.errorObj,
                    f = e._async;
                u.inherits(a, n), a.prototype._asyncInit = function() {
                    this._init$(void 0, -2)
                }, a.prototype._init = function() {}, a.prototype._promiseFulfilled = function(t, n) {
                    var r = this._values,
                        o = this.length(),
                        a = this._preservedValues,
                        c = this._limit;
                    if (0 > n) {
                        if (n = -1 * n - 1, r[n] = t, c >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0
                    } else {
                        if (c >= 1 && this._inFlight >= c) return r[n] = t, this._queue.push(n), !1;
                        null !== a && (a[n] = t);
                        var l = this._promise,
                            u = this._callback,
                            f = l._boundValue();
                        l._pushContext();
                        var _ = p(u).call(f, t, n, o),
                            d = l._popContext();
                        if (s.checkForgottenReturns(_, d, null !== a ? "Promise.filter" : "Promise.map", l), _ === h) return this._reject(_.e), !0;
                        var v = i(_, this._promise);
                        if (v instanceof e) {
                            v = v._target();
                            var y = v._bitField;
                            if (0 === (50397184 & y)) return c >= 1 && this._inFlight++, r[n] = v, v._proxy(this, -1 * (n + 1)), !1;
                            if (0 === (33554432 & y)) return 0 !== (16777216 & y) ? (this._reject(v._reason()), !0) : (this._cancel(), !0);
                            _ = v._value()
                        }
                        r[n] = _
                    }
                    var g = ++this._totalResolved;
                    return g >= o && (null !== a ? this._filter(r, a) : this._resolve(r), !0)
                }, a.prototype._drainQueue = function() {
                    for (var t = this._queue, e = this._limit, n = this._values; t.length > 0 && this._inFlight < e;) {
                        if (this._isResolved()) return;
                        var r = t.pop();
                        this._promiseFulfilled(n[r], r)
                    }
                }, a.prototype._filter = function(t, e) {
                    for (var n = e.length, r = new Array(n), i = 0, o = 0; n > o; ++o) t[o] && (r[i++] = e[o]);
                    r.length = i, this._resolve(r)
                }, a.prototype.preservedValues = function() {
                    return this._preservedValues
                }, e.prototype.map = function(t, e) {
                    return c(this, t, e, null)
                }, e.map = function(t, e, n, r) {
                    return c(t, e, n, r)
                }
            }
        }, {
            "./util": 36
        }],
        19: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i, o) {
                var s = t("./util"),
                    a = s.tryCatch;
                e.method = function(t) {
                    if ("function" != typeof t) throw new e.TypeError("expecting a function but got " + s.classString(t));
                    return function() {
                        var r = new e(n);
                        r._captureStackTrace(), r._pushContext();
                        var i = a(t).apply(this, arguments),
                            s = r._popContext();
                        return o.checkForgottenReturns(i, s, "Promise.method", r), r._resolveFromSyncValue(i), r
                    }
                }, e.attempt = e.try = function(t) {
                    if ("function" != typeof t) return i("expecting a function but got " + s.classString(t));
                    var r = new e(n);
                    r._captureStackTrace(), r._pushContext();
                    var c;
                    if (arguments.length > 1) {
                        o.deprecated("calling Promise.try with more than 1 argument");
                        var l = arguments[1],
                            u = arguments[2];
                        c = s.isArray(l) ? a(t).apply(u, l) : a(t).call(u, l)
                    } else c = a(t)();
                    var p = r._popContext();
                    return o.checkForgottenReturns(c, p, "Promise.try", r), r._resolveFromSyncValue(c), r
                }, e.prototype._resolveFromSyncValue = function(t) {
                    t === s.errorObj ? this._rejectCallback(t.e, !1) : this._resolveCallback(t, !0)
                }
            }
        }, {
            "./util": 36
        }],
        20: [function(t, e, n) {
            "use strict";

            function r(t) {
                return t instanceof Error && u.getPrototypeOf(t) === Error.prototype
            }

            function i(t) {
                var e;
                if (r(t)) {
                    e = new l(t), e.name = t.name, e.message = t.message, e.stack = t.stack;
                    for (var n = u.keys(t), i = 0; i < n.length; ++i) {
                        var o = n[i];
                        p.test(o) || (e[o] = t[o])
                    }
                    return e
                }
                return s.markAsOriginatingFromRejection(t), t
            }

            function o(t, e) {
                return function(n, r) {
                    if (null !== t) {
                        if (n) {
                            var o = i(a(n));
                            t._attachExtraTrace(o), t._reject(o)
                        } else if (e) {
                            var s = [].slice.call(arguments, 1);
                            t._fulfill(s)
                        } else t._fulfill(r);
                        t = null
                    }
                }
            }
            var s = t("./util"),
                a = s.maybeWrapAsError,
                c = t("./errors"),
                l = c.OperationalError,
                u = t("./es5"),
                p = /^(?:name|message|stack|cause)$/;
            e.exports = o
        }, {
            "./errors": 12,
            "./es5": 13,
            "./util": 36
        }],
        21: [function(t, e, n) {
            "use strict";
            e.exports = function(e) {
                function n(t, e) {
                    var n = this;
                    if (!o.isArray(t)) return r.call(n, t, e);
                    var i = a(e).apply(n._boundValue(), [null].concat(t));
                    i === c && s.throwLater(i.e)
                }

                function r(t, e) {
                    var n = this,
                        r = n._boundValue(),
                        i = void 0 === t ? a(e).call(r, null) : a(e).call(r, null, t);
                    i === c && s.throwLater(i.e)
                }

                function i(t, e) {
                    var n = this;
                    if (!t) {
                        var r = new Error(t + "");
                        r.cause = t, t = r
                    }
                    var i = a(e).call(n._boundValue(), t);
                    i === c && s.throwLater(i.e)
                }
                var o = t("./util"),
                    s = e._async,
                    a = o.tryCatch,
                    c = o.errorObj;
                e.prototype.asCallback = e.prototype.nodeify = function(t, e) {
                    if ("function" == typeof t) {
                        var o = r;
                        void 0 !== e && Object(e).spread && (o = n), this._then(o, i, void 0, this, t)
                    }
                    return this
                }
            }
        }, {
            "./util": 36
        }],
        22: [function(t, e, n) {
            "use strict";
            e.exports = function() {
                function n() {}

                function r(t, e) {
                    if ("function" != typeof e) throw new g("expecting a function but got " + f.classString(e));
                    if (t.constructor !== i) throw new g("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n")
                }

                function i(t) {
                    this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, t !== b && (r(this, t), this._resolveFromExecutor(t)), this._promiseCreated(), this._fireEvent("promiseCreated", this)
                }

                function o(t) {
                    this.promise._resolveCallback(t)
                }

                function s(t) {
                    this.promise._rejectCallback(t, !1)
                }

                function a(t) {
                    var e = new i(b);
                    e._fulfillmentHandler0 = t, e._rejectionHandler0 = t, e._promise0 = t, e._receiver0 = t
                }
                var c, l = function() {
                        return new g("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")
                    },
                    u = function() {
                        return new i.PromiseInspection(this._target())
                    },
                    p = function(t) {
                        return i.reject(new g(t))
                    },
                    h = {},
                    f = t("./util");
                c = f.isNode ? function() {
                    var t = process.domain;
                    return void 0 === t && (t = null), t
                } : function() {
                    return null
                }, f.notEnumerableProp(i, "_getDomain", c);
                var _ = t("./es5"),
                    d = t("./async"),
                    v = new d;
                _.defineProperty(i, "_async", {
                    value: v
                });
                var y = t("./errors"),
                    g = i.TypeError = y.TypeError;
                i.RangeError = y.RangeError;
                var m = i.CancellationError = y.CancellationError;
                i.TimeoutError = y.TimeoutError, i.OperationalError = y.OperationalError, i.RejectionError = y.OperationalError, i.AggregateError = y.AggregateError;
                var b = function() {},
                    w = {},
                    C = {},
                    j = t("./thenables")(i, b),
                    E = t("./promise_array")(i, b, j, p, n),
                    k = t("./context")(i),
                    F = k.create,
                    x = t("./debuggability")(i, k),
                    T = (x.CapturedTrace, t("./finally")(i, j)),
                    P = t("./catch_filter")(C),
                    R = t("./nodeback"),
                    S = f.errorObj,
                    O = f.tryCatch;
                return i.prototype.toString = function() {
                    return "[object Promise]"
                }, i.prototype.caught = i.prototype.catch = function(t) {
                    var e = arguments.length;
                    if (e > 1) {
                        var n, r = new Array(e - 1),
                            i = 0;
                        for (n = 0; e - 1 > n; ++n) {
                            var o = arguments[n];
                            if (!f.isObject(o)) return p("expecting an object but got A catch statement predicate " + f.classString(o));
                            r[i++] = o
                        }
                        return r.length = i, t = arguments[n], this.then(void 0, P(r, t, this))
                    }
                    return this.then(void 0, t)
                }, i.prototype.reflect = function() {
                    return this._then(u, u, void 0, this, void 0)
                }, i.prototype.then = function(t, e) {
                    if (x.warnings() && arguments.length > 0 && "function" != typeof t && "function" != typeof e) {
                        var n = ".then() only accepts functions but was passed: " + f.classString(t);
                        arguments.length > 1 && (n += ", " + f.classString(e)), this._warn(n)
                    }
                    return this._then(t, e, void 0, void 0, void 0)
                }, i.prototype.done = function(t, e) {
                    var n = this._then(t, e, void 0, void 0, void 0);
                    n._setIsFinal()
                }, i.prototype.spread = function(t) {
                    return "function" != typeof t ? p("expecting a function but got " + f.classString(t)) : this.all()._then(t, void 0, void 0, w, void 0)
                }, i.prototype.toJSON = function() {
                    var t = {
                        isFulfilled: !1,
                        isRejected: !1,
                        fulfillmentValue: void 0,
                        rejectionReason: void 0
                    };
                    return this.isFulfilled() ? (t.fulfillmentValue = this.value(), t.isFulfilled = !0) : this.isRejected() && (t.rejectionReason = this.reason(), t.isRejected = !0), t
                }, i.prototype.all = function() {
                    return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new E(this).promise()
                }, i.prototype.error = function(t) {
                    return this.caught(f.originatesFromRejection, t)
                }, i.getNewLibraryCopy = e.exports, i.is = function(t) {
                    return t instanceof i
                }, i.fromNode = i.fromCallback = function(t) {
                    var e = new i(b);
                    e._captureStackTrace();
                    var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs,
                        r = O(t)(R(e, n));
                    return r === S && e._rejectCallback(r.e, !0), e._isFateSealed() || e._setAsyncGuaranteed(), e
                }, i.all = function(t) {
                    return new E(t).promise()
                }, i.cast = function(t) {
                    var e = j(t);
                    return e instanceof i || (e = new i(b), e._captureStackTrace(), e._setFulfilled(), e._rejectionHandler0 = t), e
                }, i.resolve = i.fulfilled = i.cast, i.reject = i.rejected = function(t) {
                    var e = new i(b);
                    return e._captureStackTrace(), e._rejectCallback(t, !0), e
                }, i.setScheduler = function(t) {
                    if ("function" != typeof t) throw new g("expecting a function but got " + f.classString(t));
                    return v.setScheduler(t)
                }, i.prototype._then = function(t, e, n, r, o) {
                    var s = void 0 !== o,
                        a = s ? o : new i(b),
                        l = this._target(),
                        u = l._bitField;
                    s || (a._propagateFrom(this, 3), a._captureStackTrace(), void 0 === r && 0 !== (2097152 & this._bitField) && (r = 0 !== (50397184 & u) ? this._boundValue() : l === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, a));
                    var p = c();
                    if (0 !== (50397184 & u)) {
                        var h, _, d = l._settlePromiseCtx;
                        0 !== (33554432 & u) ? (_ = l._rejectionHandler0, h = t) : 0 !== (16777216 & u) ? (_ = l._fulfillmentHandler0, h = e, l._unsetRejectionIsUnhandled()) : (d = l._settlePromiseLateCancellationObserver, _ = new m("late cancellation observer"), l._attachExtraTrace(_), h = e), v.invoke(d, l, {
                            handler: null === p ? h : "function" == typeof h && f.domainBind(p, h),
                            promise: a,
                            receiver: r,
                            value: _
                        })
                    } else l._addCallbacks(t, e, a, r, p);
                    return a
                }, i.prototype._length = function() {
                    return 65535 & this._bitField
                }, i.prototype._isFateSealed = function() {
                    return 0 !== (117506048 & this._bitField)
                }, i.prototype._isFollowing = function() {
                    return 67108864 === (67108864 & this._bitField)
                }, i.prototype._setLength = function(t) {
                    this._bitField = -65536 & this._bitField | 65535 & t
                }, i.prototype._setFulfilled = function() {
                    this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this)
                }, i.prototype._setRejected = function() {
                    this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this)
                }, i.prototype._setFollowing = function() {
                    this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this)
                }, i.prototype._setIsFinal = function() {
                    this._bitField = 4194304 | this._bitField
                }, i.prototype._isFinal = function() {
                    return (4194304 & this._bitField) > 0
                }, i.prototype._unsetCancelled = function() {
                    this._bitField = -65537 & this._bitField
                }, i.prototype._setCancelled = function() {
                    this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this)
                }, i.prototype._setWillBeCancelled = function() {
                    this._bitField = 8388608 | this._bitField
                }, i.prototype._setAsyncGuaranteed = function() {
                    v.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField)
                }, i.prototype._receiverAt = function(t) {
                    var e = 0 === t ? this._receiver0 : this[4 * t - 4 + 3];
                    return e === h ? void 0 : void 0 === e && this._isBound() ? this._boundValue() : e
                }, i.prototype._promiseAt = function(t) {
                    return this[4 * t - 4 + 2]
                }, i.prototype._fulfillmentHandlerAt = function(t) {
                    return this[4 * t - 4 + 0]
                }, i.prototype._rejectionHandlerAt = function(t) {
                    return this[4 * t - 4 + 1]
                }, i.prototype._boundValue = function() {}, i.prototype._migrateCallback0 = function(t) {
                    var e = (t._bitField, t._fulfillmentHandler0),
                        n = t._rejectionHandler0,
                        r = t._promise0,
                        i = t._receiverAt(0);
                    void 0 === i && (i = h), this._addCallbacks(e, n, r, i, null)
                }, i.prototype._migrateCallbackAt = function(t, e) {
                    var n = t._fulfillmentHandlerAt(e),
                        r = t._rejectionHandlerAt(e),
                        i = t._promiseAt(e),
                        o = t._receiverAt(e);
                    void 0 === o && (o = h), this._addCallbacks(n, r, i, o, null)
                }, i.prototype._addCallbacks = function(t, e, n, r, i) {
                    var o = this._length();
                    if (o >= 65531 && (o = 0, this._setLength(0)), 0 === o) this._promise0 = n, this._receiver0 = r, "function" == typeof t && (this._fulfillmentHandler0 = null === i ? t : f.domainBind(i, t)), "function" == typeof e && (this._rejectionHandler0 = null === i ? e : f.domainBind(i, e));
                    else {
                        var s = 4 * o - 4;
                        this[s + 2] = n, this[s + 3] = r, "function" == typeof t && (this[s + 0] = null === i ? t : f.domainBind(i, t)), "function" == typeof e && (this[s + 1] = null === i ? e : f.domainBind(i, e))
                    }
                    return this._setLength(o + 1), o
                }, i.prototype._proxy = function(t, e) {
                    this._addCallbacks(void 0, void 0, e, t, null)
                }, i.prototype._resolveCallback = function(t, e) {
                    if (0 === (117506048 & this._bitField)) {
                        if (t === this) return this._rejectCallback(l(), !1);
                        var n = j(t, this);
                        if (!(n instanceof i)) return this._fulfill(t);
                        e && this._propagateFrom(n, 2);
                        var r = n._target();
                        if (r === this) return void this._reject(l());
                        var o = r._bitField;
                        if (0 === (50397184 & o)) {
                            var s = this._length();
                            s > 0 && r._migrateCallback0(this);
                            for (var a = 1; s > a; ++a) r._migrateCallbackAt(this, a);
                            this._setFollowing(), this._setLength(0), this._setFollowee(r)
                        } else if (0 !== (33554432 & o)) this._fulfill(r._value());
                        else if (0 !== (16777216 & o)) this._reject(r._reason());
                        else {
                            var c = new m("late cancellation observer");
                            r._attachExtraTrace(c), this._reject(c)
                        }
                    }
                }, i.prototype._rejectCallback = function(t, e, n) {
                    var r = f.ensureErrorObject(t),
                        i = r === t;
                    if (!i && !n && x.warnings()) {
                        var o = "a promise was rejected with a non-error: " + f.classString(t);
                        this._warn(o, !0)
                    }
                    this._attachExtraTrace(r, !!e && i), this._reject(t)
                }, i.prototype._resolveFromExecutor = function(t) {
                    var e = this;
                    this._captureStackTrace(), this._pushContext();
                    var n = !0,
                        r = this._execute(t, function(t) {
                            e._resolveCallback(t)
                        }, function(t) {
                            e._rejectCallback(t, n)
                        });
                    n = !1, this._popContext(), void 0 !== r && e._rejectCallback(r, !0)
                }, i.prototype._settlePromiseFromHandler = function(t, e, n, r) {
                    var i = r._bitField;
                    if (0 === (65536 & i)) {
                        r._pushContext();
                        var o;
                        e === w ? n && "number" == typeof n.length ? o = O(t).apply(this._boundValue(), n) : (o = S, o.e = new g("cannot .spread() a non-array: " + f.classString(n))) : o = O(t).call(e, n);
                        var s = r._popContext();
                        i = r._bitField, 0 === (65536 & i) && (o === C ? r._reject(n) : o === S ? r._rejectCallback(o.e, !1) : (x.checkForgottenReturns(o, s, "", r, this), r._resolveCallback(o)))
                    }
                }, i.prototype._target = function() {
                    for (var t = this; t._isFollowing();) t = t._followee();
                    return t
                }, i.prototype._followee = function() {
                    return this._rejectionHandler0
                }, i.prototype._setFollowee = function(t) {
                    this._rejectionHandler0 = t
                }, i.prototype._settlePromise = function(t, e, r, o) {
                    var s = t instanceof i,
                        a = this._bitField,
                        c = 0 !== (134217728 & a);
                    0 !== (65536 & a) ? (s && t._invokeInternalOnCancel(), r instanceof T && r.isFinallyHandler() ? (r.cancelPromise = t, O(e).call(r, o) === S && t._reject(S.e)) : e === u ? t._fulfill(u.call(r)) : r instanceof n ? r._promiseCancelled(t) : s || t instanceof E ? t._cancel() : r.cancel()) : "function" == typeof e ? s ? (c && t._setAsyncGuaranteed(), this._settlePromiseFromHandler(e, r, o, t)) : e.call(r, o, t) : r instanceof n ? r._isResolved() || (0 !== (33554432 & a) ? r._promiseFulfilled(o, t) : r._promiseRejected(o, t)) : s && (c && t._setAsyncGuaranteed(), 0 !== (33554432 & a) ? t._fulfill(o) : t._reject(o))
                }, i.prototype._settlePromiseLateCancellationObserver = function(t) {
                    var e = t.handler,
                        n = t.promise,
                        r = t.receiver,
                        o = t.value;
                    "function" == typeof e ? n instanceof i ? this._settlePromiseFromHandler(e, r, o, n) : e.call(r, o, n) : n instanceof i && n._reject(o)
                }, i.prototype._settlePromiseCtx = function(t) {
                    this._settlePromise(t.promise, t.handler, t.receiver, t.value)
                }, i.prototype._settlePromise0 = function(t, e, n) {
                    var r = this._promise0,
                        i = this._receiverAt(0);
                    this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(r, t, i, e)
                }, i.prototype._clearCallbackDataAtIndex = function(t) {
                    var e = 4 * t - 4;
                    this[e + 2] = this[e + 3] = this[e + 0] = this[e + 1] = void 0
                }, i.prototype._fulfill = function(t) {
                    var e = this._bitField;
                    if (!((117506048 & e) >>> 16)) {
                        if (t === this) {
                            var n = l();
                            return this._attachExtraTrace(n), this._reject(n)
                        }
                        this._setFulfilled(), this._rejectionHandler0 = t, (65535 & e) > 0 && (0 !== (134217728 & e) ? this._settlePromises() : v.settlePromises(this))
                    }
                }, i.prototype._reject = function(t) {
                    var e = this._bitField;
                    if (!((117506048 & e) >>> 16)) return this._setRejected(), this._fulfillmentHandler0 = t, this._isFinal() ? v.fatalError(t, f.isNode) : void((65535 & e) > 0 ? v.settlePromises(this) : this._ensurePossibleRejectionHandled())
                }, i.prototype._fulfillPromises = function(t, e) {
                    for (var n = 1; t > n; n++) {
                        var r = this._fulfillmentHandlerAt(n),
                            i = this._promiseAt(n),
                            o = this._receiverAt(n);
                        this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, e)
                    }
                }, i.prototype._rejectPromises = function(t, e) {
                    for (var n = 1; t > n; n++) {
                        var r = this._rejectionHandlerAt(n),
                            i = this._promiseAt(n),
                            o = this._receiverAt(n);
                        this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, e)
                    }
                }, i.prototype._settlePromises = function() {
                    var t = this._bitField,
                        e = 65535 & t;
                    if (e > 0) {
                        if (0 !== (16842752 & t)) {
                            var n = this._fulfillmentHandler0;
                            this._settlePromise0(this._rejectionHandler0, n, t), this._rejectPromises(e, n)
                        } else {
                            var r = this._rejectionHandler0;
                            this._settlePromise0(this._fulfillmentHandler0, r, t), this._fulfillPromises(e, r)
                        }
                        this._setLength(0)
                    }
                    this._clearCancellationData()
                }, i.prototype._settledValue = function() {
                    var t = this._bitField;
                    return 0 !== (33554432 & t) ? this._rejectionHandler0 : 0 !== (16777216 & t) ? this._fulfillmentHandler0 : void 0
                }, i.defer = i.pending = function() {
                    x.deprecated("Promise.defer", "new Promise");
                    var t = new i(b);
                    return {
                        promise: t,
                        resolve: o,
                        reject: s
                    }
                }, f.notEnumerableProp(i, "_makeSelfResolutionError", l), t("./method")(i, b, j, p, x), t("./bind")(i, b, j, x), t("./cancel")(i, E, p, x), t("./direct_resolve")(i), t("./synchronous_inspection")(i), t("./join")(i, E, j, b, v, c), i.Promise = i, i.version = "3.4.7", t("./map.js")(i, E, p, j, b, x), t("./call_get.js")(i), t("./using.js")(i, p, j, F, b, x), t("./timers.js")(i, b, x), t("./generators.js")(i, p, b, j, n, x), t("./nodeify.js")(i), t("./promisify.js")(i, b), t("./props.js")(i, E, j, p), t("./race.js")(i, b, j, p), t("./reduce.js")(i, E, p, j, b, x), t("./settle.js")(i, E, x), t("./some.js")(i, E, p), t("./filter.js")(i, b), t("./each.js")(i, b), t("./any.js")(i), f.toFastProperties(i), f.toFastProperties(i.prototype), a({
                    a: 1
                }), a({
                    b: 2
                }), a({
                    c: 3
                }), a(1), a(function() {}), a(void 0), a(!1), a(new i(b)), x.setBounds(d.firstLineError, f.lastLineError), i
            }
        }, {
            "./any.js": 1,
            "./async": 2,
            "./bind": 3,
            "./call_get.js": 5,
            "./cancel": 6,
            "./catch_filter": 7,
            "./context": 8,
            "./debuggability": 9,
            "./direct_resolve": 10,
            "./each.js": 11,
            "./errors": 12,
            "./es5": 13,
            "./filter.js": 14,
            "./finally": 15,
            "./generators.js": 16,
            "./join": 17,
            "./map.js": 18,
            "./method": 19,
            "./nodeback": 20,
            "./nodeify.js": 21,
            "./promise_array": 23,
            "./promisify.js": 24,
            "./props.js": 25,
            "./race.js": 27,
            "./reduce.js": 28,
            "./settle.js": 30,
            "./some.js": 31,
            "./synchronous_inspection": 32,
            "./thenables": 33,
            "./timers.js": 34,
            "./using.js": 35,
            "./util": 36
        }],
        23: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i, o) {
                function s(t) {
                    switch (t) {
                        case -2:
                            return [];
                        case -3:
                            return {}
                    }
                }

                function a(t) {
                    var r = this._promise = new e(n);
                    t instanceof e && r._propagateFrom(t, 3), r._setOnCancel(this), this._values = t, this._length = 0, this._totalResolved = 0, this._init(void 0, -2)
                }
                var c = t("./util");
                return c.isArray, c.inherits(a, o), a.prototype.length = function() {
                    return this._length
                }, a.prototype.promise = function() {
                    return this._promise
                }, a.prototype._init = function t(n, o) {
                    var a = r(this._values, this._promise);
                    if (a instanceof e) {
                        a = a._target();
                        var l = a._bitField;
                        if (this._values = a, 0 === (50397184 & l)) return this._promise._setAsyncGuaranteed(), a._then(t, this._reject, void 0, this, o);
                        if (0 === (33554432 & l)) return 0 !== (16777216 & l) ? this._reject(a._reason()) : this._cancel();
                        a = a._value()
                    }
                    if (a = c.asArray(a), null === a) {
                        var u = i("expecting an array or an iterable object but got " + c.classString(a)).reason();
                        return void this._promise._rejectCallback(u, !1)
                    }
                    return 0 === a.length ? void(-5 === o ? this._resolveEmptyArray() : this._resolve(s(o))) : void this._iterate(a)
                }, a.prototype._iterate = function(t) {
                    var n = this.getActualLength(t.length);
                    this._length = n, this._values = this.shouldCopyValues() ? new Array(n) : this._values;
                    for (var i = this._promise, o = !1, s = null, a = 0; n > a; ++a) {
                        var c = r(t[a], i);
                        c instanceof e ? (c = c._target(), s = c._bitField) : s = null, o ? null !== s && c.suppressUnhandledRejections() : null !== s ? 0 === (50397184 & s) ? (c._proxy(this, a), this._values[a] = c) : o = 0 !== (33554432 & s) ? this._promiseFulfilled(c._value(), a) : 0 !== (16777216 & s) ? this._promiseRejected(c._reason(), a) : this._promiseCancelled(a) : o = this._promiseFulfilled(c, a)
                    }
                    o || i._setAsyncGuaranteed()
                }, a.prototype._isResolved = function() {
                    return null === this._values
                }, a.prototype._resolve = function(t) {
                    this._values = null, this._promise._fulfill(t)
                }, a.prototype._cancel = function() {
                    !this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel())
                }, a.prototype._reject = function(t) {
                    this._values = null, this._promise._rejectCallback(t, !1)
                }, a.prototype._promiseFulfilled = function(t, e) {
                    this._values[e] = t;
                    var n = ++this._totalResolved;
                    return n >= this._length && (this._resolve(this._values), !0)
                }, a.prototype._promiseCancelled = function() {
                    return this._cancel(), !0
                }, a.prototype._promiseRejected = function(t) {
                    return this._totalResolved++, this._reject(t), !0
                }, a.prototype._resultCancelled = function() {
                    if (!this._isResolved()) {
                        var t = this._values;
                        if (this._cancel(), t instanceof e) t.cancel();
                        else
                            for (var n = 0; n < t.length; ++n) t[n] instanceof e && t[n].cancel()
                    }
                }, a.prototype.shouldCopyValues = function() {
                    return !0
                }, a.prototype.getActualLength = function(t) {
                    return t
                }, a
            }
        }, {
            "./util": 36
        }],
        24: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n) {
                function r(t) {
                    return !C.test(t)
                }

                function i(t) {
                    try {
                        return t.__isPromisified__ === !0
                    } catch (t) {
                        return !1
                    }
                }

                function o(t, e, n) {
                    var r = f.getDataPropertyOrDefault(t, e + n, b);
                    return !!r && i(r)
                }

                function s(t, e, n) {
                    for (var r = 0; r < t.length; r += 2) {
                        var i = t[r];
                        if (n.test(i))
                            for (var o = i.replace(n, ""), s = 0; s < t.length; s += 2)
                                if (t[s] === o) throw new g("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", e))
                    }
                }

                function a(t, e, n, r) {
                    for (var a = f.inheritedDataKeys(t), c = [], l = 0; l < a.length; ++l) {
                        var u = a[l],
                            p = t[u],
                            h = r === j || j(u, p, t);
                        "function" != typeof p || i(p) || o(t, u, e) || !r(u, p, t, h) || c.push(u, p)
                    }
                    return s(c, e, n), c
                }

                function c(t, r, i, o, s, a) {
                    function c() {
                        var i = r;
                        r === h && (i = this);
                        var o = new e(n);
                        o._captureStackTrace();
                        var s = "string" == typeof u && this !== l ? this[u] : t,
                            c = _(o, a);
                        try {
                            s.apply(i, d(arguments, c))
                        } catch (t) {
                            o._rejectCallback(v(t), !0, !0)
                        }
                        return o._isFateSealed() || o._setAsyncGuaranteed(), o
                    }
                    var l = function() {
                            return this
                        }(),
                        u = t;
                    return "string" == typeof u && (t = o), f.notEnumerableProp(c, "__isPromisified__", !0), c
                }

                function l(t, e, n, r, i) {
                    for (var o = new RegExp(E(e) + "$"), s = a(t, e, o, n), c = 0, l = s.length; l > c; c += 2) {
                        var u = s[c],
                            p = s[c + 1],
                            _ = u + e;
                        if (r === k) t[_] = k(u, h, u, p, e, i);
                        else {
                            var d = r(p, function() {
                                return k(u, h, u, p, e, i)
                            });
                            f.notEnumerableProp(d, "__isPromisified__", !0), t[_] = d
                        }
                    }
                    return f.toFastProperties(t), t
                }

                function u(t, e, n) {
                    return k(t, e, void 0, t, null, n)
                }
                var p, h = {},
                    f = t("./util"),
                    _ = t("./nodeback"),
                    d = f.withAppended,
                    v = f.maybeWrapAsError,
                    y = f.canEvaluate,
                    g = t("./errors").TypeError,
                    m = "Async",
                    b = {
                        __isPromisified__: !0
                    },
                    w = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"],
                    C = new RegExp("^(?:" + w.join("|") + ")$"),
                    j = function(t) {
                        return f.isIdentifier(t) && "_" !== t.charAt(0) && "constructor" !== t
                    },
                    E = function(t) {
                        return t.replace(/([$])/, "\\$")
                    },
                    k = y ? p : c;
                e.promisify = function(t, e) {
                    if ("function" != typeof t) throw new g("expecting a function but got " + f.classString(t));
                    if (i(t)) return t;
                    e = Object(e);
                    var n = void 0 === e.context ? h : e.context,
                        o = !!e.multiArgs,
                        s = u(t, n, o);
                    return f.copyDescriptors(t, s, r), s
                }, e.promisifyAll = function(t, e) {
                    if ("function" != typeof t && "object" != typeof t) throw new g("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
                    e = Object(e);
                    var n = !!e.multiArgs,
                        r = e.suffix;
                    "string" != typeof r && (r = m);
                    var i = e.filter;
                    "function" != typeof i && (i = j);
                    var o = e.promisifier;
                    if ("function" != typeof o && (o = k), !f.isIdentifier(r)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
                    for (var s = f.inheritedDataKeys(t), a = 0; a < s.length; ++a) {
                        var c = t[s[a]];
                        "constructor" !== s[a] && f.isClass(c) && (l(c.prototype, r, i, o, n), l(c, r, i, o, n))
                    }
                    return l(t, r, i, o, n)
                }
            }
        }, {
            "./errors": 12,
            "./nodeback": 20,
            "./util": 36
        }],
        25: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i) {
                function o(t) {
                    var e, n = !1;
                    if (void 0 !== a && t instanceof a) e = p(t), n = !0;
                    else {
                        var r = u.keys(t),
                            i = r.length;
                        e = new Array(2 * i);
                        for (var o = 0; i > o; ++o) {
                            var s = r[o];
                            e[o] = t[s], e[o + i] = s
                        }
                    }
                    this.constructor$(e), this._isMap = n, this._init$(void 0, -3)
                }

                function s(t) {
                    var n, s = r(t);
                    return l(s) ? (n = s instanceof e ? s._then(e.props, void 0, void 0, void 0, void 0) : new o(s).promise(), s instanceof e && n._propagateFrom(s, 2), n) : i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n")
                }
                var a, c = t("./util"),
                    l = c.isObject,
                    u = t("./es5");
                "function" == typeof Map && (a = Map);
                var p = function() {
                        function t(t, r) {
                            this[e] = t, this[e + n] = r, e++
                        }
                        var e = 0,
                            n = 0;
                        return function(r) {
                            n = r.size, e = 0;
                            var i = new Array(2 * r.size);
                            return r.forEach(t, i), i
                        }
                    }(),
                    h = function(t) {
                        for (var e = new a, n = t.length / 2 | 0, r = 0; n > r; ++r) {
                            var i = t[n + r],
                                o = t[r];
                            e.set(i, o)
                        }
                        return e
                    };
                c.inherits(o, n), o.prototype._init = function() {}, o.prototype._promiseFulfilled = function(t, e) {
                    this._values[e] = t;
                    var n = ++this._totalResolved;
                    if (n >= this._length) {
                        var r;
                        if (this._isMap) r = h(this._values);
                        else {
                            r = {};
                            for (var i = this.length(), o = 0, s = this.length(); s > o; ++o) r[this._values[o + i]] = this._values[o]
                        }
                        return this._resolve(r), !0
                    }
                    return !1
                }, o.prototype.shouldCopyValues = function() {
                    return !1
                }, o.prototype.getActualLength = function(t) {
                    return t >> 1
                }, e.prototype.props = function() {
                    return s(this)
                }, e.props = function(t) {
                    return s(t)
                }
            }
        }, {
            "./es5": 13,
            "./util": 36
        }],
        26: [function(t, e, n) {
            "use strict";

            function r(t, e, n, r, i) {
                for (var o = 0; i > o; ++o) n[o + r] = t[o + e], t[o + e] = void 0
            }

            function i(t) {
                this._capacity = t, this._length = 0, this._front = 0
            }
            i.prototype._willBeOverCapacity = function(t) {
                return this._capacity < t
            }, i.prototype._pushOne = function(t) {
                var e = this.length();
                this._checkCapacity(e + 1);
                var n = this._front + e & this._capacity - 1;
                this[n] = t, this._length = e + 1
            }, i.prototype.push = function(t, e, n) {
                var r = this.length() + 3;
                if (this._willBeOverCapacity(r)) return this._pushOne(t), this._pushOne(e), void this._pushOne(n);
                var i = this._front + r - 3;
                this._checkCapacity(r);
                var o = this._capacity - 1;
                this[i + 0 & o] = t, this[i + 1 & o] = e, this[i + 2 & o] = n, this._length = r
            }, i.prototype.shift = function() {
                var t = this._front,
                    e = this[t];
                return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, e
            }, i.prototype.length = function() {
                return this._length
            }, i.prototype._checkCapacity = function(t) {
                this._capacity < t && this._resizeTo(this._capacity << 1)
            }, i.prototype._resizeTo = function(t) {
                var e = this._capacity;
                this._capacity = t;
                var n = this._front,
                    i = this._length,
                    o = n + i & e - 1;
                r(this, 0, this, e, o)
            }, e.exports = i
        }, {}],
        27: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i) {
                function o(t, o) {
                    var c = r(t);
                    if (c instanceof e) return a(c);
                    if (t = s.asArray(t), null === t) return i("expecting an array or an iterable object but got " + s.classString(t));
                    var l = new e(n);
                    void 0 !== o && l._propagateFrom(o, 3);
                    for (var u = l._fulfill, p = l._reject, h = 0, f = t.length; f > h; ++h) {
                        var _ = t[h];
                        (void 0 !== _ || h in t) && e.cast(_)._then(u, p, void 0, l, null)
                    }
                    return l
                }
                var s = t("./util"),
                    a = function(t) {
                        return t.then(function(e) {
                            return o(e, t)
                        })
                    };
                e.race = function(t) {
                    return o(t, void 0)
                }, e.prototype.race = function() {
                    return o(this, void 0)
                }
            }
        }, {
            "./util": 36
        }],
        28: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i, o, s) {
                function a(t, n, r, i) {
                    this.constructor$(t);
                    var s = h();
                    this._fn = null === s ? n : f.domainBind(s, n), void 0 !== r && (r = e.resolve(r), r._attachCancellationCallback(this)), this._initialValue = r, this._currentCancellable = null, i === o ? this._eachValues = Array(this._length) : 0 === i ? this._eachValues = null : this._eachValues = void 0, this._promise._captureStackTrace(), this._init$(void 0, -5)
                }

                function c(t, e) {
                    this.isFulfilled() ? e._resolve(t) : e._reject(t)
                }

                function l(t, e, n, i) {
                    if ("function" != typeof e) return r("expecting a function but got " + f.classString(e));
                    var o = new a(t, e, n, i);
                    return o.promise()
                }

                function u(t) {
                    this.accum = t, this.array._gotAccum(t);
                    var n = i(this.value, this.array._promise);
                    return n instanceof e ? (this.array._currentCancellable = n, n._then(p, void 0, void 0, this, void 0)) : p.call(this, n)
                }

                function p(t) {
                    var n = this.array,
                        r = n._promise,
                        i = _(n._fn);
                    r._pushContext();
                    var o;
                    o = void 0 !== n._eachValues ? i.call(r._boundValue(), t, this.index, this.length) : i.call(r._boundValue(), this.accum, t, this.index, this.length), o instanceof e && (n._currentCancellable = o);
                    var a = r._popContext();
                    return s.checkForgottenReturns(o, a, void 0 !== n._eachValues ? "Promise.each" : "Promise.reduce", r), o
                }
                var h = e._getDomain,
                    f = t("./util"),
                    _ = f.tryCatch;
                f.inherits(a, n), a.prototype._gotAccum = function(t) {
                    void 0 !== this._eachValues && null !== this._eachValues && t !== o && this._eachValues.push(t)
                }, a.prototype._eachComplete = function(t) {
                    return null !== this._eachValues && this._eachValues.push(t), this._eachValues
                }, a.prototype._init = function() {}, a.prototype._resolveEmptyArray = function() {
                    this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue)
                }, a.prototype.shouldCopyValues = function() {
                    return !1
                }, a.prototype._resolve = function(t) {
                    this._promise._resolveCallback(t), this._values = null
                }, a.prototype._resultCancelled = function(t) {
                    return t === this._initialValue ? this._cancel() : void(this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof e && this._currentCancellable.cancel(), this._initialValue instanceof e && this._initialValue.cancel()))
                }, a.prototype._iterate = function(t) {
                    this._values = t;
                    var n, r, i = t.length;
                    if (void 0 !== this._initialValue ? (n = this._initialValue, r = 0) : (n = e.resolve(t[0]), r = 1), this._currentCancellable = n, !n.isRejected())
                        for (; i > r; ++r) {
                            var o = {
                                accum: null,
                                value: t[r],
                                index: r,
                                length: i,
                                array: this
                            };
                            n = n._then(u, void 0, void 0, o, void 0)
                        }
                    void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)), n._then(c, c, void 0, n, this)
                }, e.prototype.reduce = function(t, e) {
                    return l(this, t, e, null)
                }, e.reduce = function(t, e, n, r) {
                    return l(t, e, n, r)
                }
            }
        }, {
            "./util": 36
        }],
        29: [function(t, e, n) {
            "use strict";
            var r, i = t("./util"),
                o = function() {
                    throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
                },
                s = i.getNativePromise();
            if (i.isNode && "undefined" == typeof MutationObserver) {
                var a = global.setImmediate,
                    c = process.nextTick;
                r = i.isRecentNode ? function(t) {
                    a.call(global, t)
                } : function(t) {
                    c.call(process, t)
                }
            } else if ("function" == typeof s && "function" == typeof s.resolve) {
                var l = s.resolve();
                r = function(t) {
                    l.then(t)
                }
            } else r = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? "undefined" != typeof setImmediate ? function(t) {
                setImmediate(t)
            } : "undefined" != typeof setTimeout ? function(t) {
                setTimeout(t, 0)
            } : o : function() {
                var t = document.createElement("div"),
                    e = {
                        attributes: !0
                    },
                    n = !1,
                    r = document.createElement("div"),
                    i = new MutationObserver(function() {
                        t.classList.toggle("foo"), n = !1
                    });
                i.observe(r, e);
                var o = function() {
                    n || (n = !0, r.classList.toggle("foo"))
                };
                return function(n) {
                    var r = new MutationObserver(function() {
                        r.disconnect(), n()
                    });
                    r.observe(t, e), o()
                }
            }();
            e.exports = r
        }, {
            "./util": 36
        }],
        30: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r) {
                function i(t) {
                    this.constructor$(t)
                }
                var o = e.PromiseInspection,
                    s = t("./util");
                s.inherits(i, n), i.prototype._promiseResolved = function(t, e) {
                    this._values[t] = e;
                    var n = ++this._totalResolved;
                    return n >= this._length && (this._resolve(this._values), !0)
                }, i.prototype._promiseFulfilled = function(t, e) {
                    var n = new o;
                    return n._bitField = 33554432, n._settledValueField = t, this._promiseResolved(e, n)
                }, i.prototype._promiseRejected = function(t, e) {
                    var n = new o;
                    return n._bitField = 16777216, n._settledValueField = t, this._promiseResolved(e, n)
                }, e.settle = function(t) {
                    return r.deprecated(".settle()", ".reflect()"), new i(t).promise()
                }, e.prototype.settle = function() {
                    return e.settle(this)
                }
            }
        }, {
            "./util": 36
        }],
        31: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r) {
                function i(t) {
                    this.constructor$(t), this._howMany = 0, this._unwrap = !1, this._initialized = !1
                }

                function o(t, e) {
                    if ((0 | e) !== e || 0 > e) return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
                    var n = new i(t),
                        o = n.promise();
                    return n.setHowMany(e), n.init(), o
                }
                var s = t("./util"),
                    a = t("./errors").RangeError,
                    c = t("./errors").AggregateError,
                    l = s.isArray,
                    u = {};
                s.inherits(i, n), i.prototype._init = function() {
                    if (this._initialized) {
                        if (0 === this._howMany) return void this._resolve([]);
                        this._init$(void 0, -5);
                        var t = l(this._values);
                        !this._isResolved() && t && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))
                    }
                }, i.prototype.init = function() {
                    this._initialized = !0, this._init()
                }, i.prototype.setUnwrap = function() {
                    this._unwrap = !0
                }, i.prototype.howMany = function() {
                    return this._howMany
                }, i.prototype.setHowMany = function(t) {
                    this._howMany = t
                }, i.prototype._promiseFulfilled = function(t) {
                    return this._addFulfilled(t), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), !0)
                }, i.prototype._promiseRejected = function(t) {
                    return this._addRejected(t), this._checkOutcome()
                }, i.prototype._promiseCancelled = function() {
                    return this._values instanceof e || null == this._values ? this._cancel() : (this._addRejected(u), this._checkOutcome())
                }, i.prototype._checkOutcome = function() {
                    if (this.howMany() > this._canPossiblyFulfill()) {
                        for (var t = new c, e = this.length(); e < this._values.length; ++e) this._values[e] !== u && t.push(this._values[e]);
                        return t.length > 0 ? this._reject(t) : this._cancel(), !0
                    }
                    return !1
                }, i.prototype._fulfilled = function() {
                    return this._totalResolved
                }, i.prototype._rejected = function() {
                    return this._values.length - this.length()
                }, i.prototype._addRejected = function(t) {
                    this._values.push(t)
                }, i.prototype._addFulfilled = function(t) {
                    this._values[this._totalResolved++] = t
                }, i.prototype._canPossiblyFulfill = function() {
                    return this.length() - this._rejected()
                }, i.prototype._getRangeError = function(t) {
                    var e = "Input array must contain at least " + this._howMany + " items but contains only " + t + " items";
                    return new a(e)
                }, i.prototype._resolveEmptyArray = function() {
                    this._reject(this._getRangeError(0))
                }, e.some = function(t, e) {
                    return o(t, e)
                }, e.prototype.some = function(t) {
                    return o(this, t)
                }, e._SomePromiseArray = i
            }
        }, {
            "./errors": 12,
            "./util": 36
        }],
        32: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                function e(t) {
                    void 0 !== t ? (t = t._target(), this._bitField = t._bitField, this._settledValueField = t._isFateSealed() ? t._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0)
                }
                e.prototype._settledValue = function() {
                    return this._settledValueField
                };
                var n = e.prototype.value = function() {
                        if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
                        return this._settledValue()
                    },
                    r = e.prototype.error = e.prototype.reason = function() {
                        if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
                        return this._settledValue()
                    },
                    i = e.prototype.isFulfilled = function() {
                        return 0 !== (33554432 & this._bitField)
                    },
                    o = e.prototype.isRejected = function() {
                        return 0 !== (16777216 & this._bitField)
                    },
                    s = e.prototype.isPending = function() {
                        return 0 === (50397184 & this._bitField)
                    },
                    a = e.prototype.isResolved = function() {
                        return 0 !== (50331648 & this._bitField)
                    };
                e.prototype.isCancelled = function() {
                    return 0 !== (8454144 & this._bitField)
                }, t.prototype.__isCancelled = function() {
                    return 65536 === (65536 & this._bitField)
                }, t.prototype._isCancelled = function() {
                    return this._target().__isCancelled()
                }, t.prototype.isCancelled = function() {
                    return 0 !== (8454144 & this._target()._bitField)
                }, t.prototype.isPending = function() {
                    return s.call(this._target())
                }, t.prototype.isRejected = function() {
                    return o.call(this._target())
                }, t.prototype.isFulfilled = function() {
                    return i.call(this._target())
                }, t.prototype.isResolved = function() {
                    return a.call(this._target())
                }, t.prototype.value = function() {
                    return n.call(this._target())
                }, t.prototype.reason = function() {
                    var t = this._target();
                    return t._unsetRejectionIsUnhandled(), r.call(t)
                }, t.prototype._value = function() {
                    return this._settledValue()
                }, t.prototype._reason = function() {
                    return this._unsetRejectionIsUnhandled(), this._settledValue()
                }, t.PromiseInspection = e
            }
        }, {}],
        33: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n) {
                function r(t, r) {
                    if (u(t)) {
                        if (t instanceof e) return t;
                        var i = o(t);
                        if (i === l) {
                            r && r._pushContext();
                            var c = e.reject(i.e);
                            return r && r._popContext(), c
                        }
                        if ("function" == typeof i) {
                            if (s(t)) {
                                var c = new e(n);
                                return t._then(c._fulfill, c._reject, void 0, c, null), c
                            }
                            return a(t, i, r)
                        }
                    }
                    return t
                }

                function i(t) {
                    return t.then
                }

                function o(t) {
                    try {
                        return i(t)
                    } catch (t) {
                        return l.e = t, l
                    }
                }

                function s(t) {
                    try {
                        return p.call(t, "_promise0")
                    } catch (t) {
                        return !1
                    }
                }

                function a(t, r, i) {
                    function o(t) {
                        a && (a._resolveCallback(t), a = null)
                    }

                    function s(t) {
                        a && (a._rejectCallback(t, p, !0), a = null)
                    }
                    var a = new e(n),
                        u = a;
                    i && i._pushContext(), a._captureStackTrace(), i && i._popContext();
                    var p = !0,
                        h = c.tryCatch(r).call(t, o, s);
                    return p = !1, a && h === l && (a._rejectCallback(h.e, !0, !0), a = null), u
                }
                var c = t("./util"),
                    l = c.errorObj,
                    u = c.isObject,
                    p = {}.hasOwnProperty;
                return r
            }
        }, {
            "./util": 36
        }],
        34: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r) {
                function i(t) {
                    this.handle = t
                }

                function o(t) {
                    return clearTimeout(this.handle), t
                }

                function s(t) {
                    throw clearTimeout(this.handle), t
                }
                var a = t("./util"),
                    c = e.TimeoutError;
                i.prototype._resultCancelled = function() {
                    clearTimeout(this.handle)
                };
                var l = function(t) {
                        return u(+this).thenReturn(t)
                    },
                    u = e.delay = function(t, o) {
                        var s, a;
                        return void 0 !== o ? (s = e.resolve(o)._then(l, null, null, t, void 0), r.cancellation() && o instanceof e && s._setOnCancel(o)) : (s = new e(n), a = setTimeout(function() {
                            s._fulfill()
                        }, +t), r.cancellation() && s._setOnCancel(new i(a)), s._captureStackTrace()), s._setAsyncGuaranteed(), s
                    };
                e.prototype.delay = function(t) {
                    return u(t, this)
                };
                var p = function(t, e, n) {
                    var r;
                    r = "string" != typeof e ? e instanceof Error ? e : new c("operation timed out") : new c(e), a.markAsOriginatingFromRejection(r), t._attachExtraTrace(r), t._reject(r), null != n && n.cancel()
                };
                e.prototype.timeout = function(t, e) {
                    t = +t;
                    var n, a, c = new i(setTimeout(function() {
                        n.isPending() && p(n, e, a)
                    }, t));
                    return r.cancellation() ? (a = this.then(), n = a._then(o, s, void 0, c, void 0), n._setOnCancel(c)) : n = this._then(o, s, void 0, c, void 0), n
                }
            }
        }, {
            "./util": 36
        }],
        35: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i, o, s) {
                function a(t) {
                    setTimeout(function() {
                        throw t
                    }, 0)
                }

                function c(t) {
                    var e = r(t);
                    return e !== t && "function" == typeof t._isDisposable && "function" == typeof t._getDisposer && t._isDisposable() && e._setDisposable(t._getDisposer()), e
                }

                function l(t, n) {
                    function i() {
                        if (s >= l) return u._fulfill();
                        var o = c(t[s++]);
                        if (o instanceof e && o._isDisposable()) {
                            try {
                                o = r(o._getDisposer().tryDispose(n), t.promise)
                            } catch (t) {
                                return a(t)
                            }
                            if (o instanceof e) return o._then(i, a, null, null, null)
                        }
                        i()
                    }
                    var s = 0,
                        l = t.length,
                        u = new e(o);
                    return i(), u
                }

                function u(t, e, n) {
                    this._data = t, this._promise = e, this._context = n
                }

                function p(t, e, n) {
                    this.constructor$(t, e, n)
                }

                function h(t) {
                    return u.isDisposer(t) ? (this.resources[this.index]._setDisposable(t), t.promise()) : t
                }

                function f(t) {
                    this.length = t, this.promise = null, this[t - 1] = null
                }
                var _ = t("./util"),
                    d = t("./errors").TypeError,
                    v = t("./util").inherits,
                    y = _.errorObj,
                    g = _.tryCatch,
                    m = {};
                u.prototype.data = function() {
                    return this._data
                }, u.prototype.promise = function() {
                    return this._promise
                }, u.prototype.resource = function() {
                    return this.promise().isFulfilled() ? this.promise().value() : m
                }, u.prototype.tryDispose = function(t) {
                    var e = this.resource(),
                        n = this._context;
                    void 0 !== n && n._pushContext();
                    var r = e !== m ? this.doDispose(e, t) : null;
                    return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, r
                }, u.isDisposer = function(t) {
                    return null != t && "function" == typeof t.resource && "function" == typeof t.tryDispose
                }, v(p, u), p.prototype.doDispose = function(t, e) {
                    var n = this.data();
                    return n.call(t, t, e)
                }, f.prototype._resultCancelled = function() {
                    for (var t = this.length, n = 0; t > n; ++n) {
                        var r = this[n];
                        r instanceof e && r.cancel()
                    }
                }, e.using = function() {
                    var t = arguments.length;
                    if (2 > t) return n("you must pass at least 2 arguments to Promise.using");
                    var i = arguments[t - 1];
                    if ("function" != typeof i) return n("expecting a function but got " + _.classString(i));
                    var o, a = !0;
                    2 === t && Array.isArray(arguments[0]) ? (o = arguments[0], t = o.length, a = !1) : (o = arguments, t--);
                    for (var c = new f(t), p = 0; t > p; ++p) {
                        var d = o[p];
                        if (u.isDisposer(d)) {
                            var v = d;
                            d = d.promise(), d._setDisposable(v)
                        } else {
                            var m = r(d);
                            m instanceof e && (d = m._then(h, null, null, {
                                resources: c,
                                index: p
                            }, void 0))
                        }
                        c[p] = d
                    }
                    for (var b = new Array(c.length), p = 0; p < b.length; ++p) b[p] = e.resolve(c[p]).reflect();
                    var w = e.all(b).then(function(t) {
                            for (var e = 0; e < t.length; ++e) {
                                var n = t[e];
                                if (n.isRejected()) return y.e = n.error(), y;
                                if (!n.isFulfilled()) return void w.cancel();
                                t[e] = n.value()
                            }
                            C._pushContext(), i = g(i);
                            var r = a ? i.apply(void 0, t) : i(t),
                                o = C._popContext();
                            return s.checkForgottenReturns(r, o, "Promise.using", C), r
                        }),
                        C = w.lastly(function() {
                            var t = new e.PromiseInspection(w);
                            return l(c, t)
                        });
                    return c.promise = C, C._setOnCancel(c), C
                }, e.prototype._setDisposable = function(t) {
                    this._bitField = 131072 | this._bitField, this._disposer = t
                }, e.prototype._isDisposable = function() {
                    return (131072 & this._bitField) > 0
                }, e.prototype._getDisposer = function() {
                    return this._disposer
                }, e.prototype._unsetDisposable = function() {
                    this._bitField = -131073 & this._bitField, this._disposer = void 0
                }, e.prototype.disposer = function(t) {
                    if ("function" == typeof t) return new p(t, this, i());
                    throw new d
                }
            }
        }, {
            "./errors": 12,
            "./util": 36
        }],
        36: [function(t, e, n) {
            "use strict";

            function r() {
                try {
                    var t = F;
                    return F = null, t.apply(this, arguments)
                } catch (t) {
                    return P.e = t, P
                }
            }

            function i(t) {
                return F = t, r
            }

            function o(t) {
                return null == t || t === !0 || t === !1 || "string" == typeof t || "number" == typeof t
            }

            function s(t) {
                return "function" == typeof t || "object" == typeof t && null !== t
            }

            function a(t) {
                return o(t) ? new Error(v(t)) : t
            }

            function c(t, e) {
                var n, r = t.length,
                    i = new Array(r + 1);
                for (n = 0; r > n; ++n) i[n] = t[n];
                return i[n] = e, i
            }

            function l(t, e, n) {
                if (!x.isES5) return {}.hasOwnProperty.call(t, e) ? t[e] : void 0;
                var r = Object.getOwnPropertyDescriptor(t, e);
                return null != r ? null == r.get && null == r.set ? r.value : n : void 0
            }

            function u(t, e, n) {
                if (o(t)) return t;
                var r = {
                    value: n,
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                };
                return x.defineProperty(t, e, r), t
            }

            function p(t) {
                throw t
            }

            function h(t) {
                try {
                    if ("function" == typeof t) {
                        var e = x.names(t.prototype),
                            n = x.isES5 && e.length > 1,
                            r = e.length > 0 && !(1 === e.length && "constructor" === e[0]),
                            i = A.test(t + "") && x.names(t).length > 0;
                        if (n || r || i) return !0
                    }
                    return !1
                } catch (t) {
                    return !1
                }
            }

            function f(t) {
                function e() {}
                e.prototype = t;
                for (var n = 8; n--;) new e;
                return t
            }

            function _(t) {
                return D.test(t)
            }

            function d(t, e, n) {
                for (var r = new Array(t), i = 0; t > i; ++i) r[i] = e + i + n;
                return r
            }

            function v(t) {
                try {
                    return t + ""
                } catch (t) {
                    return "[no string representation]"
                }
            }

            function y(t) {
                return null !== t && "object" == typeof t && "string" == typeof t.message && "string" == typeof t.name
            }

            function g(t) {
                try {
                    u(t, "isOperational", !0)
                } catch (t) {}
            }

            function m(t) {
                return null != t && (t instanceof Error.__BluebirdErrorTypes__.OperationalError || t.isOperational === !0)
            }

            function b(t) {
                return y(t) && x.propertyIsWritable(t, "stack")
            }

            function w(t) {
                return {}.toString.call(t)
            }

            function C(t, e, n) {
                for (var r = x.names(t), i = 0; i < r.length; ++i) {
                    var o = r[i];
                    if (n(o)) try {
                        x.defineProperty(e, o, x.getDescriptor(t, o))
                    } catch (t) {}
                }
            }

            function j(t) {
                return H ? process.env[t] : void 0
            }

            function E() {
                if ("function" == typeof Promise) try {
                    var t = new Promise(function() {});
                    if ("[object Promise]" === {}.toString.call(t)) return Promise
                } catch (t) {}
            }

            function k(t, e) {
                return t.bind(e)
            }
            var F, x = t("./es5"),
                T = "undefined" == typeof navigator,
                P = {
                    e: {}
                },
                R = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0 !== this ? this : null,
                S = function(t, e) {
                    function n() {
                        this.constructor = t, this.constructor$ = e;
                        for (var n in e.prototype) r.call(e.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = e.prototype[n])
                    }
                    var r = {}.hasOwnProperty;
                    return n.prototype = e.prototype, t.prototype = new n, t.prototype
                },
                O = function() {
                    var t = [Array.prototype, Object.prototype, Function.prototype],
                        e = function(e) {
                            for (var n = 0; n < t.length; ++n)
                                if (t[n] === e) return !0;
                            return !1
                        };
                    if (x.isES5) {
                        var n = Object.getOwnPropertyNames;
                        return function(t) {
                            for (var r = [], i = Object.create(null); null != t && !e(t);) {
                                var o;
                                try {
                                    o = n(t)
                                } catch (t) {
                                    return r
                                }
                                for (var s = 0; s < o.length; ++s) {
                                    var a = o[s];
                                    if (!i[a]) {
                                        i[a] = !0;
                                        var c = Object.getOwnPropertyDescriptor(t, a);
                                        null != c && null == c.get && null == c.set && r.push(a)
                                    }
                                }
                                t = x.getPrototypeOf(t)
                            }
                            return r
                        }
                    }
                    var r = {}.hasOwnProperty;
                    return function(n) {
                        if (e(n)) return [];
                        var i = [];
                        t: for (var o in n)
                            if (r.call(n, o)) i.push(o);
                            else {
                                for (var s = 0; s < t.length; ++s)
                                    if (r.call(t[s], o)) continue t;
                                i.push(o)
                            }
                        return i
                    }
                }(),
                A = /this\s*\.\s*\S+\s*=/,
                D = /^[a-z$_][a-z$_0-9]*$/i,
                V = function() {
                    return "stack" in new Error ? function(t) {
                        return b(t) ? t : new Error(v(t))
                    } : function(t) {
                        if (b(t)) return t;
                        try {
                            throw new Error(v(t))
                        } catch (t) {
                            return t
                        }
                    }
                }(),
                I = function(t) {
                    return x.isArray(t) ? t : null
                };
            if ("undefined" != typeof Symbol && Symbol.iterator) {
                var L = "function" == typeof Array.from ? function(t) {
                    return Array.from(t)
                } : function(t) {
                    for (var e, n = [], r = t[Symbol.iterator](); !(e = r.next()).done;) n.push(e.value);
                    return n
                };
                I = function(t) {
                    return x.isArray(t) ? t : null != t && "function" == typeof t[Symbol.iterator] ? L(t) : null
                }
            }
            var N = "undefined" != typeof process && "[object process]" === w(process).toLowerCase(),
                H = "undefined" != typeof process && "undefined" != typeof process.env,
                B = {
                    isClass: h,
                    isIdentifier: _,
                    inheritedDataKeys: O,
                    getDataPropertyOrDefault: l,
                    thrower: p,
                    isArray: x.isArray,
                    asArray: I,
                    notEnumerableProp: u,
                    isPrimitive: o,
                    isObject: s,
                    isError: y,
                    canEvaluate: T,
                    errorObj: P,
                    tryCatch: i,
                    inherits: S,
                    withAppended: c,
                    maybeWrapAsError: a,
                    toFastProperties: f,
                    filledRange: d,
                    toString: v,
                    canAttachTrace: b,
                    ensureErrorObject: V,
                    originatesFromRejection: m,
                    markAsOriginatingFromRejection: g,
                    classString: w,
                    copyDescriptors: C,
                    hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes,
                    isNode: N,
                    hasEnvVariables: H,
                    env: j,
                    global: R,
                    getNativePromise: E,
                    domainBind: k
                };
            B.isRecentNode = B.isNode && function() {
                var t = process.versions.node.split(".").map(Number);
                return 0 === t[0] && t[1] > 10 || t[0] > 0
            }(), B.isNode && B.toFastProperties(process);
            try {
                throw new Error
            } catch (t) {
                B.lastLineError = t
            }
            e.exports = B
        }, {
            "./es5": 13
        }]
    }, {}, [4])(4)
}), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise),
    function(t) {
        window.NggPaginatedGallery = function(e, n) {
            this.displayed_gallery_id = e, this.container = t(n), this.container_name = n, this.get_displayed_gallery_obj = function() {
                var t = "gallery_" + this.displayed_gallery_id;
                return "undefined" != typeof window.galleries[t] && window.galleries[t]
            }, this.enable_ajax_pagination = function() {
                var e = this;
                t("body").on("click", "a.ngg-browser-prev, a.ngg-browser-next", function(r) {
                    var i = !0;
                    t(this).parents(n).each(function() {
                        return t(this).data("nextgen-gallery-id") != e.displayed_gallery_id || void(i = !1)
                    }), i || (r.preventDefault(), window.ngg_ajax_operaton_count++, t("body, a").css("cursor", "wait"), t.get(t(this).attr("href"), function(n) {
                        if (window.ngg_ajax_operaton_count--, window.ngg_ajax_operaton_count <= 0 && (window.ngg_ajax_operaton_count = 0, t("body, a").css("cursor", "auto")), n) {
                            var r = t(n),
                                i = !1;
                            r.find(e.container_name).each(function() {
                                return !!i || (t(this).data("nextgen-gallery-id") != e.displayed_gallery_id || void(i = t(this)))
                            }), i && e.container.each(function() {
                                var n = t(this);
                                if (n.data("nextgen-gallery-id") != e.displayed_gallery_id) return !0;
                                var r = t(i.html()),
                                    o = r.find("img").toArray().map(function(e) {
                                        return new Promise(function(n, r) {
                                            var i = new Image;
                                            i.src = e.src, t(i).on("load", n)
                                        })
                                    });
                                return Promise.all(o).then(function() {
                                    n.html(r), t(document).trigger("refreshed")
                                }), !0
                            })
                        }
                    }))
                })
            };
            var r = this.get_displayed_gallery_obj();
            r && "undefined" != typeof r.display_settings.ajax_pagination && parseInt(r.display_settings.ajax_pagination) && this.enable_ajax_pagination(), "undefined" == typeof window.ngg_ajax_operation_count && (window.ngg_ajax_operaton_count = 0)
        }
    }(jQuery);
	
	
	
/*function echeck(control, elementId)
{
	var str = control.value;
	if (str.length > 0)
	{
		var at = "@";
		var dot = ".";
		var lat = str.indexOf(at);
		var lstr = str.length;
		var len = str.length;
		if (str.lastIndexOf(dot) == len - 1)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		if (str.indexOf(at) == -1)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		if (str.indexOf(at) == -1 || str.indexOf(at) === 0	|| str.indexOf(at) == lstr)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		if (str.indexOf(dot) == -1 || str.indexOf(dot) === 0 || str.indexOf(dot) == lstr)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		if (str.indexOf(at, (lat + 1)) != -1)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		if (str.substring(lat - 1, lat) == dot	|| str.substring(lat + 1, lat + 2) == dot)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		if (str.indexOf(dot, (lat + 2)) == -1)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		if (str.indexOf(" ") != -1)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}

		var temp = str.substr(lat + 1, lstr);
		var dotoccu = temp.split(".").length - 1;
		var tmp2 = temp.split(".");
		if (dotoccu > 4)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		else
		{
			var t = tmp2[0];
			var len = t.length;
			if (len > 15 || len <= 0)
			{
				if (elementId == undefined || elementId == 'undefined') {}
				else
				{
					document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
				}
				control.focus();
				return false;
			}
			else
			{
				var iChars = "1234567890QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq";
				var value = "";
				var valid = true;
				for ( var j = 0; j < len; j++)
				{
					if (iChars.indexOf(t.charAt(j)) != -1)
					{
						value = value + t.charAt(j);
					}
					else
					{
						valid = false;
					}
				}
				if (!valid)
				{
					if (elementId == undefined || elementId == 'undefined') {}
					else
					{
						document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
					}
					control.focus();
					return false;
				}
			}

			for ( var i = 1; i <= dotoccu; i++)
			{

				var t = tmp2[i];
				var len = t.length;
				if (len > 15 || len <= 0)
				{
					if (elementId == undefined || elementId == 'undefined') {}
					else
					{
						document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
					}
					control.focus();
					return false;
				}
				else
				{
					var iChars = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq";
					var value = "";
					var valid = true;
					for ( var j = 0; j < len; j++)
					{
						if (iChars.indexOf(t.charAt(j)) != -1)
						{
							value = value + t.charAt(j);
						}
						else
						{
							valid = false;
						}
					}
					if (!valid)
					{
						if (elementId == undefined || elementId == 'undefined') {}
						else
						{
							document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
						}
						control.focus();
						return false;
					}
				}

			}
		}
		var arr = new Array();
		arr = str.split("@");
		for ( var i = 0; i < 2; i++)
		{
			var temp1 = arr[i];
			iChars = "1234567890QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq.-_+";
			var value = "";
			var valid = true;

			for ( var o = 0; o < temp1.length; o++)
			{
				if (iChars.indexOf(temp1.charAt(o)) != -1)
				{
					value = value + temp1.charAt(o);
				}
				else
				{
					valid = false;
				}
			}
			if (!valid)
			{
				if (elementId == undefined || elementId == 'undefined') {}
				else
				{
					document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
				}
				control.focus();
				return false;
			}
		}
		if (elementId == undefined || elementId == 'undefined') {} else
		{
			document.getElementById(elementId.id).innerHTML = '';
		}
		return true;
	}
}*/


// Added by Deepika for validation on username
/*function onlyForUserName(control, elementId)
{

	var iChars = "1234567890QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq.-_@+";
	var value = "";
	var valid = true;

	for ( var i = 0; i < control.value.length; i++)
	{
		// jAlert(control.value.charAt(i));
		if (i == 0 &&
			(control.value.charAt(i) == '.'	|| control.value.charAt(i) == '-' || control.value.charAt(i) == '_'))
		{
			valid = false;
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = "1st charater cannot be special charater";
			}
			control.focus();
			return false;
		}
		if (iChars.indexOf(control.value.charAt(i)) != -1)
		{
			value = value + control.value.charAt(i);
		}
		else
		{
			valid = false;
		}
	}
	if (!valid)
	{
		if (elementId == undefined || elementId == 'undefined') {}
		else
		{
			document.getElementById(elementId.id).innerHTML = "Allowed special characters are . - _ + and @";
		}
		control.focus();
		return false;
	}
	else if(control.value.length > 0)
	{
		if (elementId == undefined || elementId == 'undefined') {}
		else
		{
			document.getElementById(elementId.id).innerHTML = '';
		}
		return true;
	}
}*/

/*function multipleEmailcheck(control, elementId)
{
	var str = control;
	if (str.length > 0)
	{
		var at = "@";
		var dot = ".";
		var lat = str.indexOf(at);
		var lstr = str.length;
		var len = str.length;
		if (str.lastIndexOf(dot) == len - 1)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		if (str.indexOf(at) == -1)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		if (str.indexOf(at) == -1 || str.indexOf(at) === 0	|| str.indexOf(at) == lstr)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		if (str.indexOf(dot) == -1 || str.indexOf(dot) === 0 || str.indexOf(dot) == lstr)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		if (str.indexOf(at, (lat + 1)) != -1)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		if (str.substring(lat - 1, lat) == dot	|| str.substring(lat + 1, lat + 2) == dot)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		if (str.indexOf(dot, (lat + 2)) == -1)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		if (str.indexOf(" ") != -1)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}

		var temp = str.substr(lat + 1, lstr);
		var dotoccu = temp.split(".").length - 1;
		var tmp2 = temp.split(".");
		if (dotoccu > 4)
		{
			if (elementId == undefined || elementId == 'undefined') {}
			else
			{
				document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
			}
			control.focus();
			return false;
		}
		else
		{
			for ( var i = 1; i <= dotoccu; i++)
			{
				var t = tmp2[i];
				var len = t.length;
				if (len > 6 || len <= 0)
				{
					if (elementId == undefined || elementId == 'undefined') {}
					else
					{
						document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
					}
					control.focus();
					return false;
				}
				else
				{
					var iChars = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq";
					var value = "";
					var valid = true;
					for ( var j = 0; j < len; j++)
					{
						if (iChars.indexOf(t.charAt(j)) != -1)
						{
							value = value + t.charAt(j);
						}
						else
						{
							valid = false;
						}
					}
					if (!valid)
					{
						if (elementId == undefined || elementId == 'undefined') {}
						else
						{
							document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
						}
						control.focus();
						return false;
					}
				}
			}
		}
		var arr = new Array();
		arr = str.split("@");
		for ( var i = 0; i < 2; i++)
		{
			var temp1 = arr[i];
			iChars = "1234567890QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzasdfghjklpoiuytrewq.-_";
			var value = "";
			var valid = true;

			for ( var o = 0; o < temp1.length; o++)
			{
				if (iChars.indexOf(temp1.charAt(o)) != -1)
				{
					value = value + temp1.charAt(o);
				}
				else
				{
					valid = false;
				}
			}
			if (!valid)
			{
				if (elementId == undefined || elementId == 'undefined') {}
				else
				{
					document.getElementById(elementId.id).innerHTML = 'Invalid Email ID';
				}
				control.focus();
				return false;
			}
		}
		if (elementId == undefined || elementId == 'undefined') {} else
		{
			document.getElementById(elementId.id).innerHTML = '';
		}
		return true;
	}
}*/


All JavaScript code contained in the script element is executed by the browser's JavaScript engine; for example, Firefox's Spidermonkey, Chrome and Opera's V8, or Edge's (IE's) Chakra. Because the primary purpose of JavaScript code is to provide dynamicity to the page, the browser provides an API through a global object that can be used by the JavaScript engine to interact with and modify the page.

JS can modify to any extent only existing or create new objects and not on elements that does not exists : Primary reason why JS is after the body tag

Window - Global object
  document : Property of window object
  
  
global state of the JavaScript application persists in the meantime - 


These two steps

	Building the DOM from HTML
	Executing JavaScript code

are repeated as long as there are HTML elements to process and JavaScript code to execute.

var x = y = 10;

var desiredWidth = 100;
var desiredHeight = 144;

var MainCanvas = document.getElementsByClassName('react-pdf__Page__canvas')

document.getElementById('secondary-document').innerHTML="<canvas id='dtemp' ></canvas>";

var SecondaryCanvas = document.getElementById("dtemp");
var SecondaryCanvas_Context = SecondaryCanvas.getContext ("2d");
SecondaryCanvas_Context.canvas.width = desiredWidth;
SecondaryCanvas_Context.canvas.height = desiredHeight;

var img = new Image();
img.src = MainCanvas.toDataURL('image/png');
SecondaryCanvas_Context.drawImage(img, -400, -300);
var du = SecondaryCanvas.toDataURL();


var imageContentRaw = MainCanvas.getContext('2d').getImageData(x,y,desiredWidth,desiredHeight);
SecondaryCanvas.width = desiredWidth;
SecondaryCanvas.height = desiredHeight;
newcanvas.getContext('2d').putImageData(imageContentRaw, 0, 0);
// get image data (encoded as bas64)
 
 
var img = new Image();
img.src = newcanvas.toDataURL("image/jpeg", 1.0)



var _0xa1b8 = ['charCodeAt', 'push', '0123456789abcdef', 'charAt', 'highOrder', 'lowOrder', 'length'];
(function(_0x10f591, _0x1f3c06) {
    var _0x3d7672 = function(_0x4c996b) {
        while (--_0x4c996b) {
            _0x10f591['push'](_0x10f591['shift']());
        }
    };
    _0x3d7672(++_0x1f3c06);
}(_0xa1b8, 0x138));
var _0x29e5 = function(_0x424607, _0x8fc96e) {
    _0x424607 = _0x424607 - 0x0;
    var _0x1aa830 = _0xa1b8[_0x424607];
    return _0x1aa830;
};
function SHA512(_0x22dabc) {
    function _0x54d52d(_0x22dabc, _0x54d52d) {
        this[_0x29e5('0x0')] = _0x22dabc,
        this[_0x29e5('0x1')] = _0x54d52d;
    }
    var _0xe32ce9, _0x2adc2d, _0x512937, _0x6c486c, _0x3a4bca, _0x3d0f3d, _0x536fbc, _0x234ea5, _0x26c6a0, _0x3f6969, _0x331a2c, _0x39b786, _0x350f3a, _0x3cc93f, _0x4245ca = [new _0x54d52d(0x6a09e667,0xf3bcc908), new _0x54d52d(0xbb67ae85,0x84caa73b), new _0x54d52d(0x3c6ef372,0xfe94f82b), new _0x54d52d(0xa54ff53a,0x5f1d36f1), new _0x54d52d(0x510e527f,0xade682d1), new _0x54d52d(0x9b05688c,0x2b3e6c1f), new _0x54d52d(0x1f83d9ab,0xfb41bd6b), new _0x54d52d(0x5be0cd19,0x137e2179)], _0x21a480 = [new _0x54d52d(0x428a2f98,0xd728ae22), new _0x54d52d(0x71374491,0x23ef65cd), new _0x54d52d(0xb5c0fbcf,0xec4d3b2f), new _0x54d52d(0xe9b5dba5,0x8189dbbc), new _0x54d52d(0x3956c25b,0xf348b538), new _0x54d52d(0x59f111f1,0xb605d019), new _0x54d52d(0x923f82a4,0xaf194f9b), new _0x54d52d(0xab1c5ed5,0xda6d8118), new _0x54d52d(0xd807aa98,0xa3030242), new _0x54d52d(0x12835b01,0x45706fbe), new _0x54d52d(0x243185be,0x4ee4b28c), new _0x54d52d(0x550c7dc3,0xd5ffb4e2), new _0x54d52d(0x72be5d74,0xf27b896f), new _0x54d52d(0x80deb1fe,0x3b1696b1), new _0x54d52d(0x9bdc06a7,0x25c71235), new _0x54d52d(0xc19bf174,0xcf692694), new _0x54d52d(0xe49b69c1,0x9ef14ad2), new _0x54d52d(0xefbe4786,0x384f25e3), new _0x54d52d(0xfc19dc6,0x8b8cd5b5), new _0x54d52d(0x240ca1cc,0x77ac9c65), new _0x54d52d(0x2de92c6f,0x592b0275), new _0x54d52d(0x4a7484aa,0x6ea6e483), new _0x54d52d(0x5cb0a9dc,0xbd41fbd4), new _0x54d52d(0x76f988da,0x831153b5), new _0x54d52d(0x983e5152,0xee66dfab), new _0x54d52d(0xa831c66d,0x2db43210), new _0x54d52d(0xb00327c8,0x98fb213f), new _0x54d52d(0xbf597fc7,0xbeef0ee4), new _0x54d52d(0xc6e00bf3,0x3da88fc2), new _0x54d52d(0xd5a79147,0x930aa725), new _0x54d52d(0x6ca6351,0xe003826f), new _0x54d52d(0x14292967,0xa0e6e70), new _0x54d52d(0x27b70a85,0x46d22ffc), new _0x54d52d(0x2e1b2138,0x5c26c926), new _0x54d52d(0x4d2c6dfc,0x5ac42aed), new _0x54d52d(0x53380d13,0x9d95b3df), new _0x54d52d(0x650a7354,0x8baf63de), new _0x54d52d(0x766a0abb,0x3c77b2a8), new _0x54d52d(0x81c2c92e,0x47edaee6), new _0x54d52d(0x92722c85,0x1482353b), new _0x54d52d(0xa2bfe8a1,0x4cf10364), new _0x54d52d(0xa81a664b,0xbc423001), new _0x54d52d(0xc24b8b70,0xd0f89791), new _0x54d52d(0xc76c51a3,0x654be30), new _0x54d52d(0xd192e819,0xd6ef5218), new _0x54d52d(0xd6990624,0x5565a910), new _0x54d52d(0xf40e3585,0x5771202a), new _0x54d52d(0x106aa070,0x32bbd1b8), new _0x54d52d(0x19a4c116,0xb8d2d0c8), new _0x54d52d(0x1e376c08,0x5141ab53), new _0x54d52d(0x2748774c,0xdf8eeb99), new _0x54d52d(0x34b0bcb5,0xe19b48a8), new _0x54d52d(0x391c0cb3,0xc5c95a63), new _0x54d52d(0x4ed8aa4a,0xe3418acb), new _0x54d52d(0x5b9cca4f,0x7763e373), new _0x54d52d(0x682e6ff3,0xd6b2b8a3), new _0x54d52d(0x748f82ee,0x5defb2fc), new _0x54d52d(0x78a5636f,0x43172f60), new _0x54d52d(0x84c87814,0xa1f0ab72), new _0x54d52d(0x8cc70208,0x1a6439ec), new _0x54d52d(0x90befffa,0x23631e28), new _0x54d52d(0xa4506ceb,0xde82bde9), new _0x54d52d(0xbef9a3f7,0xb2c67915), new _0x54d52d(0xc67178f2,0xe372532b), new _0x54d52d(0xca273ece,0xea26619c), new _0x54d52d(0xd186b8c7,0x21c0c207), new _0x54d52d(0xeada7dd6,0xcde0eb1e), new _0x54d52d(0xf57d4f7f,0xee6ed178), new _0x54d52d(0x6f067aa,0x72176fba), new _0x54d52d(0xa637dc5,0xa2c898a6), new _0x54d52d(0x113f9804,0xbef90dae), new _0x54d52d(0x1b710b35,0x131c471b), new _0x54d52d(0x28db77f5,0x23047d84), new _0x54d52d(0x32caab7b,0x40c72493), new _0x54d52d(0x3c9ebe0a,0x15c9bebc), new _0x54d52d(0x431d67c4,0x9c100d4c), new _0x54d52d(0x4cc5d4be,0xcb3e42b6), new _0x54d52d(0x597f299c,0xfc657e2a), new _0x54d52d(0x5fcb6fab,0x3ad6faec), new _0x54d52d(0x6c44198c,0x4a475817)], _0x75a851 = new Array(0x40), _0x5a2189 = 0x8;
    function _0x5c68c8(_0x22dabc, _0xe32ce9) {
        var _0x2adc2d, _0x512937, _0x6c486c;
        return _0x2adc2d = (0xffff & _0x22dabc[_0x29e5('0x1')]) + (0xffff & _0xe32ce9[_0x29e5('0x1')]),
        _0x6c486c = (0xffff & (_0x512937 = (_0x22dabc[_0x29e5('0x1')] >>> 0x10) + (_0xe32ce9['lowOrder'] >>> 0x10) + (_0x2adc2d >>> 0x10))) << 0x10 | 0xffff & _0x2adc2d,
        _0x2adc2d = (0xffff & _0x22dabc[_0x29e5('0x0')]) + (0xffff & _0xe32ce9[_0x29e5('0x0')]) + (_0x512937 >>> 0x10),
        new _0x54d52d((0xffff & (_0x512937 = (_0x22dabc[_0x29e5('0x0')] >>> 0x10) + (_0xe32ce9['highOrder'] >>> 0x10) + (_0x2adc2d >>> 0x10))) << 0x10 | 0xffff & _0x2adc2d,_0x6c486c);
    }
    function _0x34571c(_0x22dabc, _0xe32ce9, _0x2adc2d, _0x512937) {
        var _0x6c486c, _0x3a4bca, _0x3d0f3d;
        return _0x6c486c = (0xffff & _0x22dabc[_0x29e5('0x1')]) + (0xffff & _0xe32ce9[_0x29e5('0x1')]) + (0xffff & _0x2adc2d[_0x29e5('0x1')]) + (0xffff & _0x512937[_0x29e5('0x1')]),
        _0x3d0f3d = (0xffff & (_0x3a4bca = (_0x22dabc[_0x29e5('0x1')] >>> 0x10) + (_0xe32ce9[_0x29e5('0x1')] >>> 0x10) + (_0x2adc2d['lowOrder'] >>> 0x10) + (_0x512937['lowOrder'] >>> 0x10) + (_0x6c486c >>> 0x10))) << 0x10 | 0xffff & _0x6c486c,
        _0x6c486c = (0xffff & _0x22dabc[_0x29e5('0x0')]) + (0xffff & _0xe32ce9[_0x29e5('0x0')]) + (0xffff & _0x2adc2d[_0x29e5('0x0')]) + (0xffff & _0x512937[_0x29e5('0x0')]) + (_0x3a4bca >>> 0x10),
        new _0x54d52d((0xffff & (_0x3a4bca = (_0x22dabc[_0x29e5('0x0')] >>> 0x10) + (_0xe32ce9[_0x29e5('0x0')] >>> 0x10) + (_0x2adc2d[_0x29e5('0x0')] >>> 0x10) + (_0x512937[_0x29e5('0x0')] >>> 0x10) + (_0x6c486c >>> 0x10))) << 0x10 | 0xffff & _0x6c486c,_0x3d0f3d);
    }
    function _0x257b5f(_0x22dabc, _0xe32ce9, _0x2adc2d, _0x512937, _0x6c486c) {
        var _0x3a4bca, _0x3d0f3d, _0x536fbc;
        return _0x3a4bca = (0xffff & _0x22dabc['lowOrder']) + (0xffff & _0xe32ce9[_0x29e5('0x1')]) + (0xffff & _0x2adc2d['lowOrder']) + (0xffff & _0x512937[_0x29e5('0x1')]) + (0xffff & _0x6c486c[_0x29e5('0x1')]),
        _0x536fbc = (0xffff & (_0x3d0f3d = (_0x22dabc[_0x29e5('0x1')] >>> 0x10) + (_0xe32ce9['lowOrder'] >>> 0x10) + (_0x2adc2d[_0x29e5('0x1')] >>> 0x10) + (_0x512937[_0x29e5('0x1')] >>> 0x10) + (_0x6c486c['lowOrder'] >>> 0x10) + (_0x3a4bca >>> 0x10))) << 0x10 | 0xffff & _0x3a4bca,
        _0x3a4bca = (0xffff & _0x22dabc[_0x29e5('0x0')]) + (0xffff & _0xe32ce9[_0x29e5('0x0')]) + (0xffff & _0x2adc2d[_0x29e5('0x0')]) + (0xffff & _0x512937[_0x29e5('0x0')]) + (0xffff & _0x6c486c['highOrder']) + (_0x3d0f3d >>> 0x10),
        new _0x54d52d((0xffff & (_0x3d0f3d = (_0x22dabc[_0x29e5('0x0')] >>> 0x10) + (_0xe32ce9[_0x29e5('0x0')] >>> 0x10) + (_0x2adc2d[_0x29e5('0x0')] >>> 0x10) + (_0x512937[_0x29e5('0x0')] >>> 0x10) + (_0x6c486c['highOrder'] >>> 0x10) + (_0x3a4bca >>> 0x10))) << 0x10 | 0xffff & _0x3a4bca,_0x536fbc);
    }
    function _0x529dd9(_0x22dabc, _0xe32ce9, _0x2adc2d) {
        return new _0x54d52d(_0x22dabc[_0x29e5('0x0')] & _0xe32ce9[_0x29e5('0x0')] ^ _0x22dabc[_0x29e5('0x0')] & _0x2adc2d[_0x29e5('0x0')] ^ _0xe32ce9[_0x29e5('0x0')] & _0x2adc2d[_0x29e5('0x0')],_0x22dabc['lowOrder'] & _0xe32ce9[_0x29e5('0x1')] ^ _0x22dabc[_0x29e5('0x1')] & _0x2adc2d[_0x29e5('0x1')] ^ _0xe32ce9['lowOrder'] & _0x2adc2d['lowOrder']);
    }
    function _0xeb7d89(_0x22dabc, _0xe32ce9, _0x2adc2d) {
        return new _0x54d52d(_0x22dabc[_0x29e5('0x0')] & _0xe32ce9[_0x29e5('0x0')] ^ ~_0x22dabc[_0x29e5('0x0')] & _0x2adc2d[_0x29e5('0x0')],_0x22dabc[_0x29e5('0x1')] & _0xe32ce9[_0x29e5('0x1')] ^ ~_0x22dabc[_0x29e5('0x1')] & _0x2adc2d['lowOrder']);
    }
    function _0x378f4d(_0x22dabc, _0xe32ce9) {
        return _0xe32ce9 <= 0x20 ? new _0x54d52d(_0x22dabc[_0x29e5('0x0')] >>> _0xe32ce9 | _0x22dabc[_0x29e5('0x1')] << 0x20 - _0xe32ce9,_0x22dabc[_0x29e5('0x1')] >>> _0xe32ce9 | _0x22dabc[_0x29e5('0x0')] << 0x20 - _0xe32ce9) : new _0x54d52d(_0x22dabc['lowOrder'] >>> _0xe32ce9 | _0x22dabc[_0x29e5('0x0')] << 0x20 - _0xe32ce9,_0x22dabc[_0x29e5('0x0')] >>> _0xe32ce9 | _0x22dabc['lowOrder'] << 0x20 - _0xe32ce9);
    }
    function _0x3dd50e(_0x22dabc) {
        var _0xe32ce9 = _0x378f4d(_0x22dabc, 0x1c)
          , _0x2adc2d = _0x378f4d(_0x22dabc, 0x22)
          , _0x512937 = _0x378f4d(_0x22dabc, 0x27);
        return new _0x54d52d(_0xe32ce9['highOrder'] ^ _0x2adc2d[_0x29e5('0x0')] ^ _0x512937[_0x29e5('0x0')],_0xe32ce9[_0x29e5('0x1')] ^ _0x2adc2d[_0x29e5('0x1')] ^ _0x512937['lowOrder']);
    }
    function _0x145314(_0x22dabc) {
        var _0xe32ce9 = _0x378f4d(_0x22dabc, 0xe)
          , _0x2adc2d = _0x378f4d(_0x22dabc, 0x12)
          , _0x512937 = _0x378f4d(_0x22dabc, 0x29);
        return new _0x54d52d(_0xe32ce9['highOrder'] ^ _0x2adc2d[_0x29e5('0x0')] ^ _0x512937[_0x29e5('0x0')],_0xe32ce9[_0x29e5('0x1')] ^ _0x2adc2d[_0x29e5('0x1')] ^ _0x512937['lowOrder']);
    }
    function _0x4ca51c(_0x22dabc) {
        var _0xe32ce9 = _0x378f4d(_0x22dabc, 0x1)
          , _0x2adc2d = _0x378f4d(_0x22dabc, 0x8)
          , _0x512937 = _0x3aa08f(_0x22dabc, 0x7);
        return new _0x54d52d(_0xe32ce9[_0x29e5('0x0')] ^ _0x2adc2d[_0x29e5('0x0')] ^ _0x512937['highOrder'],_0xe32ce9[_0x29e5('0x1')] ^ _0x2adc2d[_0x29e5('0x1')] ^ _0x512937[_0x29e5('0x1')]);
    }
    function _0x3aa08f(_0x22dabc, _0xe32ce9) {
        return _0xe32ce9 <= 0x20 ? new _0x54d52d(_0x22dabc[_0x29e5('0x0')] >>> _0xe32ce9,_0x22dabc[_0x29e5('0x1')] >>> _0xe32ce9 | _0x22dabc[_0x29e5('0x0')] << 0x20 - _0xe32ce9) : new _0x54d52d(0x0,_0x22dabc[_0x29e5('0x0')] << 0x20 - _0xe32ce9);
    }
    _0x22dabc = function(_0x22dabc) {
        return unescape(encodeURIComponent(_0x22dabc));
    }(_0x22dabc),
    strlen = _0x22dabc[_0x29e5('0x2')] * _0x5a2189,
    (_0x22dabc = function(_0x22dabc) {
        for (var _0x54d52d = [], _0xe32ce9 = (0x1 << _0x5a2189) - 0x1, _0x2adc2d = _0x22dabc[_0x29e5('0x2')] * _0x5a2189, _0x512937 = 0x0; _0x512937 < _0x2adc2d; _0x512937 += _0x5a2189)
            _0x54d52d[_0x512937 >> 0x5] |= (_0x22dabc[_0x29e5('0x3')](_0x512937 / _0x5a2189) & _0xe32ce9) << 0x20 - _0x5a2189 - _0x512937 % 0x20;
        return _0x54d52d;
    }(_0x22dabc))[strlen >> 0x5] |= 0x80 << 0x18 - strlen % 0x20,
    _0x22dabc[0x1f + (strlen + 0x80 >> 0xa << 0x5)] = strlen;
    for (var _0x3442b8 = 0x0; _0x3442b8 < _0x22dabc[_0x29e5('0x2')]; _0x3442b8 += 0x20) {
        _0xe32ce9 = _0x4245ca[0x0],
        _0x2adc2d = _0x4245ca[0x1],
        _0x512937 = _0x4245ca[0x2],
        _0x6c486c = _0x4245ca[0x3],
        _0x3a4bca = _0x4245ca[0x4],
        _0x3d0f3d = _0x4245ca[0x5],
        _0x536fbc = _0x4245ca[0x6],
        _0x234ea5 = _0x4245ca[0x7];
        for (var _0x4faaa3 = 0x0; _0x4faaa3 < 0x50; _0x4faaa3++)
            _0x75a851[_0x4faaa3] = _0x4faaa3 < 0x10 ? new _0x54d52d(_0x22dabc[0x2 * _0x4faaa3 + _0x3442b8],_0x22dabc[0x2 * _0x4faaa3 + _0x3442b8 + 0x1]) : _0x34571c((_0x331a2c = _0x75a851[_0x4faaa3 - 0x2],
            _0x39b786 = void 0x0,
            _0x350f3a = void 0x0,
            _0x3cc93f = void 0x0,
            _0x39b786 = _0x378f4d(_0x331a2c, 0x13),
            _0x350f3a = _0x378f4d(_0x331a2c, 0x3d),
            _0x3cc93f = _0x3aa08f(_0x331a2c, 0x6),
            new _0x54d52d(_0x39b786[_0x29e5('0x0')] ^ _0x350f3a[_0x29e5('0x0')] ^ _0x3cc93f[_0x29e5('0x0')],_0x39b786[_0x29e5('0x1')] ^ _0x350f3a[_0x29e5('0x1')] ^ _0x3cc93f['lowOrder'])), _0x75a851[_0x4faaa3 - 0x7], _0x4ca51c(_0x75a851[_0x4faaa3 - 0xf]), _0x75a851[_0x4faaa3 - 0x10]),
            _0x26c6a0 = _0x257b5f(_0x234ea5, _0x145314(_0x3a4bca), _0xeb7d89(_0x3a4bca, _0x3d0f3d, _0x536fbc), _0x21a480[_0x4faaa3], _0x75a851[_0x4faaa3]),
            _0x3f6969 = _0x5c68c8(_0x3dd50e(_0xe32ce9), _0x529dd9(_0xe32ce9, _0x2adc2d, _0x512937)),
            _0x234ea5 = _0x536fbc,
            _0x536fbc = _0x3d0f3d,
            _0x3d0f3d = _0x3a4bca,
            _0x3a4bca = _0x5c68c8(_0x6c486c, _0x26c6a0),
            _0x6c486c = _0x512937,
            _0x512937 = _0x2adc2d,
            _0x2adc2d = _0xe32ce9,
            _0xe32ce9 = _0x5c68c8(_0x26c6a0, _0x3f6969);
        _0x4245ca[0x0] = _0x5c68c8(_0xe32ce9, _0x4245ca[0x0]),
        _0x4245ca[0x1] = _0x5c68c8(_0x2adc2d, _0x4245ca[0x1]),
        _0x4245ca[0x2] = _0x5c68c8(_0x512937, _0x4245ca[0x2]),
        _0x4245ca[0x3] = _0x5c68c8(_0x6c486c, _0x4245ca[0x3]),
        _0x4245ca[0x4] = _0x5c68c8(_0x3a4bca, _0x4245ca[0x4]),
        _0x4245ca[0x5] = _0x5c68c8(_0x3d0f3d, _0x4245ca[0x5]),
        _0x4245ca[0x6] = _0x5c68c8(_0x536fbc, _0x4245ca[0x6]),
        _0x4245ca[0x7] = _0x5c68c8(_0x234ea5, _0x4245ca[0x7]);
    }
    var _0x5bdf1a = [];
    for (_0x3442b8 = 0x0; _0x3442b8 < _0x4245ca[_0x29e5('0x2')]; _0x3442b8++)
        _0x5bdf1a[_0x29e5('0x4')](_0x4245ca[_0x3442b8][_0x29e5('0x0')]),
        _0x5bdf1a[_0x29e5('0x4')](_0x4245ca[_0x3442b8][_0x29e5('0x1')]);
    return function(_0x22dabc) {
        for (var _0x54d52d, _0xe32ce9 = '', _0x2adc2d = 0x4 * _0x22dabc['length'], _0x512937 = 0x0; _0x512937 < _0x2adc2d; _0x512937 += 0x1)
            _0x54d52d = _0x22dabc[_0x512937 >> 0x2] >> 0x8 * (0x3 - _0x512937 % 0x4),
            _0xe32ce9 += _0x29e5('0x5')[_0x29e5('0x6')](_0x54d52d >> 0x4 & 0xf) + _0x29e5('0x5')[_0x29e5('0x6')](0xf & _0x54d52d);
        return _0xe32ce9;
    }(_0x5bdf1a);
}



var _0x1f5e = ['Base64', '_map', 'charAt', 'indexOf', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', 'abs', 'MD5', '_hash', 'floor', '_createHelper', 'HmacMD5', '_createHmacHelper', 'Base', 'EvpKDF', 'hasher', 'create', 'iterations', 'update', 'compute', 'Cipher', '_ENC_XFORM_MODE', '_DEC_XFORM_MODE', 'encrypt', 'decrypt', '_iv', '_prevBlock', 'BlockCipherMode', 'Decryptor', 'Encryptor', '_cipher', 'encryptBlock', 'decryptBlock', 'Pkcs7', 'BlockCipher', '_xformMode', 'createEncryptor', 'createDecryptor', '_minBufferSize', '_mode', 'processBlock', 'unpad', 'CipherParams', 'formatter', 'format', 'OpenSSL', 'ciphertext', 'salt', 'SerializableCipher', 'mode', '_parse', 'kdf', 'PasswordBasedCipher', 'execute', 'keySize', 'ivSize', 'key', '_key', '_nRounds', '_keySchedule', '_doCryptBlock', 'mixIn', 'hasOwnProperty', 'init', 'apply', 'prototype', 'extend', 'toString', 'WordArray', 'words', 'sigBytes', 'stringify', 'clamp', 'length', 'push', 'ceil', 'clone', 'call', 'slice', 'random', 'enc', 'join', 'substr', 'Latin1', 'fromCharCode', 'charCodeAt', 'Utf8', 'Malformed\x20UTF-8\x20data', 'parse', '_data', '_nDataBytes', 'string', 'concat', 'blockSize', 'max', 'min', '_doProcessBlock', 'splice', 'Hasher', 'cfg', 'reset', '_doReset', '_append', '_process', '_doFinalize', 'finalize', 'HMAC', 'algo', 'lib'];
(function(_0x2f3e31, _0x3a89c9) {
    var _0x2c6db2 = function(_0x1fa352) {
        while (--_0x1fa352) {
            _0x2f3e31['push'](_0x2f3e31['shift']());
        }
    };
    _0x2c6db2(++_0x3a89c9);
}(_0x1f5e, 0xa8));
var _0x1752 = function(_0x9ee00d, _0x23c06a) {
    _0x9ee00d = _0x9ee00d - 0x0;
    var _0x3b0bce = _0x1f5e[_0x9ee00d];
    return _0x3b0bce;
};
var CryptoJS = CryptoJS || function(_0x4aeba2, _0x418239) {
    var _0x48784a = {}
      , _0x5f333c = _0x48784a['lib'] = {}
      , _0x4b0b49 = function() {}
      , _0x1d43f8 = _0x5f333c['Base'] = {
        'extend': function(_0xe9725d) {
            _0x4b0b49['prototype'] = this;
            var _0x2f52fa = new _0x4b0b49();
            _0xe9725d && _0x2f52fa[_0x1752('0x0')](_0xe9725d);
            _0x2f52fa[_0x1752('0x1')](_0x1752('0x2')) || (_0x2f52fa[_0x1752('0x2')] = function() {
                _0x2f52fa['$super'][_0x1752('0x2')][_0x1752('0x3')](this, arguments);
            }
            );
            _0x2f52fa[_0x1752('0x2')][_0x1752('0x4')] = _0x2f52fa;
            _0x2f52fa['$super'] = this;
            return _0x2f52fa;
        },
        'create': function() {
            var _0x30a493 = this[_0x1752('0x5')]();
            _0x30a493[_0x1752('0x2')][_0x1752('0x3')](_0x30a493, arguments);
            return _0x30a493;
        },
        'init': function() {},
        'mixIn': function(_0x567dff) {
            for (var _0x1f4415 in _0x567dff)
                _0x567dff[_0x1752('0x1')](_0x1f4415) && (this[_0x1f4415] = _0x567dff[_0x1f4415]);
            _0x567dff['hasOwnProperty'](_0x1752('0x6')) && (this[_0x1752('0x6')] = _0x567dff[_0x1752('0x6')]);
        },
        'clone': function() {
            return this[_0x1752('0x2')]['prototype'][_0x1752('0x5')](this);
        }
    }
      , _0x1d01a7 = _0x5f333c[_0x1752('0x7')] = _0x1d43f8[_0x1752('0x5')]({
        'init': function(_0x485510, _0x5e1145) {
            _0x485510 = this[_0x1752('0x8')] = _0x485510 || [];
            this[_0x1752('0x9')] = _0x5e1145 != _0x418239 ? _0x5e1145 : 0x4 * _0x485510['length'];
        },
        'toString': function(_0x11157d) {
            return (_0x11157d || _0x65b8da)[_0x1752('0xa')](this);
        },
        'concat': function(_0x482cc3) {
            var _0x1f32ee = this['words']
              , _0x50167d = _0x482cc3[_0x1752('0x8')]
              , _0x5b94a2 = this[_0x1752('0x9')];
            _0x482cc3 = _0x482cc3[_0x1752('0x9')];
            this[_0x1752('0xb')]();
            if (_0x5b94a2 % 0x4)
                for (var _0x380136 = 0x0; _0x380136 < _0x482cc3; _0x380136++)
                    _0x1f32ee[_0x5b94a2 + _0x380136 >>> 0x2] |= (_0x50167d[_0x380136 >>> 0x2] >>> 0x18 - 0x8 * (_0x380136 % 0x4) & 0xff) << 0x18 - 0x8 * ((_0x5b94a2 + _0x380136) % 0x4);
            else if (0xffff < _0x50167d[_0x1752('0xc')])
                for (_0x380136 = 0x0; _0x380136 < _0x482cc3; _0x380136 += 0x4)
                    _0x1f32ee[_0x5b94a2 + _0x380136 >>> 0x2] = _0x50167d[_0x380136 >>> 0x2];
            else
                _0x1f32ee[_0x1752('0xd')]['apply'](_0x1f32ee, _0x50167d);
            this[_0x1752('0x9')] += _0x482cc3;
            return this;
        },
        'clamp': function() {
            var _0x4c3363 = this['words']
              , _0x593fa2 = this[_0x1752('0x9')];
            _0x4c3363[_0x593fa2 >>> 0x2] &= 0xffffffff << 0x20 - 0x8 * (_0x593fa2 % 0x4);
            _0x4c3363['length'] = _0x4aeba2[_0x1752('0xe')](_0x593fa2 / 0x4);
        },
        'clone': function() {
            var _0x301067 = _0x1d43f8[_0x1752('0xf')][_0x1752('0x10')](this);
            _0x301067[_0x1752('0x8')] = this[_0x1752('0x8')][_0x1752('0x11')](0x0);
            return _0x301067;
        },
        'random': function(_0x3383fe) {
            for (var _0x2aa1dc = [], _0x2fa7d5 = 0x0; _0x2fa7d5 < _0x3383fe; _0x2fa7d5 += 0x4)
                _0x2aa1dc['push'](0x100000000 * _0x4aeba2[_0x1752('0x12')]() | 0x0);
            return new _0x1d01a7[(_0x1752('0x2'))](_0x2aa1dc,_0x3383fe);
        }
    })
      , _0x336a80 = _0x48784a[_0x1752('0x13')] = {}
      , _0x65b8da = _0x336a80['Hex'] = {
        'stringify': function(_0x2b38bd) {
            var _0x5c7f70 = _0x2b38bd[_0x1752('0x8')];
            _0x2b38bd = _0x2b38bd[_0x1752('0x9')];
            for (var _0x46c451 = [], _0x585714 = 0x0; _0x585714 < _0x2b38bd; _0x585714++) {
                var _0x451772 = _0x5c7f70[_0x585714 >>> 0x2] >>> 0x18 - 0x8 * (_0x585714 % 0x4) & 0xff;
                _0x46c451[_0x1752('0xd')]((_0x451772 >>> 0x4)[_0x1752('0x6')](0x10));
                _0x46c451[_0x1752('0xd')]((_0x451772 & 0xf)[_0x1752('0x6')](0x10));
            }
            return _0x46c451[_0x1752('0x14')]('');
        },
        'parse': function(_0x1eaad9) {
            for (var _0x3076f3 = _0x1eaad9['length'], _0x34f96a = [], _0x382ca3 = 0x0; _0x382ca3 < _0x3076f3; _0x382ca3 += 0x2)
                _0x34f96a[_0x382ca3 >>> 0x3] |= parseInt(_0x1eaad9[_0x1752('0x15')](_0x382ca3, 0x2), 0x10) << 0x18 - 0x4 * (_0x382ca3 % 0x8);
            return new _0x1d01a7[(_0x1752('0x2'))](_0x34f96a,_0x3076f3 / 0x2);
        }
    }
      , _0x48e662 = _0x336a80[_0x1752('0x16')] = {
        'stringify': function(_0x25ae18) {
            var _0x287c9e = _0x25ae18[_0x1752('0x8')];
            _0x25ae18 = _0x25ae18['sigBytes'];
            for (var _0x5664c8 = [], _0x4d54c9 = 0x0; _0x4d54c9 < _0x25ae18; _0x4d54c9++)
                _0x5664c8[_0x1752('0xd')](String[_0x1752('0x17')](_0x287c9e[_0x4d54c9 >>> 0x2] >>> 0x18 - 0x8 * (_0x4d54c9 % 0x4) & 0xff));
            return _0x5664c8[_0x1752('0x14')]('');
        },
        'parse': function(_0x513d28) {
            for (var _0x49646a = _0x513d28['length'], _0xb3f6c5 = [], _0x5b79cd = 0x0; _0x5b79cd < _0x49646a; _0x5b79cd++)
                _0xb3f6c5[_0x5b79cd >>> 0x2] |= (_0x513d28[_0x1752('0x18')](_0x5b79cd) & 0xff) << 0x18 - 0x8 * (_0x5b79cd % 0x4);
            return new _0x1d01a7[(_0x1752('0x2'))](_0xb3f6c5,_0x49646a);
        }
    }
      , _0x4b3202 = _0x336a80[_0x1752('0x19')] = {
        'stringify': function(_0x1358de) {
            try {
                return decodeURIComponent(escape(_0x48e662[_0x1752('0xa')](_0x1358de)));
            } catch (_0x56239b) {
                throw Error(_0x1752('0x1a'));
            }
        },
        'parse': function(_0xcba22f) {
            return _0x48e662[_0x1752('0x1b')](unescape(encodeURIComponent(_0xcba22f)));
        }
    }
      , _0x15d9c9 = _0x5f333c['BufferedBlockAlgorithm'] = _0x1d43f8[_0x1752('0x5')]({
        'reset': function() {
            this[_0x1752('0x1c')] = new _0x1d01a7['init']();
            this[_0x1752('0x1d')] = 0x0;
        },
        '_append': function(_0x22faa9) {
            _0x1752('0x1e') == typeof _0x22faa9 && (_0x22faa9 = _0x4b3202[_0x1752('0x1b')](_0x22faa9));
            this[_0x1752('0x1c')][_0x1752('0x1f')](_0x22faa9);
            this[_0x1752('0x1d')] += _0x22faa9[_0x1752('0x9')];
        },
        '_process': function(_0x2ca745) {
            var _0x2af6c3 = this[_0x1752('0x1c')]
              , _0x30e1ba = _0x2af6c3[_0x1752('0x8')]
              , _0x487ed3 = _0x2af6c3[_0x1752('0x9')]
              , _0xa6a29e = this[_0x1752('0x20')]
              , _0x48e662 = _0x487ed3 / (0x4 * _0xa6a29e)
              , _0x48e662 = _0x2ca745 ? _0x4aeba2[_0x1752('0xe')](_0x48e662) : _0x4aeba2[_0x1752('0x21')]((_0x48e662 | 0x0) - this['_minBufferSize'], 0x0);
            _0x2ca745 = _0x48e662 * _0xa6a29e;
            _0x487ed3 = _0x4aeba2[_0x1752('0x22')](0x4 * _0x2ca745, _0x487ed3);
            if (_0x2ca745) {
                for (var _0x15d9c9 = 0x0; _0x15d9c9 < _0x2ca745; _0x15d9c9 += _0xa6a29e)
                    this[_0x1752('0x23')](_0x30e1ba, _0x15d9c9);
                _0x15d9c9 = _0x30e1ba[_0x1752('0x24')](0x0, _0x2ca745);
                _0x2af6c3[_0x1752('0x9')] -= _0x487ed3;
            }
            return new _0x1d01a7[(_0x1752('0x2'))](_0x15d9c9,_0x487ed3);
        },
        'clone': function() {
            var _0x2b566a = _0x1d43f8[_0x1752('0xf')][_0x1752('0x10')](this);
            _0x2b566a['_data'] = this[_0x1752('0x1c')][_0x1752('0xf')]();
            return _0x2b566a;
        },
        '_minBufferSize': 0x0
    });
    _0x5f333c[_0x1752('0x25')] = _0x15d9c9['extend']({
        'cfg': _0x1d43f8[_0x1752('0x5')](),
        'init': function(_0x19ed40) {
            this[_0x1752('0x26')] = this['cfg'][_0x1752('0x5')](_0x19ed40);
            this[_0x1752('0x27')]();
        },
        'reset': function() {
            _0x15d9c9[_0x1752('0x27')][_0x1752('0x10')](this);
            this[_0x1752('0x28')]();
        },
        'update': function(_0x286b21) {
            this[_0x1752('0x29')](_0x286b21);
            this[_0x1752('0x2a')]();
            return this;
        },
        'finalize': function(_0x595eb1) {
            _0x595eb1 && this[_0x1752('0x29')](_0x595eb1);
            return this[_0x1752('0x2b')]();
        },
        'blockSize': 0x10,
        '_createHelper': function(_0x338709) {
            return function(_0x48e662, _0x1ea48e) {
                return new _0x338709['init'](_0x1ea48e)[_0x1752('0x2c')](_0x48e662);
            }
            ;
        },
        '_createHmacHelper': function(_0x3d00f8) {
            return function(_0x48e662, _0x1a9cc8) {
                return new _0x417ffc[(_0x1752('0x2d'))]['init'](_0x3d00f8,_0x1a9cc8)[_0x1752('0x2c')](_0x48e662);
            }
            ;
        }
    });
    var _0x417ffc = _0x48784a[_0x1752('0x2e')] = {};
    return _0x48784a;
}(Math);
(function() {
    var _0x1b96d1 = CryptoJS
      , _0x2557b7 = _0x1b96d1[_0x1752('0x2f')][_0x1752('0x7')];
    _0x1b96d1[_0x1752('0x13')][_0x1752('0x30')] = {
        'stringify': function(_0x3f7c63) {
            var _0x5c1612 = _0x3f7c63[_0x1752('0x8')]
              , _0x2557b7 = _0x3f7c63[_0x1752('0x9')]
              , _0x58ec41 = this[_0x1752('0x31')];
            _0x3f7c63['clamp']();
            _0x3f7c63 = [];
            for (var _0x6fcc32 = 0x0; _0x6fcc32 < _0x2557b7; _0x6fcc32 += 0x3)
                for (var _0x128e9e = (_0x5c1612[_0x6fcc32 >>> 0x2] >>> 0x18 - 0x8 * (_0x6fcc32 % 0x4) & 0xff) << 0x10 | (_0x5c1612[_0x6fcc32 + 0x1 >>> 0x2] >>> 0x18 - 0x8 * ((_0x6fcc32 + 0x1) % 0x4) & 0xff) << 0x8 | _0x5c1612[_0x6fcc32 + 0x2 >>> 0x2] >>> 0x18 - 0x8 * ((_0x6fcc32 + 0x2) % 0x4) & 0xff, _0x33c39f = 0x0; 0x4 > _0x33c39f && _0x6fcc32 + 0.75 * _0x33c39f < _0x2557b7; _0x33c39f++)
                    _0x3f7c63[_0x1752('0xd')](_0x58ec41[_0x1752('0x32')](_0x128e9e >>> 0x6 * (0x3 - _0x33c39f) & 0x3f));
            if (_0x5c1612 = _0x58ec41[_0x1752('0x32')](0x40))
                for (; _0x3f7c63[_0x1752('0xc')] % 0x4; )
                    _0x3f7c63[_0x1752('0xd')](_0x5c1612);
            return _0x3f7c63[_0x1752('0x14')]('');
        },
        'parse': function(_0x3389a5) {
            var _0x4fcaf9 = _0x3389a5[_0x1752('0xc')]
              , _0x38be15 = this['_map']
              , _0x427133 = _0x38be15['charAt'](0x40);
            _0x427133 && (_0x427133 = _0x3389a5[_0x1752('0x33')](_0x427133),
            -0x1 != _0x427133 && (_0x4fcaf9 = _0x427133));
            for (var _0x427133 = [], _0x9e932e = 0x0, _0x2c24f8 = 0x0; _0x2c24f8 < _0x4fcaf9; _0x2c24f8++)
                if (_0x2c24f8 % 0x4) {
                    var _0x264aa6 = _0x38be15[_0x1752('0x33')](_0x3389a5[_0x1752('0x32')](_0x2c24f8 - 0x1)) << 0x2 * (_0x2c24f8 % 0x4)
                      , _0x44abd6 = _0x38be15['indexOf'](_0x3389a5[_0x1752('0x32')](_0x2c24f8)) >>> 0x6 - 0x2 * (_0x2c24f8 % 0x4);
                    _0x427133[_0x9e932e >>> 0x2] |= (_0x264aa6 | _0x44abd6) << 0x18 - 0x8 * (_0x9e932e % 0x4);
                    _0x9e932e++;
                }
            return _0x2557b7['create'](_0x427133, _0x9e932e);
        },
        '_map': _0x1752('0x34')
    };
}());
(function(_0x357aa9) {
    function _0x2e8666(_0x4be4f6, _0xd2d836, _0x1a2827, _0x139747, _0xcc2111, _0x5ea7e1, _0xa51b67) {
        _0x4be4f6 = _0x4be4f6 + (_0xd2d836 & _0x1a2827 | ~_0xd2d836 & _0x139747) + _0xcc2111 + _0xa51b67;
        return (_0x4be4f6 << _0x5ea7e1 | _0x4be4f6 >>> 0x20 - _0x5ea7e1) + _0xd2d836;
    }
    function _0x1e66aa(_0x322583, _0x32b38a, _0xec9d65, _0x1ce137, _0x59faa1, _0x44b749, _0x379da6) {
        _0x322583 = _0x322583 + (_0x32b38a & _0x1ce137 | _0xec9d65 & ~_0x1ce137) + _0x59faa1 + _0x379da6;
        return (_0x322583 << _0x44b749 | _0x322583 >>> 0x20 - _0x44b749) + _0x32b38a;
    }
    function _0x26d7f1(_0x4cc347, _0x52f63f, _0x57cae8, _0x365f9b, _0x394b53, _0x3c6e78, _0x54152f) {
        _0x4cc347 = _0x4cc347 + (_0x52f63f ^ _0x57cae8 ^ _0x365f9b) + _0x394b53 + _0x54152f;
        return (_0x4cc347 << _0x3c6e78 | _0x4cc347 >>> 0x20 - _0x3c6e78) + _0x52f63f;
    }
    function _0x3e474a(_0xd2474e, _0x36376f, _0x52251e, _0x2eb184, _0x4cb353, _0x35a0a9, _0x3afad6) {
        _0xd2474e = _0xd2474e + (_0x52251e ^ (_0x36376f | ~_0x2eb184)) + _0x4cb353 + _0x3afad6;
        return (_0xd2474e << _0x35a0a9 | _0xd2474e >>> 0x20 - _0x35a0a9) + _0x36376f;
    }
    for (var _0x472f5c = CryptoJS, _0x4caba8 = _0x472f5c[_0x1752('0x2f')], _0x4a1986 = _0x4caba8['WordArray'], _0x2c90b3 = _0x4caba8['Hasher'], _0x4caba8 = _0x472f5c[_0x1752('0x2e')], _0x133139 = [], _0x2e6824 = 0x0; 0x40 > _0x2e6824; _0x2e6824++)
        _0x133139[_0x2e6824] = 0x100000000 * _0x357aa9[_0x1752('0x35')](_0x357aa9['sin'](_0x2e6824 + 0x1)) | 0x0;
    _0x4caba8 = _0x4caba8[_0x1752('0x36')] = _0x2c90b3[_0x1752('0x5')]({
        '_doReset': function() {
            this[_0x1752('0x37')] = new _0x4a1986[(_0x1752('0x2'))]([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
        },
        '_doProcessBlock': function(_0x4e25dc, _0x435a94) {
            for (var _0x24e3cc = 0x0; 0x10 > _0x24e3cc; _0x24e3cc++) {
                var _0x272c00 = _0x435a94 + _0x24e3cc
                  , _0x4348b4 = _0x4e25dc[_0x272c00];
                _0x4e25dc[_0x272c00] = (_0x4348b4 << 0x8 | _0x4348b4 >>> 0x18) & 0xff00ff | (_0x4348b4 << 0x18 | _0x4348b4 >>> 0x8) & 0xff00ff00;
            }
            var _0x24e3cc = this[_0x1752('0x37')]['words']
              , _0x272c00 = _0x4e25dc[_0x435a94 + 0x0]
              , _0x4348b4 = _0x4e25dc[_0x435a94 + 0x1]
              , _0x2febd6 = _0x4e25dc[_0x435a94 + 0x2]
              , _0x5afaaf = _0x4e25dc[_0x435a94 + 0x3]
              , _0x4b8c90 = _0x4e25dc[_0x435a94 + 0x4]
              , _0x4caba8 = _0x4e25dc[_0x435a94 + 0x5]
              , _0x472f5c = _0x4e25dc[_0x435a94 + 0x6]
              , _0x4a1986 = _0x4e25dc[_0x435a94 + 0x7]
              , _0x2c90b3 = _0x4e25dc[_0x435a94 + 0x8]
              , _0x3c402a = _0x4e25dc[_0x435a94 + 0x9]
              , _0x3c0c88 = _0x4e25dc[_0x435a94 + 0xa]
              , _0x4ab7e6 = _0x4e25dc[_0x435a94 + 0xb]
              , _0x357aa9 = _0x4e25dc[_0x435a94 + 0xc]
              , _0x348493 = _0x4e25dc[_0x435a94 + 0xd]
              , _0x7ea936 = _0x4e25dc[_0x435a94 + 0xe]
              , _0x2e6824 = _0x4e25dc[_0x435a94 + 0xf]
              , _0x290b2d = _0x24e3cc[0x0]
              , _0x207a28 = _0x24e3cc[0x1]
              , _0x2af6ab = _0x24e3cc[0x2]
              , _0x24d4dd = _0x24e3cc[0x3]
              , _0x290b2d = _0x2e8666(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x272c00, 0x7, _0x133139[0x0])
              , _0x24d4dd = _0x2e8666(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x4348b4, 0xc, _0x133139[0x1])
              , _0x2af6ab = _0x2e8666(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x2febd6, 0x11, _0x133139[0x2])
              , _0x207a28 = _0x2e8666(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x5afaaf, 0x16, _0x133139[0x3])
              , _0x290b2d = _0x2e8666(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x4b8c90, 0x7, _0x133139[0x4])
              , _0x24d4dd = _0x2e8666(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x4caba8, 0xc, _0x133139[0x5])
              , _0x2af6ab = _0x2e8666(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x472f5c, 0x11, _0x133139[0x6])
              , _0x207a28 = _0x2e8666(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x4a1986, 0x16, _0x133139[0x7])
              , _0x290b2d = _0x2e8666(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x2c90b3, 0x7, _0x133139[0x8])
              , _0x24d4dd = _0x2e8666(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x3c402a, 0xc, _0x133139[0x9])
              , _0x2af6ab = _0x2e8666(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x3c0c88, 0x11, _0x133139[0xa])
              , _0x207a28 = _0x2e8666(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x4ab7e6, 0x16, _0x133139[0xb])
              , _0x290b2d = _0x2e8666(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x357aa9, 0x7, _0x133139[0xc])
              , _0x24d4dd = _0x2e8666(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x348493, 0xc, _0x133139[0xd])
              , _0x2af6ab = _0x2e8666(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x7ea936, 0x11, _0x133139[0xe])
              , _0x207a28 = _0x2e8666(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x2e6824, 0x16, _0x133139[0xf])
              , _0x290b2d = _0x1e66aa(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x4348b4, 0x5, _0x133139[0x10])
              , _0x24d4dd = _0x1e66aa(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x472f5c, 0x9, _0x133139[0x11])
              , _0x2af6ab = _0x1e66aa(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x4ab7e6, 0xe, _0x133139[0x12])
              , _0x207a28 = _0x1e66aa(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x272c00, 0x14, _0x133139[0x13])
              , _0x290b2d = _0x1e66aa(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x4caba8, 0x5, _0x133139[0x14])
              , _0x24d4dd = _0x1e66aa(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x3c0c88, 0x9, _0x133139[0x15])
              , _0x2af6ab = _0x1e66aa(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x2e6824, 0xe, _0x133139[0x16])
              , _0x207a28 = _0x1e66aa(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x4b8c90, 0x14, _0x133139[0x17])
              , _0x290b2d = _0x1e66aa(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x3c402a, 0x5, _0x133139[0x18])
              , _0x24d4dd = _0x1e66aa(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x7ea936, 0x9, _0x133139[0x19])
              , _0x2af6ab = _0x1e66aa(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x5afaaf, 0xe, _0x133139[0x1a])
              , _0x207a28 = _0x1e66aa(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x2c90b3, 0x14, _0x133139[0x1b])
              , _0x290b2d = _0x1e66aa(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x348493, 0x5, _0x133139[0x1c])
              , _0x24d4dd = _0x1e66aa(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x2febd6, 0x9, _0x133139[0x1d])
              , _0x2af6ab = _0x1e66aa(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x4a1986, 0xe, _0x133139[0x1e])
              , _0x207a28 = _0x1e66aa(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x357aa9, 0x14, _0x133139[0x1f])
              , _0x290b2d = _0x26d7f1(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x4caba8, 0x4, _0x133139[0x20])
              , _0x24d4dd = _0x26d7f1(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x2c90b3, 0xb, _0x133139[0x21])
              , _0x2af6ab = _0x26d7f1(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x4ab7e6, 0x10, _0x133139[0x22])
              , _0x207a28 = _0x26d7f1(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x7ea936, 0x17, _0x133139[0x23])
              , _0x290b2d = _0x26d7f1(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x4348b4, 0x4, _0x133139[0x24])
              , _0x24d4dd = _0x26d7f1(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x4b8c90, 0xb, _0x133139[0x25])
              , _0x2af6ab = _0x26d7f1(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x4a1986, 0x10, _0x133139[0x26])
              , _0x207a28 = _0x26d7f1(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x3c0c88, 0x17, _0x133139[0x27])
              , _0x290b2d = _0x26d7f1(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x348493, 0x4, _0x133139[0x28])
              , _0x24d4dd = _0x26d7f1(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x272c00, 0xb, _0x133139[0x29])
              , _0x2af6ab = _0x26d7f1(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x5afaaf, 0x10, _0x133139[0x2a])
              , _0x207a28 = _0x26d7f1(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x472f5c, 0x17, _0x133139[0x2b])
              , _0x290b2d = _0x26d7f1(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x3c402a, 0x4, _0x133139[0x2c])
              , _0x24d4dd = _0x26d7f1(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x357aa9, 0xb, _0x133139[0x2d])
              , _0x2af6ab = _0x26d7f1(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x2e6824, 0x10, _0x133139[0x2e])
              , _0x207a28 = _0x26d7f1(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x2febd6, 0x17, _0x133139[0x2f])
              , _0x290b2d = _0x3e474a(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x272c00, 0x6, _0x133139[0x30])
              , _0x24d4dd = _0x3e474a(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x4a1986, 0xa, _0x133139[0x31])
              , _0x2af6ab = _0x3e474a(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x7ea936, 0xf, _0x133139[0x32])
              , _0x207a28 = _0x3e474a(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x4caba8, 0x15, _0x133139[0x33])
              , _0x290b2d = _0x3e474a(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x357aa9, 0x6, _0x133139[0x34])
              , _0x24d4dd = _0x3e474a(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x5afaaf, 0xa, _0x133139[0x35])
              , _0x2af6ab = _0x3e474a(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x3c0c88, 0xf, _0x133139[0x36])
              , _0x207a28 = _0x3e474a(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x4348b4, 0x15, _0x133139[0x37])
              , _0x290b2d = _0x3e474a(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x2c90b3, 0x6, _0x133139[0x38])
              , _0x24d4dd = _0x3e474a(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x2e6824, 0xa, _0x133139[0x39])
              , _0x2af6ab = _0x3e474a(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x472f5c, 0xf, _0x133139[0x3a])
              , _0x207a28 = _0x3e474a(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x348493, 0x15, _0x133139[0x3b])
              , _0x290b2d = _0x3e474a(_0x290b2d, _0x207a28, _0x2af6ab, _0x24d4dd, _0x4b8c90, 0x6, _0x133139[0x3c])
              , _0x24d4dd = _0x3e474a(_0x24d4dd, _0x290b2d, _0x207a28, _0x2af6ab, _0x4ab7e6, 0xa, _0x133139[0x3d])
              , _0x2af6ab = _0x3e474a(_0x2af6ab, _0x24d4dd, _0x290b2d, _0x207a28, _0x2febd6, 0xf, _0x133139[0x3e])
              , _0x207a28 = _0x3e474a(_0x207a28, _0x2af6ab, _0x24d4dd, _0x290b2d, _0x3c402a, 0x15, _0x133139[0x3f]);
            _0x24e3cc[0x0] = _0x24e3cc[0x0] + _0x290b2d | 0x0;
            _0x24e3cc[0x1] = _0x24e3cc[0x1] + _0x207a28 | 0x0;
            _0x24e3cc[0x2] = _0x24e3cc[0x2] + _0x2af6ab | 0x0;
            _0x24e3cc[0x3] = _0x24e3cc[0x3] + _0x24d4dd | 0x0;
        },
        '_doFinalize': function() {
            var _0x133139 = this['_data']
              , _0x15f755 = _0x133139[_0x1752('0x8')]
              , _0x1b5ee7 = 0x8 * this[_0x1752('0x1d')]
              , _0x33b264 = 0x8 * _0x133139[_0x1752('0x9')];
            _0x15f755[_0x33b264 >>> 0x5] |= 0x80 << 0x18 - _0x33b264 % 0x20;
            var _0x951d31 = _0x357aa9[_0x1752('0x38')](_0x1b5ee7 / 0x100000000);
            _0x15f755[(_0x33b264 + 0x40 >>> 0x9 << 0x4) + 0xf] = (_0x951d31 << 0x8 | _0x951d31 >>> 0x18) & 0xff00ff | (_0x951d31 << 0x18 | _0x951d31 >>> 0x8) & 0xff00ff00;
            _0x15f755[(_0x33b264 + 0x40 >>> 0x9 << 0x4) + 0xe] = (_0x1b5ee7 << 0x8 | _0x1b5ee7 >>> 0x18) & 0xff00ff | (_0x1b5ee7 << 0x18 | _0x1b5ee7 >>> 0x8) & 0xff00ff00;
            _0x133139[_0x1752('0x9')] = 0x4 * (_0x15f755['length'] + 0x1);
            this[_0x1752('0x2a')]();
            _0x133139 = this['_hash'];
            _0x15f755 = _0x133139[_0x1752('0x8')];
            for (_0x1b5ee7 = 0x0; 0x4 > _0x1b5ee7; _0x1b5ee7++)
                _0x33b264 = _0x15f755[_0x1b5ee7],
                _0x15f755[_0x1b5ee7] = (_0x33b264 << 0x8 | _0x33b264 >>> 0x18) & 0xff00ff | (_0x33b264 << 0x18 | _0x33b264 >>> 0x8) & 0xff00ff00;
            return _0x133139;
        },
        'clone': function() {
            var _0x133139 = _0x2c90b3[_0x1752('0xf')][_0x1752('0x10')](this);
            _0x133139[_0x1752('0x37')] = this[_0x1752('0x37')][_0x1752('0xf')]();
            return _0x133139;
        }
    });
    _0x472f5c[_0x1752('0x36')] = _0x2c90b3[_0x1752('0x39')](_0x4caba8);
    _0x472f5c[_0x1752('0x3a')] = _0x2c90b3[_0x1752('0x3b')](_0x4caba8);
}(Math));
(function() {
    var _0x1ae8b0 = CryptoJS
      , _0x3f4c29 = _0x1ae8b0[_0x1752('0x2f')]
      , _0x592d90 = _0x3f4c29[_0x1752('0x3c')]
      , _0x34ad7f = _0x3f4c29[_0x1752('0x7')]
      , _0x3f4c29 = _0x1ae8b0[_0x1752('0x2e')]
      , _0x2f9e44 = _0x3f4c29[_0x1752('0x3d')] = _0x592d90['extend']({
        'cfg': _0x592d90[_0x1752('0x5')]({
            'keySize': 0x4,
            'hasher': _0x3f4c29[_0x1752('0x36')],
            'iterations': 0x1
        }),
        'init': function(_0x592d90) {
            this[_0x1752('0x26')] = this[_0x1752('0x26')][_0x1752('0x5')](_0x592d90);
        },
        'compute': function(_0x592d90, _0x5a884e) {
            for (var _0x3f4c29 = this[_0x1752('0x26')], _0x2f9e44 = _0x3f4c29[_0x1752('0x3e')][_0x1752('0x3f')](), _0x33852f = _0x34ad7f[_0x1752('0x3f')](), _0x1ae8b0 = _0x33852f[_0x1752('0x8')], _0x154de5 = _0x3f4c29['keySize'], _0x3f4c29 = _0x3f4c29[_0x1752('0x40')]; _0x1ae8b0[_0x1752('0xc')] < _0x154de5; ) {
                _0x4483b2 && _0x2f9e44[_0x1752('0x41')](_0x4483b2);
                var _0x4483b2 = _0x2f9e44[_0x1752('0x41')](_0x592d90)[_0x1752('0x2c')](_0x5a884e);
                _0x2f9e44[_0x1752('0x27')]();
                for (var _0x113821 = 0x1; _0x113821 < _0x3f4c29; _0x113821++)
                    _0x4483b2 = _0x2f9e44['finalize'](_0x4483b2),
                    _0x2f9e44[_0x1752('0x27')]();
                _0x33852f[_0x1752('0x1f')](_0x4483b2);
            }
            _0x33852f[_0x1752('0x9')] = 0x4 * _0x154de5;
            return _0x33852f;
        }
    });
    _0x1ae8b0[_0x1752('0x3d')] = function(_0x592d90, _0x34ad7f, _0x3f4c29) {
        return _0x2f9e44[_0x1752('0x3f')](_0x3f4c29)[_0x1752('0x42')](_0x592d90, _0x34ad7f);
    }
    ;
}());
CryptoJS['lib'][_0x1752('0x43')] || function(_0x392643) {
    var _0xd7a51c = CryptoJS
      , _0x1bef11 = _0xd7a51c['lib']
      , _0x593a4c = _0x1bef11[_0x1752('0x3c')]
      , _0x4665a0 = _0x1bef11[_0x1752('0x7')]
      , _0x321589 = _0x1bef11['BufferedBlockAlgorithm']
      , _0xb3088a = _0xd7a51c[_0x1752('0x13')][_0x1752('0x30')]
      , _0x3b66fa = _0xd7a51c['algo'][_0x1752('0x3d')]
      , _0x4d76b9 = _0x1bef11[_0x1752('0x43')] = _0x321589[_0x1752('0x5')]({
        'cfg': _0x593a4c['extend'](),
        'createEncryptor': function(_0x57f6ae, _0x273e5a) {
            return this[_0x1752('0x3f')](this[_0x1752('0x44')], _0x57f6ae, _0x273e5a);
        },
        'createDecryptor': function(_0x264b77, _0x29a29b) {
            return this[_0x1752('0x3f')](this[_0x1752('0x45')], _0x264b77, _0x29a29b);
        },
        'init': function(_0xa0b94, _0x49841b, _0x525b1e) {
            this[_0x1752('0x26')] = this[_0x1752('0x26')][_0x1752('0x5')](_0x525b1e);
            this['_xformMode'] = _0xa0b94;
            this['_key'] = _0x49841b;
            this[_0x1752('0x27')]();
        },
        'reset': function() {
            _0x321589[_0x1752('0x27')][_0x1752('0x10')](this);
            this[_0x1752('0x28')]();
        },
        'process': function(_0xff4b4d) {
            this[_0x1752('0x29')](_0xff4b4d);
            return this[_0x1752('0x2a')]();
        },
        'finalize': function(_0x2655f7) {
            _0x2655f7 && this[_0x1752('0x29')](_0x2655f7);
            return this[_0x1752('0x2b')]();
        },
        'keySize': 0x4,
        'ivSize': 0x4,
        '_ENC_XFORM_MODE': 0x1,
        '_DEC_XFORM_MODE': 0x2,
        '_createHelper': function(_0x5b7b3c) {
            return {
                'encrypt': function(_0x30fba7, _0x5c9a21, _0x1bef11) {
                    return (_0x1752('0x1e') == typeof _0x5c9a21 ? _0x58589e : _0x200c7a)[_0x1752('0x46')](_0x5b7b3c, _0x30fba7, _0x5c9a21, _0x1bef11);
                },
                'decrypt': function(_0x954639, _0x4328f6, _0x1bef11) {
                    return ('string' == typeof _0x4328f6 ? _0x58589e : _0x200c7a)[_0x1752('0x47')](_0x5b7b3c, _0x954639, _0x4328f6, _0x1bef11);
                }
            };
        }
    });
    _0x1bef11['StreamCipher'] = _0x4d76b9[_0x1752('0x5')]({
        '_doFinalize': function() {
            return this[_0x1752('0x2a')](!0x0);
        },
        'blockSize': 0x1
    });
    var _0x389e17 = _0xd7a51c['mode'] = {}
      , _0x5056aa = function(_0xee6147, _0x3f1521, _0x389e17) {
        var _0x3ae055 = this[_0x1752('0x48')];
        _0x3ae055 ? this['_iv'] = _0x392643 : _0x3ae055 = this[_0x1752('0x49')];
        for (var _0x1bef11 = 0x0; _0x1bef11 < _0x389e17; _0x1bef11++)
            _0xee6147[_0x3f1521 + _0x1bef11] ^= _0x3ae055[_0x1bef11];
    }
      , _0xc32db4 = (_0x1bef11[_0x1752('0x4a')] = _0x593a4c[_0x1752('0x5')]({
        'createEncryptor': function(_0xa2e1be, _0x30392d) {
            return this['Encryptor'][_0x1752('0x3f')](_0xa2e1be, _0x30392d);
        },
        'createDecryptor': function(_0x4ea9d5, _0x2a54c6) {
            return this[_0x1752('0x4b')]['create'](_0x4ea9d5, _0x2a54c6);
        },
        'init': function(_0x3fedb3, _0x2a9b64) {
            this['_cipher'] = _0x3fedb3;
            this[_0x1752('0x48')] = _0x2a9b64;
        }
    }))[_0x1752('0x5')]();
    _0xc32db4[_0x1752('0x4c')] = _0xc32db4[_0x1752('0x5')]({
        'processBlock': function(_0x2245a9, _0x2b93c6) {
            var _0x389e17 = this[_0x1752('0x4d')]
              , _0x14647f = _0x389e17[_0x1752('0x20')];
            _0x5056aa[_0x1752('0x10')](this, _0x2245a9, _0x2b93c6, _0x14647f);
            _0x389e17[_0x1752('0x4e')](_0x2245a9, _0x2b93c6);
            this[_0x1752('0x49')] = _0x2245a9[_0x1752('0x11')](_0x2b93c6, _0x2b93c6 + _0x14647f);
        }
    });
    _0xc32db4[_0x1752('0x4b')] = _0xc32db4['extend']({
        'processBlock': function(_0x2f9958, _0x39532e) {
            var _0x389e17 = this[_0x1752('0x4d')]
              , _0x52009c = _0x389e17[_0x1752('0x20')]
              , _0x1bef11 = _0x2f9958['slice'](_0x39532e, _0x39532e + _0x52009c);
            _0x389e17[_0x1752('0x4f')](_0x2f9958, _0x39532e);
            _0x5056aa[_0x1752('0x10')](this, _0x2f9958, _0x39532e, _0x52009c);
            this[_0x1752('0x49')] = _0x1bef11;
        }
    });
    _0x389e17 = _0x389e17['CBC'] = _0xc32db4;
    _0xc32db4 = (_0xd7a51c['pad'] = {})[_0x1752('0x50')] = {
        'pad': function(_0x67e4eb, _0x389e17) {
            for (var _0x5c2a4c = 0x4 * _0x389e17, _0x5c2a4c = _0x5c2a4c - _0x67e4eb[_0x1752('0x9')] % _0x5c2a4c, _0x1bef11 = _0x5c2a4c << 0x18 | _0x5c2a4c << 0x10 | _0x5c2a4c << 0x8 | _0x5c2a4c, _0x593a4c = [], _0x1ab7ba = 0x0; _0x1ab7ba < _0x5c2a4c; _0x1ab7ba += 0x4)
                _0x593a4c[_0x1752('0xd')](_0x1bef11);
            _0x5c2a4c = _0x4665a0[_0x1752('0x3f')](_0x593a4c, _0x5c2a4c);
            _0x67e4eb[_0x1752('0x1f')](_0x5c2a4c);
        },
        'unpad': function(_0x27040d) {
            _0x27040d[_0x1752('0x9')] -= _0x27040d['words'][_0x27040d[_0x1752('0x9')] - 0x1 >>> 0x2] & 0xff;
        }
    };
    _0x1bef11[_0x1752('0x51')] = _0x4d76b9[_0x1752('0x5')]({
        'cfg': _0x4d76b9[_0x1752('0x26')][_0x1752('0x5')]({
            'mode': _0x389e17,
            'padding': _0xc32db4
        }),
        'reset': function() {
            _0x4d76b9[_0x1752('0x27')][_0x1752('0x10')](this);
            var _0x5c0d11 = this['cfg']
              , _0x389e17 = _0x5c0d11['iv']
              , _0x5c0d11 = _0x5c0d11['mode'];
            if (this[_0x1752('0x52')] == this[_0x1752('0x44')])
                var _0x5eccb3 = _0x5c0d11[_0x1752('0x53')];
            else
                _0x5eccb3 = _0x5c0d11[_0x1752('0x54')],
                this[_0x1752('0x55')] = 0x1;
            this['_mode'] = _0x5eccb3[_0x1752('0x10')](_0x5c0d11, this, _0x389e17 && _0x389e17[_0x1752('0x8')]);
        },
        '_doProcessBlock': function(_0x33d89b, _0x389e17) {
            this[_0x1752('0x56')][_0x1752('0x57')](_0x33d89b, _0x389e17);
        },
        '_doFinalize': function() {
            var _0x1a75b4 = this[_0x1752('0x26')]['padding'];
            if (this[_0x1752('0x52')] == this[_0x1752('0x44')]) {
                _0x1a75b4['pad'](this[_0x1752('0x1c')], this[_0x1752('0x20')]);
                var _0x389e17 = this['_process'](!0x0);
            } else
                _0x389e17 = this[_0x1752('0x2a')](!0x0),
                _0x1a75b4[_0x1752('0x58')](_0x389e17);
            return _0x389e17;
        },
        'blockSize': 0x4
    });
    var _0x313979 = _0x1bef11[_0x1752('0x59')] = _0x593a4c[_0x1752('0x5')]({
        'init': function(_0x200c7a) {
            this[_0x1752('0x0')](_0x200c7a);
        },
        'toString': function(_0x200c7a) {
            return (_0x200c7a || this[_0x1752('0x5a')])[_0x1752('0xa')](this);
        }
    })
      , _0x389e17 = (_0xd7a51c[_0x1752('0x5b')] = {})[_0x1752('0x5c')] = {
        'stringify': function(_0x200c7a) {
            var _0x389e17 = _0x200c7a[_0x1752('0x5d')];
            _0x200c7a = _0x200c7a[_0x1752('0x5e')];
            return (_0x200c7a ? _0x4665a0[_0x1752('0x3f')]([0x53616c74, 0x65645f5f])[_0x1752('0x1f')](_0x200c7a)['concat'](_0x389e17) : _0x389e17)['toString'](_0xb3088a);
        },
        'parse': function(_0x200c7a) {
            _0x200c7a = _0xb3088a[_0x1752('0x1b')](_0x200c7a);
            var _0x389e17 = _0x200c7a[_0x1752('0x8')];
            if (0x53616c74 == _0x389e17[0x0] && 0x65645f5f == _0x389e17[0x1]) {
                var _0x58589e = _0x4665a0[_0x1752('0x3f')](_0x389e17[_0x1752('0x11')](0x2, 0x4));
                _0x389e17[_0x1752('0x24')](0x0, 0x4);
                _0x200c7a[_0x1752('0x9')] -= 0x10;
            }
            return _0x313979[_0x1752('0x3f')]({
                'ciphertext': _0x200c7a,
                'salt': _0x58589e
            });
        }
    }
      , _0x200c7a = _0x1bef11[_0x1752('0x5f')] = _0x593a4c[_0x1752('0x5')]({
        'cfg': _0x593a4c[_0x1752('0x5')]({
            'format': _0x389e17
        }),
        'encrypt': function(_0x200c7a, _0x389e17, _0x58589e, _0x1bef11) {
            _0x1bef11 = this[_0x1752('0x26')][_0x1752('0x5')](_0x1bef11);
            var _0x593a4c = _0x200c7a['createEncryptor'](_0x58589e, _0x1bef11);
            _0x389e17 = _0x593a4c[_0x1752('0x2c')](_0x389e17);
            _0x593a4c = _0x593a4c['cfg'];
            return _0x313979[_0x1752('0x3f')]({
                'ciphertext': _0x389e17,
                'key': _0x58589e,
                'iv': _0x593a4c['iv'],
                'algorithm': _0x200c7a,
                'mode': _0x593a4c[_0x1752('0x60')],
                'padding': _0x593a4c['padding'],
                'blockSize': _0x200c7a[_0x1752('0x20')],
                'formatter': _0x1bef11[_0x1752('0x5b')]
            });
        },
        'decrypt': function(_0x200c7a, _0x389e17, _0x58589e, _0x1bef11) {
            _0x1bef11 = this[_0x1752('0x26')][_0x1752('0x5')](_0x1bef11);
            _0x389e17 = this[_0x1752('0x61')](_0x389e17, _0x1bef11['format']);
            return _0x200c7a[_0x1752('0x54')](_0x58589e, _0x1bef11)[_0x1752('0x2c')](_0x389e17['ciphertext']);
        },
        '_parse': function(_0x200c7a, _0x389e17) {
            return _0x1752('0x1e') == typeof _0x200c7a ? _0x389e17['parse'](_0x200c7a, this) : _0x200c7a;
        }
    })
      , _0xd7a51c = (_0xd7a51c[_0x1752('0x62')] = {})['OpenSSL'] = {
        'execute': function(_0x200c7a, _0x389e17, _0x58589e, _0x1bef11) {
            _0x1bef11 || (_0x1bef11 = _0x4665a0[_0x1752('0x12')](0x8));
            _0x200c7a = _0x3b66fa['create']({
                'keySize': _0x389e17 + _0x58589e
            })[_0x1752('0x42')](_0x200c7a, _0x1bef11);
            _0x58589e = _0x4665a0[_0x1752('0x3f')](_0x200c7a[_0x1752('0x8')][_0x1752('0x11')](_0x389e17), 0x4 * _0x58589e);
            _0x200c7a[_0x1752('0x9')] = 0x4 * _0x389e17;
            return _0x313979['create']({
                'key': _0x200c7a,
                'iv': _0x58589e,
                'salt': _0x1bef11
            });
        }
    }
      , _0x58589e = _0x1bef11[_0x1752('0x63')] = _0x200c7a['extend']({
        'cfg': _0x200c7a[_0x1752('0x26')][_0x1752('0x5')]({
            'kdf': _0xd7a51c
        }),
        'encrypt': function(_0x389e17, _0x58589e, _0x1bef11, _0x593a4c) {
            _0x593a4c = this[_0x1752('0x26')][_0x1752('0x5')](_0x593a4c);
            _0x1bef11 = _0x593a4c[_0x1752('0x62')][_0x1752('0x64')](_0x1bef11, _0x389e17[_0x1752('0x65')], _0x389e17[_0x1752('0x66')]);
            _0x593a4c['iv'] = _0x1bef11['iv'];
            _0x389e17 = _0x200c7a[_0x1752('0x46')]['call'](this, _0x389e17, _0x58589e, _0x1bef11[_0x1752('0x67')], _0x593a4c);
            _0x389e17['mixIn'](_0x1bef11);
            return _0x389e17;
        },
        'decrypt': function(_0x389e17, _0x58589e, _0x1bef11, _0x593a4c) {
            _0x593a4c = this[_0x1752('0x26')][_0x1752('0x5')](_0x593a4c);
            _0x58589e = this['_parse'](_0x58589e, _0x593a4c[_0x1752('0x5b')]);
            _0x1bef11 = _0x593a4c['kdf'][_0x1752('0x64')](_0x1bef11, _0x389e17[_0x1752('0x65')], _0x389e17['ivSize'], _0x58589e['salt']);
            _0x593a4c['iv'] = _0x1bef11['iv'];
            return _0x200c7a[_0x1752('0x47')]['call'](this, _0x389e17, _0x58589e, _0x1bef11[_0x1752('0x67')], _0x593a4c);
        }
    });
}();
(function() {
    for (var _0x8e95a4 = CryptoJS, _0x13a23e = _0x8e95a4['lib'][_0x1752('0x51')], _0xc4d29c = _0x8e95a4[_0x1752('0x2e')], _0x3f41e3 = [], _0x5005b8 = [], _0x4b2f75 = [], _0x3ce68f = [], _0x1eb57a = [], _0x28a267 = [], _0x400e2e = [], _0x448beb = [], _0x514db3 = [], _0x1dc275 = [], _0x1db032 = [], _0x3f065f = 0x0; 0x100 > _0x3f065f; _0x3f065f++)
        _0x1db032[_0x3f065f] = 0x80 > _0x3f065f ? _0x3f065f << 0x1 : _0x3f065f << 0x1 ^ 0x11b;
    for (var _0x5c1d2d = 0x0, _0x279a75 = 0x0, _0x3f065f = 0x0; 0x100 > _0x3f065f; _0x3f065f++) {
        var _0x130476 = _0x279a75 ^ _0x279a75 << 0x1 ^ _0x279a75 << 0x2 ^ _0x279a75 << 0x3 ^ _0x279a75 << 0x4
          , _0x130476 = _0x130476 >>> 0x8 ^ _0x130476 & 0xff ^ 0x63;
        _0x3f41e3[_0x5c1d2d] = _0x130476;
        _0x5005b8[_0x130476] = _0x5c1d2d;
        var _0xfb328d = _0x1db032[_0x5c1d2d]
          , _0x210ca9 = _0x1db032[_0xfb328d]
          , _0x12ec5c = _0x1db032[_0x210ca9]
          , _0x21c9ac = 0x101 * _0x1db032[_0x130476] ^ 0x1010100 * _0x130476;
        _0x4b2f75[_0x5c1d2d] = _0x21c9ac << 0x18 | _0x21c9ac >>> 0x8;
        _0x3ce68f[_0x5c1d2d] = _0x21c9ac << 0x10 | _0x21c9ac >>> 0x10;
        _0x1eb57a[_0x5c1d2d] = _0x21c9ac << 0x8 | _0x21c9ac >>> 0x18;
        _0x28a267[_0x5c1d2d] = _0x21c9ac;
        _0x21c9ac = 0x1010101 * _0x12ec5c ^ 0x10001 * _0x210ca9 ^ 0x101 * _0xfb328d ^ 0x1010100 * _0x5c1d2d;
        _0x400e2e[_0x130476] = _0x21c9ac << 0x18 | _0x21c9ac >>> 0x8;
        _0x448beb[_0x130476] = _0x21c9ac << 0x10 | _0x21c9ac >>> 0x10;
        _0x514db3[_0x130476] = _0x21c9ac << 0x8 | _0x21c9ac >>> 0x18;
        _0x1dc275[_0x130476] = _0x21c9ac;
        _0x5c1d2d ? (_0x5c1d2d = _0xfb328d ^ _0x1db032[_0x1db032[_0x1db032[_0x12ec5c ^ _0xfb328d]]],
        _0x279a75 ^= _0x1db032[_0x1db032[_0x279a75]]) : _0x5c1d2d = _0x279a75 = 0x1;
    }
    var _0x47b7f5 = [0x0, 0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36]
      , _0xc4d29c = _0xc4d29c['AES'] = _0x13a23e[_0x1752('0x5')]({
        '_doReset': function() {
            for (var _0x1db032 = this[_0x1752('0x68')], _0x3f065f = _0x1db032[_0x1752('0x8')], _0xc4d29c = _0x1db032[_0x1752('0x9')] / 0x4, _0x1db032 = 0x4 * ((this[_0x1752('0x69')] = _0xc4d29c + 0x6) + 0x1), _0x5c1d2d = this[_0x1752('0x6a')] = [], _0x279a75 = 0x0; _0x279a75 < _0x1db032; _0x279a75++)
                if (_0x279a75 < _0xc4d29c)
                    _0x5c1d2d[_0x279a75] = _0x3f065f[_0x279a75];
                else {
                    var _0x130476 = _0x5c1d2d[_0x279a75 - 0x1];
                    _0x279a75 % _0xc4d29c ? 0x6 < _0xc4d29c && 0x4 == _0x279a75 % _0xc4d29c && (_0x130476 = _0x3f41e3[_0x130476 >>> 0x18] << 0x18 | _0x3f41e3[_0x130476 >>> 0x10 & 0xff] << 0x10 | _0x3f41e3[_0x130476 >>> 0x8 & 0xff] << 0x8 | _0x3f41e3[_0x130476 & 0xff]) : (_0x130476 = _0x130476 << 0x8 | _0x130476 >>> 0x18,
                    _0x130476 = _0x3f41e3[_0x130476 >>> 0x18] << 0x18 | _0x3f41e3[_0x130476 >>> 0x10 & 0xff] << 0x10 | _0x3f41e3[_0x130476 >>> 0x8 & 0xff] << 0x8 | _0x3f41e3[_0x130476 & 0xff],
                    _0x130476 ^= _0x47b7f5[_0x279a75 / _0xc4d29c | 0x0] << 0x18);
                    _0x5c1d2d[_0x279a75] = _0x5c1d2d[_0x279a75 - _0xc4d29c] ^ _0x130476;
                }
            _0x3f065f = this['_invKeySchedule'] = [];
            for (_0xc4d29c = 0x0; _0xc4d29c < _0x1db032; _0xc4d29c++)
                _0x279a75 = _0x1db032 - _0xc4d29c,
                _0x130476 = _0xc4d29c % 0x4 ? _0x5c1d2d[_0x279a75] : _0x5c1d2d[_0x279a75 - 0x4],
                _0x3f065f[_0xc4d29c] = 0x4 > _0xc4d29c || 0x4 >= _0x279a75 ? _0x130476 : _0x400e2e[_0x3f41e3[_0x130476 >>> 0x18]] ^ _0x448beb[_0x3f41e3[_0x130476 >>> 0x10 & 0xff]] ^ _0x514db3[_0x3f41e3[_0x130476 >>> 0x8 & 0xff]] ^ _0x1dc275[_0x3f41e3[_0x130476 & 0xff]];
        },
        'encryptBlock': function(_0x1db032, _0x400e2e) {
            this[_0x1752('0x6b')](_0x1db032, _0x400e2e, this[_0x1752('0x6a')], _0x4b2f75, _0x3ce68f, _0x1eb57a, _0x28a267, _0x3f41e3);
        },
        'decryptBlock': function(_0x1db032, _0x3f065f) {
            var _0xc4d29c = _0x1db032[_0x3f065f + 0x1];
            _0x1db032[_0x3f065f + 0x1] = _0x1db032[_0x3f065f + 0x3];
            _0x1db032[_0x3f065f + 0x3] = _0xc4d29c;
            this[_0x1752('0x6b')](_0x1db032, _0x3f065f, this['_invKeySchedule'], _0x400e2e, _0x448beb, _0x514db3, _0x1dc275, _0x5005b8);
            _0xc4d29c = _0x1db032[_0x3f065f + 0x1];
            _0x1db032[_0x3f065f + 0x1] = _0x1db032[_0x3f065f + 0x3];
            _0x1db032[_0x3f065f + 0x3] = _0xc4d29c;
        },
        '_doCryptBlock': function(_0x1db032, _0x400e2e, _0x3f065f, _0xc4d29c, _0x5c1d2d, _0x279a75, _0x3f41e3, _0x1b0aff) {
            for (var _0x5c098e = this[_0x1752('0x69')], _0x39b11d = _0x1db032[_0x400e2e] ^ _0x3f065f[0x0], _0x30e3c1 = _0x1db032[_0x400e2e + 0x1] ^ _0x3f065f[0x1], _0x130476 = _0x1db032[_0x400e2e + 0x2] ^ _0x3f065f[0x2], _0x1dc275 = _0x1db032[_0x400e2e + 0x3] ^ _0x3f065f[0x3], _0x13a23e = 0x4, _0x3ce68f = 0x1; _0x3ce68f < _0x5c098e; _0x3ce68f++)
                var _0x514db3 = _0xc4d29c[_0x39b11d >>> 0x18] ^ _0x5c1d2d[_0x30e3c1 >>> 0x10 & 0xff] ^ _0x279a75[_0x130476 >>> 0x8 & 0xff] ^ _0x3f41e3[_0x1dc275 & 0xff] ^ _0x3f065f[_0x13a23e++]
                  , _0x5005b8 = _0xc4d29c[_0x30e3c1 >>> 0x18] ^ _0x5c1d2d[_0x130476 >>> 0x10 & 0xff] ^ _0x279a75[_0x1dc275 >>> 0x8 & 0xff] ^ _0x3f41e3[_0x39b11d & 0xff] ^ _0x3f065f[_0x13a23e++]
                  , _0x4b2f75 = _0xc4d29c[_0x130476 >>> 0x18] ^ _0x5c1d2d[_0x1dc275 >>> 0x10 & 0xff] ^ _0x279a75[_0x39b11d >>> 0x8 & 0xff] ^ _0x3f41e3[_0x30e3c1 & 0xff] ^ _0x3f065f[_0x13a23e++]
                  , _0x1dc275 = _0xc4d29c[_0x1dc275 >>> 0x18] ^ _0x5c1d2d[_0x39b11d >>> 0x10 & 0xff] ^ _0x279a75[_0x30e3c1 >>> 0x8 & 0xff] ^ _0x3f41e3[_0x130476 & 0xff] ^ _0x3f065f[_0x13a23e++]
                  , _0x39b11d = _0x514db3
                  , _0x30e3c1 = _0x5005b8
                  , _0x130476 = _0x4b2f75;
            _0x514db3 = (_0x1b0aff[_0x39b11d >>> 0x18] << 0x18 | _0x1b0aff[_0x30e3c1 >>> 0x10 & 0xff] << 0x10 | _0x1b0aff[_0x130476 >>> 0x8 & 0xff] << 0x8 | _0x1b0aff[_0x1dc275 & 0xff]) ^ _0x3f065f[_0x13a23e++];
            _0x5005b8 = (_0x1b0aff[_0x30e3c1 >>> 0x18] << 0x18 | _0x1b0aff[_0x130476 >>> 0x10 & 0xff] << 0x10 | _0x1b0aff[_0x1dc275 >>> 0x8 & 0xff] << 0x8 | _0x1b0aff[_0x39b11d & 0xff]) ^ _0x3f065f[_0x13a23e++];
            _0x4b2f75 = (_0x1b0aff[_0x130476 >>> 0x18] << 0x18 | _0x1b0aff[_0x1dc275 >>> 0x10 & 0xff] << 0x10 | _0x1b0aff[_0x39b11d >>> 0x8 & 0xff] << 0x8 | _0x1b0aff[_0x30e3c1 & 0xff]) ^ _0x3f065f[_0x13a23e++];
            _0x1dc275 = (_0x1b0aff[_0x1dc275 >>> 0x18] << 0x18 | _0x1b0aff[_0x39b11d >>> 0x10 & 0xff] << 0x10 | _0x1b0aff[_0x30e3c1 >>> 0x8 & 0xff] << 0x8 | _0x1b0aff[_0x130476 & 0xff]) ^ _0x3f065f[_0x13a23e++];
            _0x1db032[_0x400e2e] = _0x514db3;
            _0x1db032[_0x400e2e + 0x1] = _0x5005b8;
            _0x1db032[_0x400e2e + 0x2] = _0x4b2f75;
            _0x1db032[_0x400e2e + 0x3] = _0x1dc275;
        },
        'keySize': 0x8
    });
    _0x8e95a4['AES'] = _0x13a23e[_0x1752('0x39')](_0xc4d29c);
}());



function encrypt(text, key) {
    eval('var CryptoJS=CryptoJS||function(t,e){var r=Object.create||function(){function t(){}return function(e){var r;return t.prototype=e,r=new t,t.prototype=null,r}}(),i={},n=i.lib={},o=n.Base={extend:function(t){var e=r(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=n.WordArray=o.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,i=this.sigBytes,n=t.sigBytes;if(this.clamp(),i%4)for(var o=0;o<n;o++){var c=r[o>>>2]>>>24-o%4*8&255;e[i+o>>>2]|=c<<24-(i+o)%4*8}else for(o=0;o<n;o+=4)e[i+o>>>2]=r[o>>>2];return this.sigBytes+=n,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=o.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r,i=[],n=function(e){e=e;var r=987654321,i=4294967295;return function(){var n=((r=36969*(65535&r)+(r>>16)&i)<<16)+(e=18e3*(65535&e)+(e>>16)&i)&i;return n/=4294967296,(n+=.5)*(t.random()>.5?1:-1)}},o=0;o<e;o+=4){var s=n(4294967296*(r||t.random()));r=987654071*s(),i.push(4294967296*s()|0)}return new c.init(i,e)}}),s=i.enc={},a=s.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i+=2)r[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new c.init(r,e/2)}},f=s.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new c.init(r,e)}},h=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(f.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return f.parse(unescape(encodeURIComponent(t)))}},u=n.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=h.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r,i=this._data,n=i.words,o=i.sigBytes,s=this.blockSize,a=o/(4*s),f=(a=e?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,h=t.min(4*f,o);if(f){for(var u=0;u<f;u+=s)this._doProcessBlock(n,u);r=n.splice(0,f),i.sigBytes-=h}return new c.init(r,h)},clone:function(){var t=o.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(n.Hasher=u.extend({cfg:o.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new p.HMAC.init(t,r).finalize(e)}}}),i.algo={});return i}(Math);CryptoJS.lib.Cipher||function(t){var e=CryptoJS,r=e.lib,i=r.Base,n=r.WordArray,o=r.BufferedBlockAlgorithm,c=e.enc,s=(c.Utf8,c.Base64),a=e.algo.EvpKDF,f=r.Cipher=o.extend({cfg:i.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?g:_}return function(e){return{encrypt:function(r,i,n){return t(i).encrypt(e,r,i,n)},decrypt:function(r,i,n){return t(i).decrypt(e,r,i,n)}}}}()}),h=(r.StreamCipher=f.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),e.mode={}),u=r.BlockCipherMode=i.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),p=h.CBC=function(){var e=u.extend();function r(e,r,i){var n,o=this._iv;o?(n=o,this._iv=t):n=this._prevBlock;for(var c=0;c<i;c++)e[r+c]^=n[c]}return e.Encryptor=e.extend({processBlock:function(t,e){var i=this._cipher,n=i.blockSize;r.call(this,t,e,n),i.encryptBlock(t,e),this._prevBlock=t.slice(e,e+n)}}),e.Decryptor=e.extend({processBlock:function(t,e){var i=this._cipher,n=i.blockSize,o=t.slice(e,e+n);i.decryptBlock(t,e),r.call(this,t,e,n),this._prevBlock=o}}),e}(),d=(e.pad={}).Pkcs7={pad:function(t,e){for(var r=4*e,i=r-t.sigBytes%r,o=i<<24|i<<16|i<<8|i,c=[],s=0;s<i;s+=4)c.push(o);var a=n.create(c,i);t.concat(a)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},l=(r.BlockCipher=f.extend({cfg:f.cfg.extend({mode:p,padding:d}),reset:function(){var t;f.reset.call(this);var e=this.cfg,r=e.iv,i=e.mode;this._xformMode==this._ENC_XFORM_MODE?t=i.createEncryptor:(t=i.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==t?this._mode.init(this,r&&r.words):(this._mode=t.call(i,this,r&&r.words),this._mode.__creator=t)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t,e=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t},blockSize:4}),r.CipherParams=i.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),y=(e.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext,r=t.salt;return(r?n.create([1398893684,1701076831]).concat(r).concat(e):e).toString(s)},parse:function(t){var e,r=s.parse(t),i=r.words;return 1398893684==i[0]&&1701076831==i[1]&&(e=n.create(i.slice(2,4)),i.splice(0,4),r.sigBytes-=16),l.create({ciphertext:r,salt:e})}},_=r.SerializableCipher=i.extend({cfg:i.extend({format:y}),encrypt:function(t,e,r,i){i=this.cfg.extend(i);var n=t.createEncryptor(r,i),o=n.finalize(e),c=n.cfg;return l.create({ciphertext:o,key:r,iv:c.iv,algorithm:t,mode:c.mode,padding:c.padding,blockSize:t.blockSize,formatter:i.format})},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),t.createDecryptor(r,i).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),v=(e.kdf={}).OpenSSL={execute:function(t,e,r,i){i||(i=n.random(8));var o=a.create({keySize:e+r}).compute(t,i),c=n.create(o.words.slice(e),4*r);return o.sigBytes=4*e,l.create({key:o,iv:c,salt:i})}},g=r.PasswordBasedCipher=_.extend({cfg:_.cfg.extend({kdf:v}),encrypt:function(t,e,r,i){var n=(i=this.cfg.extend(i)).kdf.execute(r,t.keySize,t.ivSize);i.iv=n.iv;var o=_.encrypt.call(this,t,e,n.key,i);return o.mixIn(n),o},decrypt:function(t,e,r,i){i=this.cfg.extend(i),e=this._parse(e,i.format);var n=i.kdf.execute(r,t.keySize,t.ivSize,e.salt);return i.iv=n.iv,_.decrypt.call(this,t,e,n.key,i)}})}(),CryptoJS.mode.ECB=function(){var t=CryptoJS.lib.BlockCipherMode.extend();return t.Encryptor=t.extend({processBlock:function(t,e){this._cipher.encryptBlock(t,e)}}),t.Decryptor=t.extend({processBlock:function(t,e){this._cipher.decryptBlock(t,e)}}),t}(),function(){var t=CryptoJS,e=t.lib.BlockCipher,r=t.algo,i=[],n=[],o=[],c=[],s=[],a=[],f=[],h=[],u=[],p=[];!function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;var r=0,d=0;for(e=0;e<256;e++){var l=d^d<<1^d<<2^d<<3^d<<4;l=l>>>8^255&l^99,i[r]=l,n[l]=r;var y=t[r],_=t[y],v=t[_],g=257*t[l]^16843008*l;o[r]=g<<24|g>>>8,c[r]=g<<16|g>>>16,s[r]=g<<8|g>>>24,a[r]=g;g=16843009*v^65537*_^257*y^16843008*r;f[l]=g<<24|g>>>8,h[l]=g<<16|g>>>16,u[l]=g<<8|g>>>24,p[l]=g,r?(r=y^t[t[t[v^y]]],d^=t[t[d]]):r=d=1}}();var d=[0,1,2,4,8,16,32,64,128,27,54],l=r.AES=e.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var t=this._keyPriorReset=this._key,e=t.words,r=t.sigBytes/4,n=4*((this._nRounds=r+6)+1),o=this._keySchedule=[],c=0;c<n;c++)c<r?o[c]=e[c]:(l=o[c-1],c%r?r>6&&c%r==4&&(l=i[l>>>24]<<24|i[l>>>16&255]<<16|i[l>>>8&255]<<8|i[255&l]):(l=i[(l=l<<8|l>>>24)>>>24]<<24|i[l>>>16&255]<<16|i[l>>>8&255]<<8|i[255&l],l^=d[c/r|0]<<24),o[c]=o[c-r]^l);for(var s=this._invKeySchedule=[],a=0;a<n;a++){c=n-a;if(a%4)var l=o[c];else l=o[c-4];s[a]=a<4||c<=4?l:f[i[l>>>24]]^h[i[l>>>16&255]]^u[i[l>>>8&255]]^p[i[255&l]]}}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,o,c,s,a,i)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,f,h,u,p,n);r=t[e+1];t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,i,n,o,c,s){for(var a=this._nRounds,f=t[e]^r[0],h=t[e+1]^r[1],u=t[e+2]^r[2],p=t[e+3]^r[3],d=4,l=1;l<a;l++){var y=i[f>>>24]^n[h>>>16&255]^o[u>>>8&255]^c[255&p]^r[d++],_=i[h>>>24]^n[u>>>16&255]^o[p>>>8&255]^c[255&f]^r[d++],v=i[u>>>24]^n[p>>>16&255]^o[f>>>8&255]^c[255&h]^r[d++],g=i[p>>>24]^n[f>>>16&255]^o[h>>>8&255]^c[255&u]^r[d++];f=y,h=_,u=v,p=g}y=(s[f>>>24]<<24|s[h>>>16&255]<<16|s[u>>>8&255]<<8|s[255&p])^r[d++],_=(s[h>>>24]<<24|s[u>>>16&255]<<16|s[p>>>8&255]<<8|s[255&f])^r[d++],v=(s[u>>>24]<<24|s[p>>>16&255]<<16|s[f>>>8&255]<<8|s[255&h])^r[d++],g=(s[p>>>24]<<24|s[f>>>16&255]<<16|s[h>>>8&255]<<8|s[255&u])^r[d++];t[e]=y,t[e+1]=_,t[e+2]=v,t[e+3]=g},keySize:8});t.AES=e._createHelper(l)}();');
    var k = CryptoJS.enc.Utf8.parse(key)
      , encryptedData = CryptoJS.AES.encrypt(text, k, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encryptedData.toString()
}
function decrypt(text, key) {
    eval('var CryptoJS=CryptoJS||function(t,e){var r=Object.create||function(){function t(){}return function(e){var r;return t.prototype=e,r=new t,t.prototype=null,r}}(),i={},n=i.lib={},o=n.Base={extend:function(t){var e=r(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=n.WordArray=o.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,r=t.words,i=this.sigBytes,n=t.sigBytes;if(this.clamp(),i%4)for(var o=0;o<n;o++){var c=r[o>>>2]>>>24-o%4*8&255;e[i+o>>>2]|=c<<24-(i+o)%4*8}else for(o=0;o<n;o+=4)e[i+o>>>2]=r[o>>>2];return this.sigBytes+=n,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=o.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var r,i=[],n=function(e){e=e;var r=987654321,i=4294967295;return function(){var n=((r=36969*(65535&r)+(r>>16)&i)<<16)+(e=18e3*(65535&e)+(e>>16)&i)&i;return n/=4294967296,(n+=.5)*(t.random()>.5?1:-1)}},o=0;o<e;o+=4){var s=n(4294967296*(r||t.random()));r=987654071*s(),i.push(4294967296*s()|0)}return new c.init(i,e)}}),s=i.enc={},a=s.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i+=2)r[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new c.init(r,e/2)}},f=s.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new c.init(r,e)}},h=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(f.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return f.parse(unescape(encodeURIComponent(t)))}},u=n.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=h.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r,i=this._data,n=i.words,o=i.sigBytes,s=this.blockSize,a=o/(4*s),f=(a=e?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,h=t.min(4*f,o);if(f){for(var u=0;u<f;u+=s)this._doProcessBlock(n,u);r=n.splice(0,f),i.sigBytes-=h}return new c.init(r,h)},clone:function(){var t=o.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(n.Hasher=u.extend({cfg:o.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new p.HMAC.init(t,r).finalize(e)}}}),i.algo={});return i}(Math);!function(){var t=CryptoJS,e=t.lib.WordArray;t.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,i=this._map;t.clamp();for(var n=[],o=0;o<r;o+=3)for(var c=(e[o>>>2]>>>24-o%4*8&255)<<16|(e[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|e[o+2>>>2]>>>24-(o+2)%4*8&255,s=0;s<4&&o+.75*s<r;s++)n.push(i.charAt(c>>>6*(3-s)&63));var a=i.charAt(64);if(a)for(;n.length%4;)n.push(a);return n.join("")},parse:function(t){var r=t.length,i=this._map,n=this._reverseMap;if(!n){n=this._reverseMap=[];for(var o=0;o<i.length;o++)n[i.charCodeAt(o)]=o}var c=i.charAt(64);if(c){var s=t.indexOf(c);-1!==s&&(r=s)}return function(t,r,i){for(var n=[],o=0,c=0;c<r;c++)if(c%4){var s=i[t.charCodeAt(c-1)]<<c%4*2,a=i[t.charCodeAt(c)]>>>6-c%4*2,f=s|a;n[o>>>2]|=f<<24-o%4*8,o++}return e.create(n,o)}(t,r,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),CryptoJS.lib.Cipher||function(t){var e=CryptoJS,r=e.lib,i=r.Base,n=r.WordArray,o=r.BufferedBlockAlgorithm,c=e.enc,s=(c.Utf8,c.Base64),a=e.algo.EvpKDF,f=r.Cipher=o.extend({cfg:i.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?g:_}return function(e){return{encrypt:function(r,i,n){return t(i).encrypt(e,r,i,n)},decrypt:function(r,i,n){return t(i).decrypt(e,r,i,n)}}}}()}),h=(r.StreamCipher=f.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),e.mode={}),u=r.BlockCipherMode=i.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),p=h.CBC=function(){var e=u.extend();function r(e,r,i){var n,o=this._iv;o?(n=o,this._iv=t):n=this._prevBlock;for(var c=0;c<i;c++)e[r+c]^=n[c]}return e.Encryptor=e.extend({processBlock:function(t,e){var i=this._cipher,n=i.blockSize;r.call(this,t,e,n),i.encryptBlock(t,e),this._prevBlock=t.slice(e,e+n)}}),e.Decryptor=e.extend({processBlock:function(t,e){var i=this._cipher,n=i.blockSize,o=t.slice(e,e+n);i.decryptBlock(t,e),r.call(this,t,e,n),this._prevBlock=o}}),e}(),d=(e.pad={}).Pkcs7={pad:function(t,e){for(var r=4*e,i=r-t.sigBytes%r,o=i<<24|i<<16|i<<8|i,c=[],s=0;s<i;s+=4)c.push(o);var a=n.create(c,i);t.concat(a)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},l=(r.BlockCipher=f.extend({cfg:f.cfg.extend({mode:p,padding:d}),reset:function(){var t;f.reset.call(this);var e=this.cfg,r=e.iv,i=e.mode;this._xformMode==this._ENC_XFORM_MODE?t=i.createEncryptor:(t=i.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==t?this._mode.init(this,r&&r.words):(this._mode=t.call(i,this,r&&r.words),this._mode.__creator=t)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t,e=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t},blockSize:4}),r.CipherParams=i.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),y=(e.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext,r=t.salt;return(r?n.create([1398893684,1701076831]).concat(r).concat(e):e).toString(s)},parse:function(t){var e,r=s.parse(t),i=r.words;return 1398893684==i[0]&&1701076831==i[1]&&(e=n.create(i.slice(2,4)),i.splice(0,4),r.sigBytes-=16),l.create({ciphertext:r,salt:e})}},_=r.SerializableCipher=i.extend({cfg:i.extend({format:y}),encrypt:function(t,e,r,i){i=this.cfg.extend(i);var n=t.createEncryptor(r,i),o=n.finalize(e),c=n.cfg;return l.create({ciphertext:o,key:r,iv:c.iv,algorithm:t,mode:c.mode,padding:c.padding,blockSize:t.blockSize,formatter:i.format})},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),t.createDecryptor(r,i).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),v=(e.kdf={}).OpenSSL={execute:function(t,e,r,i){i||(i=n.random(8));var o=a.create({keySize:e+r}).compute(t,i),c=n.create(o.words.slice(e),4*r);return o.sigBytes=4*e,l.create({key:o,iv:c,salt:i})}},g=r.PasswordBasedCipher=_.extend({cfg:_.cfg.extend({kdf:v}),encrypt:function(t,e,r,i){var n=(i=this.cfg.extend(i)).kdf.execute(r,t.keySize,t.ivSize);i.iv=n.iv;var o=_.encrypt.call(this,t,e,n.key,i);return o.mixIn(n),o},decrypt:function(t,e,r,i){i=this.cfg.extend(i),e=this._parse(e,i.format);var n=i.kdf.execute(r,t.keySize,t.ivSize,e.salt);return i.iv=n.iv,_.decrypt.call(this,t,e,n.key,i)}})}(),CryptoJS.mode.ECB=function(){var t=CryptoJS.lib.BlockCipherMode.extend();return t.Encryptor=t.extend({processBlock:function(t,e){this._cipher.encryptBlock(t,e)}}),t.Decryptor=t.extend({processBlock:function(t,e){this._cipher.decryptBlock(t,e)}}),t}(),function(){var t=CryptoJS,e=t.lib.BlockCipher,r=t.algo,i=[],n=[],o=[],c=[],s=[],a=[],f=[],h=[],u=[],p=[];!function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;var r=0,d=0;for(e=0;e<256;e++){var l=d^d<<1^d<<2^d<<3^d<<4;l=l>>>8^255&l^99,i[r]=l,n[l]=r;var y=t[r],_=t[y],v=t[_],g=257*t[l]^16843008*l;o[r]=g<<24|g>>>8,c[r]=g<<16|g>>>16,s[r]=g<<8|g>>>24,a[r]=g;g=16843009*v^65537*_^257*y^16843008*r;f[l]=g<<24|g>>>8,h[l]=g<<16|g>>>16,u[l]=g<<8|g>>>24,p[l]=g,r?(r=y^t[t[t[v^y]]],d^=t[t[d]]):r=d=1}}();var d=[0,1,2,4,8,16,32,64,128,27,54],l=r.AES=e.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var t=this._keyPriorReset=this._key,e=t.words,r=t.sigBytes/4,n=4*((this._nRounds=r+6)+1),o=this._keySchedule=[],c=0;c<n;c++)c<r?o[c]=e[c]:(l=o[c-1],c%r?r>6&&c%r==4&&(l=i[l>>>24]<<24|i[l>>>16&255]<<16|i[l>>>8&255]<<8|i[255&l]):(l=i[(l=l<<8|l>>>24)>>>24]<<24|i[l>>>16&255]<<16|i[l>>>8&255]<<8|i[255&l],l^=d[c/r|0]<<24),o[c]=o[c-r]^l);for(var s=this._invKeySchedule=[],a=0;a<n;a++){c=n-a;if(a%4)var l=o[c];else l=o[c-4];s[a]=a<4||c<=4?l:f[i[l>>>24]]^h[i[l>>>16&255]]^u[i[l>>>8&255]]^p[i[255&l]]}}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,o,c,s,a,i)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,f,h,u,p,n);r=t[e+1];t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,i,n,o,c,s){for(var a=this._nRounds,f=t[e]^r[0],h=t[e+1]^r[1],u=t[e+2]^r[2],p=t[e+3]^r[3],d=4,l=1;l<a;l++){var y=i[f>>>24]^n[h>>>16&255]^o[u>>>8&255]^c[255&p]^r[d++],_=i[h>>>24]^n[u>>>16&255]^o[p>>>8&255]^c[255&f]^r[d++],v=i[u>>>24]^n[p>>>16&255]^o[f>>>8&255]^c[255&h]^r[d++],g=i[p>>>24]^n[f>>>16&255]^o[h>>>8&255]^c[255&u]^r[d++];f=y,h=_,u=v,p=g}y=(s[f>>>24]<<24|s[h>>>16&255]<<16|s[u>>>8&255]<<8|s[255&p])^r[d++],_=(s[h>>>24]<<24|s[u>>>16&255]<<16|s[p>>>8&255]<<8|s[255&f])^r[d++],v=(s[u>>>24]<<24|s[p>>>16&255]<<16|s[f>>>8&255]<<8|s[255&h])^r[d++],g=(s[p>>>24]<<24|s[f>>>16&255]<<16|s[h>>>8&255]<<8|s[255&u])^r[d++];t[e]=y,t[e+1]=_,t[e+2]=v,t[e+3]=g},keySize:8});t.AES=e._createHelper(l)}();');
    var k = CryptoJS.enc.Utf8.parse(key)
      , encryptedHexStr = CryptoJS.enc.Hex.parse(text)
      , encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr)
      , decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, k, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
      , decryptedStr = decryptedData.toString(CryptoJS.enc.Utf8);
    return decryptedStr
}
var _0x5cea = ['toString', 'getItem', 'decrypt', 'enc', 'Utf8', 'parse', 'indexOf', 'false|false|false|false|SecretKeyForDashBoard', 'substring', 'push', 'forEach', 'SecretKeyForDashBoard', 'length', '0#0', 'lastIndexOf', 'SecurekeyAlgrmen', 'setItem', 'AES', 'encrypt'];
(function(_0x342d04, _0x3ddd5a) {
    var _0x5d3deb = function(_0x281002) {
        while (--_0x281002) {
            _0x342d04['push'](_0x342d04['shift']());
        }
    };
    _0x5d3deb(++_0x3ddd5a);
}(_0x5cea, 0x149));
var _0x37e9 = function(_0x428a46, _0xd520cc) {
    _0x428a46 = _0x428a46 - 0x0;
    var _0x28e058 = _0x5cea[_0x428a46];
    return _0x28e058;
};
function checkvalues(_0x58439e) {
    var _0x2de731 = [];
    var _0x4b6809 = -0x1
      , _0x31192b = -0x1;
    var _0x3996e2 = '';
    if (_0x58439e[_0x37e9('0x0')]('?') == -0x1) {
        _0x3996e2 = _0x37e9('0x1');
    } else {
        while ((_0x4b6809 = _0x58439e['indexOf']('=', _0x4b6809 + 0x1)) >= 0x0 && _0x4b6809 != _0x58439e['lastIndexOf']('=') && (_0x31192b = _0x58439e[_0x37e9('0x0')]('&', _0x31192b + 0x1)) >= 0x0) {
            var _0x496c0a = _0x58439e[_0x37e9('0x2')](_0x4b6809 + 0x1, _0x31192b);
            _0x2de731[_0x37e9('0x3')](_0x496c0a);
        }
        _0x2de731[_0x37e9('0x3')](_0x58439e[_0x37e9('0x2')](_0x58439e['lastIndexOf']('=') + 0x1));
        if (_0x2de731['length'] < 0x4) {
            _0x2de731[_0x37e9('0x4')](_0x2b4a1f=>{
                if (_0x2b4a1f == '') {
                    _0x3996e2 += null + '|';
                } else
                    _0x3996e2 += _0x2b4a1f + '|';
            }
            );
            for (var _0x24c3de = 0x0; _0x24c3de < 0x4 - _0x2de731['length']; _0x24c3de++) {
                _0x3996e2 += ![] + '|';
            }
            _0x3996e2 += _0x37e9('0x5');
        } else if (_0x2de731[_0x37e9('0x6')] == 0x4) {
            _0x2de731['forEach'](_0x4c0487=>{
                if (_0x4c0487 == '') {
                    _0x3996e2 += null + '|';
                } else
                    _0x3996e2 += _0x4c0487 + '|';
            }
            );
            _0x3996e2 += _0x37e9('0x5');
        }
    }
    return SHA512(_0x3996e2);
}
function encryptquery(_0x163643) {
    let _0x2063be = _0x37e9('0x7');
    let _0x412f67 = [];
    let _0x22ef42 = -0x1;
    j = -0x1;
    if (_0x163643[_0x37e9('0x0')]('?') == -0x1) {
        _0x2063be += '#false#false#false#false';
    } else {
        while ((_0x22ef42 = _0x163643[_0x37e9('0x0')]('=', _0x22ef42 + 0x1)) >= 0x0 && _0x22ef42 != _0x163643[_0x37e9('0x8')]('=') && (j = _0x163643[_0x37e9('0x0')]('&', j + 0x1)) >= 0x0) {
            var _0x1c444f = _0x163643[_0x37e9('0x2')](_0x22ef42 + 0x1, j);
            _0x412f67[_0x37e9('0x3')](_0x1c444f);
        }
        _0x412f67[_0x37e9('0x3')](_0x163643[_0x37e9('0x2')](_0x163643[_0x37e9('0x8')]('=') + 0x1));
        if (_0x412f67[_0x37e9('0x6')] < 0x4) {
            _0x412f67[_0x37e9('0x4')](_0x41d795=>{
                if (_0x41d795 == '') {
                    _0x2063be += '#' + null;
                } else
                    _0x2063be += '#' + _0x41d795;
            }
            );
            for (var _0x5cc279 = 0x0; _0x5cc279 < 0x4 - _0x412f67['length']; _0x5cc279++) {
                _0x2063be += '#' + ![];
            }
        } else if (_0x412f67['length'] == 0x4) {
            _0x412f67['forEach'](_0x36833c=>{
                if (_0x36833c == '') {
                    _0x2063be += '#' + null;
                } else
                    _0x2063be += '#' + _0x36833c;
            }
            );
        }
    }
    if (_0x163643[_0x37e9('0x0')]('?') == -0x1) {} else {
        _0x163643 = _0x163643['substring'](0x0, _0x163643[_0x37e9('0x0')]('?'));
    }
    _0x163643 += '?en=' + encrypt(_0x2063be, _0x37e9('0x9'));
    return _0x163643;
}
function sessionStore(_0x2778ac, _0x24ceab) {
    sessionStorage[_0x37e9('0xa')](_0x2778ac, CryptoJS[_0x37e9('0xb')][_0x37e9('0xc')](_0x24ceab, _0x2778ac)[_0x37e9('0xd')]());
}
function sessionGet(_0x49ddd3) {
    var _0x51489b = sessionStorage[_0x37e9('0xe')](_0x49ddd3);
    var _0x35f5dd = CryptoJS[_0x37e9('0xb')][_0x37e9('0xf')](_0x51489b, _0x49ddd3);
    var _0x1ca104 = _0x35f5dd[_0x37e9('0xd')](CryptoJS[_0x37e9('0x10')][_0x37e9('0x11')]);
    return JSON[_0x37e9('0x12')](_0x1ca104);
}




//pdfjs.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js'

//import Search from "./Search";

function highlightPattern(text = "", pattern = "") {
  const splitText = text.split(pattern);

  if (splitText.length <= 1) {
    return text;
  }

  const matches = text.match(pattern);

  return splitText.reduce(
    (arr, element, index) =>
      matches[index]
        ? [...arr, element, <mark key={index}>{matches[index]}</mark>]
        : [...arr, element],
    []
  );
}


  // const [searchText, setSearchText] = useState("");

  //   const textRenderer = useMemo((textItem) => {
  //       console.log(textItem);
  //     return highlightPattern(textItem.str, searchText);
  //   }, [searchText]);
  //
  //   function onChange(event) {
  //     setSearchText(event.target.value);
  //   }

 // function modifyCanvas() {
    // const x = 33;
    // const y = 40;
    // const desiredWidth = 600;
    // const desiredHeight = 500;
    // let mainCanvas = null;
    // let secondaryDocument = null;

    // mainCanvas = document.getElementsByClassName(
    //   "react-pdf__Page__canvas"
    // )[0];
    // var imageContentRaw = mainCanvas
    //     .getContext("2d")
    //   .getImageData(x, y, desiredWidth, desiredHeight);

    // secondaryDocument = document.getElementById("secondary-document");
    // secondaryDocument.innerHTML = '<canvas id="dtemp"></canvas>';

    // let secondaryCanvas = document.getElementById("dtemp");
    // let secondaryCanvas_Context = secondaryCanvas.getContext("2d");
    // secondaryCanvas_Context.canvas.width = desiredWidth;
    // secondaryCanvas_Context.canvas.height = desiredHeight;
    // secondaryCanvas.getContext("2d").putImageData(imageContentRaw, 0, 0);
  //}



// On render success
    // let mainCanvas = document.getElementsByClassName(
    //   "react-pdf__Page__canvas"
    // )[0];
    // if (mainCanvas.style.display === "block") {
    //    mainCanvas.style.display = 'none';
    // }
    //setTimeout(modifyCanvas, 500);
