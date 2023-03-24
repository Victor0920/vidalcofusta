import { findAllProjectPages, findPage } from '$lib/server/secrets';
import type { PageServerLoad } from './$types';

import type { CardType } from '$lib/types';

export const load: PageServerLoad = async ({ route }) => {
	const galleryPage = await findPage(route.id);

	const projectPages = await findAllProjectPages();

	const projectsCards: CardType[] = projectPages.map((project) => ({
		title: project.meta.title,
		description: project.meta.description,
		buttonText: 'Más detalles',
		url: project.url,
		imageUrl: project.meta.imageUrl,
		imageDescription: project.meta.title
	}));

	const galleryPageCardsSection = galleryPage.sections.find((section) => section.type === 'Cards');

	if (galleryPageCardsSection) {
		galleryPageCardsSection.content = projectsCards;
	}

	return { page: galleryPage };
};
