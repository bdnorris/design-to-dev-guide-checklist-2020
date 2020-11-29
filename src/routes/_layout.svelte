<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<style lang="scss" global>
	@import "./style/variables.scss";
	@import "./style/colors.scss";
	@import "./style/vendor/index.scss";
	@import "./style/mixins-functions.scss";
	@import "./style/normalize.scss";
	@import "./style/fonts.scss";
	@import "./style/base.scss";
	@import "./style/typography.scss";
	@import "./style/dividers.scss";

	main {
		@include default-sizing(1120px);
		padding-top: 3em;
		display: grid;
		grid-template-columns: 1.618fr 1fr;
		position: relative;
	}

	article {

	}

	aside {
		// position: sticky;
		position: fixed;
		top: 2em;
		right: 0;
	}
</style>
