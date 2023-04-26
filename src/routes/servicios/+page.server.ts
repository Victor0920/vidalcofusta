import { findAllServicesPages, findPage } from '$lib/server/secrets';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ route }) => {
	const servicesPage = await findPage(route.id);

	const servicesPages = await findAllServicesPages();

	if (servicesPage.pageSections.length < 2) {
		servicesPage.pageSections = [
			...servicesPage.pageSections,
			{
				totalColumns: 3,
				columnsWidth: [4],
				sectionProperties: { background: '#f3f1e9' },
				columns: servicesPages.map((service) => ({
					rowProperties: {},
					rows: [
						{
							type: 'Card',
							content: {
								title: service.meta.title,
								description: service.meta.description,
								buttonText: 'Más detalles',
								url: service.url,
								imageUrl: service.meta.imageUrl,
								imageDescription: service.meta.title
							}
						}
					]
				}))
			}
		];
	}

	return { page: servicesPage };
};
