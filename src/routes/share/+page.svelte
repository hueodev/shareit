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
		display: grid;
		place-items: center;
	}

	.form {
		display: grid;
		gap: 0.6rem;
		margin: 2rem;
	}

  label {
		margin: 0.2rem 0rem 0.2rem 0rem;
	}

	input {
		color: aliceblue;
		padding: 0.9rem 1.25rem;
		font-size: 0.8rem;
		font-weight: 500;
	}

	textarea {
		resize: none;
		height: 12rem;
		padding: 1rem 1.4rem;
	}

	input,
	textarea {
		display: block;
		width: 28rem;
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
		margin: 0.8rem 0rem 0rem;
		padding: 0.4rem 1.4rem;
		transition: all 300ms ease-in-out;
		&:hover {
			opacity: 0.7;
		}
	}

	span {
		position: absolute;
		bottom: -6rem;
    width: 28rem;
		padding: 0.4rem 1.4rem;
		border-radius: 0.2rem;
		color: aliceblue;
		text-align: center;
	}

	.success {
		background: #00552a;
	}

	.error {
		background: #621818;
	}
</style>
