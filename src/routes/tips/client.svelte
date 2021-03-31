<script>
  import Menu from '../../components/Menu.svelte';
  import Markdown from './markdown/client.svx'
</script>

<svelte:head>
	<title>Client Review</title>
</svelte:head>

<article>
  <svelte:component this={Markdown}></svelte:component>
</article>
<aside>
  <Menu section="tips" />
</aside>