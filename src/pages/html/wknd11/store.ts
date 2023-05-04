import { writable } from 'svelte/store';
import { Fruit, Fruits } from '../types2';

const createStore = () => {
	const store = writable<Fruits>([]);
	const result = {
		...store,
		add(fruit: Fruit) {
			store.update((prev: Fruits) => {
				return [...prev, fruit];
			});
		},
		delete(name: string) {
			store.update((prev: Fruits) => {
				const nextState = prev.filter((fruit) => {
					id !== fruit.id;
				});
				return nextState;
			});
		},
	};

	return result;
};

export const store1 = createStore();
