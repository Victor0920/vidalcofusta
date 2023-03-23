<script lang="ts">
	import { page } from '$app/stores';
	import { PageIntro, PageSection } from '$lib/components';
	import SectionType from '$lib/components/sectionType.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const whoAmIPage = data.whoAmI;
	const sections = whoAmIPage.sections;
</script>

<PageIntro
	imageUrl={whoAmIPage.meta.imageUrl}
	imageDescription={whoAmIPage.meta.title}
	title={whoAmIPage.meta.title}
	subtitle={whoAmIPage.meta.description}
/>

{#each sections as section}
	<PageSection background={section.background}>
		<SectionType {section} />
	</PageSection>
{/each}
