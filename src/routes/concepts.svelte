<script>
	import ResponsiveDesign from '../components/ResponsiveDesign.svx';
	import Menu from '../components/Menu.svelte';

	const menu = [
		['concepts', 'responsive-design', 'Responsive Design']
	]
</script>

<svelte:head>
	<title>Digital Design Concepts</title>
</svelte:head>

<Menu items={menu} />

<h1>Digital Design Concepts</h1>

<ResponsiveDesign />

<div class="divider"></div>

<h2 id="design-systems">Design Systems</h2>

<p>Design systems, style guides, design tokens, etc. are becoming an important strategic way to help companies manage their digital design across sprawling collections of websites, apps, and other mediums using digital interfaces.</p>

<p>It can also help you manage a digital presence across <em>time.</em> Easing the difficulty of dealing with long-running websites with different designers and developers stepping on and off the team.</p>

<p>More to the point, <em>not</em> having some sort of system or guide can cause lots of problems, from lost files, mix-and-match design styles, difficulty auditing systems, and everyone on the team having trouble seeing the big picture.</p>

<h3 id="what-s-included">What&#39;s included</h3>

<ul>
	<li>Minimally, you would have a system of components and sub-components expressed as editable design files, with matching front-end coded solutions.</li>
	<li>Variations off of those components are created by creating new sub-components and remixing them into new things.</li>
	<li>All web pages are composed of these components.</li>
	<li>This does not eliminate the need for &quot;one-off&quot; components, however, even one-off components probably have re-usable responsive layout schemes that can ease their creation and coding.</li>
</ul>

