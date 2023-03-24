// This file can only be improtable in +page.server.ts files
import { pages } from '$lib/content/pages';
import { pages as projectPages } from '$lib/content/pages/projects';
import type { PageType } from '$lib/types';

const findPage = async (url: string): Promise<PageType> => {
	return new Promise(async (res, rej) => {
		let page = pages.find((page) => page.url === url);

		if (page) {
			res(page);
		} else {
			rej(pages.find((page) => page.name === '404'));
		}
	});
};

const findProjectPage = async (url: string): Promise<PageType> => {
	return new Promise(async (res, rej) => {
		let projectPage = projectPages.find((page) => page.url === url);

		if (projectPage) {
			res(projectPage);
		} else {
			rej(pages.find((page) => page.name === '404'));
		}
	});
};

const findAllProjectPages = async (): Promise<PageType[]> => {
	return new Promise(async (res, rej) => {
		if (projectPages) {
			res(projectPages);
		} else {
			rej([]);
		}
	});
};

export { findPage, findProjectPage, findAllProjectPages };
