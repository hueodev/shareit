<script>
	import Navigation from '$lib/ui/navigation.svelte';
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
		<Navigation />
	</div>
	<div class="slot">
		<slot />
	</div>
</main>

<style lang="scss">
	.slot {
		padding: 2rem;
	}
</style>
