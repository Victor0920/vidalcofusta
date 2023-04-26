import type { PageType } from '$lib/types';
import galleryImg from '$lib/assets/carpentry2.webp';

const contactPage: PageType = {
	id: 'a3',
	name: 'proyectos',
	url: '/proyectos',
	meta: {
		title: 'Proyectos',
		description: 'Una recopliación de nuestros trabajos',
		imageUrl: galleryImg,
		imageDescription: 'Carpintero marcando con un lápiz sobre madera'
	},
	pageSections: [
		{
			totalColumns: 1,
			columnsWidth: [12],
			sectionProperties: { background: '#ffffff', paddingBottom: 12 },
			columns: [
				{
					rowProperties: {},
					rows: [
						{
							type: 'Text',
							content: {
								textColor: '#000000',
								title: {
									size: 'medium',
									text: 'Proyectos únicos, para todos'
								},
								paragraphs: [
									'No nos cerramos a nada. Hemos proyectos de todo tipo y de toda clase. A continuación mostramos una pequeña recopilación de algunos de nuestros trabajos.'
								]
							}
						}
					]
				}
			]
		}
	]
};

export default contactPage;
