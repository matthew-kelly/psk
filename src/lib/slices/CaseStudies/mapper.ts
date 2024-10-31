import * as prismic from '@prismicio/client';
import type { Content } from '@prismicio/client';

type Params = {
	slice: Content.CaseStudiesSlice;
	context: {
		client: prismic.Client<Content.AllDocumentTypes>;
	};
};

export default async function mapper({ slice, context }: Params) {
	const toFetch: string[] = [];

	slice.primary.case_studies.map((item) => {
		if (prismic.isFilled.contentRelationship(item.case_study)) {
			toFetch.push(item.case_study.id);
		}
	});

	// @ts-expect-error can't be bothered to type this properly lol
	const caseStudies: Content.CaseStudyDocument[] = (await context.client.getByIDs(toFetch)).results;

	return {
		slice,
		caseStudies,
	};
}
