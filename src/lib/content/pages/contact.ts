import type { PageType } from '$lib/types';
import carpentryImg from '$lib/assets/carpentry4.jpg';

const contactPage: PageType = {
	id: 'a2',
	name: 'contacto',
	url: '/contacto',
	meta: {
		title: 'Contacto',
		description: '¡Cuéntame tu idea y realizaré un presupuesto sin compromiso!',
		imageUrl: carpentryImg,
		imageDescription: 'Caja de herramientas'
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

export default contactPage;
