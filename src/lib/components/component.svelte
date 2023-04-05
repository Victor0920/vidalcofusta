<script lang="ts">
	import type { ComponentType } from '$lib/types';
	import { Cards, Text, ImageAndText, ImageCarrousel } from './components';

	export let component: ComponentType;
</script>

{#if component.type === 'ImageAndText'}
	<ImageAndText content={component.content} />
{/if}

{#if component.type === 'ImageCaroussel'}
	<ImageCarrousel content={component.content} />
{/if}

{#if component.type === 'Cards'}
	<Cards cards={component.content.cards} properties={component.content.properties} />
{/if}

{#if component.type === 'Text'}
	<Text content={component.content} />
{/if}
