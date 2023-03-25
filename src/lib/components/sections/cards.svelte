<script lang="ts">
	import type { CardType } from '$lib/types';
	import { Card } from '../';

	export let cards: CardType[];
</script>

<div class="grid grid-cols-3 sm:grid-cols-1 gap-5">
	{#each cards as card}
		<Card {card} />
	{/each}
</div>
