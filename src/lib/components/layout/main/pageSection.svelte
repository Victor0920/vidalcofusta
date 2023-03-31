<script lang="ts">
	import type { PageSectionProperties } from '$lib/types';

	export let properties: PageSectionProperties;

	const { paddingTop = 16, paddingBottom = 16, background = '#ffffff' } = properties;
</script>

<div
	class={`page-section w-full p-16 sm:px-5 sm:py-10 flex justify-center overflow-hidden`}
	style:background
	style:padding-top={paddingTop / 4 + 'rem'}
	style:padding-bottom={paddingBottom / 4 + 'rem'}
>
	<div class="w-full max-w-[900px] relative">
		<slot />
	</div>
</div>
