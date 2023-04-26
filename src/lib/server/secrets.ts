// This file can only be improtable in +page.server.ts files
import { pages } from '$lib/content/pages';
import projectsPages from '$lib/content/pages/projects';
import servicesPages from '$lib/content/pages/services';
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
		let projectPage = projectsPages.find((page) => page.url === url);

		if (projectPage) {
			res(projectPage);
		} else {
			rej(pages.find((page) => page.name === '404'));
		}
	});
};

const findAllProjectPages = async (): Promise<PageType[]> => {
	return new Promise(async (res, rej) => {
		if (projectsPages) {
			res(projectsPages);
		} else {
			rej([]);
		}
	});
};

const findServicePage = async (url: string): Promise<PageType> => {
	return new Promise(async (res, rej) => {
		let servicePage = servicesPages.find((page) => page.url === url);

		if (servicePage) {
			res(servicePage);
		} else {
			rej(pages.find((page) => page.name === '404'));
		}
	});
};

const findAllServicesPages = async (): Promise<PageType[]> => {
	return new Promise(async (res, rej) => {
		if (servicesPages) {
			res(servicesPages);
		} else {
			rej([]);
		}
	});
};

export { findPage, findProjectPage, findAllProjectPages, findServicePage, findAllServicesPages };
