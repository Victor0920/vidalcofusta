<script lang="ts">
	import { PageIntro, PageSection } from '$lib/components';
	import SectionType from '$lib/components/sectionType.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const whoAmIPage = data.page;

	$: meta = whoAmIPage.meta;
	$: sections = whoAmIPage.sections;
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
		<SectionType {section} />
	</PageSection>
{/each}
