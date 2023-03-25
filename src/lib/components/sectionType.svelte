<script lang="ts">
	import type { PageSectionType } from '$lib/types';
	import { Cards, Text } from './';

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
	<Cards cards={section.content} />
{/if}

{#if section.type === 'Text'}
	<Text text={section.content} />
{/if}
