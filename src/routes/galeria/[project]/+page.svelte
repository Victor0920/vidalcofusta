<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { currentProject } = data;

	$: sections = currentProject.sections;
</script>

{#each sections as section}
	{#if section.type === 'ImageAndText'}
		<p>{section.type}</p>
		<pre>{JSON.stringify(section)}</pre>
	{/if}

	{#if section.type === 'ImageCaroussel'}
		<p>{section.type}</p>
		<pre>{JSON.stringify(section)}</pre>
	{/if}
{/each}
