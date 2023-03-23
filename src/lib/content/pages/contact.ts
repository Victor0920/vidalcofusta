import type { PageType } from '$lib/types';
import toolboxImg from '$lib/assets/carpentry-box.png';

const contact: PageType = {
	name: 'contacto',
	meta: {
		title: 'Contacto',
		description: '¡Cuéntame tu idea y realizaré un presupuesto sin compromiso!',
		imageUrl: toolboxImg
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
