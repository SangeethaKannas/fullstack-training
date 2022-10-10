https://www.udemy.com/angular-2-tutorial-for-beginners/
http://www.infoq.com/news/2016/03/mit-polaris-web-performance?utm_source=infoqWeeklyNewsletter&utm_medium=WeeklyNL_EditorialContent_dynamic_languages&utm_campaign=03152016news
http://www.techempower.com/benchmarks
http://www.infoq.com/news/2015/04/web-frameworks-benchmark-2015
http://lwan.ws/
http://www.impredicative.com/ur/

Below is an important feature in an angularJS application that we have done R&D and implemented in our project in CAT.

      Problem : All the modules are injected into the main application module during app initialization.

                          Javascript code for all the dependent modules need to be fetched first i.e, downloaded.

                          The initial screen mostly does not need all the modules.

                           Complete size of the javascipt file loaded in the landing page, containing all the modules was around 3MB after minification. Fetching it

    took some 4 to 5 seconds. Only after it is fetched angular gets instantiated and main app injection takes place.

 
	 Solution : On-demand  injection of modules into the main application.
                        Load only the modules required for main page.  
                        On subsequent page switch, fetch the javascript of dependent module and then inject it into the main application.
                        Now the initial javascript file that is loaded in the landing page is just 300 to 400KB. When user navigates to some x page, the dependent

  Module is fetched and then injected before page gets loaded.   
http://plnkr.co/edit/aGxuXMiPgYA0TFc67YL4?p=preview
http://www.fastcodesign.com/3032719/ui-ux-who-does-what-a-designers-guide-to-the-tech-industry
https://kx.hcl.com/sites/TechOffice/UxDCoE/_layouts/15/start.aspx#/SitePages/Interactive%20User%20Manual.aspx 
https://en.wikipedia.org/wiki/Comparison_of_web_application_frameworks
https://en.wikipedia.org/wiki/Comparison_of_JavaScript_frameworks
http://noeticforce.com/best-php-frameworks-for-modern-web-development
https://wiki.python.org/moin/WebFrameworks
http://www.fromdev.com/2014/11/best-ruby-web-frameworks.html
http://hotframeworks.com/
https://wiki.haskell.org/Web/Frameworks
http://www.developereconomics.com/feature-comparison-of-4-popular-js-mv-frameworks/
http://softwaresimply.blogspot.in/2012/04/hopefully-fair-and-useful-comparison-of.html
https://www.reddit.com/r/haskell/comments/332s1k/what_haskell_web_framework_do_you_use_and_why/
http://www.infoq.com/research/jvm-web-frameworks
http://www.improgrammer.net/most-popular-javascript-frameworks-2015/
https://www.quora.com/What-are-the-available-Scala-web-frameworks
http://www.bestwebframeworks.com/compare-web-frameworks/perl/
http://www.sitepoint.com/best-php-framework-2015-sitepoint-survey-results/
https://codegeekz.com/best-python-frameworks/
https://www.quora.com/What-is-the-best-Python-web-app-framework-And-why
https://github.com/NancyFx/Nancy/wiki/Introduction
http://www.theregister.co.uk/2016/01/20/microsoft_web_app_framework_renamed_aspnet_core/
https://www.thoughtworks.com/radar/languages-and-frameworks/nancy
http://developer.telerik.com/featured/what-to-expect-from-javascript-in-2016-frameworks/
http://githut.info/
http://www.gajotres.net/the-top-5-angularjs-hybrid-mobile-app-frameworks-proscons/
https://github.com/driftyco/ionic
https://github.com/jooby-project/jooby
http://www.developereconomics.com/feature-comparison-of-4-popular-js-mv-frameworks/
https://github.com/facebook/react
https://objectpartners.com/2015/09/24/angular-2-vs-angular-1/
https://github.com/angular/angular
http://jimfrenette.com/2016/01/javascript-frameworks/
http://www.javaworld.com/article/2078838/mobile-java/open-source-java-projects-vert-x.html
https://github.com/phusion/traveling-ruby
https://github.com/phusion/traveling-ruby#why_precompiled_binary_difficult
https://developer.apple.com/swift/
http://vschart.com/compare/backbone-js/vs/sails-js
https://blog.appdynamics.com/python/an-introduction-to-python-frameworks-part-1/
http://softwareas.com/2016-tech-predictions/
https://en.wikipedia.org/wiki/Chakra_(JScript_engine)
http://www.tiobe.com/tiobe_index?page=index
http://www.theserverside.com/news/thread.tss?thread_id=81656
http://www.mrc-productivity.com/blog/2016/01/5-big-enterprise-application-development-trends-of-2016/
http://blog.continued-learning.com/web-development-trends-in-2015-2016/
http://usersnap.com/blog/web-development-trends-2016/
http://mentormate.com/blog/top-mobile-trends-2016-technologists-predict/


	https://stackoverflow.com/questions/286419/how-to-build-a-dmg-mac-os-x-file-on-a-non-mac-platform
	http://slopjong.de/2013/01/22/mount-apple-disk-images-dmg-in-linux/
	
	http://blog.arungupta.me/monolithic-microservices-refactoring-javaee-applications/
	http://www.codingthearchitecture.com/2014/07/06/distributed_big_balls_of_mud.html
		
	Docker tips
	http://blog.arungupta.me/9-docker-recipes-javaee-applications-techtip80/
	http://blog.arungupta.me/deploy-javaee-docker-swarm-cluster/
	https://www.simb.co/angular-cli-using-docker/
	https://developer.okta.com/blog/2017/04/17/angular-authentication-with-oidc
	https://developer.okta.com/blog/2017/04/26/bootiful-development-with-spring-boot-and-angular
	https://jsfiddle.net/Thiruvikraman/h74vy71t/

	https://jeremylong.github.io/DependencyCheck/dependency-check-maven/index.html
	
	Code Optimization
	https://pmd.github.io/pmd-5.8.1/overview/similar-projects.html
	https://jeremylong.github.io/DependencyCheck/dependency-check-maven/pmd.html
	https://github.com/rochejul/html-validator
	http://tumble.sneak.co.nz/post/928998513/fixing-the-background-bleed
	
	Pagination support for custom made tables - Thiru vikraman
	Automatic installer for Mac - Wait till issue is resolved
	Study about - https://github.com/reworkcss/rework
	Two interviews - Stalin, Thiru vikraman

