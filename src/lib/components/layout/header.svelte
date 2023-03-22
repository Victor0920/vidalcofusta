<script lang="ts">
	import { MenuIcon, Logo } from '$lib/assets/icons';
	import { hasScrolledFromTop } from '$lib/actions/hasScrolledFromTop';

	let hasScrolled = false;

	const navbarItems = [
		{
			text: 'Quien soy',
			url: '/quien-soy'
		},
		{
			text: 'Galería',
			url: '/galeria'
		},
		{
			text: 'Contacto',
			url: '/contacto'
		}
	];
</script>

<div
	class={`flex bg-transparent justify-center sticky top-0 items-center z-10 px-10 py-8 sm:p-5 lg:pr-16 transition-all duration-500 ${
		hasScrolled ? 'shadow-lg' : ''
	}`}
	class:header-opaque={hasScrolled}
	use:hasScrolledFromTop
	on:hasScrolled={(e) => {
		console.log(e.detail);
		hasScrolled = e.detail;
	}}
>
	<!-- use:hasScrolledFromTop
	on:hasScrolledFromTop={() => {
		console.log('hey');
	}} -->
	<!-- shadow-lg -->
	<div class="flex justify-between w-full max-w-[1000px]">
		<a href="/">
			<Logo
				iconColor={hasScrolled ? '#3080c2' : '#9fbcff'}
				lettersColor={hasScrolled ? '#47476b' : '#ffffff'}
			/>
		</a>
		<nav class="flex sm:hidden gap-10">
			{#each navbarItems as item}
				<a class={`flex items-center ${hasScrolled ? 'text-black' : 'text-white'}`} href={item.url}
					>{item.text}</a
				>
			{/each}
		</nav>
		<div
			class="hidden sm:block h-min rounded-full hover:bg-gray-300/50 p-2 cursor-pointer transition-all duration-800"
		>
			<MenuIcon color={hasScrolled ? '#000000' : '#ffffff'} />
		</div>
	</div>
</div>

<style>
	.header-opaque {
		backdrop-filter: saturate(180%) blur(5px);
		background-color: hsla(0, 0%, 100%, 0.8);
	}
</style>
