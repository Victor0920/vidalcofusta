export type PageType = {
	name: string;
	meta: Meta;
	sections: PageSectionType[];
};

type Meta = {
	title: string;
	description: string;
	imageUrl: string;
	imageUrlReduced?: string;
};

export type PageSectionType = ImageAndTextSection | ImageCarouselSection;

type ImageAndTextSection = {
	type: 'ImageAndText';
	background: string;
	content: {
		image: string;
		texts: string[];
	};
};

type ImageCarouselSection = {
	type: 'ImageCaroussel';
	background: string;
	content: {
		images: string[];
	};
};
