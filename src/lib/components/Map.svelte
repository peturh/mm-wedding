<script lang="ts">
	import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';
	import { onMount } from 'svelte';

	const CONFIGURATION = {
		locations: [
			{
				title: 'Grand Circus Hotel',
				address1: 'Södra Bulltoftavägen 51',
				address2: '212 22 Malmö, Sweden',
				coords: { lat: 55.60380649113203, lng: 13.0444779932541 },
				placeId: 'ChIJ-0AV9OKnU0YRiauSpv2kOOc'
			},
			{
				title: 'Kirseberg Church',
				address1: 'Vattenverksvägen 25',
				address2: '212 21 Malmö, Sweden',
				coords: { lat: 55.60899492129406, lng: 13.041444622090168 },
				placeId: 'ChIJqe_7r9qjU0YRVqk1cos4GQc'
			}
		],
		mapOptions: {
			center: { lat: 38.0, lng: -100.0 },
			fullscreenControl: true,
			mapTypeControl: false,
			streetViewControl: false,
			zoom: 4,
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
