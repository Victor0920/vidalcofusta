export type TextType = {
	title?: {
		size?: 'small' | 'medium' | 'large';
		text?: string;
	};
	showLine?: boolean;
	paragraphs: string[];
	textColor: string;
	textAlign?: 'center' | 'left' | 'right';
};
