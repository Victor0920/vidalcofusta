<script>
	import { InstagramIcon, WhatsappIcon, MailIcon, FacebookIcon } from '$lib/assets/icons';
	import Logo from '$lib/assets/icons/logo.svelte';
	import PageSection from './pageSection.svelte';
</script>

<footer class="w-[100vw] h-5 shadow-lg">
	<PageSection background="#33324e" pb={2}>
		<div class="flex justify-between sm:flex-col">
			<div class="flex flex-col sm:items-center sm:w-full sm:mb-6">
				<Logo iconColor="#9fbcff" lettersColor="#ffffff" />
				<p class="w-full sm:text-center mt-auto sm:mt-6">622881350</p>
				<p class="w-full sm:text-center">vidalcofusta@gmail.com</p>
			</div>
			<div class="sm:flex sm:flex-col sm:justify-center sm:w-full sm:mb-6">
				<h1 class="sm:text-center font-bold text-xl mb-2">Dirección</h1>
				<p class="sm:text-center">Calle Santa Lucía 31</p>
				<p class="sm:text-center">03540, Alicante</p>
				<p class="sm:text-center">España</p>
			</div>
			<div class="flex justify-center">
				<button
					class="mx-2 sm:my-2 p-3 h-min w-min rounded-full flex justify-center border-2 border-[#ffffff4f] hover:border-[#ffffff] transition-all hover:scale-105"
					on:click={() =>
						window.open('https://wa.me/+34622881350?text=Hola,+buenos+días', '_blank')}
				>
					<WhatsappIcon color="#ffffff" width={35} />
				</button>
				<button
					class="mx-2 sm:my-2 p-3 h-min w-min rounded-full flex justify-center border-2 border-[#ffffff4f] hover:border-[#ffffff] transition-all hover:scale-105"
					on:click={() => window.open('mailto:vidalcofusta@gmail.com', '_blank')}
				>
					<MailIcon color="#ffffff" width={35} />
				</button>
				<button
					class="mx-2 sm:my-2 p-3 h-min w-min rounded-full flex justify-center border-2 border-[#ffffff4f] hover:border-[#ffffff] transition-all hover:scale-105"
					on:click={() => window.open('https://www.facebook.com/vidalcofusta', '_blank')}
				>
					<FacebookIcon color="#ffffff" width={35} />
				</button>
				<button
					class="mx-2 sm:my-2 p-3 h-min w-min rounded-full flex justify-center border-2 border-[#ffffff4f] hover:border-[#ffffff] transition-all hover:scale-105"
					on:click={() => window.open('https://www.instagram.com/vidalcofusta', '_blank')}
				>
					<InstagramIcon color="#ffffff" width={35} />
				</button>
			</div>
		</div>
		<p class="w-full mt-14 text-center opacity-50">Vidalcofusta - {new Date().getFullYear()}</p>
	</PageSection>
</footer>

<style>
	h1,
	p {
		color: #ffffff;
	}
</style>
