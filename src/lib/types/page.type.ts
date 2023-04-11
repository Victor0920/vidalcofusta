import type {
	CardType,
	ImageType,
	TextType,
	ImageCarrouselType,
	ColumnLayoutType,
	RowsLayoutType
} from './';

export type PageType = {
	id: string;
	name: string;
	url: string;
	meta: Meta;
	pageSections: PageSectionType[];
};

type Meta = {
	title: string;
	description: string;
	imageUrl: string;
	imageUrlReduced?: string;
	imageDescription: string;
};

export type PageSectionType = ColumnLayoutType & {
	sectionProperties: PageSectionProperties;
	columns: Column[];
};

type Column = {
	rowProperties: RowsLayoutType;
	rows: ComponentType[];
};

export type ComponentType = ImageComponent | ImageCarouselComponent | CardComponent | TextComponent;

export type PageSectionProperties = {
	paddingTop?: number;
	paddingBottom?: number;
	background?: string;
};

type ImageComponent = {
	type: 'Image';
	content: ImageType;
};

type ImageCarouselComponent = {
	type: 'ImageCaroussel';
	content: ImageCarrouselType;
};

type CardComponent = {
	type: 'Card';
	content: CardType;
};

type TextComponent = {
	type: 'Text';
	content: TextType;
};
