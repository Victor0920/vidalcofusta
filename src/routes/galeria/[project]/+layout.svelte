<script lang="ts">
	import PageIntro from '$lib/components/layout/pageIntro.svelte';
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

<PageIntro
	imageUrl={currentProject.meta.imageUrl}
	imageDescription="Wood background"
	title={currentProject.meta.title}
	subtitle={currentProject.meta.description}
/>

<div class="bg-white pb-96">
	<slot />
</div>
