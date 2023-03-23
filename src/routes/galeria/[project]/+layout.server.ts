import projects from '$lib/content/pages/projects';
import type { LayoutServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ params }) => {
	const currentProject = projects.data.find((project) => project.name === params.project);

	if (!currentProject) {
		throw error(404, 'Oh no, ese projecto parece que no existe');
	}

	return { currentProject };
};

export const ssr = true;
