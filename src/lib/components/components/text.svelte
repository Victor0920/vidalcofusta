<script lang="ts">
	import type { TextType } from '$lib/types';

	export let content: TextType;

	const { title, paragraphs, textColor, showLine = true, textAlign } = content;
</script>

<div class="flex flex-col justify-center w-full h-full" style:text-align={textAlign}>
	{#if title}
		<h1
			class={`relative font-bold sm:text-center ${showLine ? "after:content-[''] mb-7" : 'mb-4'} ${
				title.size === 'large' ? 'text-3xl' : title.size === 'medium' ? 'text-2xl' : 'text-xl'
			}`}
			style:color={textColor}
		>
			{title.text}
		</h1>
	{/if}

	{#each paragraphs as paragraph}
		<p class="mb-2 sm:text-center">{paragraph}</p>
	{/each}
</div>

<style>
	h1::after {
		height: 1px;
		width: 100%;
		background: #eeeeee;
		position: absolute;
		bottom: -10px;
		left: 0;
	}
</style>
