import { findServicePage } from '$lib/server/secrets';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const servicePage = await findServicePage(`/servicios/${params.service}`);

	return { page: servicePage };
};

export const ssr = true;
