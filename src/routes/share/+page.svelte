<script>
	export let form;
</script>

<div class="container">
	<form method="POST" action="?/create">
		<div class="form">
			<div class="form-username">
				<label for="user">Username</label>
				<input id="user" type="text" placeholder="Leave empty if anonymous" name="user" />
			</div>

			<div class="form-title">
				<label for="title">Title</label>
				<input id="title" type="text" placeholder="Titel" name="title" />
			</div>

			<div class="form-secret">
				<label for="text">Your Secret</label>
				<textarea id="text" type="text" placeholder="Your secret" name="text" />
			</div>

			<button type="submit">Submit</button>
		</div>
	</form>
	{#if form?.success}
		<span class="success">Successfully shared your secret!</span>
	{/if}
	{#if form?.invalid}
		<span class="error">Title and your secret is required!</span>
	{/if}
</div>

<style lang="scss">
	.container {
		position: relative;
		top: 2rem;
		margin: 0 auto;
		max-width: 28rem;
	}

	.form {
		display: grid;
		gap: 0.6rem;
    padding-right: 2.8rem;
	}

	input {
		color: aliceblue;
		padding: 0.9rem 1.25rem;
		font-size: 0.8rem;
		font-weight: 500;
	}

	textarea {
		position: relative;
		resize: none;
		height: 12rem;
		padding: 1rem 1.25rem;
	}

	input,
	textarea {
		display: block;
		width: 100%;
		border-radius: 0.2rem;
		color: aliceblue;
		background: #0f0f10;
		border: 2px solid #262626;
		&::placeholder {
			color: darkgrey;
		}
		&:focus {
			outline: none;
		}
	}

	button {
		background: #144178;
		border: none;
		cursor: pointer;
		color: aliceblue;
		margin: 0.8rem 0rem;
		padding: 0.4rem 1.4rem;
		width: 100%;
		transition: all 300ms ease-in-out;
		&:hover {
			opacity: 0.7;
		}
	}

	span {
		display: block;
		position: relative;
    font-size: .9rem;
    top: 3rem;
		max-width: 28rem;
		text-align: center;
		padding: 0.4rem 1.4rem;
		border-radius: 0.2rem;
		color: aliceblue;
	}

	.success {
		background: #00552a;
	}

	.error {
		background: #621818;
	}
</style>
