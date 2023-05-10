import { Fruit } from './../types2';
import { writable } from 'svelte/store';
import { v4 as uuid } from 'uuid';
type Fruit = { name: string; uuid: string; icon: string };
type FStore = { name: string; products: Fruit[] };
type FStores = FStore[];
export let fruitsstore = writable<FStores>([
	{
		name: 'TeemStone',
		products: [
			{ name: 'Peach', uuid: uuid(), icon: '🍑' },
			{ name: 'Peach', uuid: uuid(), icon: '🍑' },
			{ name: 'Peach', uuid: uuid(), icon: '🍑' },
			{ name: 'Melon', uuid: uuid(), icon: '🍈' },
		],
	},

	{
		name: 'onTune',
		products: [
			{ name: 'Lemon', uuid: uuid(), icon: '🍋' },
			{ name: 'Cherry', uuid: uuid(), icon: '🍒' },
		],
	},

	{
		name: 'yujeong',
		products: [
			{ name: 'Coconut', uuid: uuid(), icon: '🥥' },
			{ name: 'Pineapple', uuid: uuid(), icon: '🍍' },
		],
	},
]);

// export let fruits = [
// 	{ name: 'Peach', uuid: 1, icon: '🍑' },
// 	{ name: 'Melon', uuid: 2, icon: '🍈' },
// 	{ name: 'Lemon', uuid: 3, icon: '🍋' },
// 	{ name: 'Cherry', uuid: 4, icon: '🍒' },
// 	{ name: 'Coconut', uuid: 5, icon: '🥥' },
// 	{ name: 'Pineapple', uuid: 6, icon: '🍍' },
// 	{ name: 'Banana', uuid: 7, icon: '🍌' },
// 	{ name: 'Strawberry', uuid: 8, icon: '🍓' },
// ];

// export let fruitsShop = writable([
// 	{ name: 'TeemStone', id: 1, productId: [1, 4] },
// 	{ name: 'onTune', id: 2, productId: [2, 3, 5] },
// 	{ name: 'Yujeong', id: 3, productId: [6, 7, 8] },
// ]);

export let dragi: any;
export let dropi: any;

export function dragStart(event: any, fstoreIndex: number, uuid: string) {
	dragi = event.target;
	console.log(dragi);
	const dragItemData = { fstoreIndex, uuid };
	event.dataTransfer.setData('text/plain', JSON.stringify(dragItemData));
}

export function drop(event: any, fstoreIndex: number) {
	dropi = event.target;
	console.log(dropi);
	event.preventDefault();
	const json = event.dataTransfer.getData('text/plain');
	const dragItemData = JSON.parse(json);

	fruitsstore.update((fruitsstoreArray) => {
        // 1. 기존에 Drag가 시작되었던 Store 체크
		const beStore = fruitsstoreArray[dragItemData.fstoreIndex];

        // 2. Drop 된 Store 체크
		const afStore = fruitsstoreArray[fstoreIndex];

        // 3. 1번의 Store에서 DragStart 된 Item 찾고, 삭제 진행
		const targetIndex = beStore.products.findIndex(
			(fruit) => fruit.uuid === dragItemData.uuid,
		);
		const dragItem = beStore.products.splice(targetIndex, 1)[0];
		// console.log(dragItemData);
		// console.log(dragItemData.uuid);
		// console.log(targetIndex);

        // 4. 3번에서 삭제한 Item을 2번 대상에 push
		afStore.products.push(dragItem);
		// console.log(dragItemData.fruitIndex);

		return fruitsstoreArray;
	});
}
