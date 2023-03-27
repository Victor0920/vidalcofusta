<script lang="ts">
	export let columns: number;
	// export let columns: any[];
</script>

<div class="flex flex-row">
	<div class="w-5/12">
		<slot />
	</div>
	<div class="w-7/12">
		<slot />
	</div>
</div>
