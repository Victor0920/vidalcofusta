<script lang="ts">
	import { Card, PageIntro, PageSection } from '$lib/components';
	import type { PageData } from './$types';
	import woodImg from '$lib/assets/wood.jpeg';

	export let data: PageData;

	$: gallery = data.gallery;
</script>

<PageIntro
	imageUrl={woodImg}
	imageDescription="Wood background"
	title="Galería"
	subtitle="Una recopliación de mis trabajos"
	colorAccent="rgba(2, 122, 213, 0.5)"
/>

<PageSection>
	<div class="grid grid-cols-3 sm:grid-cols-1 gap-5">
		{#each gallery as card}
			<Card {...card} />
		{/each}
	</div>
</PageSection>
