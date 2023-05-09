import { writable } from 'svelte/store';
import { Fruit, Fruits } from '../types2';

export const createStore = () => {
	const store = writable<Fruits>([]);
	const result = {
		...store,
		add(fruit: Fruit) {
			store.update((prev: Fruits) => {
				return [...prev, fruit];
				const hasFruit = prev.find((item) => fruit.name === item.name);
				// if (hasFruit) prev;
				// return [...prev, fruit];
				return hasFruit ? prev : [...prev, fruit];
			});
		},
		delete(id: string) {
			store.update((prev: Fruits) => {
				const nextState = prev.filter((fruit) => id !== fruit.id);
				return nextState;
			});
		},
	};

	return result;
};

export const store1 = createStore();
