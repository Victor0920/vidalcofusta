import type {
	CardType,
	ImageAndTextType,
	TextType,
	ImageCarrouselType,
	CardPropertiesType,
	ColumnLayoutType
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
	rows: ComponentType[];
};

export type ComponentType = ImageAndTextSection | ImageCarouselSection | CardsSection | TextSection;

export type PageSectionProperties = {
	paddingTop?: number;
	paddingBottom?: number;
	background?: string;
};

type ImageAndTextSection = {
	type: 'ImageAndText';
	properties: PageSectionProperties;
	content: ImageAndTextType;
};

type ImageCarouselSection = {
	type: 'ImageCaroussel';
	properties: PageSectionProperties;
	content: ImageCarrouselType;
};

type CardsSection = {
	type: 'Cards';
	properties: PageSectionProperties;
	content: { properties: CardPropertiesType; cards: CardType[] };
};

type TextSection = {
	type: 'Text';
	properties: PageSectionProperties;
	content: TextType;
};
