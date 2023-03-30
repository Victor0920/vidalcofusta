import type { PageType } from '$lib/types';
import carpentryImg from '$lib/assets/carpentry3.jpeg';

const whoAmIPage: PageType = {
	id: 'a1',
	name: 'quienes-somos',
	url: '/quienes-somos',
	meta: {
		title: 'Hola, soy Jose',
		description: 'Un apasionado de la carpintería...',
		imageUrl: carpentryImg,
		imageDescription: 'Carpintero alisando madera con un formón'
	},
	sections: [
		{
			type: 'ImageAndText',
			background: '#f3f1e9',
			content: {
				imageUrl: 'imgUrl',
				imageDescription: 'imgUrl',
				imagePosition: 'start',
				text: { textColor: '#000000', paragraphs: ['first text', 'second text'] }
			}
		}
		// {
		// 	type: 'ImageCaroussel',
		// 	background: '#ffffff',
		// 	content: {
		// 		images: ['img 1', 'img 2']
		// 	}
		// }
	]
};

export default whoAmIPage;
