import type { CardType } from './card.type';

export type PageType = {
	id: string;
	name: string;
	url: string;
	meta: Meta;
	sections: PageSectionType[];
};

type Meta = {
	title: string;
	description: string;
	imageUrl: string;
	imageUrlReduced?: string;
	imageDescription: string;
};

export type PageSectionType = ImageAndTextSection | ImageCarouselSection | CardsSection;

type ImageAndTextSection = {
	type: 'ImageAndText';
	background?: string;
	content: {
		image: string;
		texts: string[];
	};
};

type ImageCarouselSection = {
	type: 'ImageCaroussel';
	background?: string;
	content: {
		images: string[];
	};
};

type CardsSection = {
	type: 'Cards';
	background?: string;
	content: CardType[];
};
