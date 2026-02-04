<script lang="ts">
	import Divider from './Divider.svelte';
</script>

<section class="top-section">
	<div class="pre-title">Välkommen till bröllop mellan</div>
	<h1 class="title">Louise & Teodor</h1>
	<div class="pre-title">Första Augusti 2026</div>
</section>
<Divider />
<section>
	<h2 id="info">Information</h2>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Tid & Plats</div>
		<div class="col-span-4 mx-4">
			Vigseln hålls i Kirsebergs kyrka kl 12.30 efterföljt av middag och bröllopsfest på Grand
			Circus Hotel i Malmö.
		</div>
	</div>

	<!-- <div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Transport dit</div>
		<div class="col-span-4 mx-4">Det finns flera sätt att ta sig till Kirsebergs kyrka.</div>
	</div> -->

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Kollektivtrafik</div>
		<div class="col-span-4 mx-4">
			Från Malmö C kan du ta buss 4 (mot Segevång) till Solgatan och gå sista biten, ca 5 min, eller
			ta Pågatåget till Östervärn station och promenera ungefär 15 minuter.
			<br /><br />
			Från Triangeln (norra uppgången) går buss 15 (mot Arlöv) till Kirsebergsskolan, sen är det bara
			en kort promenad på 10 minuter.
			<br /><br />
			Se <a target="_blank" href="https://www.skanetrafiken.se">Skånetrafiken</a>
			för reseplanerare.
		</div>
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Till fots</div>
		<div class="col-span-4 mx-4">
			Malmö är en platt stad och det går fint att promenera till kyrkan, vilket tar 45 minuter från
			Malmö C respektive från Triangeln station.
		</div>
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Taxi</div>
		<div class="col-span-4 mx-4">För taxi rekommenderar vi Taxi Skåne och Bolt.</div>
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Från vigsel till fest</div>
		<div class="col-span-4 mx-4">
			Mellan kyrkan och festlokalen är det knappt tio minuters promenad.
		</div>
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Klädsel</div>
		<div class="col-span-4 mx-4">
			Något ni känner er fina i, underlaget på Grand Circus Hotell är grus och gräs, så tänk på det
			vid valet av skor.
		</div>
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Barn</div>
		<div class="col-span-4 mx-4">
			Barn är välkomna. Anmäl barn genom att fylla i det under "övrigt" i formuläret. Kontakta
			Louise eller Teodor vid frågor.
		</div>
	</div>

	<div class="grid grid-rows-1 grid-cols-6 gap-1 mb-8">
		<div class="col-span-2 text-right">Presenter</div>
		<div class="col-span-4 mx-4">
			Er närvaro är gåva nog, men om ni vill ge oss någonting önskar vi oss ett bidrag till vår
			bröllopsresa. Swish: <a href="tel:0703338952">0703338952</a>
		</div>
	</div>

	<p />
</section>

<style lang="less">
	#info {
		margin-bottom: 1rem;
	}
	.pre-title {
		font-family: 'Jost', sans-serif;
		font-weight: 400;
		font-style: italic;
		font-size: 18px;
		margin: 1rem auto;
		letter-spacing: 0;
		text-align: center;
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
</style>
