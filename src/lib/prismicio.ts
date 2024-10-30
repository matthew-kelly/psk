import * as prismic from '@prismicio/client';
import { type CreateClientConfig, enableAutoPreviews } from '@prismicio/svelte/kit';
import { PUBLIC_VITE_PRISMIC_ENVIRONMENT } from '$env/static/public';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = PUBLIC_VITE_PRISMIC_ENVIRONMENT || '';

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// TODO: Update the routes array to match your project's route structure.
const routes: prismic.ClientConfig['routes'] = [
	{ type: 'page', path: '/', uid: 'home' },
	{ type: 'page', path: '/:uid' },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param {import('@prismicio/svelte/kit').CreateClientConfig} config - Configuration for the Prismic client.
 */
export const createClient = ({ cookies, ...config }: CreateClientConfig = {}) => {
	const client = prismic.createClient(repositoryName, {
		routes,
		...config,
	});

	enableAutoPreviews({ client, cookies });

	return client;
};
