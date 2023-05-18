<script lang="ts">
	import { onMount } from 'svelte';
	import Circle from './Circle.svelte';

	let hostList = [];
	let osInfo = [];

	// 워커 생성
	const worker = new Worker(new URL('./wknd12_worker', import.meta.url));

	// 워커 실행 요청
	onMount(() => {
		worker.postMessage('hostList');
	});

	//워커 실행 결과 수신
	worker.onmessage = (e) => {
		if (e.data.dataName === 'hostList') {
			console.log('onmessage', e);
			hostList = e.data.result;
			worker.postMessage('osInfo');
		}
		if (e.data.dataName === 'osInfo') {
			osInfo = e.data.result;
			console.log('data', osInfo);
		}
	};

	//만약 선택한 값이 cpu 라면 calculateCpuBarH 실행 : ny

	//cpu 값에 따른 높이 구하기
	let cpuBarH = 0;
	function calculateCpuBarH(cpu: number) {
		const maxCpu = 100;
		const maxHeight = 300;
		cpuBarH = (cpu / maxCpu) * maxHeight;
		updateCircleTop();
		return cpuBarH;
	}

	//cpu 값에 따라 Circle top 바꾸기
	function updateCircleTop() {
		const circleOuter = document.querySelector('.circle.outer');
		circleOuter.style.top = `${cpuBarH}px`;
	}

	//memory 값에 따른 높이 구하기
	function calculateMemBarH(memory: number) {
		const maxMemory = 100;
		const maxHeight = 300;
		return (memory / maxMemory) * maxHeight;
	}
</script>

<Circle />
<div class="flex gap-x-2 border-[1px] border-solid border-sky-900">
	<ul class="border-[2px] border-solid border-red-800">
		<span>Host List</span>
		{#each hostList as host}
			<ul>
				<div class="border-[1px] border-solid border-yellow-400">host ID: {host.id}</div>
			</ul>
		{/each}
	</ul>

	<ul class="flex flex-col border-[1px] border-solid border-green-700">
		<span>OS Info</span>
		{#each osInfo as os}
			<ul class="flex gap-x-2">
				<div class="flex flex-row">name: {os.name}</div>
				<div class="flex flex-row">cpu: {os.cpu}</div>
				<div class="flex flex-row">memory: {os.memory}</div>
				<div
					class="flex  w-[30px] bg-blue-500"
					style="height: {calculateCpuBarH(os.cpu)}px;"></div>
			</ul>
		{/each}
	</ul>
</div>
