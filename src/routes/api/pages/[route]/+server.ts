import { error, json, type RequestHandler } from '@sveltejs/kit';
import { pages } from '$lib/content/pages';

export const GET: RequestHandler = ({ params }) => {
	let page = pages.find((page) => page.url === params.route);

	if (!page) {
		page = pages.find((page) => page.name === '404');
	}

	return json(page);
};
