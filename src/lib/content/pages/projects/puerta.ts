import type { PageType } from '$lib/types';

// Termporal. Las imágenes irán en un repo externo
import puertaImg from '$lib/assets/puerta.webp';
import puertaImg2 from '$lib/assets/puerta2.webp';
import puertaImg3 from '$lib/assets/puerta3.webp';
import puertaIcon from '$lib/assets/puerta_icon.png';

const puerta: PageType = {
	id: 'p3',
	name: 'puerta',
	url: '/proyectos/puerta',
	meta: {
		title: 'Portón de entrada',
		description: 'Puerta triple para la entrada de personas y vehículos.',
		imageUrl: puertaImg,
		imageDescription: 'Puerta de entrada de palets de madera',
		imageUrlReduced: puertaIcon
	},
	pageSections: [
		{
			totalColumns: 1,
			columnsWidth: [12],
			sectionProperties: { background: '#ffffff' },
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
								imageUrl: puertaImg3,
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
					rowProperties: {},
					rows: [
						{
							type: 'Text',
							content: {
								title: {
									size: 'medium',
									text: 'Estructura'
								},
								paragraphs: [
									'Elit sunt cupidatat dolore pariatur incididunt eiusmod consequat nostrud nulla sunt irure magna id.',
									'Sit ut non Lorem laboris enim culpa magna ipsum. Magna cillum esse aute amet occaecat. Quis fugiat sunt dolore irure sit minim non proident exercitation incididunt esse sint non ipsum.'
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
			totalColumns: 2,
			columnsWidth: [6, 6],
			sectionProperties: { background: '#ffffff' },
			columns: [
				{
					rowProperties: {},
					rows: [
						{
							type: 'Text',
							content: {
								title: {
									size: 'medium',
									text: 'Bisagras'
								},
								paragraphs: [
									'Elit sunt cupidatat dolore pariatur incididunt eiusmod consequat nostrud nulla sunt irure magna id.',
									'Sit ut non Lorem laboris enim culpa magna ipsum. Magna cillum esse aute amet occaecat. Quis fugiat sunt dolore irure sit minim non proident exercitation incididunt esse sint non ipsum.'
								],
								textColor: '#000000',
								showLine: false,
								textAlign: 'left'
							}
						}
					]
				},
				{
					rowProperties: {},
					rows: [
						{
							type: 'Image',
							content: {
								imageUrl: puertaImg2,
								imageDescription: 'Estructura de la puerta en detalle',
								properties: {
									width: '100%',
									height: '300px',
									rounded: true,
									shadow: true
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
			sectionProperties: { background: '#f3f1e9', paddingBottom: 8 },
			columns: [
				{
					rowProperties: {},
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
			sectionProperties: { background: '#f3f1e9', paddingTop: 0 },
			columns: [
				{
					rowProperties: {},
					rows: [
						{
							type: 'Button',
							content: {
								text: 'Solicita un presupuesto',
								theme: 'blue',
								url: '/contacto#contactMethods'
							}
						}
					]
				}
			]
		}
	]
};

export default puerta;
