<script>
  export let set
  export let style

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

<nav class="{style}">
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

<style lang="scss" scoped>
	@import "./style/colors.scss";
	@import "./style/variables.scss";
  @import "./style/vendor/index.scss";
  nav {
    padding: 0 0 2.333em 0;
    // background-color: white;
    // border: 2px solid $red;
    // border-left: none;
    font-size: 1.333em;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    &.index {
      font-size: 1.666em;
    }
    @include breakpoint(large) {
      padding: 2em 2em 2.333em 3em;
      &.index {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
</style>