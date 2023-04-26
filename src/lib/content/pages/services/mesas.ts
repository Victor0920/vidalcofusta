import type { PageType } from '$lib/types';

// Termporal. Las imágenes irán en un repo externo
import mesaImg from '$lib/assets/mesa1.webp';
import mesaImg2 from '$lib/assets/mesa2.webp';
import mesaImg3 from '$lib/assets/mesa3.webp';
import mesaImg4 from '$lib/assets/mesa4.webp';
import mesaImg5 from '$lib/assets/mesa5.webp';
import mesaImgIcon from '$lib/assets/mesa1.webp';

const mesas: PageType = {
	id: 'p3',
	name: 'mesa',
	url: '/servicios/mesas',
	meta: {
		title: 'Mesa con resina',
		description:
			'Mesas de comedor, de centro, de bar, de cocina, de estudio, de trabajo, de reunión, de juego, de jardín, de terraza...',
		imageUrl: mesaImg5,
		imageDescription: 'Mesa con resina',
		imageUrlReduced: mesaImgIcon
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
									text: 'Mesas personalizadas para adaptarse a cualquier espacio'
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
								imageUrl: mesaImg3,
								imageDescription: 'Mesa',
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
									text: 'Sencilla pero impactante'
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
									text: 'Formas y resultados únicos'
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
								imageUrl: mesaImg2,
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
										imageUrl: mesaImg,
										imageDescription: 'Some description'
									},
									{
										imageUrl: mesaImg2,
										imageDescription: 'Some description'
									},
									{
										imageUrl: mesaImg3,
										imageDescription: 'Some description'
									},
									{
										imageUrl: mesaImg4,
										imageDescription: 'Some description'
									},
									{
										imageUrl: mesaImg,
										imageDescription: 'Some description'
									},
									{
										imageUrl: mesaImg2,
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
								text: 'Solicita un presupuesto para tu mesa',
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

export default mesas;
