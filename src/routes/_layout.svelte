<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style lang="scss" global>
	@import "./style/variables.scss";
	@import "./style/colors.scss";
	@import "./style/vendor/index.scss";
	@import "./style/mixins-functions.scss";
	@import "./style/normalize.scss";
	@import "./style/fonts.scss";
	@import "./style/base.scss";
	@import "./style/typography.scss";
	@import "./style/callouts.scss";
	@import "./style/dividers.scss";

	main {
		@include default-sizing(720px);
		padding-top: 2em;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>