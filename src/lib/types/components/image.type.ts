export type ImageType = {
	imageUrl: string;
	imageDescription: string;
	properties: {
		rounded?: boolean;
		shadow?: boolean;
		cover?: boolean;
		width?: string;
		height?: string;
	};
};
