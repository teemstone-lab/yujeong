<!-- <script lang="ts">
	import { Router } from '@roxi/routify';
	import { routes } from '../.routify/routes';
</script>

<Router routes="{routes}" /> -->
<style>
	ul {
		padding: 20px;
		background: black;
		color: rgb(118, 118, 2);
		display: flex;
		gap: 20px;
		justify-content: center;
	}
	/* ul li {
	} */
	ul li div.on {
		color: yellow;
	}
</style>

<script lang="ts">
	let currentPage = 'index';
	import Index from './pages/index.svelte';

	import Markup10 from './pages/html/wknd9_main.svelte';
	import Markup11 from './pages/html/wknd10_AppTodo.svelte';
	import Markup12 from './pages/html/todoApp.svelte';

	// import Nav from './components/nav/Nav.svelte';

	type ClickEvent = MouseEvent & {
		currentTarget: EventTarget & HTMLButtonElement;
	};
	const clickHandler = (e: ClickEvent) => {
		const target = e.target as HTMLButtonElement;
		currentPage = target.innerText;
	};
</script>

<ul>
	<li
		><button on:click="{clickHandler}">
			<div class="{`${currentPage === 'markup/markup10' ? 'on' : ''}`}"> markup/markup10</div>
		</button></li
	>

	<li
		><button on:click="{clickHandler}">
			<div class="{`${currentPage === 'markup/markup11' ? 'on' : ''}`}"> markup/markup11</div>
		</button></li
	>

	<li
		><button on:click="{clickHandler}">
			<div class="{`${currentPage === 'markup/markup12' ? 'on' : ''}`}"> markup/markup12</div>
		</button></li
	>
</ul>

<main>
	{#if currentPage === 'index'}
		<div class="wrapper"><Index /></div>
	{/if}

	{#if currentPage === 'markup/markup10'}
		<div class="wrapper"><Markup10 /></div>
	{/if}

	{#if currentPage === 'markup/markup11'}
		<div class="wrapper"><Markup11 /></div>
	{/if}

	{#if currentPage === 'markup/markup12'}
		<div class="wrapper"><Markup12 /></div>
	{/if}
</main>
