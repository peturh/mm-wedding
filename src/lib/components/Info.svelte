<script lang="ts">
	import Divider from './Divider.svelte';
</script>

<section class="top-section">
	<div class="pre-title">Varmt välkommen till bröllopet mellan</div>
	<h1 class="title">Mikaela & Mirell</h1>
	<div class="pre-title">19 september 2026</div>
</section>
<Divider />
<section>
	<h2 id="info">Information</h2>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Tid & Plats</div>
		<div class="col-span-4 mx-4">
			Vigseln äger rum kl. 14.00 på Helmers Lunds gård i Klagstorp. Därefter bjuder vi in till
			mingel, middag med en vegetarisk meny och bröllopsfest på gården.
		</div>
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Klädkod</div>
		<div class="col-span-4 mx-4">Kavaj</div>
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Tema</div>
		<div class="col-span-4 mx-4">
			Färgglatt!
			<br /><br />
			Vi ser fram emot att ha en färgglad fest, och uppmuntrar er till att ha kul med färg, accessoarer,
			mönster, paljetter mm.
			<br /><br />
			<em>It's a gay wedding! Look alive people!</em>
			<br /><br />
			Vi bifogar lite inspirationsbilder nedan.
		</div>
	</div>

	<div class="moodboard mb-8">
		<img src="/moodboard.jpg" alt="Inspirationsbilder - färgglatt tema" />
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Barn</div>
		<div class="col-span-4 mx-4">Vigseln och festen är barnfri, med undantag för ammande barn.</div>
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Present</div>
		<div class="col-span-4 mx-4">
			Er närvaro är gåva nog, men om ni vill ge oss någonting önskar vi oss ett bidrag till vår
			bröllopsresa.
			<br /><br />
			Swish: <a href="tel:0730883883">073-088 38 83</a>
		</div>
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Transport dit</div>
		<div class="col-span-4 mx-4">
			Helmerslund gården ligger i Klagstorp ca 30 minuter ifrån Malmö. Enklast är att ta sig hit med
			taxi eller bil. Samåk gärna, det finns gott om parkeringsmöjligheter vid gården.
		</div>
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Kollektivtrafik</div>
		<div class="col-span-4 mx-4">
			Från Malmö C: Ta Pågatåg till Trelleborg C. Byt till regionbuss mot Klagstorp/Skegrie (linjer
			kan variera, se Skånetrafikens reseplanerare). Närmaste hållplats ligger en kortare taxiresa
			eller promenad från gården beroende på avgång.
		</div>
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Transport hem</div>
		<div class="col-span-4 mx-4">
			Taxi Skåne, Taxi Skurup, Taxi Trelleborg och Bolt/Uber. Det kan vara en god idé att förboka
			taxi.
		</div>
	</div>

	<p />
</section>

<style lang="less">
	#info {
		margin-bottom: 1rem;
	}
	.pre-title {
		font-family: 'Young Serif', serif;
		font-weight: 400;
		font-style: normal;
		font-size: 18px;
		margin: 1rem auto;
		letter-spacing: 0;
		text-align: center;
		color: #f9601c;
	}

	.ampersand {
		font-family: 'Jost', sans-serif;
		font-weight: 200;
		font-style: italic;
	}
	.top-section {
		margin: 0 auto;
	}
	.title {
		margin: 0 auto;
		font-weight: 400;
	}
	.moodboard {
		text-align: center;

		img {
			max-width: 100%;
			height: auto;
		}
	}

	@media screen and (max-width: 768px) {
	}
</style>
