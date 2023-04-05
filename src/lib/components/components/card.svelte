<script lang="ts">
	import { ArrowheadRightIcon } from '$lib/assets/icons';
	import type { CardType } from '$lib/types';

	export let card: CardType;

	let { imageUrl, imageDescription, title, description, buttonText, url } = card;
</script>

<a
	class="flex flex-col w-full shadow-lg rounded-md overflow-hidden hover:scale-[103%] hover:shadow-2xl bg-white transition-all duration-200 group"
	href={url}
>
	{#if imageUrl}
		<div class="shadow-sm">
			<img src={imageUrl} alt={imageDescription} class="max-h-[150px] w-full object-cover" />
		</div>
	{/if}

	<div class="p-5 flex flex-col h-full">
		{#if title}
			<h2 class="text-xl font-bold mb-3">{title}</h2>
		{/if}

		{#if description}
			<p class="mb-10">{description}</p>
		{/if}

		{#if buttonText}
			<div class="mt-auto flex justify-between text-[#48466d]">
				{buttonText}
				<div class="group-hover:animate-bounce">
					<ArrowheadRightIcon color="#48466d" />
				</div>
			</div>
		{/if}
	</div>
</a>

<style>
	.image-container::after {
		box-shadow: inset 0px -5px 10px 0 #00000020;
		content: '';
		display: block;
		height: 100%;
		position: absolute;
		top: 0;
		width: 100%;
	}
</style>
