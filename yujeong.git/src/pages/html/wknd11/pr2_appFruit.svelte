<script lang="ts">
	import { Stores, createFruit, emojis, getFruitEmoji } from './pr2_store_fr';
	import { writable } from 'svelte/store';
	import { FruitShops, Shop, Fruits, Fruit } from './pr2_type';
	import FruitsShop from '../components/pr2_Fruit/FruitsShop.svelte';
</script>

<FruitsShop />
