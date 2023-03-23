<script lang="ts">
	import PageSection from '$lib/components/layout/pageSection.svelte';
	import SectionType from '$lib/components/sectionType.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { currentProject } = data;

	$: sections = currentProject.sections;
</script>

{#each sections as section}
	<PageSection background={section.background}>
		<SectionType {section} />
	</PageSection>
{/each}
