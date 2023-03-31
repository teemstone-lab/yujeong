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
	import Markup1 from './pages/html/html1.svelte';
	import Markup2 from './pages/html/html2.svelte';
	import Markup3 from './pages/html/html3.svelte';
	import Markup4 from './pages/html/html4.svelte';
	import Markup5 from './pages/html/html5.svelte';
	import Markup6 from './pages/html/html6.svelte';
	import Markup7 from './pages/html/html7.svelte';
	import Markup8 from './pages/html/html8.svelte';
	import Markup9 from './pages/html/html9.svelte';
	import Markup10 from './pages/html/App.svelte';

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
			<div class="{`${currentPage === 'markup/markup1' ? 'on' : ''}`}"> markup/markup1</div>
		</button></li
	>
	<li
		><button on:click="{clickHandler}">
			<div class="{`${currentPage === 'markup/markup2' ? 'on' : ''}`}">markup/markup2</div>
		</button></li
	>
	<li
		><button on:click="{clickHandler}">
			<div class="{`${currentPage === 'markup/markup3' ? 'on' : ''}`}">markup/markup3</div>
		</button></li
	>
	<li
		><button on:click="{clickHandler}">
			<div class="{`${currentPage === 'markup/markup4' ? 'on' : ''}`}"> markup/markup4</div>
		</button></li
	>
	<li
		><button on:click="{clickHandler}">
			<div class="{`${currentPage === 'markup/markup5' ? 'on' : ''}`}"> markup/markup5</div>
		</button></li
	>

	<li
		><button on:click="{clickHandler}">
			<div class="{`${currentPage === 'markup/markup6' ? 'on' : ''}`}"> markup/markup6</div>
		</button></li
	>

	<li
		><button on:click="{clickHandler}">
			<div class="{`${currentPage === 'markup/markup7' ? 'on' : ''}`}"> markup/markup7</div>
		</button></li
	>

	<li
		><button on:click="{clickHandler}">
			<div class="{`${currentPage === 'markup/markup8' ? 'on' : ''}`}"> markup/markup8</div>
		</button></li
	>

	<li
		><button on:click="{clickHandler}">
			<div class="{`${currentPage === 'markup/markup9' ? 'on' : ''}`}"> markup/markup9</div>
		</button></li
	>

	<li
		><button on:click="{clickHandler}">
			<div class="{`${currentPage === 'markup/markup10' ? 'on' : ''}`}"> markup/markup10</div>
		</button></li
	>
</ul>

<main>
	{#if currentPage === 'index'}
		<div class="wrapper"><Index /></div>
	{/if}
	{#if currentPage === 'markup/markup1'}
		<div class="wrapper"><Markup1 /></div>
	{/if}
	{#if currentPage === 'markup/markup2'}
		<div class="wrapper"><Markup2 /></div>
	{/if}
	{#if currentPage === 'markup/markup3'}
		<div class="wrapper"><Markup3 /></div>
	{/if}
	{#if currentPage === 'markup/markup4'}
		<div class="wrapper"><Markup4 /></div>
	{/if}
	{#if currentPage === 'markup/markup5'}
		<div class="wrapper"><Markup5 /></div>
	{/if}
	{#if currentPage === 'markup/markup6'}
		<div class="wrapper"><Markup6 /></div>
	{/if}
	{#if currentPage === 'markup/markup7'}
		<div class="wrapper"><Markup7 /></div>
	{/if}
	{#if currentPage === 'markup/markup8'}
		<div class="wrapper"><Markup8 /></div>
	{/if}
	{#if currentPage === 'markup/markup9'}
		<div class="wrapper"><Markup9 /></div>
	{/if}

	{#if currentPage === 'markup/markup10'}
		<div class="wrapper"><Markup10 /></div>
	{/if}
</main>
