import type { PageType } from '$lib/types';
import galleryImg from '$lib/assets/carpentry2.jpeg';

const contactPage: PageType = {
	id: 'a3',
	name: 'galeria',
	url: '/galeria',
	meta: {
		title: 'Galería',
		description: 'Una recopliación de mis trabajos',
		imageUrl: galleryImg,
		imageDescription: 'Carpintero marcando con un lápiz sobre madera'
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
		},
		{
			type: 'Cards',
			background: '#ffffff',
			content: []
		}
	]
};

export default contactPage;
