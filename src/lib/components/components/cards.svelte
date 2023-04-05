<script lang="ts">
	import type { CardPropertiesType, CardType } from '$lib/types';
	import { Card } from './';

	export let cards: CardType[];
	export let properties: CardPropertiesType;

	const { columns } = properties;
</script>

<div
	class="grid grid-cols-3 sm:grid-cols-1 gap-5"
	style:grid-template-columns={`repeat(${columns}, minmax(0, 1fr))`}
>
	{#each cards as card}
		<Card {card} />
	{/each}
</div>

<style>
	@media screen and (max-width: 640px) {
		.grid {
			grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
		}
	}
</style>
