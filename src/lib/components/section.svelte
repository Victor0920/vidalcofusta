<script lang="ts">
	import type { PageSectionType } from '$lib/types';
	import { Cards, Text, ImageAndText, ImageCarrousel } from '.';

	export let section: PageSectionType;
</script>

{#if section.type === 'ImageAndText'}
	<ImageAndText content={section.content} />
{/if}

{#if section.type === 'ImageCaroussel'}
	<ImageCarrousel content={section.content} />
{/if}

{#if section.type === 'Cards'}
	<Cards cards={section.content.cards} properties={section.content.properties} />
{/if}

{#if section.type === 'Text'}
	<Text content={section.content} />
{/if}
