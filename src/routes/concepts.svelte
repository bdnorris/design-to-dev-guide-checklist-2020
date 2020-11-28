<script>
	import Menu from '../components/Menu.svelte';
	import ResponsiveDesign from '../markdown/ResponsiveDesign.svx';
	import DesignSystems from '../markdown/DesignSystems.svx'
	import WireframePrototyping from '../markdown/WireframePrototyping.svx'
	import Typography from '../markdown/Typography.svx'
	import Forms from '../markdown/Forms.svx'

	const menu = [
		['concepts', 'responsive-design', 'Responsive Design'],
		['concepts', 'design-systems', 'Design Systems'],
		['concepts', 'wireframing-prototyping', 'Wireframing/Prototyping'],
		['concepts', 'typography', 'Typography'],
		['concepts', 'forms', 'Forms'],
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
	<Typography />
	<div class="divider"></div>
	<Forms />
</article>
<aside>
	<Menu items={ menu } />
</aside>
