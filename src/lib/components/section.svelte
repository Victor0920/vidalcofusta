<script lang="ts">
	import type { PageSectionType } from '$lib/types';
	import { Cards, Text } from '.';
	import ImageAndText from './sections/imageAndText.svelte';

	export let section: PageSectionType;
</script>

{#if section.type === 'ImageAndText'}
	<ImageAndText content={section.content} />
{/if}

{#if section.type === 'ImageCaroussel'}
	<p>{section.type}</p>
	<pre>{JSON.stringify(section)}</pre>
{/if}

{#if section.type === 'Cards'}
	<Cards cards={section.content} />
{/if}

{#if section.type === 'Text'}
	<Text content={section.content} />
{/if}
