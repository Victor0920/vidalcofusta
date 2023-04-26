import type { PageType } from '$lib/types';
import carpentryImg from '$lib/assets/carpentry.webp';
import caliperIcon from '$lib/assets/icons/caliper.svg';
import chiselIcon from '$lib/assets/icons/chisel.svg';
import fixHomeIcon from '$lib/assets/icons/fix-home.svg';
import hammerIcon from '$lib/assets/icons/hammer.svg';
import MesaImg from '$lib/assets/wood-table.webp';
import RoofImg from '$lib/assets/roof.webp';
import puertaImg from '$lib/assets/puerta.webp';
import puertaImg2 from '$lib/assets/puerta2.webp';
import puertaImg3 from '$lib/assets/puerta3.webp';

const HomePage: PageType = {
	id: 'a0',
	name: 'home',
	url: '/',
	meta: {
		title: 'Carpentería a medida',
		description:
			'Proyectos de madera a medida. Desde grandes plataformas a muebles, mesas o decoraciones.',
		imageUrl: carpentryImg,
		imageDescription: 'Hombre realizando tareas de carpintería'
	},
	pageSections: [
		{
			totalColumns: 2,
			columnsWidth: [6, 6],
			sectionProperties: { background: '#f3f1e9' },
			columns: [
				{
					rowProperties: {},
					rows: [
						{
							type: 'Image',
							content: {
								imageUrl: MesaImg,
								imageDescription: 'Estructura de la puerta',
								properties: {
									width: '100%',
									height: '300px',
									rounded: false,
									shadow: false
								}
							}
						}
					]
				},
				{
					rowProperties: {
						gap: 3
					},
					rows: [
						{
							type: 'Text',
							content: {
								title: {
									size: 'medium',
									text: 'Éxito asegurado'
								},
								paragraphs: [
									'✔ Más de 20 años de experiencia en el sector',
									'✔ Hemos desarrollado proyectos de todo tipo, desde pequeñas artesanías hasta grandes estructuras',
									'✔ Nos adaptamos al 100% a tus requerimientos',
									'✔ Garantía de calidad',
									'✔ Entrega en tiempo y forma'
								],
								textColor: '#000000',
								showLine: false,
								textAlign: 'left'
							}
						}
					]
				}
			]
		},
		{
			totalColumns: 4,
			columnsWidth: [3, 3, 3, 3],
			sectionProperties: { background: '#ffffff' },
			columns: [
				{
					rowProperties: {
						gap: 2
					},
					rows: [
						{
							type: 'Image',
							content: {
								imageUrl: caliperIcon,
								imageDescription: 'Caliper Icon',
								properties: {
									width: '100%',
									height: '100px',
									rounded: false,
									cover: false,
									shadow: false
								}
							}
						},
						{
							type: 'Text',
							content: {
								title: {
									size: 'small',
									text: 'A medida'
								},
								paragraphs: ['Projectos adaptados a cualquier espacio y ambiente.'],
								showLine: false,
								textAlign: 'center',
								textColor: '#000000'
							}
						}
					]
				},
				{
					rowProperties: {
						gap: 2
					},
					rows: [
						{
							type: 'Image',
							content: {
								imageUrl: fixHomeIcon,
								imageDescription: 'Icono de una casa',
								properties: {
									width: '100%',
									height: '100px',
									rounded: false,
									cover: false,
									shadow: false
								}
							}
						},
						{
							type: 'Text',
							content: {
								title: {
									size: 'small',
									text: 'Restaurar o crear'
								},
								paragraphs: ['Dale una segunda vida a tu mueble o crea algo nuevo.'],
								showLine: false,
								textAlign: 'center',
								textColor: '#000000'
							}
						}
					]
				},
				{
					rowProperties: {
						gap: 2
					},
					rows: [
						{
							type: 'Image',
							content: {
								imageUrl: hammerIcon,
								imageDescription: 'Icono de un martillo',
								properties: {
									width: '100%',
									height: '100px',
									rounded: false,
									cover: false,
									shadow: false
								}
							}
						},
						{
							type: 'Text',
							content: {
								title: {
									size: 'small',
									text: 'Reciclado o nuevo'
								},
								paragraphs: ['Tú eliges los materiales, nosotros hacemos el resto.'],
								showLine: false,
								textAlign: 'center',
								textColor: '#000000'
							}
						}
					]
				},
				{
					rowProperties: {
						gap: 2
					},
					rows: [
						{
							type: 'Image',
							content: {
								imageUrl: chiselIcon,
								imageDescription: 'Icono de un formón',
								properties: {
									width: '100%',
									height: '100px',
									rounded: false,
									cover: false,
									shadow: false
								}
							}
						},
						{
							type: 'Text',
							content: {
								title: {
									size: 'small',
									text: 'A mano'
								},
								paragraphs: ['Artesanía 100% para obtener resultados únicos.'],
								showLine: false,
								textAlign: 'center',
								textColor: '#000000'
							}
						}
					]
				}
			]
		},
		{
			totalColumns: 2,
			columnsWidth: [6, 6],
			sectionProperties: { background: '#f3f1e9' },
			columns: [
				{
					rowProperties: {},
					rows: [
						{
							type: 'Image',
							content: {
								imageUrl: RoofImg,
								imageDescription: 'Estructura de la puerta',
								properties: {
									width: '100%',
									height: '300px',
									rounded: true,
									shadow: true
								}
							}
						}
					]
				},
				{
					rowProperties: {
						gap: 3
					},
					rows: [
						{
							type: 'Text',
							content: {
								title: {
									size: 'medium',
									text: 'Compromiso contigo'
								},
								paragraphs: [
									'✔ Hacemos el presupuesto, las mediciones y el diseño.',
									'✔ Nos encargamos de la fabricación y la instalación.',
									'✔ Materiales de la máxima calidad.'
								],
								textColor: '#000000',
								showLine: false,
								textAlign: 'left'
							}
						},
						{
							type: 'Button',
							content: {
								text: 'Contacta',
								theme: 'blue',
								url: '/contacto'
							}
						}
					]
				}
			]
		},
		{
			totalColumns: 1,
			columnsWidth: [12],
			sectionProperties: { background: '#f3f1e9', paddingBottom: 0 },
			columns: [
				{
					rowProperties: { gap: 0 },
					rows: [
						{
							type: 'Text',
							content: {
								title: {
									size: 'medium',
									text: 'Galería'
								},
								paragraphs: [],
								textColor: '#000000',
								showLine: false,
								textAlign: 'left'
							}
						},
						{
							type: 'ImageCaroussel',
							content: {
								images: [
									{
										imageUrl: puertaImg,
										imageDescription: 'Some description'
									},
									{
										imageUrl: puertaImg2,
										imageDescription: 'Some description'
									},
									{
										imageUrl: puertaImg3,
										imageDescription: 'Some description'
									},
									{
										imageUrl: puertaImg,
										imageDescription: 'Some description'
									},
									{
										imageUrl: puertaImg2,
										imageDescription: 'Some description'
									},
									{
										imageUrl: puertaImg3,
										imageDescription: 'Some description'
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
			sectionProperties: { background: '#f3f1e9', paddingTop: 8 },
			columns: [
				{
					rowProperties: {},
					rows: [
						{
							type: 'Button',
							content: {
								text: 'Ver todos los proyectos',
								theme: 'blue',
								url: '/galeria'
							}
						}
					]
				}
			]
		}
	]
};

export default HomePage;
