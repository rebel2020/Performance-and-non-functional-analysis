const Environment = require('../models/Environment').Environment;
const MetricDetailed = require('../models/MetricDetailed').MetricDetailed;
const PerformanceAudit = require('../models/PerformanceAudit').PerformanceAudit;
const Audit = require('../models/Audit').Audit;
const LighthouseData = require("../models/LighthouseData").LighthouseData;
const GatlingData = require('../models/GatlingData').GatlingData;
const Alerts = require('../models/Alerts').Alerts
const Alert = require("../models/Alert").Alert
const Recommendation = require('../models/Recommendation').Recommendation;
const Parameters = require("../models/Parameters").Parameters;


console.log(Recommendation);


const defaultRecommendationData = 
{
	"PerformanceAuditRecommendations": {
		"first_contentful_paint": "1. Use in-line styles for above the fold content, \n2. Use an automated tool like penthouse and Apache’s mod_pagespeed to keep your site sustainably scalable,\n 3. Reduce the scope and complexity of style calculations,\n4. If a style isn’t being used, remove it via Chrome Dev Tool’s built-in Code Coverage functionality",

		"first_meaningful_paint": "1. Load the resources needed for your above-the-fold content before you load scripts necessary for offscreen elements, \n2. Ditch the fancy fonts or include a fallback font",

		"speed_index": "1. Minimize main-thread work,\n2. educe JavaScript execution time,\n3. Minimize Critical Requests Depth,\n 4. Eliminate Render-Blocking Resources,\n 5. Defer offscreen images",

		"interactive": "1. Defer or remove unnecessary JavaScript work that occurs during page load,\n2. Optimize JavaScript Bootup,\n3. Reduce JavaScript Payloads with Tree Shaking,\n4. Reduce JavaScript Payloads with Code Splitting",
		"first_cpu_idle": "1. Minimize the number of required resources that must be downloaded and executed before a page can load, \n2. Reduce the size of required resources"

	},

	"SEOAuditRecommendations": {
		"viewport": "1. Add a viewport <meta> tag in the <head> of your HTML, \n 2. The width=device-width key-value pair sets the width of the viewport to the width of the device. The initial-scale=1 key-value pair sets the initial zoom level when visiting the page, \n 3. Check out 'https://developers.google.com/web/fundamentals/design-and-ux/responsive/#set-the-viewport' and 'https://developers.google.com/web/fundamentals/design-and-ux/responsive/#set-the-viewport' to learn more",

		"document_title": "1. Make sure that every page has a title, \n 2. Make title descriptive and concise. Avoid vague descriptions like Home. \n 3. Avoid keyword stuffing. It's not helpful to users, and search engines may mark the page as spam,\n 4. Avoid repeated or boilerplate titles, \n 5. It's OK to brand your titles, but do it concisely",

		"meta_description": "1. Add a description tag to the <head> of each of your pages,\n 2. Make sure that every page has a description, \n 3. Use different descriptions for different pages, \n 4. Include clearly-tagged facts in the descriptions. The descriptions don't have to be in sentence format. They can contain structured data, \n 5. Use quality descriptions. High-quality descriptions can be displayed in Google's search results, and can go a long way to improving your search traffic",

		"http_status_code": "1. When a page is requested, ensure that your server returns a 2XX or 3XX HTTP status code. Search engines may not properly index pages with 4XX or 5XX status codes",
		
		"link_text": "1. Stay on topic. Don't use text that has no relation to the page's content, \n 2. Don't use the page's URL as the link description, unless you have a good reason to do so, such as referencing a site's new address, \n 3. Keep descriptions concise. Aim for a few words or a short phrase, \n 4. Format links so that they're easy to spot, \n 5. Pay attention to your internal links, too. Improving the quality of internal links can help users and Google navigate your site easier",
		
		"is_crawlable": "1. Use real anchors instead of click listeners. crawlers should be able to discover links,\n 2. Use real urls instead of ajax/#!/ urls (deprecated: https://developers.google.com/webmasters/ajax-crawling/docs/getting-started), \n 3. Use <link rel='canonical'>, \n 4. Use native elements where possible (<button> instead of <div class='button'>). Possibly more a11y, \n 5. Polyfill older features",
		
		"robots_txt": "1. Put a User-agent directive before your Allow or Disallow directive, \n 2. Start your Allow or Disallow directive with one of these characters, or leave it empty, \n 3. The directive name listed in the Content column is not part of the robots.txt specification, \n 4. The sitemap URL should begin with http, https, or ftp",
		
		"image_alt": "1. Add an alt attribute to img elements, \n 2.  The value of the alt attribute should be text describing the content of the image. If an image is not informative, if it's purely a decorative element, you can tell a screen reader to ignore it using an empty alt='' attribute, \n 3. When writing a description for each image, keep in mind that this is all the information that visually-impaired users have to go by, so try to make it as useful as possible for them. You don't need to explain every detail of the image, instead consider the context in which the image is being used, and try to convey the gist of the scene as efficiently as possible",
		
		"hreflang": "1. Define an hreflang link for each language version of a URL, \n 2. FTell search engines that these pages are equivalent by adding link elements to the head of your HTML or by adding Link headers to your HTTP response, \n 3. The hreflang value must always specify a language code. The language code must follow ISO 639-1 format. The hreflang value can also include an optional regional code. For example, en-ie is for English speakers in Ireland, whereas es-ie is for Spanish speakers in Ireland. The region code must follow ISO 3166-1 alpha-2 format",
		
		"canonical": "1. Add a canonical link element to the head element of your HTML, \n 2. Make sure that the canonical URL is valid, \n 3. Use secure HTTPS canonical URLs over HTTP ones as much as possible. Make sure that the page is completely secure and doesn't have any mixed content errors, \n 4. Make sure that the canonical URL is valid, \n 5. If you use hreflang links to serve different versions of a page depending on a user's language or country, make sure that the canonical URL points to the proper page for that respective language or country, \n 6. Don't point the canonical URL to a different domain. Yahoo and Bing don't allow this, \n 7. Don't point pages to the site's root page, unless their content is the same. This may be valid in some cases, such as for AMP or mobile page variations, but nonetheless Lighthouse treats this scenario as a failure",
		
		"font_size": "1. Aim to have a font size of at least 12px on at least 60% of the text on your pages, \n 2. Text is illegible because of a missing viewport config, \n 3. See 'https://developers.google.com/web/tools/lighthouse/audits/has-viewport-meta-tag' to learn more",
		
		"plugins": "1. Remove the plugins and convert your content to HTML as Search engines can't index plugin content",
		
		"tap_targets":" 1. Increase the size of the failing tap targets. Tap targets that are 48 pixels wide and 48 pixels tall never fail, \n 2. Increase the spacing between tap targets, using properties such as padding or margin. There should be at least 8 pixels of space between tap targets. In practice Lighthouse provides some leniency on the size, so tap targets as small as 40 pixels by 40 pixels usually pass",
				
	},

	"PWAAuditRecommendations": {
		"load_fast_enough_for_pwa": "1. To speed up time-to-visually-complete, only load the resources you need in order to display the page, \n2. Check 'https://developers.google.com/web/fundamentals/performance/critical-rendering-path/' and 'https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/' for more info", 

		"works_offline": "1. Add a service worker to your app, \n2. Use the service worker to cache files locally, \n3. When offline, use the service worker as a network proxy to return the locally cached version of the file, \n4. To learn how to add a service worker into an existing app, see 'https://codelabs.developers.google.com/codelabs/offline/#0",

		"offline_start_url": "1. Define a start_url property in your manifest.json file,\n 2. Ensure that your service worker properly caches a resource that matches the value of start_url, \n 3. To learn the basics of adding apps to homescreens, see 'https://codelabs.developers.google.com/codelabs/add-to-home-screen/#0",

		"is_on_https": "1. Migrate your site to HTTPS, \n2. If your page is already running on HTTPS but you're failing this audit, then you may have problems with mixed content. Mixed content is when a secure site requests an unprotected (HTTP) resource",
		
		"service_worker": "1. Registering a service worker involves only a few lines of code, but the only reason you'd use a service worker is to implement one of the progressive web app features out of 'Offline', 'Push notifications' and 'Add to homescreen, \n 3. See 'https://developers.google.com/web/fundamentals/primers/service-workers/' to learn more",
		
		"installable_manifest": "1. Add a 192-pixel icon to your Web App Manifest, \n 2. For a hands-on, step-by-step guide on adding A2HS support in an existing application, check out 'https://codelabs.developers.google.com/codelabs/add-to-home-screen/#0' ", 
		
		"redirects_http": "1. Use canonical links in the head of your HTML to help search engines figure out the best way to get to the page, \n 2. Configure your server to redirect HTTP traffic to HTTPS. See your server's documentation to figure out the best way to do this",
		
		"splash_screen": "1. Check if the name property is set to the name of your PWA, \n 2. Check if the background_color property is set to a valid CSS color value, \n 3. Check if the icons array specifies an icon that is at least 512px by 512px, \n 4. Check if the icon exists and is a PNG",
		
		"themed_omnibox": "1. Add a theme-color meta tag to the HTML of every page you want to brand, \n 2. Add the theme_color property to your Web App Manifest", 
		
		"content_width": "1. See 'https://developers.google.com/web/fundamentals/design-and-ux/responsive/' to learn more, \n 2. You can ignore this audit if your site does not need to be optimized for mobile screens and the content width of your page is intentionally smaller or larger than the viewport width",
		
		"viewport": "1. Add a viewport <meta> tag in the <head> of your HTML, \n 2. The width=device-width key-value pair sets the width of the viewport to the width of the device. The initial-scale=1 key-value pair sets the initial zoom level when visiting the page, \n 3. Check out 'https://developers.google.com/web/fundamentals/design-and-ux/responsive/#set-the-viewport' and 'https://developers.google.com/web/fundamentals/design-and-ux/responsive/#set-the-viewport' to learn more",
		
		"without_javascript": "1. Pages should be layered so that basic content and page functionality only require HTML, \n 2. See 'https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/', And How To Use It for an example of this approach, \n 3. Use inline critical path CSS in the document <head> for absolutely critical page styles. See 'https://developers.google.com/web/fundamentals/performance/critical-rendering-path/' for more on this approach ",
		
		"pwa_cross_browser":" 1. Fix issues that occur when running the app cross-browser",
				
		"pwa_page_transitions": "1. If using a single-page-app (client rendered), transition the user to the next page immediately and show a skeleton screen and use any content such as title or thumbnail already available while content loads",

		"pwa_each_page_has_url": "1. If building a single-page app, make sure the client-side router can re-construct app state from a given URL",	
	},

	"BPAAuditRecommendations": {
		"appcache_manifest": "1. Consider using the service worker Cache API instead, \n2. To help migrate from AppCache to service workers, consider the sw-appcache-behavior library. This library generates a service-worker-based implementation of the behavior defined in an AppCache manifest",

		"is_on_https": "1. Migrate your site to HTTPS, \n2. If your page is already running on HTTPS but you're failing this audit, then you may have problems with mixed content. Mixed content is when a secure site requests an unprotected (HTTP) resource",

		"uses_http2": "1. Under URLs, every resource that was not served over HTTP is listed. To pass this audit, serve each of those resources over HTTP/2,\n 2. To learn how to enable HTTP/2 on your servers, check the link : https://dassur.ma/things/h2setup/",

		"uses_passive_event_listeners": "1. Add the passive flag to every wheel, mousewheel, touchstart, and touchmove event listener that does not call preventDefault(),\n2.In browsers that support passive event listeners, marking a listener as passive is as easy as setting a flag: document.addEventListener('touchstart', onTouchStart, {passive: true});,\n3. in browsers that do not support passive event listeners, the third parameter is a boolean to indicate whether the event should bubble or capture. So, using the syntax above may cause unintended consequences,\n4. Check the link 'https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection'for more info",
		
		"no_document_write": "1. Avoid using document.write() inside pages, specifically those uses that inject scripts",
		
		"external_anchors_use_rel_noopener": "1. When you use target='_blank', always add rel='noopener' or rel='noreferrer',\n 2. rel='noopener' prevents the new page from being able to access the window.opener property and ensures it runs in a separate process, \n 3. rel='noreferrer' attribute has the same effect, but also prevents the Referer header from being sent to the new page", 
		
		"geolocation_on_start": "1. Remove the calls to user's location and  tie the requests to user gestures instead, \n 2. Check the link 'https://developers.google.com/web/fundamentals/native-hardware/user-location/#ask_permission_responsibly' for more info",
		
		"doctype": "1. Check the link 'https://developer.mozilla.org/en-US/docs/Glossary/Doctype' for more info",
		
		"no_vulnerable_libraries": "1. Upgrade the libraries to their latest versions, \n 2. Check the link 'https://snyk.io/vuln?packageManager=all' to learn more about each library's vulnerability", 
		
		"js_libraries": "1. ",
		
		"notification_on_start": "1. Remove the lines where your code asks is requesting permission to send notifications. Remove these calls, and tie the requests to user gestures instead",
		
		"deprecations": "1. ",
		
		"password_inputs_can_be_pasted_into":" 1. Remove the code that's preventing users from pasting into password fields. It's probably a call to preventDefault() within the paste event listener that's associated to the password input element, \n 2. Find and inspect the code that's preventing pasting",
		
		"errors_in_console" : "1.",

		"image_aspect_ratio": "1. Avoiding setting the width or height of an element as a percentage of a variably-sized container, \n 2. Avoid setting explicit width or height values that differ from the source image's dimensions, \n 3. When possible it's a good practice to specify image width and height in HTML, so that the browser can allocate space for the image, which prevents it from jumping around as the page loads. It's more optimal to specify width and height in HTML rather than CSS, because the browser allocates space before parsing the CSS. In practice this approach can be difficult if you're working with responsive images, because there's no way to specify width and height until you know the viewport dimensions, \n 4. Consider using css-aspect-ratio or Aspect Ratio Boxes to help preserve aspect ratios",
	},

	"AccessibilityAuditRecommendations": {
		"accesskeys": "1. ", 

		"aria_allowed_attr": "1. Note the role and aria-* attributes of the element, \n2. Go to 'https://www.w3.org/TR/wai-aria/#role_definitions', \n3. Check the aria-* attributes of the element against the Required States and Properties or Supported States and Properties lists. Any attribute that is not in one of these two lists is invalid, \n4. To fix the invalid combo, you can either remove the invalid attributes from the element or change the role of the element to one that supports the attributes",

		"aria_required_attr": "1. Note the role and aria-* attributes of the element, \n2. Go to 'https://www.w3.org/TR/wai-aria/#role_definitions', \n 3. Check the aria-* attributes of the element against the Required States and Properties list, \n 4. Add any attributes that are missing",

		"aria_required_children": "1. To check for required child roles refer 'https://www.w3.org/TR/wai-aria-1.1/#role_definitions', \n 2. Link to the parent role from the specification, and check the required child roles. Make sure to include a child role for that parent role ",

		"aria_required_parent": "1. To check for required parent roles refer 'https://www.w3.org/TR/wai-aria-1.1/#role_definitions', \n 2. Link to the children roles from the specifications, and check the required parent roles. Make sure to include a parent role for that child role ",
		
		"aria_roles": "1. Note the role and aria-* attributes of the element., \n2. Go to 'https://www.w3.org/TR/wai-aria/#role_definitions', \n 3. Check the aria-* attributes of the element against the Required States and Properties list, \n 4. Add any attributes that are missing",
		
		"aria_valid_attr_value": "1. Note the aria-* attributes of the element,\n 2. Go to 'https://www.w3.org/TR/wai-aria/#role_definitions', \n 3. For each aria-* attribute of the element, go the page for that attribute, \n 4. Make the value of the element's attribute match one of the supported values listed in Value", 
		
		"aria_valid_attr": "1. Note the role and aria-* attributes of the element, \n 2. Go to 'https://www.w3.org/TR/wai-aria/#role_definitions', \n 3. Go to the page for this element's role, \n 4. Check the actual attributes on the element against the supported attributes, as listed in Required States and Properties and Supported States and Properties",
		
		"audio_caption": "1. ",

		"button_name": "1. For <button> elements and elements with role='button', set the inner text of the element, set the aria-label attribute, set the aria-labelledby attribute to an element with text that is visible to screen readers. In other words, the element you point to should not have display: none in its CSS or have aria-hidden='true' in its HTML, \n 2. For <input type='button'> elements, set the value attribute, set the aria-label attribute, set the aria-labelledby attribute, \n 3. For <input type='submit'> and <input type='reset'>, set the value attribute, or omit it. Browsers assign default values of 'submit' or 'reset' when value is omitted, set the aria-label attribute, set the aria-labelledby attribute ",
		
		"bypass": "1.", 
		
		"color_contrast": "1. Provide sufficient contrast for background and foreground colors, \n 2. Text that is too close in luminance (brightness) to the background can be hard to read, especially for people with low vision, but all users can benefit from sufficient contrast. Ensure color contrast of at least 4.5:1 for small text or 3:1 for large text. Large text is defined as 18pt or 14pt bold ",
		
		"definition_list": "1.",

		"dlitem": "1.",

		"document_title": "1. Make sure that every page has a title, \n 2. Make title descriptive and concise. Avoid vague descriptions like Home. \n 3. Avoid keyword stuffing. It's not helpful to users, and search engines may mark the page as spam,\n 4. Avoid repeated or boilerplate titles, \n 5. It's OK to brand your titles, but do it concisely",
		
		"duplicate_id": "1.",

		"frame_title": "1.",

		"html_has_lang": "1. To fix this problem, add a lang attribute to the <html> element, \n 2. See 'https://dequeuniversity.com/rules/axe/3.2/html-has-lang' to learn more",
		
		"html_lang_valid":" 1. Define an hreflang link for each language version of a URL, \n 2. FTell search engines that these pages are equivalent by adding link elements to the head of your HTML or by adding Link headers to your HTTP response, \n 3. The hreflang value must always specify a language code. The language code must follow ISO 639-1 format. The hreflang value can also include an optional regional code. For example, en-ie is for English speakers in Ireland, whereas es-ie is for Spanish speakers in Ireland. The region code must follow ISO 3166-1 alpha-2 format",
				
		"image_alt": "1. Add an alt attribute to img elements, \n 2.  The value of the alt attribute should be text describing the content of the image. If an image is not informative, if it's purely a decorative element, you can tell a screen reader to ignore it using an empty alt='' attribute, \n 3. When writing a description for each image, keep in mind that this is all the information that visually-impaired users have to go by, so try to make it as useful as possible for them. You don't need to explain every detail of the image, instead consider the context in which the image is being used, and try to convey the gist of the scene as efficiently as possible",
		
		"input_image_alt": "1.",

		"label": "1. Associate a label to every form element using any of Implicit labels, Explicit labels, aria-label or aria-labelledby",

		"layout_table": "1.",

		"link_name": "1.",

		"list": "1.",

		"listitem": "1. ",

		"meta_refresh": "1. ",

		"meta_viewport": "1. Add a viewport <meta> tag in the <head> of your HTML, \n 2. The width=device-width key-value pair sets the width of the viewport to the width of the device. The initial-scale=1 key-value pair sets the initial zoom level when visiting the page, \n 3. Check out 'https://developers.google.com/web/fundamentals/design-and-ux/responsive/#set-the-viewport' and 'https://developers.google.com/web/fundamentals/design-and-ux/responsive/#set-the-viewport' to learn more",

		"object_alt": "1.",
  	
  	    "tabindex": "1. Set the tabindex of each of the elements to either -1, for elements that should not be keyboard navigable, or 0, for elements that should. If you need an element to appear earlier in the tab order, consider moving it earlier in the DOM ",

  	    "td_headers_attr": "1.",

  		"th_has_data_cells": "1.",

  		"valid_lang": "1. ",

  		"video_caption": "1.",

  		"video_description": "1.",

  		"logical_tab_order": "1.",

  		"focusable_controls": "1.",

  		"interactive_element_affordance": "1. ",

  		"managed_focus": "1.",

  		"focus_traps": "1.",

  		"custom_controls_labels": "1. Associate a label to every form element. There are 4 ways to do this: Implicit labels, Explicit labels, aria-label and aria-labelledby",

  		"custom_controls_roles": "1.",

  		"visual_order_follows_dom": "1. In general, look for ways to create DOM nodes only when needed, and destroy them when no longer needed, \n 2. If your server ships a large DOM tree, try loading your page and manually noting which nodes are displayed. Perhaps you can remove the undisplayed nodes from the loaded document, and only create them after a user gesture, such as a scroll or a button click, \n 3. If you can't avoid a large DOM tree, another approach for improving rendering performance is simplifying your CSS selectors",

  		"offscreen_content_hidden": "1. To pass this audit, refactor your pages to only download above-the-fold images during the initial request. Applying this strategy to your JS, HTML, CSS, and other resources can also speed up page load time, \n 2. Consider using an IntersectionObserver to intelligently determine when to lazy-load offscreen images, \n 3. f you do use an IntersectionObserver, make sure to include the polyfill, because native browser support is limited",

  		"heading_levels": "1.",

  		"use_landmarks": "1. Use headings to outline the page , \n 2. Don't skip heading levels", 
	
	},
};



