<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<style lang="scss" global>
	@import "./style/normalize.scss";
	@import "./style/variables.scss";
	@import "./style/colors.scss";
	@import "./style/vendor/index.scss";
	@import "./style/mixins-functions.scss";
	@import "./style/fonts.scss";
	@import "./style/base.scss";
	@import "./style/typography.scss";
	@import "./style/dividers.scss";

	main {
		@include default-sizing(1120px);
		padding-top: 2em;
		position: relative;
		display: flex;
		flex-direction: column-reverse;
		@include breakpoint(large) {
			display: grid;
			grid-template-columns: 1.618fr 1fr;
			padding-top: 3em;
		}
	}

	article {

	}

	aside {
		@include breakpoint(large) {
			position: sticky;
			// position: fixed;
			top: 1em;
			max-height: 80vh;
		}
	}
</style>
