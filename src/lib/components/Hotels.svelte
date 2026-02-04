<script lang="ts">
</script>

<section>
	<h2 id="bo">Behöver ni nånstans att bo?</h2>
	<p>
		Bnb, hus och stugor finns inom gångavstånd och det kan man hitta på
		<a href="https://www.booking.com" target="_blank">Booking.com</a>,
		<a href="https://www.airbnb.se" target="_blank">Airbnb.se</a> och
		<a href="https://www.stugknuten.com" target="_blank">Stugknuten.com</a>.
	</p>

	<div class="hotel-item mb-8">
		<div class="hotel-name">Smygehuks havsbad hotell</div>
		<div class="hotel-desc">Ca 2,5 km från Helmerslund gård</div>
	</div>

	<div class="hotel-item mb-8">
		<div class="hotel-name">Smygehuk fyr</div>
		<div class="hotel-desc">Vackert vandrarhem ett stenkast från Sveriges sydligaste punkt</div>
	</div>

	<div class="hotel-item mb-8">
		<div class="hotel-name">Villa Beddingestrand</div>
		<div class="hotel-desc">Pensionat med otroliga våfflor</div>
	</div>
</section>

<style lang="less">
	.hotel-item {
		display: grid;
		grid-template-columns: 2fr 4fr;
		gap: 0.25rem;
	}

	.hotel-name {
		text-align: right;
	}

	.hotel-desc {
		margin-left: 1rem;
	}

	@media screen and (max-width: 500px) {
		.hotel-item {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.hotel-name {
			text-align: center;
			font-weight: 500;
			text-decoration: underline;
		}

		.hotel-desc {
			margin-left: 0;
		}
	}
</style>
