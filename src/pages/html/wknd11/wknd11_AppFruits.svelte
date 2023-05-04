<script lang="ts">
	import type { Fruit } from '../types2';
	import { store1 } from './store';
	import { v4 as uuid } from 'uuid';

	const Fruits = [
		{ name: 'mango', id: uuid() },
		{ name: 'lychee', id: uuid() },
		{ name: 'coconut', id: uuid() },
		{ name: 'melon', id: uuid() },
	];

	let currentSelectedFruit = '';
	let willAddFruit: Fruit;
	let willDeleteFruit: Fruit;

	function handleSelectFruit(
		e: Event & {
			currentTarget: EventTarget & HTMLSelectElement;
		},
	) {
		currentSelectedFruit = e.currentTarget.value;
		const fruit = Fruits.find((fruit) => fruit.name === currentSelectedFruit);
		if (fruit) {
			willAddFruit = fruit;
			willDeleteFruit = fruit;
		}
		console.log('선택한 과일은?', currentSelectedFruit, willAddFruit);
	}

	function addClick() {
		if (willAddFruit) {
			store1.add(willAddFruit);
		}
		console.log('add됨!', $store1);
	}

	function deleteClick() {
		let willDeleteFruitID = willDeleteFruit.id;
		if (willDeleteFruitID) {
			store1.delete(willDeleteFruitID);
		}
	}
</script>

<button on:click="{addClick}"> add</button>

<button on:click="{deleteClick}"> delete</button>

<ul>
	{#each $store1 as item}
		<li>{item.name}</li>
	{/each}
</ul>

<!--  -->

<select name="kind" on:change="{handleSelectFruit}">
	<option value="">선택! 과일</option>
	<option value="mango">망고</option>
	<option value="lychee">리치</option>
	<option value="coconut">코코넛</option>
	<option value="melon">멜론</option>
</select>