Future Tasks
	https://web.archive.org/web/20070509055923/http://gcc.gnu.org/java/
	https://spring.io/guides/gs/spring-boot-docker/
	http://css3please.com/
	http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting
	https://github.com/cinsoft/jessie/blob/master/docs/CLI-Builder.md
	
Best Practices
	https://en.wikipedia.org/wiki/Law_of_Demeter

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

jnd.org
nngroup.com
continuminnovation
cooper 
smart design
ziba design
frog design
adaptive path.org



http://zeus-linux/cgi-bin/mcp/smoketest

http://ciar.org/ttk/public/apigee.web_api.pdf

 
A REST operation is defined by an HTTP method and a request URI. Its structure is:
 
    /rest/<path>?<query>#<fragment>
 
       ^     ^        ^         ^
       |     |        |         |
     entry  resource  query    fragment
 
      M       O        O         I
 
(M=mandatory, O=optional, I=ignored)
 
 
In REST, HTTP methods map to CRUDX operations. The methods are:
?	GET: used to retrieve data for a resource
?	POST: used for creating a configuration data resource
?	·      PUT: used to replace a resource
?	·      DELETE: used to delete a resource. The resource must exist or the DELETE operation will fail.
?	OPTIONS: used to discover methods supported for a resource
?	HEAD: used to retrieve just the headers (i.e., excluding the body) of the corresponding GET operation. 


POC

https://msdn.microsoft.com/en-us/library/jj161049.aspx
https://github.com/rwaldron/idiomatic.js
https://github.com/rmurphey/js-assessment
http://nibbler.silktide.com/
https://wappalyzer.com/
https://css-tricks.com/examples/ButtonMaker/
http://web-developmenthub.com/ideas
http://web-developmenthub.com/sources
https://github.com/mishoo/UglifyJS

Necessary Tools
	https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm, 		https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp
	https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi
	https://chrome.google.com/webstore/detail/capture-webpage-screensho/mcbpblocgmgfnpjjppndjkmgjaogfceg
	
Tutorials
https://tutorialzine.com/forum/124/im-learning-js-what-should-i-learn-first
http://rm-labo.com/labo/devicemock/
http://clrs.cc/

http://fossbytes.com/hottest-technologies-for-developers-programmers/
http://www.makeuseof.com/tag/15-awesome-chrome-extensions-geeks/
https://blog.prototypr.io/the-ideal-design-workflow-2c200b8e337d#.98dvkxg2n
https://techfaver.blogspot.in/2016/06/mostly-interviewers-asked-javascript.html
http://www.boredpanda.com/creative-diy-project-ideas/?utm_content=bufferfd92f&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer
http://www.boredpanda.com/diy-stacked-lamp-mike-warren/?utm_content=buffer989e4&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer
http://www.maventic.com/Career/newRegistration.html
http://acodez.in/5-handy-tips-responsive-web-design/

