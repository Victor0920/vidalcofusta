import { gallery } from '$lib/content/gallery';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return { gallery };
};
