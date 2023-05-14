<script lang="ts">
	import { Stores, createFruit, emojis, getFruitEmoji } from './pr2_store_fr';
	import { writable } from 'svelte/store';
	import { FruitShops, Shop, Fruits, Fruit } from './pr2_type';
	import FruitsShop from '../components/pr2_Fruit/FruitsShop.svelte';

	//* app.svelte 에서  드래그 이벤트 함수 dragStart(), drop() 있어야 함
	//dragStart()=>{
	// currentSelectItem = 드래그 한 과일
	// selectShopIndex = 드래그 시작된 위치
	// }
	//drop()=>{
	// 드래그 시작된 위치 정의
	// 드랍된 위치 정의
	// 드래그 시작된 위치에서  currentSelectItem 찾기 = find
	// 드래그 시작된 위치에서 currentSelectItem 삭제 = splice
	// 드랍할 과일 = 삭제한 과일
	// 드랍된 위치에서  드랍할 과일 추가 = push
	// }

	//* 단일 과일가게 컴포넌트 안에  selectShopIndex: 드래그 시작된 위치, endShopIndex: 드랍된 위치, currentSelectItem: 현재선택된아이템을 기억하는 변수 있어야 함.
	//* 가게마다 상황 공유되어야 하니까 전역에서 선언 후 props로 받아오고 바인딩 해줘야 함.
	//* <ul = 과일가게> 에 drop, dragover 이벤트 할당
	//* <li = 과일> 에 draggable, dragstart 이벤트 할당
</script>

<FruitsShop />
