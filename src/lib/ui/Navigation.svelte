<script>
	import { fade } from 'svelte/transition';
	import HamburgerIcon from '$lib/ui/icons/HamburgerIcon.svelte';

	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<div class="container">
	<!-- Hamburger menu when small screen -->
	<nav class="active">
		<ul class="header">
			<a href="/"><h1>SHAREIT</h1></a>
			<div>
				<button on:click={toggleMenu}><HamburgerIcon /></button>
			</div>
		</ul>
		{#if isOpen}
			<div class="open" transition:fade={{ delay: 0, duration: 200 }}>
				<hr />
				<ul class="dropdown">
					<a href="/posts">View Confessions</a>
					<a href="/share" class="selected">Share it!</a>
				</ul>
			</div>
		{/if}
	</nav>

	<!-- When the screen is big (No hamburger menu) -->
	<nav class="inactive">
		<ul>
			<a href="/"><h1>SHAREIT</h1></a>
		</ul>
		<ul>
			<a href="/posts">View Confessions</a>
			<a href="/share" class="selected">Share it!</a>
		</ul>
	</nav>
</div>

<style lang="scss">
	.container {
		padding: 1.4rem 0rem;
		background: rgb(15, 15, 16);
		border-bottom: 1px solid rgb(40, 40, 42);
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}

	hr {
		border: none;
		border-bottom: 1px solid rgb(40, 40, 42);
		margin: 1.17rem 0rem;
	}

	.inactive {
		display: flex;
		justify-content: space-between;
		margin: auto;
		max-width: 1000px;
		padding: 0rem 3rem;
		ul {
			display: flex;
			gap: 2rem;
			flex-wrap: wrap;
			font-size: 0.9rem;
			font-weight: 500;
		}
	}

	.header {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		font-size: 0.9rem;
		font-weight: 500;
		padding: 0rem 3rem;
		div {
			display: flex;
			gap: 1rem;
		}
	}

	.open {
		position: absolute;
		width: 100%;
		z-index: 1;
		padding: 0rem 0rem 1.2rem;
		background-color: rgba(17, 16, 16, 0.999);
		border-bottom: 1px solid rgb(40, 40, 42);
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		.dropdown {
			padding: 0rem 3rem;
			display: flex;
			gap: 0.6rem;
			flex-direction: column;
		}
	}

	a {
		color: #f7f8f8;
		text-decoration: none;
		transition: all 200ms ease-in-out;
		padding: 0.3rem 0rem;
		line-height: 28px;
		&:hover {
			opacity: 0.6;
		}
	}

	.selected {
		background-color: #0179cd;
		padding: 0.3rem 0.8rem;
		border-radius: 0.2rem;
	}

	button {
		cursor: pointer;
		all: unset;
	}

	@media only screen and (min-width: 650px) {
		.active {
			display: none;
		}
	}

	@media only screen and (max-width: 650px) {
		.inactive {
			display: none;
		}
	}
</style>
