<script lang="ts">
	import type { Content } from '@prismicio/client';
	import WordMark from './WordMark.svelte';
	import { PrismicLink } from '@prismicio/svelte';
	import ButtonLink from './ButtonLink.svelte';

	let { settings }: { settings: Content.SettingsDocument } = $props();
</script>

<header>
	<nav
		class="flex flex-col items-center justify-between gap-6 border-t border-gray-600 px-8 py-7 md:flex-row"
		aria-label="header"
	>
		<a href="/">
			<WordMark />
			<span class="sr-only">{settings.data.site_title} homepage</span>
		</a>

		<ul class="flex gap-6">
			{#each settings.data.navigation as item (item.label)}
				<li>
					{#if item.cta_button}
						<ButtonLink field={item.link}>{item.label}</ButtonLink>
					{:else}
						<PrismicLink field={item.link} class="inline-flex min-h-11 items-center">{item.label}</PrismicLink>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
</header>
