<script>
	import Menu from '../components/Menu.svelte';
	import ResponsiveDesign from '../markdown/ResponsiveDesign.svx';
	import DesignSystems from '../markdown/DesignSystems.svx'
	import WireframePrototyping from '../markdown/WireframePrototyping.svx'

	const menu = [
		['concepts', 'responsive-design', 'Responsive Design'],
		['concepts', 'design-systems', 'Design Systems'],
		['concepts', 'wireframing-prototyping', 'Wireframing/Prototyping'],
	]
</script>

<svelte:head>
	<title>Digital Design Concepts</title>
</svelte:head>

<article>
	<h1>Digital Design Concepts</h1>
	<ResponsiveDesign />
	<div class="divider"></div>
	<DesignSystems />
	<div class="divider"></div>
	<WireframePrototyping />
	<div class="divider"></div>
</article>
<aside>
	<Menu items={ menu } />
</aside>


<h2 id="typography">Typography</h2>

<h3 id="responsive-typography">Responsive Typography</h3>
<p>When designing for various screens, there are multiple approaches to optimizing typography and a thousand variables.</p>

<h4 id="watch-your-measure">Watch Your Measure</h4>
<p>Measure (line-length) and word breaking are some of the more difficult things to control on the web and to optimize for responsive designs. Assuming a flexible container set to some percentage width of the viewport, how do you control line lengths when you don&#39;t control the canvas?</p>

<h3 id="webfonts">Webfonts</h3>

<h4 id="-document-font-usage-and-licensing-"><strong>Document</strong> <strong>font usage and licensing</strong></h4>
<p>Webfonts need client specific licensing. We can&#39;t use desktop fonts or webfonts from another client. This should figured out during the design process, so you don&#39;t get too far using a font that&#39;s prohibitively expensive. </p>
<p>Then, the developer either needs the files, or the specific information. </p>
<ul>
	<li>If service other than Adobe Fonts or Google Fonts, please provide details or access</li>
	<li><strong>Document</strong> weights and variations used (normal, medium, medium italic, etc.). If we include only the weights and variations that are actually used in the design, we can significantly shrink which fonts we have to download.</li>
</ul>
<p>We can use, with no special licensing…</p>
<ul>
	<li>Google Fonts</li>
	<li>Typekit/Adobe Fonts</li>
</ul>
<p>Any other fonts need to have a webfont license secured. Again, we cannot use desktop fonts, and we will not convert from desktop to webfonts.</p>

<h3 id="opentype-features">OpenType Features</h3>
<p>There are various open type features we can use in the browser. But it depends on the font, and it depends on the browser. I&#39;ll leave you to research from here, this stuff is still in a bit of flux. </p>
<p>Typically, Google and Adobe only provide some OpenType features. We may have to find or even create different webfont versions to have all the desired features. </p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/OpenType_fonts_guide">OpenType font features guide</a></p>
<p><a href="https://fontdrop.info/">FontDrop!</a></p>
<p><a href="https://sparanoid.com/lab/opentype-features/">The Complete CSS Demo for OpenType Features</a></p>

<h3 id="variable-fonts">Variable fonts</h3>
<p>Variable fonts are a new Open Type specification. On the web it lets us pull in one webfont file for all of our weights and ranges of oblique-ness. It&#39;s more efficient, allows extremely precise control, and can even be animated. </p>
<p>Adobe apps support manipulating these as well. </p>
<p><a href="https://v-fonts.com/">Variable Fonts</a></p>
<p>Google fonts has been rolling out the ability to use the variable weight features on quite a few fonts in it&#39;s library:</p>
<p><a href="https://fonts.google.com/?vfonly=true">Google Fonts</a></p>
<p><a href="https://www.recursive.design/">Recursive Sans &amp; Mono</a></p>
<p>Very cool. And, we can use it right now, but, there&#39;s no IE support.</p>

