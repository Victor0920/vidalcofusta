import { error, json, type RequestHandler } from '@sveltejs/kit';
import { pages } from '$lib/content/pages';
import PocketBase from 'pocketbase';

export const GET: RequestHandler = async ({ params }) => {
	let page = pages.find((page) => page.url === params.route);

	if (!page) {
		page = pages.find((page) => page.name === '404');
	}

	const pb = new PocketBase('http://127.0.0.1:8090');

	const record = await pb.collection('pages').getOne('onziny23i8sf41m', {
		expand: 'relField1,relField2.subRelField'
	});

	console.log(record);

	return json(page);
};
