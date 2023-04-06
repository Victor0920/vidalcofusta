import type {
	CardType,
	ImageAndTextType,
	ImageType,
	TextType,
	ImageCarrouselType,
	CardPropertiesType,
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
	| ImageAndTextComponent
	| ImageComponent
	| ImageCarouselComponent
	| CardsComponent
	| TextComponent;

export type PageSectionProperties = {
	paddingTop?: number;
	paddingBottom?: number;
	background?: string;
};

type ImageAndTextComponent = {
	type: 'ImageAndText';
	content: ImageAndTextType;
};

type ImageComponent = {
	type: 'Image';
	content: ImageType;
};

type ImageCarouselComponent = {
	type: 'ImageCaroussel';
	content: ImageCarrouselType;
};

type CardsComponent = {
	type: 'Cards';
	content: { properties: CardPropertiesType; cards: CardType[] };
};

type TextComponent = {
	type: 'Text';
	content: TextType;
};
