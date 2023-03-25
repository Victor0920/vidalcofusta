<script lang="ts">
	import type { TextType } from '$lib/types';

	export let text: TextType;

	const { title, paragraphs, textColor } = text;
</script>

<div class="">
	<h1 class="relative text-xl font-bold mb-7 sm:text-center" style:color={textColor}>
		{title.text}
	</h1>
	{#each paragraphs as paragraph}
		<p class="mb-2 sm:text-center">{paragraph}</p>
	{/each}
</div>

<style>
	h1::after {
		content: '';
		height: 1px;
		width: 100%;
		background: #eeeeee;
		position: absolute;
		bottom: -10px;
		left: 0;
	}
</style>
