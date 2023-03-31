import type { PageType } from '$lib/types';
import carpentryImg from '$lib/assets/carpentry3.webp';
import joseImg1 from '$lib/assets/jose2.jpg';
import joseImg2 from '$lib/assets/jose.jpg';

const whoAreWePage: PageType = {
	id: 'a1',
	name: 'quienes-somos',
	url: '/quienes-somos',
	meta: {
		title: 'Nuestro equipo',
		description: 'Nos mueve la pasión por la madera',
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
					text: 'Nuestro objetivo'
				},
				paragraphs: [
					'Para conseguir lo que hemos conseguido se necesita un equipo entregado a su cometido.'
				]
			}
		},
		{
			type: 'ImageAndText',
			properties: { background: '#ffffff', paddingTop: 0 },
			content: {
				imageUrl: joseImg1,
				imageDescription: 'imgUrl',
				imagePosition: 'start',
				text: {
					title: {
						size: 'medium',
						text: 'Nuestra misión'
					},
					textColor: '#000000',
					paragraphs: [
						'Conseguir que tanto nosotros como nuestros clientes se sientan orgullosos de su proyecto.',
						'Ideas, diseño, materiales y servicio personalizado para conseguir un resultado único en el mundo.',
						'Manteniendo siempre la calidad, profesionalidad y cercanía.'
					]
				}
			}
		},
		{
			type: 'Text',
			properties: { background: '#f3f1e9', paddingBottom: 4 },
			content: {
				textColor: '#000000',
				title: {
					size: 'medium',
					text: 'Nuestro equipo'
				},
				paragraphs: []
			}
		},
		{
			type: 'Cards',
			properties: { background: '#f3f1e9', paddingTop: 0 },
			content: {
				properties: {
					columns: 2
				},
				cards: [
					{
						imageUrl: joseImg2,
						imageDescription: 'Whatsapp logo',
						title: 'Jose',
						description:
							'Carpintero, obrero, diseñador y experto en madera. Desde que surge la idea hasta que se termina el proyecto, es el encargado de llevarlo a cabo.',
						url: 'https://wa.me/+34622881350?text=Hola,+buenos+días'
					},
					{
						imageUrl: '',
						imageDescription: 'Gmail logo',
						title: 'Víctor',
						description:
							'Desarrollador en microcontroladores y diseñador web. Se encarga de la programación informática en los proyectos (en caso de existir).',
						url: 'mailto:vidalcofusta@gmail.com'
					}
				]
			}
		}
		// {
		// 	type: 'ImageAndText',
		// 	properties: { background: '#f3f1e9' },
		// 	content: {
		// 		imageUrl: joseImg2,
		// 		imageDescription: 'imgUrl',
		// 		imagePosition: 'start',
		// 		text: {
		// 			title: {
		// 				size: 'medium',
		// 				text: 'Nuestra misión'
		// 			},
		// 			textColor: '#000000',
		// 			paragraphs: [
		// 				'Conseguir que tanto nosotros como nuestros clientes se sientan orgullosos de su proyecto.',
		// 				'Ideas, diseño, materiales y servicio personalizado para conseguir un resultado único en el mundo.',
		// 				'Manteniendo siempre la calidad, profesionalidad y cercanía.'
		// 			]
		// 		}
		// 	}
		// }
	]
};

export default whoAreWePage;
