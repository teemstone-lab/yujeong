<script lang="ts">
	import type { Fruit, Fruits } from '../types2';

	import { v4 as uuid } from 'uuid';
	export let currentSelectItem: Fruit | null;
	export let store: any;
	export let stores: any;
	export let storeIndex: number;
	export let dragStoreIndex: number;
	export let dropStoreIndex: number;
	const Fruits = [
		{ name: 'mango', id: uuid() },
		{ name: 'lychee', id: uuid() },
		{ name: 'coconut', id: uuid() },
		{ name: 'melon', id: uuid() },
	];

	let willAddFruit: Fruit;

	function handleSelectFruit(
		e: Event & {
			currentTarget: EventTarget & HTMLSelectElement;
		},
	) {
		const fruit = Fruits.find((fruit) => fruit.name === e.currentTarget.value);
		if (fruit) willAddFruit = fruit;
		console.log('선택한 과일은?', willAddFruit);
	}

	function addClick() {
		if (willAddFruit) {
			willAddFruit = { ...willAddFruit, id: uuid() };
			store.add(willAddFruit);
		}
	}

	function deleteClick() {
		if (willAddFruit) {
			console.log(willAddFruit);
			store.delete(willAddFruit.id);
			console.log('도나?', store);
		}
		console.log('delete됨!', store);
	}
</script>

<div class="flex min-h-[300px] w-full flex-col justify-center">
	<div class="flex flex-auto flex-row flex-wrap content-start justify-center gap-x-3">
		<select class="flex" name="kind" on:change="{handleSelectFruit}">
			<option value="">선택! 과일</option>
			<option value="mango">망고</option>
			<option value="lychee">리치</option>
			<option value="coconut">코코넛</option>
			<option value="melon">멜론</option>
		</select>

		<!-- w-[calc(490px-40px)] -->
		<div class="flex flex-row gap-x-1">
			<button
				class="flex w-[80px] justify-center rounded-lg bg-sky-400 hover:bg-sky-500"
				on:click="{addClick}"
			>
				add</button
			>
			<button
				class="flex w-[80px] justify-center rounded-lg bg-rose-400 hover:bg-rose-500"
				on:click="{deleteClick}"
			>
				delete</button
			>
		</div>
	</div>

	<ul
		class="flex h-full w-full grow flex-wrap content-start justify-start"
		on:dragover="{() => {
			dropStoreIndex = storeIndex;
		}}"
		on:dragend="{() => {
			console.log('dragStoreIndex', dragStoreIndex);
			// dropStoreIndex = storeIndex;
			console.log('dropStoreIndex', dropStoreIndex);
			const dragStore = stores[dragStoreIndex];
			const dropStore = stores[dropStoreIndex];

			console.log(dropStore);
			if (currentSelectItem) {
				console.log(currentSelectItem);
				dragStore.delete(currentSelectItem.id);
				dropStore.add(currentSelectItem);
				console.log('dropStore', storeIndex);
				console.log('dragStore', dragStore);
				console.log('dropStore', dropStore);
			}

			currentSelectItem = null;
		}}"
	>
		{#each $store as item}
			<li
				draggable="true"
				class="flex max-h-[320px] w-[25%] justify-center gap-x-2"
				on:dragstart="{() => {
					currentSelectItem = item;
					console.log(currentSelectItem);
					dragStoreIndex = storeIndex;
				}}">{item.name}</li
			>
		{/each}
	</ul>
</div>
