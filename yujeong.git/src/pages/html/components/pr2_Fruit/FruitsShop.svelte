<script lang="ts">
	import { Stores, createFruit } from '../../wknd11/pr2_store_fr';
	import type { Fruit, Shop } from '../../wknd11/pr2_type';
	import FruitProducts from './FruitProducts.svelte';

	let currentSelectFruit: Fruit;
	let selectboxFruit = '';
	type SelectboxFruit = 'Peach' | 'Melon' | 'Lemon' | 'Cherry' | 'Coconut' | 'Pineapple' | '';

	export function setCurrentSelectFruit(fruit: Fruit) {
		currentSelectFruit = fruit;
		console.log('DRAG NOW!', currentSelectFruit);
	}

	function handleSelectFruit(
		e: Event & {
			currentTarget: EventTarget & HTMLSelectElement;
		},
	) {
		selectboxFruit = e.currentTarget.value;
		console.log('SELECT:', selectboxFruit);
	}

	// id받기, shop찾아가기, fruit 넣기

	function addProduct(shopId: string, product: Fruit) {
		const shopIndex = $Stores.findIndex((shop) => shop.id === shopId);

		if (shopIndex === 0 || shopIndex) {
			Stores.update((prev) => {
				const target = prev[shopIndex];
				prev[shopIndex].products.push(product);
				return prev;
			});
		}
	}

	function addClick(shopIndex: number) {
		if (!selectboxFruit) {
			console.log('과일을 선택해주세요!');
			return;
		}

		const willAddFruit = createFruit(selectboxFruit);

		if (willAddFruit) {
			const shopId = $Stores[shopIndex].id;
			addProduct(shopId, willAddFruit);
		}
	}
	// console.log('머지', $Stores[0].products);

	let dragEndShopIndex: number;

	function drop(dropShop: Shop, currentSelectFruit: Fruit, shopIndex: number) {
		Stores.update((prev) => {
			const targetId = currentSelectFruit.id;
			prev[shopIndex].products = prev[shopIndex].products.filter(
				(fruit) => fruit.id !== targetId,
			);
			dropShop.products.push(currentSelectFruit);
			return prev;
		});
	}
</script>

<ul class=" flex flex-1 flex-wrap">
	{#each $Stores as shop, shopIndex (shop)}
		<ul
			class="flex h-screen w-1/4 flex-col justify-start gap-y-1 rounded border-2 border-solid border-blue-500/50 bg-stone-100 hover:bg-stone-200"
			on:dragover="{() => {
				dragEndShopIndex = shopIndex;
			}}"
			on:dragend="{(event) => {
				const dropShop = $Stores[dragEndShopIndex];
				drop(dropShop, currentSelectFruit, shopIndex);
				console.log('DROPPED STORE:', dropShop);
				// event.currentTarget.classList.add('hover:bg-orange-200');
			}}"
		>
			<span class="flex pb-1 pl-4 text-xl italic subpixel-antialiased">{shop.name}</span>
			<div class="flex justify-center gap-x-2">
				<select class="flex rounded" name="kind" on:change="{handleSelectFruit}">
					<option value="">선택! 과일</option>
					<option value="Peach">복숭아</option>
					<option value="Melon">멜론</option>
					<option value="Lemon">레몬</option>
					<option value="Cherry">체리</option>
					<option value="Coconut">코코넛</option>
					<option value="Pineapple">파인애플</option>
				</select>
				<button
					class="flex w-[50px] justify-center rounded-xl bg-sky-300 hover:bg-sky-400"
					on:click="{() => {
						addClick(shopIndex);
					}}">add</button
				>
			</div>
			<FruitProducts
				products="{shop.products}"
				shopIndex="{shopIndex}"
				currentSelectFruit="{currentSelectFruit}"
				setCurrentSelectFruit="{setCurrentSelectFruit}"
			/>
			<!-- {#each shop.products as fruit}
			<li>{fruit.emoji}</li>
		{/each} -->
		</ul>
	{/each}
</ul>
