import type { PageType } from '$lib/types';

// Termporal. Las imágenes irán en un repo externo
import puertaImg from '$lib/assets/puerta.webp';
import puertaImg2 from '$lib/assets/puerta2.webp';
import puertaImg3 from '$lib/assets/puerta3.webp';
import puertaIcon from '$lib/assets/puerta_icon.png';

const puerta: PageType = {
	id: 'p3',
	name: 'puerta',
	url: '/galeria/puerta',
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
		},
		{
			totalColumns: 1,
			columnsWidth: [12],
			sectionProperties: { background: '#f3f1e9' },
			columns: [
				{
					rows: [
						{
							type: 'ImageAndText',
							properties: {},
							content: {
								imageUrl: puertaImg3,
								imageDescription: 'Estructura de la puerta',
								imagePosition: 'start',
								text: {
									title: {
										size: 'medium',
										text: 'Estructura'
									},
									paragraphs: [
										'Elit sunt cupidatat dolore pariatur incididunt eiusmod consequat nostrud nulla sunt irure magna id.',
										'Sit ut non Lorem laboris enim culpa magna ipsum. Magna cillum esse aute amet occaecat. Quis fugiat sunt dolore irure sit minim non proident exercitation incididunt esse sint non ipsum.'
									],
									textColor: '#000000'
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
			sectionProperties: { background: '#ffffff' },
			columns: [
				{
					rows: [
						{
							type: 'ImageAndText',
							properties: {},
							content: {
								imageUrl: puertaImg2,
								imageDescription: 'some image description',
								imagePosition: 'end',
								text: {
									title: {
										size: 'medium',
										text: 'Bisagras'
									},
									paragraphs: [
										'Elit sunt cupidatat dolore pariatur incididunt eiusmod consequat nostrud nulla sunt irure magna id.',
										'Sit ut non Lorem laboris enim culpa magna ipsum. Magna cillum esse aute amet occaecat. Quis fugiat sunt dolore irure sit minim non proident exercitation incididunt esse sint non ipsum.'
									],
									textColor: '#000000'
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
			sectionProperties: { background: '#f3f1e9' },
			columns: [
				{
					rows: [
						{
							type: 'ImageCaroussel',
							properties: {},
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
		}
	]
};

export default puerta;
