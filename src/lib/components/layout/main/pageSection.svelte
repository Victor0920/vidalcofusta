<script lang="ts">
	import type { PageSectionProperties } from '$lib/types';

	export let properties: PageSectionProperties;

	const { paddingTop = 16, paddingBottom = 16, background = '#ffffff', id } = properties;
</script>

<div
	class={`page-section w-full p-16 sm:px-5 sm:py-10 flex justify-center overflow-hidden`}
	style:background
	style="--paddingTop: {paddingTop / 4}rem; --paddingBottom: {paddingBottom / 4}rem"
	{id}
>
	<!-- style:padding-top={paddingTop / 4 + 'rem'}
	style:padding-bottom={paddingBottom / 4 + 'rem'} -->
	<div class="w-full max-w-[900px] relative">
		<slot />
	</div>
</div>

<style lang="scss">
	.page-section {
		padding-top: var(--paddingTop);
		padding-bottom: var(--paddingBottom);

		@media screen and (max-width: 768px) {
			padding-top: calc(var(--paddingTop) / 2);
			padding-bottom: calc(var(--paddingBottom) / 2);
		}
	}
</style>
