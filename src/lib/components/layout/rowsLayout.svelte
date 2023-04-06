<script lang="ts">
	export let gap: number = 1;
</script>

<div class="flex flex-col items-center" style="gap: {gap * 10}px;">
	<slot />
</div>
