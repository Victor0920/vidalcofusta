import type { TextType } from './text.type';

export type ImageAndTextType = {
	image: string;
	imageDescription: string;
	imagePosition: 'start' | 'end';
	text: TextType;
};
