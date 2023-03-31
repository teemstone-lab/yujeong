import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
import { writable } from 'svelte/store';

export function lifecycle() {
	onMount(() => {
		console.log('Mounted!');
	});
	// 돔요소가 태어난 이후
	//

	onDestroy(() => {
		console.log('Before destroy!');
	});

	beforeUpdate(() => {
		console.log('Before update!');
	});

	afterUpdate(() => {
		console.log('After update!');
	});
}

export function delayRender(delay = 3000) {
	let render = writable(false); // render 는 쓰기 가능한 객체이고, 거기에는 false 가 기본값으로 할당됨
	onMount(() => {
		setTimeout(() => {
			// $render = ture; // 현재 환경은 순수한 JS 라서 자동구독($) 키워드 사용 불가
			console.log(render); // 스토어 객체가 기본적으로 가지고 있는 메서드 set, update, subscribe
			render.set(true); // 스토어에 있는 메서드 set 은 값을 할당하는 메서드임
		}, delay);
	});
	return render;
}
