import { findPage } from '$lib/server/secrets';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ route }) => {
	const whoAreWe = await findPage(route.id);

	return { page: whoAreWe };
};
