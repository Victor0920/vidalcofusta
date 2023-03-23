<script lang="ts">
	export let background: string = '#ffffff';
</script>

<div class="page-section w-full p-10 sm:px-5 flex justify-center overflow-hidden" style:background>
	<div class="w-full max-w-[1000px]">
		<slot />
	</div>
</div>
