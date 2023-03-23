<script lang="ts">
	import { PageIntro, PageSection } from '$lib/components';
	import SectionType from '$lib/components/sectionType.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const contactPage = data.contact;
	const sections = contactPage.sections;
</script>

<PageIntro
	imageUrl={contactPage.meta.imageUrl}
	imageDescription={contactPage.meta.title}
	title={contactPage.meta.title}
	subtitle={contactPage.meta.description}
/>

{#each sections as section}
	<PageSection background={section.background}>
		<SectionType {section} />
	</PageSection>
{/each}
