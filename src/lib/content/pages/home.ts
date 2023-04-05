import type { PageType } from '$lib/types';
import carpentryImg from '$lib/assets/carpentry.webp';

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
					rows: [
						{
							type: 'Text',
							properties: {},
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
					rows: [
						{
							type: 'Text',
							properties: {},
							content: {
								title: {
									size: 'small',
									text: 'Restaurar o crear'
								},
								paragraphs: ['Dar una segunda vida a tu muebele o crea uno nuevo.'],
								showLine: false,
								textAlign: 'center',
								textColor: '#000000'
							}
						}
					]
				},
				{
					rows: [
						{
							type: 'Text',
							properties: {},
							content: {
								title: {
									size: 'small',
									text: 'Reciclado o nuevo'
								},
								paragraphs: ['Puedes elegir utilizar palets y maderas recicladas.'],
								showLine: false,
								textAlign: 'center',
								textColor: '#000000'
							}
						}
					]
				},
				{
					rows: [
						{
							type: 'Text',
							properties: {},
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
					rows: [
						{
							type: 'Text',
							properties: {},
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
					rows: [
						{
							type: 'Text',
							properties: {},
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
