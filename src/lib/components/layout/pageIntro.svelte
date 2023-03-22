<script lang="ts">
	export let imageUrl: string,
		imageDescription: string,
		title: string,
		subtitle: string,
		colorAccent: string = 'rgba(56,69,79, 0.5)';
</script>

<div
	class="w-screen h-[300px] top-0 left-0 flex flex-col justify-center items-center relative -z-10"
>
	<!-- style:background={`linear-gradient(rgba(255,255,255, 0.5), ${colorAccent}), url(${imageUrl})`} -->
	<img
		src={imageUrl}
		alt="Hombre realizando tareas de carpintería"
		class="w-full object-cover fixed top-0 left-0 h-[500px]"
	/>
	<div class="fixed top-0 left-0 w-full h-full bg-black opacity-30" />

	<div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
		<h1 class="text-5xl text-white mb-5">{title}</h1>
		<h4 class="text-2xl text-white">{subtitle}</h4>
	</div>
</div>
