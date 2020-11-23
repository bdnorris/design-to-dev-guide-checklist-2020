<script>
  export let items;
</script>

<nav>
    {#each items as item}
			<a href='{ item[0] }#{ item[1] }'>
        { item[2] }
      </a>
		{/each}
</nav>

<style lang="scss">
	@import "./style/colors.scss";
  nav {
    padding: 2em 2em 2.3em 2em;
    background-color: white;
    border: 2px solid $red;
    border-left: none;
  }
</style>