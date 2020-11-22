<script>
	export let copy;
	export let emoji;
</script>

<style lang="scss">
@import "./style/variables.scss";
@import "./style/colors.scss";

.callout {
	background-color: $llgray;
	padding: 0.75em 0.75em 0.8em 1em;
	border: 2px solid $lgray;
	font-family: $sans;
	font-size: 1.2em;
}
</style>

<p class="callout">
{#if emoji === 'megaphone'}
	📣
{/if}
{#if emoji === 'fire'}
	🔥
{/if}
   {@html copy }
</p>
