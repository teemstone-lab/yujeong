<script lang="ts">
	import { Stores, createFruit, emojis, getFruitEmoji } from './pr2_store_fr';
	import { writable } from 'svelte/store';
	import { FruitShops, Shop, Fruits, Fruit } from './pr2_type';

	let willAddFruit: Fruit;

	function handleSelectFruit(
		e: Event & {
			currentTarget: EventTarget & HTMLSelectElement;
		},
	) {
		const fruit = emojis.find((fruit) => createFruit.name === e.currentTarget.value);
		if (fruit) willAddFruit = fruit;
		console.log('선택한 과일은?', willAddFruit);
	}
</script>

{#each $Stores as shop, shopIndex (shop)}
	<ul class="flex h-[100px] flex-col gap-x-2 border-[1px] border-solid border-blue-400">
		<span>{shop.name}</span>
		<div>
			<select name="kind" on:change="{handleSelectFruit}">
				<option value="">선택! 과일</option>
				<option value="mango">망고</option>
				<option value="lychee">리치</option>
				<option value="coconut">코코넛</option>
				<option value="melon">멜론</option>
			</select>
			<button>add</button>
			<button>delete</button>
		</div>
		{#each shop.products as fruit}
			<li class="flex border-[1px] border-solid border-pink-300">
				{fruit.emoji}
			</li>
		{/each}
	</ul>
{/each}
