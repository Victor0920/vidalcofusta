<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';

	export let columns: number;
	export let columnsWidth: (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12)[];
	export let gap: number = 2;

	let columnsElement: any;

	afterUpdate(() => {
		if (columnsElement?.children?.length === columns) {
			for (const column of new Array(columns).keys()) {
				const currentClass = columnsElement.children[column].className.match(/col--\w+/g);

				if (currentClass) {
					columnsElement.children[column].classList.remove(currentClass[0]);
				}

				columnsElement.children[column].classList.add(`col--${columnsWidth[column]}`);
			}
		}
	});
</script>

<div
	class="columns flex flex-row sm:flex-col sm:items-center gap-y-8"
	style="--gap: {gap * 10}px; --columns: {columns};"
	bind:this={columnsElement}
>
	<slot />
</div>

<style>
	.columns {
		gap: var(--gap);
		flex-wrap: wrap;
	}

	@media screen and (min-width: 768px) {
		:global(.col--1) {
			width: calc(8.3333333333% - var(--gap) * (var(--columns) - 1) / var(--columns));
		}
		:global(.col--2) {
			width: calc(16.6666666667% - var(--gap) * (var(--columns) - 1) / var(--columns));
		}
		:global(.col--3) {
			width: calc(25% - var(--gap) * (var(--columns) - 1) / var(--columns));
		}
		:global(.col--4) {
			width: calc(33.3333333333% - var(--gap) * (var(--columns) - 1) / var(--columns));
		}
		:global(.col--5) {
			width: calc(41.6666666667% - var(--gap) * (var(--columns) - 1) / var(--columns));
		}
		:global(.col--6) {
			width: calc(50% - var(--gap) * (var(--columns) - 1) / var(--columns));
		}
		:global(.col--7) {
			width: calc(58.3333333333% - var(--gap) * (var(--columns) - 1) / var(--columns));
		}
		:global(.col--8) {
			width: calc(66.6666666667% - var(--gap) * (var(--columns) - 1) / var(--columns));
		}
		:global(.col--9) {
			width: calc(75% - var(--gap) * (var(--columns) - 1) / var(--columns));
		}
		:global(.col--10) {
			width: calc(83.3333333333% - var(--gap) * (var(--columns) - 1) / var(--columns));
		}
		:global(.col--11) {
			width: calc(91.6666666667% - var(--gap) * (var(--columns) - 1) / var(--columns));
		}
		:global(.col--12) {
			width: calc(100% - var(--gap) * (var(--columns) - 1) / var(--columns));
		}
	}
</style>
