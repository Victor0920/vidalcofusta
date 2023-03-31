import type { PageType } from '$lib/types';
import carpentryImg from '$lib/assets/carpentry3.webp';
import joseImg1 from '$lib/assets/jose2.jpg';
import joseImg2 from '$lib/assets/jose.jpg';

const whoAreWePage: PageType = {
	id: 'a1',
	name: 'quienes-somos',
	url: '/quienes-somos',
	meta: {
		title: 'Conócenos',
		description: 'Descubre porqué nos mueve la creatividad',
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
					'Conseguir el efecto "Wow" en cada uno de nuestros proyectos. Creemos que la proactividad, la pasión y una pizca de ingenio es el método para lograrlo. Es por eso que nos volcamos al 120% para que cada proyecto genere el efecto que buscamos.',
					'Damos lo máximo, puliendo cada detalle, para conseguir resultados duraderos, funcionales y estéticamente atractivos.'
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
						'Materializar en madera las ideas de nuestros clientes.',
						'Ideas, diseño, materiales y servicio personalizado para conseguir un resultado único en el mundo.',
						'Manteniendo siempre calidad, profesionalidad y cercanía.'
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
						imageDescription: 'Imagen de Jose',
						title: 'Jose',
						description:
							'Carpintero, obrero y diseñador. Desde que surje la idea hasta que se pulen los detalles finales. Es el encargado de llevarlo a cabo.',
						url: 'https://wa.me/+34622881350?text=Hola,+buenos+días'
					},
					{
						imageUrl:
							'https://thumbs.dreamstime.com/b/avatars-default-photo-placeholders-man-female-profile-vector-pictures-166601913.jpg',
						imageDescription: 'Imagen de Víctor',
						title: 'Víctor',
						description:
							'Programador de microcontroladores y diseñador web. Encargado de la programación y automatización.',
						url: 'mailto:vidalcofusta@gmail.com'
					}
				]
			}
		},
		{
			type: 'Text',
			properties: { background: '#ffffff', paddingBottom: 12 },
			content: {
				textColor: '#000000',
				title: {
					size: 'medium',
					text: 'Botón'
				},
				paragraphs: ['**Anadir aquí un botón para contacto**']
			}
		}
	]
};

export default whoAreWePage;
