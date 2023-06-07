<script lang="ts">
	import type { ButtonType } from '$lib/types';

	export let content: ButtonType;

	$: ({ text, theme, url } = content);

	$: themeColor =
		theme === 'red'
			? '#ff0000'
			: theme === 'blue'
			? '#0081c6'
			: theme === 'green'
			? '#3FDC5A'
			: theme === 'yellow'
			? '#ffff00'
			: '#bbbbbb';
</script>

<div class="w-full flex justify-center">
	<a
		class="button py-4 px-10 w-max shadow-lg rounded-xl overflow-hidden hover:scale-[103%] hover:shadow-xl active:scale-[98%] active:shadow-lg transition-all duration-100 font-bold relative"
		style="--theme-color: {themeColor}"
		href={url}
	>
		<span class="button__text relative">
			{text}
		</span>
	</a>
</div>

<style lang="scss">
	.button {
		color: var(--theme-color);
		background-color: #ffffff;

		&__text::before {
			content: '';
			position: absolute;
			bottom: -19px;
			left: -37px;
			width: 200%;
			height: 2px;
			background-color: var(--theme-color);
			transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
		}
		&:hover {
			.button__text::before {
				bottom: 0;
				left: 0;
				width: 100%;
				height: 1px;
			}
		}
	}
</style>
