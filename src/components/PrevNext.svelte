<script>
  import { menus } from '../stores.js';
	export let section;
	export let page;

  let menuItems = menus[section]
  let currentIndex = menuItems.findIndex((i) => {
    return i[1] = page
  })
  console.log({currentIndex})
  let prev = (currentIndex === 0) ? false : menuItems[currentIndex - 1]
  let next = (currentIndex < menuItems.length) ? menuItems[currentIndex + 1] : false
  console.log({prev}, {next})
</script>

<div>
  {#if prev}
    <a href="{prev[0]}/{prev[1]}">Previous</a>
  {/if}
  {#if next}
    <a href="{next[0]}/{next[1]}">Next</a>
  {/if}
</div>