<script lang="ts">
	import { Stores, createFruit } from '../../wknd11/pr2_store_fr';
	import { Fruit, Shop } from '../../wknd11/pr2_type';
	import FruitProducts from './FruitProducts.svelte';

	let willAddFruit: Fruit;
	let currentSelectFruit: Fruit;

	export function setCurrentSelectFruit(fruit: Fruit) {
		currentSelectFruit = fruit;
		console.log('완료,currentSelectItem', currentSelectFruit);
	}

	function handleSelectFruit(
		e: Event & {
			currentTarget: EventTarget & HTMLSelectElement;
		},
	) {
		const selectFruit = e.currentTarget.value as
			| 'Peach'
			| 'Melon'
			| 'Lemon'
			| 'Cherry'
			| 'Coconut'
			| 'Pineapple';
		willAddFruit = createFruit(selectFruit); //과일객체 가져오기
		console.log(selectFruit);
	}

	// id받아가, 샵 찾아가, 프루트 넣어가

	function addProduct(shopId: string, product: Fruit) {
		console.log(shopId); //
		const shopIndex = $Stores.findIndex((shop) => shop.id === shopId);
		console.log('shopIndex', shopIndex); //

		if (shopIndex === 0 || shopIndex) {
			Stores.update((prev) => {
				const target = prev[shopIndex];
				console.log('target', target); //
				prev[shopIndex].products.push(product);
				return prev;
			});
		}
		console.log($Stores); //
	}

	function addClick(shopIndex: number) {
		if (willAddFruit) {
			const shopId = $Stores[shopIndex].id;
			addProduct(shopId, willAddFruit);
		}
	}
	console.log($Stores[0].products);

	let dragItem: Fruit;
	let selectShopIndex: number;
	let endShopIndex: number;

	function drop(dropShop: Shop, currentSelectFruit: Fruit, shopIndex: number) {
		Stores.update((prev) => {
			const targetId = currentSelectFruit.id;
			console.log('targetID', targetId);
			console.log(shopIndex);
			prev[shopIndex].products = prev[shopIndex].products.filter(
				(fruit) => fruit.id !== targetId,
			);
			dropShop.products.push(currentSelectFruit);
			return prev;
		});
	}
</script>

{#each $Stores as shop, shopIndex (shop)}
	<ul
		class="flex flex-col gap-x-2 border-[1px] border-solid border-blue-400"
		on:dragover="{() => {
			endShopIndex = shopIndex;
			console.log(endShopIndex);
		}}"
		on:dragend="{() => {
			const dropShop = $Stores[endShopIndex];
			drop(dropShop, currentSelectFruit, shopIndex);
			console.log('여기', dropShop);
		}}"
	>
		<span>{shop.name}</span>
		<div>
			<select name="kind" on:change="{handleSelectFruit}">
				<option value="">선택! 과일</option>
				<option value="Peach">복숭아</option>
				<option value="Melon">멜론</option>
				<option value="Lemon">레몬</option>
				<option value="Cherry">체리</option>
				<option value="Coconut">코코넛</option>
				<option value="Pineapple">파인애플</option>
			</select>
			<button
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
