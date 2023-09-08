<script>
	import '../styles/global.scss';
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Plceholder" />
	<meta property="og:title" content="Plceholder" />
	<meta property="og:description" content="Plceholder" />
	<meta property="og:image" content="Plceholder" />
	<meta content="#202225" name="theme-color" />
	<title>SHAREIT</title>
</svelte:head>

<main>
	<div class="container">
		<nav>
			<a href="/"><h1>SHAREIT</h1></a>
			<li>
				<ul><a href="/posts">View Confessions</a></ul>
				<ul><a href="/share">Share it!</a></ul>
			</li>
		</nav>
	</div>
	<div class="slot">
		<slot />
	</div>
</main>

<style lang="scss">
	.container {
		margin: auto;
		max-width: 1280px;
	}

	.slot {
		margin: 0rem 3rem 3rem;
	}

	nav {
		display: flex;
		margin: 4rem 3rem;
		justify-content: space-between;
	}

	a,
	li {
		text-decoration: none;
		color: aliceblue;
		list-style: none;
	}

	ul {
		display: inline;
		background: #144178;
		padding: 0.4rem 1.4rem;
		border-radius: 0.2rem;
		transition: all 300ms ease-in-out;
		&:nth-child(1) {
			margin: 0rem 1.5rem 0rem;
		}
		&:hover {
			opacity: 0.7;
		}
	}
</style>
