import type { CardType, TextType } from './';

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

export type PageSectionType =
	| ImageAndTextSection
	| ImageCarouselSection
	| CardsSection
	| TextSection;

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

type TextSection = {
	type: 'Text';
	background?: string;
	content: TextType;
};
