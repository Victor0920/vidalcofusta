<script lang="ts">
	import type { ComponentType } from '$lib/types';
	import { Card, Text, Image, ImageCarrousel } from './components';

	export let component: ComponentType;
</script>

{#if component.type === 'Image'}
	<Image content={component.content} />
{/if}

{#if component.type === 'ImageCaroussel'}
	<ImageCarrousel content={component.content} />
{/if}

{#if component.type === 'Card'}
	<Card content={component.content} />
{/if}

{#if component.type === 'Text'}
	<Text content={component.content} />
{/if}
