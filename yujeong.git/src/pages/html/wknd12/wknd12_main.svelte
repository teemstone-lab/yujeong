<script lang="ts">
	import { onMount } from 'svelte';
	import type { HostList, OsInfoList } from './types';
	import GaugeWindow from './Gauge_window.svelte';
	import { writable } from 'svelte/store';
	import { osInfoStore } from './store';
	import { each } from 'svelte/internal';

	let hostList: HostList = [];

	// 워커 생성
	const worker = new Worker(new URL('./wknd12_worker', import.meta.url));

	// 워커 실행 요청
	onMount(() => {
		worker.postMessage('hostList');
	});

	//워커 실행 결과 수신
	worker.onmessage = (e) => {
		if (e.data.dataName === 'hostList') {
			hostList = e.data.result;
			hostInitialize(hostList); //호스트 리스트에 isVisible 프로퍼티 추가
			worker.postMessage('osInfo');
		}
		if (e.data.dataName === 'osInfo') {
			$osInfoStore = e.data.result;
		}
	};

	//호스트 리스트의 0 ~ 3 index에  isVisible을 추가하는 함수
	function hostInitialize(hostList: HostList) {
		console.log('호스트리스트', hostList);

		hostList.forEach((host, i) => {
			if (i < 4) {
				host.isVisible = true;
			} else {
				host.isVisible = false;
			} //host 객체에 isVisible 프로퍼티가 없으면 생성하고 해당 값 할당함
		});
		hostList = hostList;
	}

	let isRenderReady: boolean; //

	$: {
		isRenderReady = hostList && $osInfoStore.length > 0;
	}
</script>

<!-- 렌더 조건이 충족되었을 때에만 화면에 그리게  -->
<div class="flex flex-wrap gap-[10px] ">
	{#if isRenderReady}
		{#each [0, 1, 2, 3] as index, i (i)}
			<GaugeWindow initialIndex="{index}" hostList="{hostList}" />
		{/each}
	{/if}
</div>
