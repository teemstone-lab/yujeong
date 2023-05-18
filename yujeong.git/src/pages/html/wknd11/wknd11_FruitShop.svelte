<script lang="ts">
	import { Fruitsstore, Fstore } from './types';
	import { fruitsstore, dragStart, drop } from './wknd11_FruitShop_store';
</script>

{#each $fruitsstore as fstore, fstoreIndex (fstore)}
	<p>{fstore.name}</p>
	<ul
		class="flex h-[100px] gap-x-2 border-2 border-solid border-amber-700"
		on:drop="{(event) => drop(event, fstoreIndex)}"
		on:dragover|preventDefault="{() => false}"
	>
		{#each fstore.products as fruit, fruitIndex (fruit.uuid)}
			<li
				class="border-2 border-solid border-blue-300"
				draggable="{true}"
				on:dragstart="{(event) => dragStart(event, fstoreIndex, fruit.uuid)}"
			>
				{fruit.icon}
			</li>
		{/each}
	</ul>
{/each}
