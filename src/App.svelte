<!-- <script lang="ts">
	import { Router } from '@roxi/routify';
	import { routes } from '../.routify/routes';
</script>

<Router routes="{routes}" /> -->
<style>
	.table {
		width: 100%;
	}
	.table ul {
		padding: 20px;
		background: black;
		color: rgb(118, 118, 2);
		display: flex;
		gap: 20px;
		justify-content: center;
	}
	/* ul li {
	} */
	.table ul li div.on {
		color: yellow;
	}
</style>

<script lang="ts">
	let currentPage = 'index';
	import Index from './pages/index.svelte';

	import WebWorker from './pages/html/wknd9_main.svelte';
	import TodoList1 from './pages/html/wknd10_AppTodo.svelte';
	import TodoList2 from './pages/html/wknd11/practice_AppTodo.svelte';
	import SelectAdd from './pages/html/wknd11/practice_AppFruit.svelte';
	import FruitStore from './pages/html/wknd11/wknd11_FruitShop.svelte';
	import FruitStore2 from './pages/html/wknd11/pr2_appFruit.svelte';
	import MSW from './pages/html/wknd12/wknd12_app.svelte';

	// import Nav from './components/nav/Nav.svelte';

	type ClickEvent = MouseEvent & {
		currentTarget: EventTarget & HTMLButtonElement;
	};
	const clickHandler = (e: ClickEvent) => {
		const target = e.target as HTMLButtonElement;
		currentPage = target.innerText;
	};

	// let isMswLoad;
	// const initMsw = async () => {
	// 	const { worker } = await import('./mocks/browser');
	// 	worker.start().then((res) => (isMswLoad = res));
	// };
	// initMsw();

	// $: {
	// 	console.log(isMswLoad);
	// }

	// let hostList = [];
	// let osInfo = [];

	// function getHostList() {
	// 	return fetch('/hostList', { method: 'GET' })
	// 		.then((response) => response.json())
	// 		.then((hostData) => {
	// 			console.log('hostList', hostData);
	// 			hostList = hostData;
	// 			return hostData;
	// 		})
	// 		.catch(() => {});
	// }

	// function getOsInfo() {
	// 	return fetch('/osInfo', { method: 'GET' })
	// 		.then((response) => response.json())
	// 		.then((osData) => {
	// 			console.log('osInfo', osData);
	// 			osInfo = osData;
	// 			return osData;
	// 		})
	// 		.catch(() => {});
	// }
</script>

<!-- <button
	on:click="{async () => {
		console.log(isMswLoad);
		await getHostList();
		await getOsInfo();
	}}">mock data 받아오기</button
>
<div class="flex gap-x-2">
	<ul>
		<h2>Host List</h2>
		{#each hostList as host}
			<ul>
				<div>host ID: {host.id}</div>
			</ul>
		{/each}
	</ul>

	<ul class="flex flex-col">
		<h2>OS Info</h2>
		{#each osInfo as os}
			<ul class="flex gap-x-2">
				<div class="flex flex-row">name: {os.name}</div>
				<div class="flex flex-row">cpu: {os.cpu}</div>
				<div class="flex flex-row">memory: {os.memory}</div>
			</ul>
		{/each}
	</ul>
</div> -->

<div class="table">
	<ul>
		<li
			><button on:click="{clickHandler}">
				<div class="{`${currentPage === 'WebWorker' ? 'on' : ''}`}"> WebWorker</div>
			</button></li
		>

		<li
			><button on:click="{clickHandler}">
				<div class="{`${currentPage === 'TodoList1' ? 'on' : ''}`}"> TodoList1</div>
			</button></li
		>

		<li
			><button on:click="{clickHandler}">
				<div class="{`${currentPage === 'TodoList2' ? 'on' : ''}`}"> TodoList2</div>
			</button></li
		>

		<li
			><button on:click="{clickHandler}">
				<div class="{`${currentPage === 'SelectAdd' ? 'on' : ''}`}"> SelectAdd</div>
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

		<li
			><button on:click="{clickHandler}">
				<div class="{`${currentPage === 'MSW' ? 'on' : ''}`}"> MSW</div>
			</button></li
		>
	</ul>
</div>

<main>
	{#if currentPage === 'index'}
		<div class="wrapper"><Index /></div>
	{/if}

	{#if currentPage === 'WebWorker'}
		<div class="wrapper"><WebWorker /></div>
	{/if}

	{#if currentPage === 'TodoList1'}
		<div class="wrapper"><TodoList1 /></div>
	{/if}

	{#if currentPage === 'TodoList2'}
		<div class="wrapper"><TodoList2 /></div>
	{/if}

	{#if currentPage === 'SelectAdd'}
		<div class="wrapper"><SelectAdd /></div>
	{/if}

	{#if currentPage === 'drag/drop'}
		<div class="wrapper"><FruitStore /></div>
	{/if}

	{#if currentPage === 'FruitStore2'}
		<div class="wrapper"><FruitStore2 /></div>
	{/if}

	{#if currentPage === 'MSW'}
		<div class="wrapper"><MSW /></div>
	{/if}
</main>
