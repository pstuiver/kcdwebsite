<script>
	// Start of Recently Added
	import { setupViewTransition } from 'sveltekit-view-transition';
	setupViewTransition();
	// End of Recently Added
	import '../tailwind.postcss';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

{@render children?.()}
