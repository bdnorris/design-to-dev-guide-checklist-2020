<script>
  export let items;
</script>

<nav>
  <ul>
    {#each items as item}
      <li>
        <a href='{ item[0] }#{ item[1] }'>
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