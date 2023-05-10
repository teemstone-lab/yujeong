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
	import Markup12 from './pages/html/wknd11/practice_AppTodo.svelte';
	import Markup13 from './pages/html/wknd11/practice_AppFruit.svelte';
	import FruitStore from './pages/html/wknd11/wknd11_FruitShop.svelte';
	import FruitStore2 from './pages/html/wknd11/pr2_appFruit.svelte';

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

	<li
		><button on:click="{clickHandler}">
			<div class="{`${currentPage === 'markup/markup13' ? 'on' : ''}`}"> markup/markup13</div>
		</button></li
	>

	<li
		><button on:click="{clickHandler}">
			<div class="{`${currentPage === 'drag/drop' ? 'on' : ''}`}"> drag/drop</div>
		</button></li
	>

	<li
		><button on:click="{clickHandler}">
			<div class="{`${currentPage === 'FruitStore2' ? 'on' : ''}`}"> FruitStore2</div>
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

	{#if currentPage === 'markup/markup13'}
		<div class="wrapper"><Markup13 /></div>
	{/if}

	{#if currentPage === 'drag/drop'}
		<div class="wrapper"><FruitStore /></div>
	{/if}

	{#if currentPage === 'FruitStore2'}
		<div class="wrapper"><FruitStore2 /></div>
	{/if}
</main>
