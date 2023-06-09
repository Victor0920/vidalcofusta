import { findProjectPage } from '$lib/server/secrets';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const projectPage = await findProjectPage(`/proyectos/${params.project}`);

	return { page: projectPage };
};

export const ssr = true;