<h3 id="type-resources">Type Resources</h3>
<p><a href="https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/">Size Matters: Balancing Line Length And Font Size In Responsive Web Design</a></p>
<p><a href="http://trentwalton.com/2012/06/19/fluid-type/">Fluid Type</a></p>
<p><a href="http://www.modularscale.com/">Scaling your hierarchy</a></p>
<p><a href="https://www.gridlover.net/try">Grid Lover</a></p>
<p><a href="https://archetypeapp.com/">Archetype App</a></p>

<div class="divider"></div>

<h2 id="layout">Layout</h2>

<h3 id="the-layout-problem">The Layout problem</h3>
<p>Responsive web design is hard, and for a while, the tools that made it easier (mostly the Bootstrap framework) made a lot of sites look like they came off of the same assembly line. This was mostly a reliance on common patterns (generally a good thing), but also, it was a response to just how hard it is to design responsively. Designers repeatedly fell back on familiar territory and patterns.</p>
<p>However, now that a lot of the patterns are defined, we&#39;re in a better place to start breaking, expanding and generally being more creative with our layouts.</p>
<p><a href="https://vimeo.com/147950924">Modern Layouts: Getting Out of Our Ruts by Jen Simmons</a></p>

<h3 id="asset-layout-and-alignments">Asset Layout and Alignments</h3>
<p>Similar assets should be sized and cropped similarly. If you find that assets placed in a layout have to be nudged to align with other assets, they likely need to be re-visited. Those nudges can be hard to translate to web stylesheets, and become increasingly complicated when compensating for different breakpoints.</p>
<p>Instead, make sure grids, columns, and rows of assets can be aligned using basic alignment settings like top, left, right, bottom and center. If they have to be nudged outside of that, this will not translate to the web.</p>

<h3 id="when-in-doubt-ask">When in doubt, ask</h3>
<p>The more complex a layout or a design, the less obvious the actual assets needed to give to the developer. Different front-end devs may very well try to achieve the same design in different ways, requiring different assets. When it&#39;s not obvious how an asset should be sized and prepped, some discussion may be required.</p>

<h3 id="css-grid">CSS Grid</h3>
<p>As much as I&#39;d love to pontificate on the difficulties of web layouts through the years, we&#39;ll just skip to the fact that Grid is the first time we&#39;ve had a layout spec that works in two dimensions.</p>
<p><img src="images/cssgrid_flexbox_fallbacks.png" alt="Grid Graphic"></p>

<h4 id="the-biggest-thing-grid-adds-is-">The biggest thing grid adds is...</h4>

<p>Horizontal grid lines. We make columns in CSS with hacks, then flexbox, but Grid is the first time we&#39;ve been able to do horizontal alignments. </p>
<p>You should have a basic understanding of Grid, because if you make something look like a grid in your designs, we might try to use Grid to lay it out. Grid can do amazing things, but, there are little things it doesn&#39;t do.</p>

<div class="divider"></div>

<h2 id="forms">Forms</h2>
<p>Forms often pose difficult design challenges because of push and pull of UX considerations, browser eccentricities and development time.</p>
<p>Typical forms are the most out-of-the-box and ready-to-go interactive elements available to us in the browser. Because of that, there are a lot of established patterns, which can be both good and bad. It’s important a UI designer understand these patterns, and can build designs to support them, rather than fight them.</p>
<p>There are also a lot of limitations for styling. Browser makers have built in styling for forms, and there are limitations regarding what can be styled, and what can’t.</p>

<h3 id="input-types">Input Types</h3>
<p>Know your input types. Here are the basics:</p>

<h4 id="text">Text</h4>
<p>Single line text entry. This also includes special inputs for email addresses, telephone numbers, search, password, and more. </p>
<label for="text-ex">Text</label>
<input type="text" id="text-ex">
<label for="pw-ex">Password</label>
<input type="password" id="pw-ex">

<h4 id="text-areas">Text Areas</h4>
<p>Muli-line text entry.</p>
<label for="ta-ex">Text Area</label>
<textarea id="ta-ex" />

<h4 id="number">Number</h4>
<p>This field lets you define a min, a max, and a step property allowing the user to bump them with UI or even the arrow keys on their keyboard. Most often seen in quantity boxes when shopping. </p>
<label for="number-ex">Number</label>
<input id="number-ex" type="number">

