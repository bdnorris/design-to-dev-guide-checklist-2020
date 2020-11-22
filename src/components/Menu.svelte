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

</style>