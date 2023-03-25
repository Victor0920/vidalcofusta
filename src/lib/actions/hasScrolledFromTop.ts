export const hasScrolledFromTop = (node: any) => {
	const checkIfScrolled = () => {
		node.dispatchEvent(new CustomEvent('has_scrolled', { detail: window?.scrollY > 0 }));
	};

	window.addEventListener(
		'scroll',
		() => {
			checkIfScrolled();
		},
		false
	);

	return {
		destroy() {
			document.removeEventListener('scrolled', checkIfScrolled, false);
		}
	};
};
