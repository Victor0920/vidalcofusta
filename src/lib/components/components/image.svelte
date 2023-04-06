<script lang="ts">
	import type { ImageType } from '$lib/types';

	export let content: ImageType;

	let { imageUrl, imageDescription, properties } = content;

	const {
		rounded = true,
		shadow = true,
		cover = true,
		width = '100%',
		height = '100%'
	} = properties || {};
</script>

<div
	class={`flex items-center sm:w-full rounded-xl overflow-hidden shadow-lg shadow-zinc-400`}
	style:box-shadow={!shadow ? 'none' : null}
	style:border-radius={!rounded ? 'none' : null}
	style:width
	style:height
>
	<img src={imageUrl} alt={imageDescription} style:width style:height="100%" />
</div>

<style>
</style>
