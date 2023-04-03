<script lang="ts">
	export let columns: number;
	export let columnsWidth: number[];
</script>

<div class="columns flex flex-row sm:flex-col gap-y-8" style="--columns: {columns};">
	<slot />
</div>

<style>
	.columns {
		--columns-width: calc(100% / var(--columns));
		--columns-gap: 1rem;
	}

	@media screen and (min-width: 768px) {
		:global(.columns > *) {
			width: var(--columns-width);
			margin: var(--columns-gap);
		}
	}
</style>
