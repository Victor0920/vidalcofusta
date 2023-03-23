<script lang="ts">
	export let width: Number = 20;
	export let color: string = '#000000';
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width={`${width}`} height={`${width}`}>
	<path
		stroke={color}
		stroke-width="2"
		stroke-linecap="round"
		stroke-miterlimit="10"
		d="M7.2,7L23,23.1 M7.2,23L23,7"
	/>
</svg>
