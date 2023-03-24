<script lang="ts">
	import type { PageSectionType } from '$lib/types';
	import { Card } from './';

	export let section: PageSectionType;
</script>

{#if section.type === 'ImageAndText'}
	<p>{section.type}</p>
	<pre>{JSON.stringify(section)}</pre>
{/if}

{#if section.type === 'ImageCaroussel'}
	<p>{section.type}</p>
	<pre>{JSON.stringify(section)}</pre>
{/if}

{#if section.type === 'Cards'}
	<div class="grid grid-cols-3 sm:grid-cols-1 gap-5">
		{#each section.content as card}
			<Card {...card} />
		{/each}
	</div>
{/if}
