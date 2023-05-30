<script lang="ts">
	import type { HostList } from './2m-types';
	import { onMount, onDestroy } from 'svelte';
	import ChartWindows_2m from './ChartWindows-2m.svelte';
	import { osInfoStore } from './2m-store';

	//1. 로직에서 사용할 변수 정의
	let hostList: HostList = [];

	//2. 워커 생성
	const worker = new Worker(new URL('./2m-worker', import.meta.url));

	//3. 워커 실행 요청 : hostList
	onMount(() => {
		worker.postMessage('hostList');
	});

	//4. 워커 실행 요청 결과 수신
	worker.onmessage = (e) => {
		if (e.data.dataName === 'hostList') {
			hostList = e.data.data;
			worker.postMessage('osInfo');
			// console.log('워커 실행1 결과:', hostList);
		}
		if (e.data.dataName === 'osInfo') {
			$osInfoStore = e.data.data;
		}
	};

	//5. 렌더 조건 변수 활용
	let isRenderReady: Boolean;
	$: {
		isRenderReady = hostList && $osInfoStore.length > 0;
	}

	//6. 워커 즉시 종료
	onDestroy(() => {
		worker.terminate();
	});
</script>

<div class="w-[calc(50% - 5px)] flex flex-wrap justify-center gap-[10px]">
	{#if isRenderReady}
		{#each [0, 1, 2, 3] as index, i (i)}
			<ChartWindows_2m hostList="{hostList}" initialIndex="{index}" />
		{/each}
	{/if}
</div>
