<script lang="ts">
	export let width: Number = 20;
	export let color: string = '#000000';
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={`${width}`} height={`${width}`}>
	<rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
	<rect
		fill={color}
		class="transition-all duration-500"
		x="3"
		y="11"
		width="18"
		height="2"
		rx=".95"
		ry=".95"
	/>
	<rect
		fill={color}
		class="transition-all duration-500"
		x="3"
		y="16"
		width="18"
		height="2"
		rx=".95"
		ry=".95"
	/>
	<rect
		fill={color}
		class="transition-all duration-500"
		x="3"
		y="6"
		width="18"
		height="2"
		rx=".95"
		ry=".95"
	/>
</svg>
