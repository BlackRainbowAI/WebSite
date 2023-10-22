export default (await import("astro/config")).defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
	site: "https://blackrainbow.media",
	compressHTML: true,
	integrations: [
		import.meta.env.MODE === "production"
			? (await import("astrojs-service-worker")).default()
			: null,
		(await import("@astrojs/sitemap")).default(),
		// (await import("astro-critters")).default({ Logger: 1 }),
		(await import("@astrojs/prefetch")).default(),
		// (await import("astro-rome")).default({ Logger: 1 }),
<<<<<<< HEAD
		(await import("astro-compress")).default({
			Logger: 1,
			HTML: {
				caseSensitive: true,
			},
		}),
=======
		(await import("astro-compress")).default({ Logger: 1 }),
>>>>>>> upstream/main
	],
	vite: {
		build: {
			sourcemap: true,
		},
	},
});
