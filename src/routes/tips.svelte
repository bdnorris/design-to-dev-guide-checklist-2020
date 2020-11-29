<script>
	import Menu from '../components/Menu.svelte';
	import DosAndDonts from '../markdown/DosAndDonts.svx';

	const menu = [
		['concepts', 'dos-and-donts', 'Dos and Don’ts'],
	]
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<article>
	<h1>Digital Design Tips</h1>
	<DosAndDonts />
</article>
<aside>
	<Menu items={ menu } />
</aside>

