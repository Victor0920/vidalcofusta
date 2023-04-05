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
	pageSections: [
		{
			totalColumns: 1,
			columnsWidth: [12],
			sectionProperties: { background: '#ffffff', paddingBottom: 12 },
			columns: [
				{
					rows: [
						{
							type: 'Text',
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
						}
					]
				}
			]
		},
		{
			totalColumns: 1,
			columnsWidth: [12],
			sectionProperties: { background: '#ffffff', paddingTop: 0 },
			columns: [
				{
					rows: [
						{
							type: 'ImageAndText',
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
						}
					]
				}
			]
		},
		{
			totalColumns: 1,
			columnsWidth: [12],
			sectionProperties: { background: '#f3f1e9', paddingBottom: 4 },
			columns: [
				{
					rows: [
						{
							type: 'Text',
							content: {
								textColor: '#000000',
								title: {
									size: 'medium',
									text: 'Nuestro equipo'
								},
								paragraphs: []
							}
						}
					]
				}
			]
		},
		{
			totalColumns: 1,
			columnsWidth: [12],
			sectionProperties: {},
			columns: [
				{
					rows: [
						{
							type: 'Cards',
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
						}
					]
				}
			]
		},
		{
			totalColumns: 1,
			columnsWidth: [12],
			sectionProperties: { background: '#f3f1e9', paddingTop: 0 },
			columns: [
				{
					rows: [
						{
							type: 'Text',
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
				}
			]
		}
	]
};

export default whoAreWePage;
