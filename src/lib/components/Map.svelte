<script lang="ts">
	import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';
	import { onMount } from 'svelte';

	const CONFIGURATION = {
		locations: [
			{
				title: 'Helmers Lunds gård',
				address1: 'Östra Torps Byaväg 274',
				address2: '231 99 Klagstorp, Sweden',
				coords: { lat: 55.3920, lng: 13.3650 },
				placeId: ''
			}
		],
		mapOptions: {
			center: { lat: 55.3920, lng: 13.3650 },
			fullscreenControl: true,
			mapTypeControl: false,
			streetViewControl: false,
			zoom: 12,
			zoomControl: true,
			maxZoom: 17,
			mapId: ''
		},
		mapsApiKey: PUBLIC_GOOGLE_MAPS_API_KEY,
		capabilities: {
			input: true,
			autocomplete: true,
			directions: false,
			distanceMatrix: true,
			details: false,
			actions: false
		}
	};

	onMount(async () => {
		// Load the Extended Component Library
		const script = document.createElement('script');
		script.type = 'module';
		script.src =
			'https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js';
		document.head.appendChild(script);

		// Wait for the custom element to be defined and configure it
		await customElements.whenDefined('gmpx-store-locator');
		const locator = document.querySelector('gmpx-store-locator') as any;
		if (locator) {
			locator.configureFromQuickBuilder(CONFIGURATION);
		}
	});
</script>

<section>
	<h2 id="karta">Hitta hit</h2>
	<p class="mb-4">Östra Torps Byaväg 274, 231 99 Klagstorp</p>
	<div id="map-wrapper" class="map-wrapper">
		<gmpx-api-loader
			key={PUBLIC_GOOGLE_MAPS_API_KEY}
			solution-channel="GMP_QB_locatorplus_v11_cABD"
		/>
		<gmpx-store-locator map-id="DEMO_MAP_ID" />
	</div>
</section>

<style lang="less">
	.map-wrapper {
		height: 800px;
		width: 100%;
	}

	:global(gmpx-store-locator) {
		width: 100%;
		height: 100%;

		--gmpx-color-surface: #fff;
		--gmpx-color-on-surface: #212121;
		--gmpx-color-on-surface-variant: #757575;
		--gmpx-color-primary: #1967d2;
		--gmpx-color-outline: #e0e0e0;
		--gmpx-fixed-panel-width-row-layout: 28.5em;
		--gmpx-fixed-panel-height-column-layout: 65%;
		--gmpx-font-family-base: 'Jost', sans-serif;
		--gmpx-font-family-headings: 'Jost', sans-serif;
		--gmpx-font-size-base: 0.875rem;
		--gmpx-hours-color-open: #188038;
		--gmpx-hours-color-closed: #d50000;
		--gmpx-rating-color: #ffb300;
		--gmpx-rating-color-empty: #e0e0e0;
	}
</style>
