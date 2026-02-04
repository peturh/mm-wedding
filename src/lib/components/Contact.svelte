<script lang="ts">
</script>

<section>
	<h2 id="kontakt">Kontaktuppgifter</h2>

	<div class="contact-item mb-8">
		<div class="contact-label">Toastmasters</div>
		<div class="contact-content">
			Ylva Knaevelsrud, <a href="tel:0700684764">070-068 47 64</a>,
			<a class="email" href="mailto:Ylva.knaevelsrud@hotmail.com">✉️</a>

			<br />
			Maria Malmqvist,
			<a class="email" href="mailto:mariamalmqvist@gmail.com">✉️</a>

			<div class="mt-4">
				Hör av er till Ylva och Maria om ni vill hålla tal, framföra en sång eller ordna något annat
				under middagen.
			</div>
		</div>
	</div>

	<div class="contact-item mb-8">
		<div class="contact-label">Brudpar</div>
		<div class="contact-content">
			Mikaela, <a href="tel:0730883883">073-088 38 83</a>,
			<a class="email" href="mailto:mikaelawwww@hotmail.com">✉️</a>
			<br />
			Mirell, <a href="tel:0707690078">070-769 00 78</a>,
			<a class="email" href="mailto:mirellae@live.se">✉️</a>
		</div>
	</div>
</section>

<style lang="less">
	.email {
		text-decoration: none;
	}

	.contact-item {
		display: grid;
		grid-template-columns: 2fr 4fr;
		gap: 0.25rem;
	}

	.contact-label {
		text-align: right;
	}

	.contact-content {
		margin-left: 1rem;
	}

	@media screen and (max-width: 500px) {
		.contact-item {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.contact-label {
			text-align: center;
			font-weight: 500;
			text-decoration: underline;
		}

		.contact-content {
			margin-left: 0;
		}
	}
</style>
