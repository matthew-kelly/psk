<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';

	let { slice }: { slice: Content.RichTextSlice } = $props();
</script>

<div class="prose prose-lg prose-slate prose-invert w-full">
	<PrismicRichText field={slice.primary.content} />
</div>
