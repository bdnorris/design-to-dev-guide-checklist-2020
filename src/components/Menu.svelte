<script>
  export let set

  let items

  if (set === 'tips') {
    items = [
      ['tips', 'dos-and-donts', 'Dos and Don’ts'],
      ['tips', 'typography', 'Typography'],
      ['tips', 'layout', 'Layout'],
      ['tips', 'max-widths', 'Max-widths, Alignment, and Outer Margins'],
      ['tips', 'images', 'Advanced Strategies for Images'],
    ]
  } else if (set === 'concepts') {
    items = [
      ['concepts', 'responsive-design', 'Responsive Design'],
      ['concepts', 'design-systems', 'Design Systems'],
      ['concepts', 'wireframing-prototyping', 'Wireframing/Prototyping'],
      ['concepts', 'typography', 'Typography'],
      ['concepts', 'forms', 'Forms'],
    ]
  }
</script>

<nav>
  <ul>
    {#each items as item}
      <li>
        <a rel=prefetch href='{ item[0] }/{ item[1] }'>
          { item[2] }
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
	@import "./style/colors.scss";
  nav {
    padding: 2em 2em 2.333em 3em;
    // background-color: white;
    // border: 2px solid $red;
    // border-left: none;
  }
</style>