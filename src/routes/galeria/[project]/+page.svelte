<script lang="ts">
	import { PageSection, Section, PageIntro } from '$lib/components';
	import type { PageData } from './$types';

	export let data: PageData;
	const projectPage = data.page;

	$: meta = projectPage.meta;
	$: sections = projectPage.sections;
</script>

<svelte:head>
	<title>{meta.title} - Vidalco Fusta</title>
	<meta name="description" content={meta.description} />
	<meta property="og:image" content={meta.imageUrlReduced} />
</svelte:head>

<PageIntro
	imageUrl={meta.imageUrl}
	imageDescription={meta.imageDescription}
	title={meta.title}
	subtitle={meta.description}
/>

<div class="bg-white">
	{#each sections as section}
		<PageSection properties={section.properties}>
			<Section {section} />
		</PageSection>
	{/each}
</div>