<h4 id="range">Range</h4>
<p>Similar to number, but gives you a slider as the UI. However, custom styling is difficult, so most of the time you see these, they&#39;ve been painstakingly re-created, rather than use the default styles.</p>
<input type="range">

<h4 id="date">Date</h4>
<p>Browser support is still pretty bad, so most of the time you see a date-picker, it&#39;s a custom solution, but someday native date fields will be useable. </p>
<input type="date">

<h4 id="checkboxes">Checkboxes</h4>
<p>Checkboxes represent true/false or on/off options in forms. They have no relationships other than to themselves. Styling involves hiding the real elements, and controlling them with fakes, aka &quot;psuedo elements&quot;.</p>
  <input type="checkbox" id="cl" name="cl"
         checked>
  <label for="cl">Checkbox Label</label>

<h4 id="radio-buttons">Radio Buttons</h4>
<p>The little circle inputs are radio buttons and exist as a group. Turning on one means turning off another. Styling them also involves hiding the real elements and replacing them with psuedo elements.</p>
	<input type="radio" id="huey" name="drone" value="huey" checked>
	<label for="huey">Huey</label>
	<input type="radio" id="dewey" name="drone" value="dewey">
	<label for="dewey">Dewey</label>
	<input type="radio" id="louie" name="drone" value="louie">
	<label for="louie">Louie</label>

<h4 id="selects-or-dropdowns-">Selects or &quot;Dropdowns&quot;</h4>
<p>Selects can hide big lists of options. If there are less than 4 or so, consider using a radio group instead. Big long lists can be detrimental to the user experience. </p>
<p>You may have seen type-ahead or searchable dropdowns. These are not native fields, but custom implementations. There is an input called a datalist that is similar, but not quite as robust as those custom solutions.</p>
<p>Selects can also be tricky to style, but it&#39;s do-able. A good recommendation is to not attempt to style the contents of the dropdown, but just the dropdown itself.</p>
<select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>

<h4 id="file">File</h4>
<p>A button for uploading a file. The file upload has to be handled by separate programming, so these are just a UI that allows for picking a file reference from the users computer. Drag and drop implementations are not-native fields.</p>
<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">

<h4 id="native">Native?</h4>
<p>So what is meant by &quot;native&quot; fields? Those types described above all have native implementations that work in the browser. Native is preferred, especially for mobile usage, where a user on iOS gets an iOS experience, and an android user gets and android experience. However, styling options can be limited, meaning often, some inputs are manually pieced together to allow for full styling. Having an idea of the difference can help prioritize needs, as these custom styles are often very time consuming, and less accessible to users with disabilities. </p>

<h3 id="input-labels-accessibility-and-placeholders">Input Labels, Accessibility, and Placeholders</h3>
<p>All inputs should have corresponding labels to remain accessible. The labels also need to remain visible. Placeholders can technically be put in text inputs, but once the user starts typing, they disappear. </p>

<h3 id="front-end-form-validation">Front-end Form Validation</h3>
<p>Form data should be validated before getting sent to the server. This means checking formats, lengths, required fields etc. There are two basic types:</p>

<h4 id="built-in-or-native-form-validation">Built-in, or &quot;native&quot; Form Validation</h4>
<p>HTML5 forms have validation features built in. They can check your data and show an error to the user before the form will be allowed to send. However, those validation messages are not customizable, and how they look varies by browser. </p>
<p>This kind of validation can be extended, to a point, with additional Javascript.</p>

<h4 id="custom-javascript-validation">Custom Javascript Validation</h4>
<p>This validation turns off the HTML5 validation, and uses Javascript to completely customize the error messages look and the actual text being used. </p>
<p>Typically a library of some sort is used, but it can still take a significant chunk of time to build this type of validation. </p>

<h4 id="why-does-it-matter-">Why does it matter?</h4>
<p>Make sure you and your developer have a plan for the kind of validation being used. If the plan is to use native validation, you&#39;ll be wasting your time designing custom errors. If the plan is to use custom validation, you will then need to design it.</p>