<h4 id="pros">Pros</h4>
<ul>
	<li>One source of truth.</li>
	<li>Making global changes is more controlled, less mysterious and dangerous (updates are easier to see and manage across a finite system instead of a sprawling website).</li>
	<li>Growth and/or sprawl is visible (it doesn&#39;t prevent sprawl, just makes you aware of it).</li>
	<li>Forces the creation of naming conventions (at least between designer and developer).</li>
	<li>Front-end dev can work alongside design, without having to wait for back-end architecture to be ready.</li>
</ul>

<h4 id="cons">Cons</h4>
<ul>
	<li>More time has to be spent up front, <strong>but</strong> with potential time savings for years to come.</li>
	<li>Tooling is a bit difficult.</li>
</ul>

<h4 id="here-s-a-site-with-a-bunch-of-examples">Here&#39;s a site with a bunch of examples</h4>

<p><a href="http://styleguides.io/">Website Style Guide Resources</a></p>
<p><a href="https://clearleft.com/posts/designing-design-systems">ClearLeft: Designing Design Systems</a></p>

<div class="divider"></div>

<h2 id="atomic-design-and-components">Atomic Design and Components</h2>

<p>Brad Frost is the designer/developer responsible for a lot of the growth, high-level thinking, and advocacy on the subject of component based design. He has a free book you should read. It&#39;s not that long!</p>

<img src="images/atomic-design-process.png" alt="atomic design">

<p><a href="https://atomicdesign.bradfrost.com/table-of-contents/">Atomic Design | Atomic Design by Brad Frost</a></p>

<h3 id="components">Components</h3>

<p>The concept of components is integral to a design system, but it can also be used very naturally for projects of any size.</p>
<p>If you&#39;re unfamiliar, the tools provided in modern digital design applications, like Adobe XD, encourage this, and you&#39;ll get a lot of benefits from moving to this approach.</p>
<p>The principal is you create components in your design program, and those can be reused throughout your design, or saved in a library and imported into the program for reuse. They create a &quot;source-of-truth&quot;, changing the component inherits to all its instances.</p>

<h3 id="atomic-principles">Atomic Principles</h3>
<p>Obviously, this fits in with the principles of Atomic design very nicely. Components can be small or large, simple or complex, and any component can be made up of lots of small components.</p>

<h3 id="responsive-benefits">Responsive Benefits</h3>
<p>Creating a component allows you to easily use instances of that component across your responsive breakpoints. This allows you to edit once and let all the instances inherit that change, increasing efficiency, and removing some of the tedium of designing for different screen sizes.</p>
<p>Components can also have &quot;responsive resize&quot; settings applied, allowing you to resize instances without affecting the master component.</p>

<h3 id="how-to-">How to:</h3>

<p><a href="https://letsxd.com/videos/components">Using Components in Adobe XD</a></p>
<p><a href="https://medium.com/@mo.jahanii/adobe-xd-everything-about-resizable-components-f84105910428">Adobe XD: Everything about resizable components</a></p>

<div class="divider"></div>

<h2 id="web-patterns">Web Patterns</h2>

<p>The web shares a lot of principles with other graphic design disciplines, but there are also a lot of web-specific patterns and specifications people are used to, if you deviate, make sure you have a good reason.</p>
<p>Some of these patterns follow how HTML and browsers work, but many are just conventions created over the years. </p>
<p>For example, the learned behavior of how to use an image carousel implies there will be arrows on the left and right to move between sequential images, and there will often be some kind of indicator at the bottom to show the number of items, and the current one you&#39;re on. To break this pattern for similar functionality would be to invite confusion.</p>
<p>You should research these patterns when designing your interfaces. </p>
<p><a href="http://ui-patterns.com/">UI Patterns</a></p>
<p><a href="https://inclusive-components.design/">Inclusive Components</a></p>

<div class="divider"></div>

<h2 id="styletiles">Styletiles</h2>
<p>One way to quickly iterate on the styles for a web project without having to complete full page designs too early.</p>

<h3 id="-audience-">Audience</h3>
<p>Although style tiles are great for communicating amongst a design and development team, the ultimate audience for them is the client. They’re meant to quickly get feedback and show possible directions.</p>

<h3 id="-level-of-detail-">Level of Detail</h3>
<p>Style tiles are general. They exist to communicate mood and the general design direction.</p>
<p><a href="http://styletil.es/">Styletiles</a></p>

<div class="divider"></div>

<h2 id="wireframing-prototyping">Wireframing / Prototyping</h2>

<p>This is a big subject, so lets just look at some basic definitions. </p>

<h3 id="wireframing">Wireframing</h3>
<p>Wireframes are essentially a low-fidelity design. The point is to work out layouts and user interfaces by making the least design decisions possible. A good wireframe reveals what you know and what you don&#39;t know about your project. Most importantly it aligns all stakeholders before the more in-depth design work begins. </p>

<h4 id="resiliency">Resiliency</h4>
<p>There’s a tendency in the digital design process to design with ideal data, mock or otherwise. But a good template should be resilient and accommodate varying amounts and types of content.</p>
<p>Will your design break if the client changes the copy at the last minute? Keep this in mind as you move from your wireframe to your fleshed out design.</p>

<h3 id="prototyping">Prototyping</h3>
<p>Prototyping can take a lot of different forms, but here&#39;s where we are making things that are actually interactive but have a similar incompleteness to a wireframe. The design probably isn&#39;t all the way thought out yet, and you&#39;re not even sure which pattern to use or abuse. </p>

<h4 id="types">Types</h4>
<ul>
	<li>XD or similar design programs prototyping features.
		<ul>
			<li>Adding states and clickable navigation elements to your designs that can be previewed on the web.</li>
			<li>This is probably going to be the most common way we prototype sites and apps.</li>
		</ul>
	</li>
	<li>Low-overhead coded implementations.
		<ul>
			<li>Here&#39;s where a developer would start coding a project, but typically with a small data-set, and unpolished UI.</li>
			<li>The goal is to get something interactive in front of stakeholders to work out the problem.</li>
		</ul>
	</li>
	<li>Prototyping specific applications
		<ul>
			<li>There are a host of prototyping specific apps that can be used to work out solutions in low-to-high fidelity.</li>
			<li>These typically are much more in-depth, and are mostly beneficial for very large, expensive projects.</li>
			<li>Examples include Framer or InVision Studio</li>
			<li><a href="https://www.framer.com/">https://www.framer.com/</a></li>
			<li>These often have a lot more animation prototyping features than Adobe XD, at least at the moment.</li>
		</ul>
	</li>
</ul>

<h4 id="behavior-and-interactivity">Behavior and Interactivity</h4>

<p>Prototyping most useful for complex user inputs.</p>
<ul>
	<li>For example: filters and search should show whether the increasing specificity is an additive process, or a subtractive, i.e. does the result set increase when adding search terms, or narrow?</li>
	<li>Micro-interactions</li>
	<li>Any other special behaviors that are based on user input</li>
</ul>

<h4 id="state">State</h4>

<p>Prototype for all items that have a state, if you can’t design, <strong>document.</strong> </p>
<ul>
	<li>Hover states</li>
	<li>Null/0/empty results from search or filtering and/or edge case results (1 item, 100 items)</li>
	<li>Normal, error, and focus states on form inputs, including error messages</li>
	<li>Any interface changes
		<ul>
			<li>Display toggles</li>
			<li>Data updates
				<ul>
					<li>Wait times and loading states (what appears when there is a delay in updating the page?)</li>
				</ul>
			</li>
		</ul>
	</li>
</ul>

<h3 id="animation">Animation</h3>
<ul>
	<li>Animations need planning, so please <strong>document</strong> where you think animation will be useful and provide examples/mockups/sketches of the style of animation</li>
	<li>If animation is elaborate, plan on adding a prototyping phase concurrent with visual design</li>
</ul>

<h4 id="complexity">Complexity</h4>
<p>We can animate a lot. But the complexity varies and it&#39;s hard to break down in any kind of guidelines as to what&#39;s more or less complexity, time or cost.</p>
<p>So let&#39;s discuss it early. </p>
<p><em>Transforms</em> and <em>opacity</em> are the most performant animations. You know what opacity is, but what can we &quot;transform&quot;? Here&#39;s a start:</p>
<p><a href="https://cssreference.io/property/transform/">transform - CSS Reference</a></p>

<h4 id="animista">Animista</h4>
<p>Animista is the best site to find some nice animation styles you can tweak and export code. All of these implementations have pretty good performance. </p>
<p><a href="https://animista.net/">Animista</a></p>

<h4 id="svg-line-dashes">SVG Line Dashes</h4>
<p>We can do that line drawing in animation thing, but your SVGs need to be designed to accommodate it. </p>

<h4 id="animation-libraries">Animation Libraries</h4>
<p>There are some cool helper libraries out there for animation. These can speed up dev of more complex animations. However, they have a performance and download cost, so better to stick with one. Here&#39;s one...</p>
<p><a href="https://animejs.com/">anime.js</a></p>
<p>And here&#39;s an example implementation.</p>
<p><a href="https://tobiasahlin.com/moving-letters/">Moving Letters</a></p>

<div class="divider"></div>

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
