import type { PageType } from '$lib/types';
import carpentryImg from '$lib/assets/carpentry.webp';
import caliperIcon from '$lib/assets/icons/caliper.svg';
import chiselIcon from '$lib/assets/icons/chisel.svg';
import fixHomeIcon from '$lib/assets/icons/fix-home.svg';
import hammerIcon from '$lib/assets/icons/hammer.svg';

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
								paragraphs: ['Dar una segunda vida a tu mueble o crea uno nuevo.'],
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
			columnsWidth: [5, 7],
			sectionProperties: { background: '#f3f1e9' },
			columns: [
				{
					rowProperties: {},
					rows: [
						{
							type: 'Text',
							content: {
								title: {
									size: 'medium',
									text: '90% materiales reciclados, 100% innovación'
								},
								paragraphs: [
									'Cillum veniam est culpa adipisicing ullamco excepteur fugiat. Occaecat do ipsum cupidatat proident nisi deserunt qui quis in aliqua.',
									'Do officia eiusmod dolor magna ipsum id consectetur ut dolore. Nulla fugiat irure sit esse magna eu. Deserunt quis pariatur mollit ex officia ut ad aute qui nulla reprehenderit.'
								],
								textColor: '#000000'
							}
						}
					]
				},
				{
					rowProperties: {},
					rows: [
						{
							type: 'Text',
							content: {
								title: {
									size: 'medium',
									text: '90% materiales reciclados, 100% innovación'
								},
								paragraphs: [
									'Cillum veniam est culpa adipisicing ullamco excepteur fugiat. Occaecat do ipsum cupidatat proident nisi deserunt qui quis in aliqua.',
									'Do officia eiusmod dolor magna ipsum id consectetur ut dolore. Nulla fugiat irure sit esse magna eu. Deserunt quis pariatur mollit ex officia ut ad aute qui nulla reprehenderit.'
								],
								textColor: '#000000'
							}
						}
					]
				}
			]
		}
	]
};

export default HomePage;
