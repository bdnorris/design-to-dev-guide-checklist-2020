<!-- src/routes/blog/[slug].svelte -->
<script context="module">

  import { beforeUpdate, afterUpdate } from 'svelte';
  import ResponsiveDesign from "./markdown/responsive-design.svx"
  import DesignSystems from "./markdown/design-systems.svx"

  const components = [
    { slug: 'responsive-design', component: ResponsiveDesign, name: 'Responsive Design'},
    { slug: 'design-systems', component: DesignSystems, name: 'Design Systems'} 
  ]
	// the (optional) preload function takes a
	// `{ path, params, query }` object and turns it into
	// the data we need to render the page
	export async function preload(page, session) {
		// the `slug` parameter is available because this file
		// is called [slug].svelte
		const { slug } = page.params;

		// `this.fetch` is a wrapper around `fetch` that allows
		// you to make credentialled requests on both
    // server and client

    return { slug }

  }
</script>

<script>
  // export let article;
  export let slug;
  // export let matchingComponent;

  let matchingComponent = components.find(c => c.slug === slug);

  // import B from "./icons/B.html";
  // import C from "./icons/C.html";
  // import D from "./icons/D.html";



  // export let cmp = components[0].component

  function update() {
    // determine whether we should auto-scroll
    // once the DOM is updated...
    console.log('update')
    matchingComponent = components.find(c => c.slug === slug);
    cmp = matchingComponent.component
	}
  
  // console.log(matchingComponent)

  export let cmp = matchingComponent.component

</script>

<svelte:head>
	<title>{ slug }</title>
</svelte:head>

<article>
  <svelte:component this={cmp}>
    <!-- contents go here -->
  </svelte:component>
</article>
<aside>
  <ul>
    {#each components as component}
      <li>
        <a href="concepts/{ component.slug }" on:click={update}>
          { component.name }
        </a>
      </li>
    {/each}
  </ul>
</aside>


