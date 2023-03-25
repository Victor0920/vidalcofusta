import type { PageType } from '$lib/types';
import carpentryImg from '$lib/assets/carpentry3.jpeg';

const NotFoundPage: PageType = {
	id: 'a0',
	name: '404',
	url: '/404',
	meta: {
		title: 'Error 404',
		description: '¡Oh no! Esta página no existe...',
		imageUrl: carpentryImg,
		imageDescription: 'Hombre lijando madera'
	},
	sections: [
		// {
		// 	type: 'ImageAndText',
		// 	background: '#f3f1e9',
		// 	content: {
		// 		image: 'imgUrl',
		// 		imageDescription: 'imgUrl',
		// 		imagePosition: 'start',
		// 		text: { textColor: '#000000', paragraphs: ['first text', 'second text'] }
		// 	}
		// }
	]
};

export default NotFoundPage;
