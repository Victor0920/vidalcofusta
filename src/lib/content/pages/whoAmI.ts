import type { PageType } from '$lib/types';
import carpentryImg from '$lib/assets/carpentry3.jpeg';

const contact: PageType = {
	name: 'quien-soy',
	meta: {
		title: 'Hola, soy Jose',
		description: 'Un apasionado de la carpintería...',
		imageUrl: carpentryImg
	},
	sections: [
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
			background: '#ffffff',
			content: {
				images: ['img 1', 'img 2']
			}
		}
	]
};

export default contact;
