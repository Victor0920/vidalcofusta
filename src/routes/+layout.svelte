<script lang="ts">
	import '../app.css';

	import { Header, Footer } from '$lib/components';
</script>

<svelte:head>
	<title>Vidalco Fusta</title>
	<meta name="description" content="Proyectos de madera a medida." />
</svelte:head>

<Header />
<main>
	<slot />
</main>

<Footer />
