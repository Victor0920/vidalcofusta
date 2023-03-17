<script lang="ts">
	import bgImage from '$lib/assets/wood-pattern.png';

	import { MenuIcon, Logo } from '$lib/assets/icons';
</script>

<div
	class="header bg-white bg-opacity-50 shadow-lg flex justify-center sticky top-0 items-center z-1 px-10 py-8 sm:p-5 lg:pr-16"
>
	<!-- style:background={`url(${bgImage})`} -->
	<div class="flex justify-between w-full max-w-[1000px]">
		<a href="/">
			<Logo />
		</a>
		<nav class="flex sm:hidden gap-10">
			<a class="flex items-center" href="/quien-soy">Quien soy</a>
			<a class="flex items-center" href="/galeria">Galeria</a>
			<a class="flex items-center" href="/contacto">Contacto</a>
		</nav>
		<div
			class="hidden sm:block h-min rounded-full hover:bg-gray-300/50 p-2 cursor-pointer transition-all duration-800"
		>
			<MenuIcon />
		</div>
	</div>
	<!-- <img src={bgImage} alt="alt" /> -->
</div>

<style>
	.header {
		backdrop-filter: saturate(180%) blur(5px);
		background-color: hsla(0, 0%, 100%, 0.8);
	}
</style>
