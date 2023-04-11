import type { PageType } from '$lib/types';
import carpentryImg from '$lib/assets/carpentry3.webp';
import mesaImg from '$lib/assets/mesa1.webp';

const servicesPage: PageType = {
	id: 'a1',
	name: 'servicios',
	url: '/servicios',
	meta: {
		title: 'Servicios',
		description: 'Conoce cuales son nuestras especialidades',
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
									'No nos cerramos a nada. Aceptamos proyectos de todo tipo y de toda clase. Sin embargo, nos especializamos en los siguientes campos: Mesas, muebles a medida, estructuras, barras de bar y elementos decorativos.'
								]
							}
						}
					]
				}
			]
		},
		{
			totalColumns: 3,
			columnsWidth: [4],
			sectionProperties: { background: '#f3f1e9' },
			columns: [
				{
					rowProperties: {},
					rows: [
						{
							type: 'Card',
							content: {
								imageUrl: mesaImg,
								imageDescription: 'Mesa de resina',
								title: 'Mesas a medida',
								description:
									'Mesas de comedor, de centro, de bar, de cocina, de estudio, de trabajo, de reunión, de juego, de jardín, de terraza...',
								buttonText: 'Más información',
								url: 'https://wa.me/+34622881350?text=Hola,+buenos+días'
							}
						}
					]
				},
				{
					rowProperties: {},
					rows: [
						{
							type: 'Card',
							content: {
								imageUrl: mesaImg,
								imageDescription: 'Mesa de resina',
								title: 'Mesas a medida',
								description:
									'Mesas de comedor, de centro, de bar, de cocina, de estudio, de trabajo, de reunión, de juego, de jardín, de terraza...',
								buttonText: 'Más información',
								url: 'https://wa.me/+34622881350?text=Hola,+buenos+días'
							}
						}
					]
				},
				{
					rowProperties: {},
					rows: [
						{
							type: 'Card',
							content: {
								imageUrl: mesaImg,
								imageDescription: 'Mesa de resina',
								title: 'Mesas a medida',
								description:
									'Mesas de comedor, de centro, de bar, de cocina, de estudio, de trabajo, de reunión, de juego, de jardín, de terraza...',
								buttonText: 'Más información',
								url: 'https://wa.me/+34622881350?text=Hola,+buenos+días'
							}
						}
					]
				},
				{
					rowProperties: {},
					rows: [
						{
							type: 'Card',
							content: {
								imageUrl: mesaImg,
								imageDescription: 'Mesa de resina',
								title: 'Mesas a medida',
								description:
									'Mesas de comedor, de centro, de bar, de cocina, de estudio, de trabajo, de reunión, de juego, de jardín, de terraza...',
								buttonText: 'Más información',
								url: 'https://wa.me/+34622881350?text=Hola,+buenos+días'
							}
						}
					]
				},
				{
					rowProperties: {},
					rows: [
						{
							type: 'Card',
							content: {
								imageUrl: mesaImg,
								imageDescription: 'Mesa de resina',
								title: 'Mesas a medida',
								description:
									'Mesas de comedor, de centro, de bar, de cocina, de estudio, de trabajo, de reunión, de juego, de jardín, de terraza...',
								buttonText: 'Más información',
								url: 'https://wa.me/+34622881350?text=Hola,+buenos+días'
							}
						}
					]
				}
			]
		}
	]
};

export default servicesPage;
