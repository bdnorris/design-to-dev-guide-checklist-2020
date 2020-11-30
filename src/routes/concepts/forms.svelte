<script>
  import Menu from '../../components/Menu.svelte';
  import Markdown from './markdown/forms.svx'
</script>

<svelte:head>
	<title>Concepts</title>
</svelte:head>

<article>
  <svelte:component this={Markdown}></svelte:component>
</article>
<aside>
  <Menu set="concepts" />
</aside>