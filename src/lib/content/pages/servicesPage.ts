import type { PageType } from '$lib/types';
import carpentryImg from '$lib/assets/carpentry8.webp';

const servicesPage: PageType = {
	id: 'a1',
	name: 'servicios',
	url: '/servicios',
	meta: {
		title: 'Servicios',
		description: 'Conoce nuestras especialidades',
		imageUrl: carpentryImg,
		imageDescription: 'Imagen de carpintería'
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
									text: 'Nuestras especialidades'
								},
								paragraphs: [
									'No nos cerramos a nada. Aceptamos proyectos de todo tipo y de toda clase. Sin embargo, nos especializamos en los siguientes campos.'
								]
							}
						}
					]
				}
			]
		}
	]
};

export default servicesPage;
