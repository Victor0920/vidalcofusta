<script lang="ts">
	import type { ImageAndTextType } from '$lib/types';
	import Text from './text.svelte';

	export let content: ImageAndTextType;

	let { imageUrl, imageDescription, imagePosition, text } = content;
</script>

<div class={`flex gap-8 sm:flex-col ${imagePosition === 'end' ? 'flex-row-reverse' : ''}`}>
	<div
		class="flex items-center w-5/12 sm:w-full rounded-xl overflow-hidden shadow-lg shadow-zinc-400"
	>
		<img src={imageUrl} alt={imageDescription} />
	</div>
	<div class=" w-7/12 sm:w-full">
		<Text content={{ ...text, showLine: false }} />
	</div>
</div>
