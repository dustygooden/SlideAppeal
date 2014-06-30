--------------------
 Slide Appeal
--------------------

Slide Appeal is a website "add-in" created to enhance the mobile responsiveness of your site. In order
for Slide Appeal to function properly you must follow certain instructions contained within this document. 
Slide Appeal uses HTML5, CSS3, and jQuery (the latest version).

Slide Appeal is issued under the MIT license. For more information please check the LICENSE.txt file
included with this distribution.

--------------------
 Main Requirements
--------------------

In order for Slide Appeal to function you must be sure that certain items are not changed. Mainly, you
need to keep the ID of any tag in the HTML file the same as is shown in the demo. Since SlideZilla uses 
these IDs specifically, if they are changed it would no longer function, also the CSS would no longer
affect the HTML.

The only other portion that will inherently cause issues is the #toggleButton selector in the CSS file. The
"display:none" property will prevent SlideZilla from running, causing issues if it is added in the mobile
device section of the CSS file. Feel free to remove it from the desktop devices section, however, doing so
will allow SlideZilla to run on any screen size. Furthermore, if you were to remove the property, it may
be better to alter the CSS file and remove the "@media" selector in the mobile device section, and merge
the desktop and mobile sections together.

Pretty much anything else is OK to edit to your liking.

--------------------
 Demo Tutorial
--------------------

In this section I will give you some brief instructions on using Slide Appeal in the demo site, I will
discuss the use of SlideZilla on other sites in another section.

	--------------------
	 The HTML
	--------------------
	In the demo you will see that I have already laid out a template for the navigation section. The section
	is contained between the <nav> tags, with the ID set to "main-nav". As mentioned above, you shouldn't
	change the ID on this section, as it will cause problems with SlideZilla. 
	
	Nested in the <nav> is a <ul> followed by subsequent <li> tags, as well as another <ul> and <li> set. This
	layout allows us to have a subsection. It is created by nesting a <ul> within a set of parent <li> tags.
	Also found between each pair of <li> tags, except for the sub-section's parent, is a pair of <a> tags.
	The reason I didn't place any <a> tags within the sub-section's parent is that I didn't need the parent
	to link anywhere for the purposes of this demo, however it is perfectly fine to do that if you wish.
	
	You will see that the <nav> section also contains two other IDs. These ID should also be left un-changed,
	or you will again prevent SlideZilla from functioning. 
	
	Other than that, the HTML is pretty standard.
	
	--------------------
	 The CSS
	--------------------
	The demo CSS is categorized into three basic sections: General, Desktop, and Mobile. 
	
	The General section simply declares that the entire document should use the specified font, and not use
	margins by default. The reason for the "margin:0" property is so that the <nav> will be displayed at the 
	top of the page, and without space (or margins). This is only necessary for Desktop Devices.
	
	The Desktop section has a few properties that are commonly used in site navigation. Feel free to change 
	these to your liking, as there is no appealing CSS included in the demo for desktop devices.
	
	The Mobile section is where all of the interesting CSS is located. Commonly developers will want to
	change the color, line-height, background-color, and list-style for the "#main-nav" selectors. Also,
	you may want to change the appearance of the "#toggleButton". This is the little grey button that allows
	the user to slide the navigation menu up and down.
	
--------------------
 Custom Tutorial
--------------------

In this section I will give you instructions for using SlideZilla on your own site.

	--------------------
	 The HTML
	--------------------
	You will need to add the script tags that the demo uses to the head section of each page on your site.
	
	Like the demo HTML file shows, you need to format your navigation menu in the following way...
	
	You need a container, if you choose to use your own CSS then feel free to leave the ID attribute out,
	as it is not used by SlideZilla.
	
	You will also need a <ul> with <li> tags contained within. This <ul> section needs to have the ID set
	to "main-ul". The <li> tags will not be required to have any classes or IDs.
	
	You will need a <div>, or an alike tag, with the ID set to "toggleButton". 
	
	--------------------
	 The CSS
	--------------------
	The CSS is fairly simple, as long as the "#toggleButton" is not set to "display:none"  then SlideZilla
	will run. 
	
	The following is optional, but it allows your navigation to have an appealing style...
	
	If you want your <nav> to have a background color, set the "background-color" property in the "#main-nav"
	selector. This will leave the toggle button with no background, which is good.
	
	In order to give the toggle button color, specify a "background-color" in the "#toggleButton" selector.
	You may also want to specify a size.
	
	In order for the toggle button to stay at the top of the page, you will need to set the position to
	either "position:absolute" or "position:fixed", and then "top:0". This will give the same basic style
	as the demo has.
	
	SlideZilla looks better on mobile devices than it does desktop, in that case you may want to place the
	style properties for the mobile navigation inside of an @media selector.
	
	Feel free to copy the CSS and add it to your own site.
	
	--------------------
	 The File Structure
	--------------------
	Place the "slidezilla.min.js" in a file named "js" located in your root directory. The other js file
	included in the repository is a non-minified version of SlideZilla, you do not need to include that
	in your site. The file is only included so that you may edit it to meet your needs.
	
--------------------
 Other Information
--------------------

SlideZilla is compatible with Dropotron, by N33 (check him out on GitHub). Dropotron is great for desktop
devices, and is a good companion to SlideZilla. However, you will need to add a tag to the top of the
dropotron js file that stops it from running when the #toggleButton is visible. You will also need to add
this to the <script> located in the HTML file in his demo (it tells dropotron what your #main-nav is).

Font-Awesome has been integrated with this demo, currently it is only used in the navigation section.
One note is that it causes a jQuery warning to appear if you use the bootstrap version, this will hopefully 
change soon.
 