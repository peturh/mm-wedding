<script lang="ts">
	import { fade } from 'svelte/transition';

	import { enhance } from '$app/forms';
	import dayjs from 'dayjs';
	import type { ActionData } from '../../routes/$types';
	export let form: ActionData;

	// RSVP deadline - set to null to keep form open, or use format 'YYYY-MM-DD'
	const RSVP_DEADLINE: string | null = '2026-03-01';

	const deadline = RSVP_DEADLINE ? dayjs(RSVP_DEADLINE) : null;
	// Form stays open until the end of the deadline day (closes when the next day begins)
	const isOpen = !deadline || dayjs().isBefore(deadline.add(1, 'day'));
</script>

<h2 id="osa">Om svar anhålles</h2>

{#if isOpen}
	<section>
		{#if deadline}
			<p>O.s.a senast {deadline.format('D MMMM YYYY')}.</p>
		{/if}
		<p>En person per formulär.</p>

		<form method="post" use:enhance>
			<div class="mb-4">
				<label for="name">För- och efternamn</label>
				<input
					id="name"
					name="name"
					placeholder="För- och efternamn"
					type="text"
					value={form?.name ?? ''}
					required
				/>
			</div>
			<div class="mb-4">
				<label for="phoneNumber">Telefonnummer</label>

				<input
					id="phoneNumber"
					name="phoneNumber"
					placeholder="Telefonnummer"
					type="text"
					value={form?.phoneNumber ?? ''}
					required
				/>
			</div>

			<div class="mb-4">
				<label for="email">Email</label>

				<input
					id="email"
					name="email"
					placeholder="Email"
					type="email"
					value={form?.email ?? ''}
					required
				/>
			</div>

			<div class="mb-4">
				<label for="foodPreference">Allergier eller matpreferenser</label>
				<input
					id="foodPreference"
					placeholder="Allergier eller matpreferenser"
					name="foodPreference"
					type="text"
					value={form?.foodPreference ?? ''}
				/>
			</div>
			<div class="mb-4">
				<label for="other">Övrigt</label>
				<input
					id="other"
					placeholder="T.ex. barn eller annat vi behöver veta"
					name="other"
					type="text"
					value={form?.other ?? ''}
				/>
			</div>
			<div class="mb-4">
				<label for="password">Lösenordet som står i inbjudan</label>
				<input
					id="password"
					placeholder="********"
					name="password"
					type="password"
					value={form?.password ?? ''}
					required
				/>
			</div>
			<button class="send-response" type="submit">Skicka in</button>
			{#if form?.success}
				<div transition:fade class="message success">Tack för din anmälan {form.person}</div>
			{/if}
			{#if form?.wrongPassword}
				<div transition:fade class="message password">Fel lösenord</div>
			{/if}
		</form>
		<p>
			Om Ni redan anmält er men får förhinder kontakta Louise eller Teodor via telefon eller SMS
		</p>
	</section>
{:else}
	<section>
		<p>Ni kan tyvärr inte längre anmäla er.</p>
		<p>Om Ni får förhinder kontakta Louise eller Teodor via telefon eller SMS</p>
	</section>
{/if}

<style>
	.message {
		margin: 1rem 0;
		border: 1px solid black;
		border-radius: 6px;
		padding: 1rem;
		color: black;
	}
	.password {
		background: #f8aeae;
	}

	.success {
		background: #d4e6d9;
	}
	.send-response {
		width: 100%;
		border: 1px solid black;
		border-radius: 6px;
		padding: 10px;
		box-shadow: 1px 1px 1px black;
		&:hover {
			box-shadow: none;
		}
	}
</style>
