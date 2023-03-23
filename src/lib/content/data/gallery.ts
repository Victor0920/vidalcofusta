import type { CardType } from '$lib/types';
// import woodImage from '$lib/assets/wood.jpeg';
import projects from '../pages/projects';

const gallery: CardType[] = projects.data.map((project) => ({
	title: project.meta.title,
	description: project.meta.description,
	buttonText: 'Más detalles',
	link: `/galeria/${project.name}`,
	imageUrl: project.meta.imageUrl,
	imageDescription: project.meta.title
}));

export default gallery;
