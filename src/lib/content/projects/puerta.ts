import type { ProjectPageType } from '$lib/types';

const puerta: ProjectPageType = {
	name: 'puerta',
	meta: {
		title: 'Puerta de madera',
		description:
			'Puerta a base de palets. Fabricada Únicamente de madera, incluídas las bisagras. Sin un solo tornillo.'
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
			background: '#0abcse9',
			content: {
				images: ['img 1', 'img 2']
			}
		}
	]
};

export default puerta;
