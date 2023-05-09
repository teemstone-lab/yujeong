<script lang="ts">
	import type { Fruit } from '../types2';
	import { createStore } from './practice_store';
	import { v4 as uuid } from 'uuid';

	const store = createStore();
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
			console.log('도나?', $store);
		}
		console.log('delete됨!', $store);
	}
</script>

<div class="flex min-h-full w-full flex-col justify-center">
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

	<ul class="flex h-full w-full grow flex-wrap content-start justify-start">
		{#each $store as item}
			<li class="flex max-h-[320px] w-[25%] justify-center gap-x-2">{item.name}</li>
		{/each}
	</ul>
</div>
