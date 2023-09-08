<script>
	export let data;
</script>

<div class="container">
	<div class="banner">
		<h1>The Wall</h1>
	</div>
	<div class="posts">
		{#each data.posts as { title, text, user }}
			<div class="posts-content">
				<span><img src="anonymous-user.png" alt="profile" />{user}</span>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.container {
		margin: 0 auto;
		max-width: 1180px;
	}

	.banner {
		height: 6rem;
		max-width: 1180px;
		border: 2px solid #292929;
		margin: 2rem 0rem;
		border-radius: 0.2rem;
		h1 {
			text-align: center;
			line-height: 6rem;
			font-size: 2.8rem;
			font-weight: 600;
		}
	}

	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
	}

  @media (max-width: 400px) {
    .posts { 
      grid-template-columns: auto;
    }
  } 

	.posts-content {
		position: relative;
		border: 2px solid #292929;
		padding: 1.4rem;
		border-radius: 0.2rem;
		h1 {
			font-size: 1rem;
		}
		p {
      font-size: .9rem;
			color: #a3a3a3;
		}
	}

	span {
		display: flex;
		align-items: center;
    gap: .4rem;
    margin: 0rem 0rem .5rem;
		img {
			height: 1.2rem;
			border-radius: 100%;
		}
	}
</style>
