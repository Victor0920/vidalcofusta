<script lang="ts">
	import type { ImageType } from '$lib/types';

	export let content: ImageType;

	let { imageUrl, imageDescription, properties } = content;

	const { rounded = true, shadow = true, cover = true } = properties || {};
</script>

<div
	class={`flex items-center w-5/12 sm:w-full rounded-xl overflow-hidden shadow-lg shadow-zinc-400`}
	style:box-shadow={!shadow ? 'none' : null}
	style:border-radius={!rounded ? 'none' : null}
>
	<img src={imageUrl} alt={imageDescription} />
</div>

<style>
</style>
