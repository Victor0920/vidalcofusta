<script lang="ts">
	import { PageIntro, PageSection, Section } from '$lib/components';
	import type { PageData } from './$types';

	export let data: PageData;
	const contactPage = data.page;

	$: meta = contactPage.meta;
	$: sections = contactPage.sections;
</script>

<svelte:head>
	<title>{meta.title} - Vidalco Fusta</title>
	<meta name="description" content={meta.description} />
</svelte:head>

<PageIntro
	imageUrl={meta.imageUrl}
	imageDescription={meta.imageDescription}
	title={meta.title}
	subtitle={meta.description}
/>

{#each sections as section}
	<PageSection background={section.background}>
		<Section {section} />
	</PageSection>
{/each}
