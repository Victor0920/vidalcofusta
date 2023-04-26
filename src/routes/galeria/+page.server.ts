import { findAllProjectPages, findPage } from '$lib/server/secrets';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ route }) => {
	const galleryPage = await findPage(route.id);

	const projectPages = await findAllProjectPages();

	galleryPage.pageSections = [
		{
			totalColumns: 3,
			columnsWidth: [4],
			sectionProperties: { background: '#f3f1e9' },
			columns: projectPages.map((project) => ({
				rowProperties: {},
				rows: [
					{
						type: 'Card',
						content: {
							title: project.meta.title,
							description: project.meta.description,
							buttonText: 'Más detalles',
							url: project.url,
							imageUrl: project.meta.imageUrl,
							imageDescription: project.meta.title
						}
					}
				]
			}))
		}
	];

	return { page: galleryPage };
};
