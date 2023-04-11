import type { PageType } from '$lib/types';
import carpentryImg from '$lib/assets/carpentry3.webp';

const NotFoundPage: PageType = {
	id: 'a0',
	name: '404',
	url: '/404',
	meta: {
		title: 'Error 404',
		description: '¡Oh no! Esta página no existe...',
		imageUrl: carpentryImg,
		imageDescription: 'Hombre lijando madera'
	},
	pageSections: [
		{
			totalColumns: 1,
			columnsWidth: [12],
			sectionProperties: { background: '#fff' },
			columns: [
				{
					rowProperties: {},
					rows: [
						{
							type: 'Text',
							content: {
								title: {
									size: 'medium',
									text: 'Oh No'
								},
								paragraphs: ['Esta página no existe'],
								textColor: '#000000',
								showLine: false,
								textAlign: 'left'
							}
						}
					]
				}
			]
		}
	]
};

export default NotFoundPage;