const resolversPerformance = {
	Query: {
		allLighthousedata: async () => {
			return await LighthouseData.find({}).exec();
		},

		gatlingdata: async(root, options) => {
			// return await GatlingData.find({}).exec();
			const {url, fetchTimeStart, fetchTimeEnd, phase, brand} = options;
			var timeStart = fetchTimeStart;
			var timeEnd = fetchTimeEnd;

			for(let prop in options){
				if(prop === ''){
					delete prop;
				}
			}

			const newOptions = Object.fromEntries(Object.entries(options)
				.filter(arr => {
					return (arr[1] !== "" && arr[0] !== "fetchTimeStart" && arr[0] !== "fetchTimeEnd")  
				}));

			if(fetchTimeStart === undefined || fetchTimeStart == "")
			{
				timeStart = new Date(0000000000000);
			}
			else
			{
				timeStart = new Date(parseInt(fetchTimeStart));
			}
			if(fetchTimeEnd === undefined || fetchTimeEnd == "")
			{
				timeEnd = new Date();
				console.log(timeEnd);
			}
			else
			{
				timeEnd = new Date(parseInt(fetchTimeEnd));
				console.log(timeEnd);
			}
			
			return await GatlingData
			.find({
				...newOptions,
				fetchTime: { $gte: timeStart, $lte: timeEnd} 
			})
			.sort({fetchTime: -1});
		},

		lighthousedata: async(root, options) => {
			const  { finalUrl, fetchTimeStart, fetchTimeEnd, project, phase, brand } = options;
			var timeEnd = fetchTimeEnd;
			var timeStart = fetchTimeStart;

			for(let prop in options){
				if(prop === ''){
					delete prop;
				}
			}

			const newOptions = Object.fromEntries(Object.entries(options)
				.filter(arr => {
					console.log(arr[0]);
					return (arr[1] !== "" && arr[0] !== "fetchTimeStart" && arr[0] !== "fetchTimeEnd")  
				}));

			console.log(newOptions);

			if(timeStart === undefined || timeStart == "")
			{
				timeStart = new Date(0000000000000);
				console.log(timeStart)
			}
			else
			{
				timeStart = new Date(parseInt(fetchTimeStart));
				console.log(timeStart)
			}
			if(timeEnd === undefined || timeEnd == "")
			{
				timeEnd = new Date();
				console.log(timeEnd);
			}
			else
			{
				timeEnd = new Date(parseInt(timeEnd));
				console.log(timeEnd);
			}
			console.log("timeEndyopyoy: " + timeEnd);

			return await LighthouseData
			.find({
				...newOptions,
				fetchTime: { $lte : timeEnd, $gte: timeStart} 
			})
			.sort({fetchTime: -1});

			// if(finalUrl === undefined || finalUrl == "")
			// {
			// 	return await LighthouseData.find({
			// 		...nonNullOptions,
			// 		fetchTime: { $lte : timeEnd, $gte: timeStart} 
			// 	}).sort({fetchTime: -1});	
			// }

			// else
			// {
			// 	return await LighthouseData.find({
			// 		finalUrl: finalUrl, 
			// 		fetchTime: { $lte : timeEnd, $gte: timeStart} }).sort({fetchTime: -1});
			// }
		},

		average: async (root, options) => {

			// console.log(await LighthouseData.find({}).exec());

			const  { finalUrl, fetchTimeStart, fetchTimeEnd, project, phase, brand } = options;
			var timeEnd = fetchTimeEnd;
			var timeStart = fetchTimeStart;

			for(let prop in options){
				if(prop === ''){
					delete prop;
				}
			}

			const newOptions = Object.fromEntries(Object.entries(options)
				.filter(arr => {
					console.log(arr[0]);
					return (arr[1] !== "" && arr[0] !== "fetchTimeStart" && arr[0] !== "fetchTimeEnd")  
				}));

			console.log(newOptions);

			if(timeStart === undefined || timeStart == "")
			{
				timeStart = new Date(0000000000000);
				console.log(timeStart)
			}
			else
			{
				timeStart = new Date(parseInt(fetchTimeStart));
				console.log(timeStart)
			}
			if(timeEnd === undefined || timeEnd == "")
			{
				timeEnd = new Date();
				console.log(timeEnd);
			}
			else
			{
				timeEnd = new Date(parseInt(timeEnd));
				console.log(timeEnd);
			}

			return await LighthouseData.aggregate(
				[
				{
					$match: {
						...newOptions,
						fetchTime: { $lte : timeEnd, $gte: timeStart}
					}
				},
				{
					$group: { 
						_id : { month: { $month: "$fetchTime" }, day: { $dayOfMonth: "$fetchTime" }, year: { $year: "$fetchTime" } },
						performanceAverage: {  $avg: "$audits.performance_audits.score"  },
						seoAverage: { $avg: "$audits.seo_audits.score"  },
						bestPracticesAverage: { $avg: "$audits.best_practices_audits.score" },
						pwaAverage: { $avg: "$audits.pwa_audits.score" },
						accessibilityAverage: { $avg: "$audits.accessibility_audits.score"}
					}
				},
				{
					$project: {
						_id: 0,
						fetchDate: "$_id",
						performanceAverage: 1,
						seoAverage: 1,
						bestPracticesAverage: 1,
						pwaAverage: 1,
						accessibilityAverage: 1
					}
				}
				]
				);

		},

		recommendation: async() =>{
			return await Recommendation.find({}).exec();
		},

		alerts: async() =>{
			return await Alerts.find({}).exec();
		},

		recommendationDescription: async() =>{
			return defaultRecommendationData;
		},

		parameters: async() =>{
			return await Parameters.find({}).exec();
		}
	}
}

module.exports = resolversPerformance