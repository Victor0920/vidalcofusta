import { whoAmI } from '$lib/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return { whoAmI };
};
