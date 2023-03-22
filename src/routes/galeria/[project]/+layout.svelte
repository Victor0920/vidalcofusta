<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { currentProject } = data;

	$: title = currentProject.meta.title;
	$: description = currentProject.meta.description;
</script>

<svelte:head>
	<title>{title} - Vidalco Fusta</title>
	<meta name="description" content={description} />
</svelte:head>

<h1>{title}</h1>
<p>{description}</p>

<slot />