http://en.wikipedia.org/wiki/Behavior-driven_development
http://evanhahn.com/how-do-i-jasmine/
http://karma-runner.github.io/0.12/index.html
http://stackoverflow.com/questions/2692072/code-analysis-for-css-html-and-javascript 
http://stackoverflow.com/questions/2784230/javascript-how-do-you-sort-an-array-on-multiple-columns


Scrum Technologies
http://www.mountaingoatsoftware.com/agile/scrum
https://www.scrumalliance.org/certifications/practitioners/certified-scrummaster-csm
http://javascript.info/tutorial/coordinates
https://wf30.myhcl.com/LeanIT/HCL_Lean/index.aspx

Design
http://www.uxmatters.com/mt/archives/2017/01/using-card-sorting-to-create-stronger-information-architectures.php
https://www.hcltech.com/blogs/design-thinking-evolution-and-innovation
https://www.linkedin.com/pulse/putting-things-together-maniappan-r
http://stackoverflow.com/questions/18074671/jquery-change-div-based-on-another-divs-position
http://stackoverflow.com/questions/25211090/how-to-auto-adjust-the-div-size-for-all-mobile-tablet-display-formats
https://css-tricks.com/responsive-data-tables/
	$(document).ready(function() {
		var content = $('#div1');
		var top = $('#div2');

		$(window).on('scroll', function() {
			if(content.offset().top <= 100) {
				top.css({'opacity': 0.8});
			}else{
				top.css({'opacity': 1});
			}
		});
	});
	
	$(document).ready(function() {
		var top = $("#menu");
		$(window).on('scroll', function(){
			if(($('#content').offset().top - $(window).scrollTop()) <= 100){
				top.css({'opacity': 0.4});
			}else{
				top.css({'opacity': 1});
			}
		});
	});


Docker
https://dzone.com/refcardz/intro-to-docker-monitoring?fromrel=true
https://kx.hcl.com/sites/TechOffice/Publication/_layouts/15/start.aspx#/SitePages/TO%20Newsletter%20-%20Feb%202017.aspx

(function() {

'use strict';

const
  http  = require('http'),
  url   = require('url'),
  path  = require('path'),
  fs    = require('fs'),
  httpProxy = require('http-proxy'),
  port  = parseInt(process.argv[2] || 8888, 10),
  apiProxy = httpProxy.createProxyServer(),
  mime  = {
    '.html' : ['text/html', 86400],
    '.htm'  : ['text/html', 86400],
    '.css'  : ['text/css', 86400],
    '.js'   : ['application/javascript', 86400],
    '.json' : ['application/json', 86400],
    '.jpg'  : ['image/jpeg', 0],
    '.jpeg' : ['image/jpeg', 0],
    '.png'  : ['image/png', 0],
    '.gif'  : ['image/gif', 0],
    '.ico'  : ['image/x-icon', 0],
    '.svg'  : ['image/svg+xml', 0],
    '.txt'  : ['text/plain', 86400],
    'err'   : ['text/plain', 30]
  };

// new server
http.createServer(function(req, res) {

  let
    uri = url.parse(req.url).pathname,
    filename = path.join(process.cwd(), uri);

  // file available?
  fs.access(filename, fs.constants.R_OK, (err) => {

    // not found
    if (err) {
      serve(404, '404 Not Found\n');
      return;
    }

    // index.html default
    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    // read file
    fs.readFile(filename, (err, file) => {

      if (err) {
        // error reading
        serve(500, err + '\n');
      }
      else {
        // return file
        serve(200, file, path.extname(filename));
      }

    });
  });

  // serve content
  function serve(code, content, type) {

    let head = mime[type] || mime['err'];

    res.writeHead(code, {
      'Content-Type'    : head[0],
      'Cache-Control'   : 'must-revalidate, max-age=' + (head[1] || 2419200),
      'Content-Length'  : Buffer.byteLength(content)
    });
    res.write(content);
    res.end();

  }

}).listen(port);

console.log('Server running at http://localhost:' + port);

}());

Rich Content Generation (HTML5/CSS/JS Frameworks for Presentations)
RevealJS https://revealjs.com/#/
ImpressJS https://github.com/impress/impress.js/  - Examples and Demos: https://github.com/impress/impress.js/wiki/Examples-and-demos
Hovercraft ImpressJS generator https://github.com/regebro/hovercraft  - Demo: http://regebro.github.io/hovercraft/#/step-1
