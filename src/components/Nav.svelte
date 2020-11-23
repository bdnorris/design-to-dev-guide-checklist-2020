<script>
	export let segment;
</script>

<style lang="scss">
	@import "./style/variables.scss";
	@import "./style/colors.scss";
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 500;
		padding: 0 1em;
		// font-family: $sans;
		a {
			color: $text;
		}
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li>
			<a rel=prefetch aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a>
		</li>
		<li>
			<a rel=prefetch aria-current="{segment === 'concepts' ? 'page' : undefined}" href="concepts">concepts</a>
		</li>
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'tips' ? 'page' : undefined}" href="tips">tips</a></li>
		<li><a rel=prefetch aria-current="{segment === 'web-handoff' ? 'page' : undefined}" href="web-handoff">web handoff</a></li>
		<li><a rel=prefetch aria-current="{segment === 'email-handoff' ? 'page' : undefined}" href="email-handoff">email handoff</a></li>
		<li><a rel=prefetch aria-current="{segment === 'checklists' ? 'page' : undefined}" href="checklists">checklists</a></li>
	</ul>
</nav>
