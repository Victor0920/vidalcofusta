import type { PageType } from '$lib/types';

// Termporal. Las imágenes irán en un repo externo
import puertaImg from '$lib/assets/puerta.jpeg';
import puertaImg2 from '$lib/assets/puerta2.png';
import puertaImg3 from '$lib/assets/puerta3.png';
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
	sections: [
		{
			type: 'Text',
			background: '#ffffff',
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
		},
		{
			type: 'ImageAndText',
			background: '#f3f1e9',
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
		},
		{
			type: 'ImageAndText',
			background: '#ffffff',
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
		},
		{
			type: 'ImageCaroussel',
			background: '#f3f1e9',
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
						imageUrl: puertaImg2,
						imageDescription: 'Some description'
					},
					{
						imageUrl: puertaImg2,
						imageDescription: 'Some description'
					},
					{
						imageUrl: puertaImg2,
						imageDescription: 'Some description'
					},
					{
						imageUrl: puertaImg2,
						imageDescription: 'Some description'
					}
				]
			}
		}
	]
};

export default puerta;
