<script lang="ts">
	import type { Fruit, Fruits } from '../../wknd11/pr2_type';

	export let products: Fruits;
	export let shopIndex: number; //

	export let currentSelectFruit: Fruit;
	export let setCurrentSelectFruit: (fruit: Fruit) => void; //props 로 내려준다는 거는  	setCurrentSelectFruit="{setCurrentSelectFruit}"  한다는 것

	let selectShopIndex;

	function dragStart(
		event: DragEvent & {
			currentTarget: EventTarget & HTMLLIElement;
		},
		fruit: Fruit,
	) {
		currentSelectFruit = fruit;
		setCurrentSelectFruit(currentSelectFruit); //셀렉트박스에서 선택한 과일을 '드래그 아이템' 으로 선언해주는 것은 FruitsShop 에서 해야함. 왜? 나머지 가게들이 그 사실을 알아야 하니까..
		if (event.dataTransfer) event.dataTransfer.setData('text/plain', JSON.stringify(fruit));
	}
</script>

<ul class="flex flex-wrap justify-center pt-2">
	{#each products as fruit}
		<li
			class="flex border-[1px] border-solid border-pink-300 p-1 text-2xl hover:bg-sky-400"
			draggable="true"
			on:dragstart="{(e) => {
				dragStart(e, fruit);
				selectShopIndex = shopIndex; //dragStart 할 때의 시점을 받아온다. 이 때, shopIndex를 ul을 그려주는 과일가게 리스트에서 props 로 받아와야하기때문에 export let 처리를 해줘야한다.
				console.log('DRAG START STORE INDEX:', selectShopIndex);
			}}"
		>
			{fruit.emoji}
		</li>
	{/each}
</ul>

<!-- {#each shop.products as fruit}
        <li>{fruit.emoji}</li>
	{/each}  -->
