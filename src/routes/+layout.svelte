<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { repositoryName } from '$lib/prismicio';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	// Supports weights 100-900
	import '@fontsource-variable/dm-sans';

	let { children } = $props();
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<Header settings={$page.data.settings}></Header>
<main>
	{@render children?.()}
</main>
<Footer settings={$page.data.settings}></Footer>

<PrismicPreview {repositoryName} />
