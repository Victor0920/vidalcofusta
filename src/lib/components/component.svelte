<script lang="ts">
	import type { ComponentType } from '$lib/types';
	import { Button, Card, Text, Image, ImageCarrousel } from './components';

	export let component: ComponentType;
</script>

{#if component.type === 'Button'}
	<Button content={component.content} />
{/if}

{#if component.type === 'Card'}
	<Card content={component.content} />
{/if}

{#if component.type === 'Image'}
	<Image content={component.content} />
{/if}

{#if component.type === 'ImageCaroussel'}
	<ImageCarrousel content={component.content} />
{/if}

{#if component.type === 'Text'}
	<Text content={component.content} />
{/if}
