import type {
	ButtonType,
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

export type ComponentType =
	| ButtonComponent
	| CardComponent
	| ImageComponent
	| ImageCarouselComponent
	| TextComponent;

export type PageSectionProperties = {
	paddingTop?: number;
	paddingBottom?: number;
	background?: string;
	id?: string;
};

type ButtonComponent = {
	type: 'Button';
	content: ButtonType;
};

type CardComponent = {
	type: 'Card';
	content: CardType;
};

type ImageComponent = {
	type: 'Image';
	content: ImageType;
};

type ImageCarouselComponent = {
	type: 'ImageCaroussel';
	content: ImageCarrouselType;
};

type TextComponent = {
	type: 'Text';
	content: TextType;
};
