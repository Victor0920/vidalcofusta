<script lang="ts">
	export let background: string = '#ffffff';
	export let pt: number = 16;
	export let pb: number = 16;
</script>

<div
	class={`page-section w-full p-16 pt-${pt} pb-${pb} sm:px-5 sm:py-10 flex justify-center overflow-hidden`}
	style:background
>
	<div class="w-full max-w-[900px] relative">
		<slot />
	</div>
</div>
