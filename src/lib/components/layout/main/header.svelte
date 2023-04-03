<script lang="ts">
	import { MenuIcon, Logo, CloseIcon } from '$lib/assets/icons';
	import { hasScrolledFromTop, clickOutside } from '$lib/actions';
	import { onMount } from 'svelte';

	let hasScrolled = false;
	let showDropdownMenu = false;

	const navbarItems = [
		{
			text: 'Quienes somos',
			url: '/quienes-somos'
		},
		{
			text: 'Servicios',
			url: '/servicios'
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

	onMount(async () => {
		hasScrolled = window?.scrollY > 0;
	});
</script>

<div
	class={`flex bg-transparent justify-center sticky top-0 items-center z-10 px-10 py-8 sm:p-5 lg:pr-16 transition-all duration-500 ${
		hasScrolled ? 'shadow-lg' : ''
	}`}
	class:opaque-backdrop-filter={hasScrolled}
	use:hasScrolledFromTop
	on:has_scrolled={(e) => (hasScrolled = e.detail)}
	use:clickOutside
	on:click_outside={() => (showDropdownMenu = false)}
>
	<div class="flex justify-between w-full max-w-[900px]">
		<a href="/" on:click={() => (showDropdownMenu = false)}>
			<Logo
				iconColor={hasScrolled ? '#3080c2' : '#9fbcff'}
				lettersColor={hasScrolled ? '#47476b' : '#ffffff'}
			/>
		</a>
		<nav class="flex sm:hidden gap-10">
			{#each navbarItems as item}
				<a class={`flex items-center ${hasScrolled ? 'text-black' : 'text-white'}`} href={item.url}>
					{item.text}
				</a>
			{/each}
		</nav>
		<div
			class="hidden sm:block h-min rounded-full hover:bg-gray-300/50 p-2 cursor-pointer transition-all duration-800"
			on:click={() => (showDropdownMenu = !showDropdownMenu)}
		>
			{#if !showDropdownMenu}
				<MenuIcon color={hasScrolled ? '#000000' : '#ffffff'} />
			{:else}
				<CloseIcon color={hasScrolled ? '#000000' : '#ffffff'} />
			{/if}
		</div>
	</div>

	{#if showDropdownMenu}
		<nav class="absolute w-full bottom-0 left-0 translate-y-[100%] p-2">
			<div class="w-full rounded-md bg-white flex flex-col overflow-hidden shadow-lg">
				{#each navbarItems as item}
					<a
						class="p-5 text-black text-center border-t-2 first:border-t-0 border-gray-100"
						href={item.url}
						on:click={() => (showDropdownMenu = false)}
					>
						{item.text}
					</a>
				{/each}
			</div>
		</nav>
	{/if}
</div>

<style>
	.opaque-backdrop-filter {
		backdrop-filter: saturate(180%) blur(5px);
		background-color: hsla(0, 0%, 100%, 0.8);
	}
</style>
