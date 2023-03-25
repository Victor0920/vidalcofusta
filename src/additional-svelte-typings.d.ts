declare namespace svelteHTML {
	// interface IntrinsicElements {
	// 	'my-custom-element': { someattribute: string; 'on:event': (e: CustomEvent<any>) => void };
	// }
	interface HTMLAttributes<T> {
		'on:has_scrolled'?: (event: any) => any;
		'on:click_outside'?: (event: any) => any;
	}
}
