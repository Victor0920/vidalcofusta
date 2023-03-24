<script lang="ts">
	import { PageSection, SectionType, PageIntro } from '$lib/components';
	import type { PageData } from './$types';

	export let data: PageData;
	const projectPage = data.page;

	$: meta = projectPage.meta;
	$: sections = projectPage.sections;
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

<div class="bg-white pb-96">
	{#each sections as section}
		<PageSection background={section.background}>
			<SectionType {section} />
		</PageSection>
	{/each}
</div>
