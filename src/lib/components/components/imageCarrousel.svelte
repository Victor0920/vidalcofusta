<script lang="ts">
	import { ArrowIcon, CloseIcon, ExpandIcon } from '$lib/assets/icons';
	import type { ImageCarrouselType } from '$lib/types';

	export let content: ImageCarrouselType;
	$: ({ images } = content);

	let expandedIndex: number = -1;

	let scrollableProperties: any;

	$: scrollIsAtStart = scrollableProperties?.scrollLeft === 0 || !scrollableProperties;
	$: scrollIsAtEnd =
		scrollableProperties?.scrollLeft >
		scrollableProperties?.scrollWidth - scrollableProperties?.clientWidth - 20;

	const scroll = (direction: 'right' | 'left') => {
		const scrollableRow = document.getElementById('scrollableRow');

		if (scrollableRow) {
			scrollableRow.scrollTo({
				left:
					direction === 'right' ? scrollableRow.scrollLeft + 300 : scrollableRow.scrollLeft - 300,
				behavior: 'smooth'
			});
		}
	};

	const changeImage = (event: any) => {
		event.preventDefault();
		const direction = event.code === 'ArrowRight' ? 'right' : 'ArrowRight' ? 'left' : null;

		if (direction === 'right') {
			if (expandedIndex < images.length - 1) {
				expandedIndex += 1;
			} else {
				expandedIndex = images.length - 1;
			}
		} else {
			if (expandedIndex > 0) {
				expandedIndex -= 1;
			} else {
				expandedIndex = 0;
			}
		}
	};
</script>

<svelte:window
	on:keydown={(e) =>
		e.code === 'Escape' ? (expandedIndex = -1) : expandedIndex != -1 ? changeImage(e) : null}
/>
<div class="w-full relative">
	{#if !scrollIsAtStart}
		<div class="absolute top-0 left-0 h-full w-10 z-10 flex items-center justify-start pl-3 group">
			<div
				class="p-2 rounded-full bg-black bg-opacity-50 cursor-pointer"
				on:click={() => scroll('left')}
			>
				<ArrowIcon color="#ffffff" position="left" width={30} />
			</div>
		</div>
	{/if}

	{#if !scrollIsAtEnd}
		<div class="absolute top-0 right-0 h-full w-10 z-10 flex items-center justify-end pr-3 group">
			<div
				class="p-2 rounded-full bg-black bg-opacity-50 cursor-pointer"
				on:click={() => scroll('right')}
			>
				<ArrowIcon color="#ffffff" position="right" width={30} />
			</div>
		</div>
	{/if}

	<!-- Arreglar lo de que se quede un espacio al final -->

	<div
		class="w-full overflow-x-scroll overflow-y-hidden"
		id="scrollableRow"
		on:scroll={(e) => (scrollableProperties = e.target)}
	>
		<div class="flex gap-5 w-max bg-transparent px-3 pt-1 pb-5">
			{#each images as image, i}
				<div
					class="flex items-center rounded-xl overflow-hidden shadow-lg shadow-zinc-400 h-[200px] w-[300px] sm:w-[70vw] relative group"
				>
					<img
						class={`h-full w-full object-cover ${expandedIndex ? '' : ''}`}
						src={image.imageUrl}
						alt={image.imageDescription}
					/>
					<div
						class="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
						on:click={() => (expandedIndex = i)}
					>
						<ExpandIcon width={30} color="#ffffff" />
					</div>
				</div>

				{#if expandedIndex === i}
					<div
						class={`fixed top-0 left-0 w-screen h-screen z-40 flex items-center justify-center bg-black bg-opacity-70`}
						on:click={() => (expandedIndex = -1)}
					>
						<div class="w-max h-max relative">
							{#if expandedIndex > 0}
								<div
									class="absolute top-0 left-0 h-full w-1/2 flex items-center justify-start pl-3 group"
									on:click={() => (expandedIndex -= 1)}
								>
									<div
										class="p-2 rounded-full bg-black bg-opacity-50 opacity-30 sm:opacity-100 group-hover:opacity-100 cursor-pointer"
									>
										<ArrowIcon color="#ffffff" position="left" width={30} />
									</div>
								</div>
							{/if}

							{#if expandedIndex < images.length - 1}
								<div
									class="absolute top-0 right-0 h-full w-1/2 flex items-center justify-end pr-3 group"
									on:click={() => (expandedIndex += 1)}
								>
									<div
										class="p-2 rounded-full bg-black bg-opacity-50 opacity-30 sm:opacity-100 group-hover:opacity-100 cursor-pointer"
									>
										<ArrowIcon color="#ffffff" position="right" width={30} />
									</div>
								</div>
							{/if}

							<img class="object-cover" src={image.imageUrl} alt={image.imageDescription} />
						</div>
						<div
							class="absolute top-5 right-5 cursor-pointer"
							on:click={() => (expandedIndex = -1)}
						>
							<CloseIcon width={30} color="#ffffff" />
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
