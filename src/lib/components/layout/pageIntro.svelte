<script lang="ts">
	export let imageUrl: string,
		imageDescription: string,
		title: string,
		subtitle: string,
		colorAccent: string = 'rgba(56,69,79, 0.5)';
</script>

<div
	class="w-screen bg-fixed h-[300px] top-0 left-0 -z-10 flex flex-col justify-center items-center"
	style:background="linear-gradient(45deg, black, transparent)"
>
	<!-- style:background={`linear-gradient(rgba(255,255,255, 0.5), ${colorAccent}), url(${imageUrl})`} -->
	<img
		src={imageUrl}
		alt={imageDescription}
		class="max-h-[500px] object-cover fixed -z-10 w-full"
	/>
	<h1 class="text-5xl text-white mb-5">{title}</h1>
	<h4 class="text-2xl text-white">{subtitle}</h4>
</div>
