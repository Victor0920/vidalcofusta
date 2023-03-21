export type ProjectPageType = {
	name: string;
	meta: Meta;
	sections: PageSectionType[];
};

type Meta = {
	title: string;
	description: string;
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
