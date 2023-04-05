<script lang="ts">
	import { onMount } from 'svelte';

	export let columns: number;
	export let columnsWidth: (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12)[];
	export let gap: number = 2;

	let columnsElement: any;

	onMount(() => {
		for (const column of new Array(columns).keys()) {
			columnsElement.children[column].classList.add(`col--${columnsWidth[column]}`);
		}
	});
</script>

<div
	class="columns flex flex-row sm:flex-col sm:items-center gap-y-8"
	style="gap: {gap * 10}px;"
	bind:this={columnsElement}
>
	<slot />
</div>

<style>
	@media screen and (min-width: 768px) {
		:global(.col--1) {
			width: 8.3333333333%;
		}
		:global(.col--2) {
			width: 16.6666666667%;
		}
		:global(.col--3) {
			width: 25%;
		}
		:global(.col--4) {
			width: 33.3333333333%;
		}
		:global(.col--5) {
			width: 41.6666666667%;
		}
		:global(.col--6) {
			width: 50%;
		}
		:global(.col--7) {
			width: 58.3333333333%;
		}
		:global(.col--8) {
			width: 66.6666666667%;
		}
		:global(.col--9) {
			width: 75%;
		}
		:global(.col--10) {
			width: 83.3333333333%;
		}
		:global(.col--11) {
			width: 91.6666666667%;
		}
		:global(.col--12) {
			width: 100%;
		}
	}
</style>
