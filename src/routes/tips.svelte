<script>
	import Menu from '../components/Menu.svelte';
	import DosAndDonts from '../markdown/DosAndDonts.svx';
	import TypographyTips from '../markdown/TypographyTips.svx';
	import Layout from '../markdown/Layout.svx';
	import MaxWidths from '../markdown/MaxWidths.svx';
	import Images from '../markdown/Images.svx';

	const menu = [
		['tips', 'dos-and-donts', 'Dos and Don’ts'],
		['tips', 'typography', 'Typography'],
		['tips', 'layout', 'Layout'],
		['tips', 'max-widths', 'Max-widths, Alignment, and Outer Margins'],
		['tips', 'images', 'Advanced Strategies for Images'],
	]
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<article>
	<h1>Digital Design Tips</h1>
	<DosAndDonts />
	<div class="divider"></div>
	<TypographyTips />
	<div class="divider"></div>
	<Layout />
	<div class="divider"></div>
	<MaxWidths />
	<div class="divider"></div>
	<Images />
	<div class="divider"></div>
</article>
<aside>
	<Menu items={ menu } />
</aside>

