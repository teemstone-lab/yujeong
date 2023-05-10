<script lang="ts">
	import type { Fruit } from '../types2';
	import FruitsStore from './practice_FruitsShop.svelte';
	import { createStore } from './practice_store';
	const store1 = createStore();
	const store2 = createStore();
	const store3 = createStore();
	const store4 = createStore();

	const stores = [store1, store2, store3, store4];
	let currentSelectItem: Fruit;
	let dragStoreIndex: number;
	let dropStoreIndex: number;
</script>

<div class="flex flex-col gap-y-8">
	<div class="flex max-h-96 min-h-[300px] flex-row flex-wrap ">
		{#each stores as store, storeIndex}
			{#if !(storeIndex && storeIndex === stores.length - 1)}
				<div
					class="flex w-1/3 justify-center rounded border-2 border-solid border-blue-500/50 bg-stone-100 hover:bg-stone-200"
					><FruitsStore
						stores="{stores}"
						store="{store}"
						storeIndex="{storeIndex}"
						bind:dragStoreIndex="{dragStoreIndex}"
						bind:dropStoreIndex="{dropStoreIndex}"
						bind:currentSelectItem="{currentSelectItem}"
					/></div
				>
			{:else}
				<div class="flex max-h-96 min-h-[300px] w-full">
					<div
						class="flex w-full justify-center rounded border-2 border-double border-rose-300/50 bg-orange-100 hover:bg-orange-200"
						><FruitsStore
							stores="{stores}"
							store="{stores[3]}"
							storeIndex="{storeIndex}"
							bind:dragStoreIndex="{dragStoreIndex}"
							bind:dropStoreIndex="{dropStoreIndex}"
							bind:currentSelectItem="{currentSelectItem}"
						/></div
					>
					{storeIndex}
				</div>
			{/if}
		{/each}
	</div>
</div>
