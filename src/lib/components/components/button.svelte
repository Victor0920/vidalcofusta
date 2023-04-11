<script lang="ts">
	import type { ButtonType } from '$lib/types';

	export let content: ButtonType;

	let { text, theme, url } = content;
</script>

<div class="w-full flex justify-center">
	<a
		class={` py-4 px-10 w-min shadow-lg rounded-xl overflow-hidden hover:scale-[101%] hover:shadow-xl transition-all duration-100 theme-${theme} font-bold`}
		href={url}
	>
		{text}
	</a>
</div>

<style>
	.theme-red {
		background-color: #ff0000;
		color: #ffffff;
	}
</style>
