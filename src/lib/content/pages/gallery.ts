import type { PageType } from '$lib/types';
import galleryImg from '$lib/assets/carpentry2.webp';

const contactPage: PageType = {
	id: 'a3',
	name: 'galeria',
	url: '/galeria',
	meta: {
		title: 'Galería',
		description: 'Una recopliación de nuestros trabajos',
		imageUrl: galleryImg,
		imageDescription: 'Carpintero marcando con un lápiz sobre madera'
	},
	sections: [
		{
			type: 'Cards',
			properties: { background: '#ffffff' },
			content: { properties: {}, cards: [] }
		}
	]
};

export default contactPage;
