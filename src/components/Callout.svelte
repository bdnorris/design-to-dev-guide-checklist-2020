<script>
	export let copy;
	export let emoji;
</script>

<div class="callout">
	<div class="callout__icon">
		{#if emoji === 'megaphone'}
			📣
		{/if}
		{#if emoji === 'fire'}
			🔥
		{/if}
	</div>
	<p>
  	{@html copy }
	</p>
</div>

<style lang="scss">
@import "./style/variables.scss";
@import "./style/colors.scss";

.callout {
	background-color: lighten($secondary, 22%);
	padding: 0.75em 0.75em 0.8em 1em;
	border: 1px solid darken($llgray, 10%);
	border-color: $secondary;
	font-family: $sans;
	font-size: 1.2em;
	line-height: 1.2;
	display: flex;
	p {
		margin: 0;
	}
}
.callout__icon {
	padding-right: 0.75em;
}
</style>