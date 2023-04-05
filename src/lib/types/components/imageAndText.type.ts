import type { TextType } from './text.type';

export type ImageAndTextType = {
	imageUrl: string;
	imageDescription: string;
	imagePosition: 'start' | 'end';
	text: TextType;
};
