<script>
  import Menu from '../../components/Menu.svelte';
  import PrevNext from '../../components/PrevNext.svelte'
  import Markdown from './markdown/responsive-design.svx'
</script>

<svelte:head>
	<title>Concepts</title>
</svelte:head>

<article>
  <svelte:component this={Markdown}></svelte:component>
  <footer>
    <PrevNext section="concepts" page="responsive-design" />
  </footer>
</article>
<aside>
  <Menu section="concepts" />
</aside>