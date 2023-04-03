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
	sections: [
		{
			type: 'Text',
			properties: { background: '#ffffff', paddingBottom: 12 },
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
		},
		{
			type: 'Cards',
			properties: { background: '#f3f1e9' },
			content: {
				properties: {},
				cards: [
					{
						imageUrl: mesaImg,
						imageDescription: 'Mesa de resina',
						title: 'Mesas a medida',
						description:
							'Mesas de comedor, de centro, de bar, de cocina, de estudio, de trabajo, de reunión, de juego, de jardín, de terraza...',
						buttonText: 'Más información',
						url: 'https://wa.me/+34622881350?text=Hola,+buenos+días'
					},
					{
						imageUrl: mesaImg,
						imageDescription: 'Mesa de resina',
						title: 'Puertas a medida',
						description:
							'Elit magna fugiat occaecat pariatur. Minim aliqua ex fugiat aliquip ullamco mollit proident fugiat non.',
						buttonText: 'Más información',
						url: 'https://wa.me/+34622881350?text=Hola,+buenos+días'
					},
					{
						imageUrl: mesaImg,
						imageDescription: 'Mesa de resina',
						title: 'Estructuras de gran tamaño',
						description:
							'Elit magna fugiat occaecat pariatur. Minim aliqua ex fugiat aliquip ullamco mollit proident fugiat non.',
						buttonText: 'Más información',
						url: 'https://wa.me/+34622881350?text=Hola,+buenos+días'
					},
					{
						imageUrl: mesaImg,
						imageDescription: 'Decoración de interiores',
						title: 'Decoración de interiores',
						description:
							'Elit magna fugiat occaecat pariatur. Minim aliqua ex fugiat aliquip ullamco mollit proident fugiat non.',
						buttonText: 'Más información',
						url: 'https://wa.me/+34622881350?text=Hola,+buenos+días'
					},
					{
						imageUrl: mesaImg,
						imageDescription: 'Decoración de exteriores',
						title: 'Decoración de exteriores',
						description:
							'Elit magna fugiat occaecat pariatur. Minim aliqua ex fugiat aliquip ullamco mollit proident fugiat non.',
						buttonText: 'Más información',
						url: 'https://wa.me/+34622881350?text=Hola,+buenos+días'
					}
				]
			}
		}
	]
};

export default servicesPage;
