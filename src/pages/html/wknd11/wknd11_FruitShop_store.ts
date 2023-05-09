import { writable } from 'svelte/store';

export let fruitsstore = writable([
	{ name: 'TeemStone', products: ['Mango', 'Coconut'] },

	{ name: 'onTune', products: ['Lychee', 'Lemon'] },

	{ name: 'yujeong', products: ['Guava', 'Rambutan'] },
]);

export let fruits = [
	{ name: 'Peach', uuid: 1, icon: '🍑' },
	{ name: 'Melon', uuid: 2, icon: '🍈' },
	{ name: 'Lemon', uuid: 3, icon: '🍋' },
	{ name: 'Cherry', uuid: 4, icon: '🍒' },
	{ name: 'Coconut', uuid: 5, icon: '🥥' },
	{ name: 'Pineapple', uuid: 6, icon: '🍍' },
	{ name: 'Banana', uuid: 7, icon: '🍌' },
	{ name: 'Strawberry', uuid: 8, icon: '🍓' },
];

export let fruitsShop = [
	{ name: 'TeemStone', id: 1, productId: [1, 4] },
	{ name: 'onTune', id: 2, productId: [2, 3, 5] },
	{ name: 'Yujeong', id: 3, productId: [6, 7, 8] },
];

export let dragi: any;
export let dropi: any;

export function dragStart(event: any, fstoreIndex: number, fruitIndex: number) {
	dragi = event.target;
	console.log(dragi);
	const dragItemData = { fstoreIndex, fruitIndex };
	event.dataTransfer.setData('text/plain', JSON.stringify(dragItemData));
}

export function drop(event: any, fstoreIndex: number) {
	dropi = event.target;
	console.log(dropi);
	event.preventDefault();
	const json = event.dataTransfer.getData('text/plain');
	const dragItemData = JSON.parse(json);

	fruitsstore.update((fruitsstoreArray) => {
		const dragItem = fruitsstoreArray[dragItemData.fstoreIndex].products.splice(
			dragItemData.fruitIndex,
			1,
		)[0];
		console.log(dragItemData.fruitIndex);
		fruitsstoreArray[fstoreIndex].products.splice(dragItemData.fruitIndex, 0, dragItem);
		return fruitsstoreArray;
	});
}
