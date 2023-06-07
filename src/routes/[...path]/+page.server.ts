import PocketBase from 'pocketbase';
import { pages, setPages } from '$lib/server/pages';

const pocketbaseUrl = 'http://127.0.0.1:8090';

export async function load({ params }) {
	const pb = new PocketBase(pocketbaseUrl);
	const fullPagesList = await pb.collection('pages').getFullList();

	const uid = `/${params.path}`;
	let page = fullPagesList.find((page) => page.url === uid);

	if (!page) {
		page = fullPagesList.find((page) => page.url === '/404');
	}

	console.log({ page });

	return { page: structuredClone(page) };
}
