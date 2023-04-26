<script lang="ts">
	export let gap: number = 1;
	export let marginTop: number = 0;
</script>

<div
	class="row flex flex-col items-center justify-center sm:w-full"
	style="gap: {gap * 10}px; margin-top: {marginTop * 10}px"
>
	<slot />
</div>
