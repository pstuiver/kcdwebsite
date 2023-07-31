<script>
	import RouteHead from '$lib/RouteHead.svelte';
	export let headerColor = 'gray-on-blue';
	export let headerTitle = 'Blog Posts';
	export let data;
	const { blogSRC } = data;
</script>

<svelte:head>
	<title>KidzCanDurban-Blog Posts</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<div class="flex flex-col items-center relative w-full h-screen m-0 p-0 astro-4Y4XMH2W">
		<div
			class="absolute origin-top width-full h-screen scale-[0.43] xs:iframescale-xs sm:iframescale-sm md:iframescale-md -mt-16 xs:-iframemt-xs sm:-iframemt-sm md:-iframemt-md svelte-19c54l5">
			<iframe title="kidzcandurban blog" width="780px" height="250%" class="" src={blogSRC} />
		</div>
	</div>
</div>
