import type { PageType } from '$lib/types';
import puertaImg from '$lib/assets/puerta.jpeg';

const puerta: PageType = {
	id: 'p3',
	name: 'puerta',
	url: '/galeria/puerta',
	meta: {
		title: 'Puerta de madera',
		description:
			'Puerta a base de palets. Fabricada Únicamente de madera, incluídas las bisagras. Sin un solo tornillo.',
		imageUrl: puertaImg,
		imageDescription: 'Puerta de entrada de palets de madera'
	},
	sections: [
		{
			type: 'Text',
			background: '#ffffff',
			content: {
				title: {
					type: 'h1',
					text: 'Reclicablidad y reusabilidad para maderas que podrían ser cenizas'
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
				image: 'imgUrl',
				texts: ['first text', 'second text']
			}
		},
		{
			type: 'ImageCaroussel',
			background: '#0abcse9',
			content: {
				images: ['img 1', 'img 2']
			}
		}
	]
};

export default puerta;
