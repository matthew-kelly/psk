<script lang="ts">
	import clsx from 'clsx';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		children: Snippet;
		tag?: string;
		class?: string;
	} & HTMLAttributes<HTMLElement>;

	let { children, tag = 'section', class: className, ...others }: Props = $props();
</script>

<svelte:element this={tag} {...others} class={clsx('px-4 py-14 first:pt-10 md:px-6 md:py-20 lg:py-24', className)}>
	<div class="mx-auto flex w-full max-w-6xl flex-col items-center">
		{@render children?.()}
	</div>
</svelte:element>
