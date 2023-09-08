<script>
	import { page } from '$app/stores';
	let status = $page.status;
</script>

<svelte:head>
	<title>Error {status}</title>
</svelte:head>

<div class="container">
	<h1>{status}</h1>
	{#if status === 404}
		<p>
			Oops! The page you visited does not exist.<br />Please try again later or
			<a href="/">go back to the home page</a>.
		</p>
	{:else if status === 500}
		<p>
			Oops! The server encountered an unexpected condition that prevented it from fulfilling your
			request.<br />Please try again later or
			<a href="/">go back to the home page</a>.
		</p>
	{:else}
		<p>{$page.error?.message}</p>
	{/if}
</div>

<style lang="scss">
	.container {
		height: calc(75vh - 70px);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	h1 {
		font-size: 3.4rem;
	}

	p {
		margin: 0 1.6rem;
		font-size: 1.2rem;
		text-align: center;
	}

	a {
		color: rgb(75, 132, 182);
		text-decoration: none;
		font-weight: bold;
		transition: all 250ms ease-in-out;
		&:hover {
			color: rgba(75, 132, 182, 0.7);
		}
	}
</style>
