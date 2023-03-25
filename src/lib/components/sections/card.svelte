<script lang="ts">
	import { ArrowheadRightIcon } from '$lib/assets/icons';
	import type { CardType } from '$lib/types';

	export let card: CardType;

	let { imageUrl, imageDescription, title, description, buttonText, url } = card;
</script>

<a
	class="flex flex-col w-full shadow-lg rounded-md overflow-hidden hover:scale-[103%] hover:shadow-2xl transition-all duration-200 group"
	href={url}
>
	<img src={imageUrl} alt={imageDescription} class="max-h-[150px] object-cover" />
	<div class="p-5">
		<h2 class="text-xl font-bold mb-3">{title}</h2>
		<p class="mb-10">{description}</p>
		<div class="mt-auto flex justify-between text-[#48466d]">
			{buttonText}
			<div class="group-hover:animate-bounce">
				<ArrowheadRightIcon color="#48466d" />
			</div>
		</div>
	</div>
</a>
