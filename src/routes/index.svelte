<script>
	import supabase from "$lib/db";

	const signUp = async () => {
		const c = await supabase.auth.signUp({
			email: "dalirnet@gmail.com",
			password: "TsetPass@"
		});

		console.log(c);
	};
</script>

<svelte:head>
	<title>Insstalyzer</title>
</svelte:head>

<h1>Welcome to Instalyzer</h1>
<button on:click={signUp}>signUp</button>
