<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';

	let { slice }: { slice: Content.RichTextSlice } = $props();
</script>

<Bounded>
	<article class="prose prose-slate prose-invert w-full">
		<PrismicRichText field={slice.primary.content} />
	</article>
</Bounded>
