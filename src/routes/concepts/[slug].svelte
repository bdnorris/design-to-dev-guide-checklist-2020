<script context="module">

  export async function preload(page, session) {
		// the `slug` parameter is available because this file
		// is called [slug].svelte
		const { slug } = page.params

    return { slug }
  }

</script>
<script>
  export let slug

  import { onMount } from 'svelte'

	let Markdown

	onMount(async () => {
		const module = await import('./concepts/markdown/' + slug + ".svx")
		Markdown = module.default
	})
</script>

<svelte:head>
	<title>Concepts</title>
</svelte:head>

<article>
  <svelte:component this={Markdown}></svelte:component>
</article>
<aside>
  <ul>
    <li>
      <a rel=prefetch href="concepts/responsive-design">
        Responsive Design
      </a>
    </li>
    <li>
      <a rel=prefetch href="concepts/design-systems">
        Design Systems
      </a>
    </li>
  </ul>
</aside>