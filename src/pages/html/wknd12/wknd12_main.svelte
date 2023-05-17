<style>
	.graph {
		width: 500px;
		height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.circle {
		width: 400px;
		height: 400px;
		position: relative;
		overflow: hidden;
		border: 7px solid #464343;
		border-radius: 100%;
		background: linear-gradient(#3c5aff, #52f2fd);
		transform: translate3d(0, 0, 0);
	}

	.wave-one {
		width: 600px;
		height: 600px;
		position: absolute;
		top: -65%;
		left: -30%;
		border-radius: 45%;
		background: rgba(3, 169, 244, 0.8);
		animation: move 3s infinite linear;
	}

	.wave-two {
		width: 650px;
		height: 650px;
		position: absolute;
		top: -90%;
		left: -30%;
		border-radius: 45%;
		background: rgba(34, 79, 242, 0.8);
		animation: move 5s infinite linear;
	}

	.wave-three {
		width: 650px;
		height: 650px;
		position: absolute;
		top: -100%;
		left: -30%;
		border-radius: 45%;
		background: #1d074b;
		border: 6px solid rgba(131, 119, 152, 0.7);
		animation: move 7s infinite linear;
	}

	.wave-four {
		width: 650px;
		height: 650px;
		position: absolute;
		top: -100%;
		left: -30%;
		border-radius: 46%;
		background: linear-gradient(rgba(252, 251, 232, 0.1) 10%, transparent);
		animation: move 7s infinite linear;
	}

	@keyframes move {
		100% {
			transform: rotate(360deg);
		}
	}

	/* moon css & animation */
	.fa-moon {
		position: absolute;
		top: 19%;
		left: 33%;
		font-size: 130px;
		color: rgba(255, 255, 255, 0.8);
		animation: moon-rotation 4s infinite linear;
	}

	.blur {
		filter: blur(10px);
		-webkit-filter: blur(10px);
	}

	@keyframes moon-rotation {
		0%,
		100% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(-20deg);
		}
	}

	/* star css & animation */
	.fa-asterisk {
		position: absolute;
		font-size: 13px;
	}

	.star1 {
		top: 70px;
		left: 90px;
		animation: star-one 1.2s infinite;
	}

	.star2 {
		top: 50px;
		right: 110px;
		animation: star-two 1.7s infinite;
	}

	.star3 {
		top: 180px;
		left: 45px;
		animation: star-three 1.5s infinite;
	}

	.star4 {
		top: 120px;
		right: 40px;
		font-size: 5px;
		animation: star-five 1.9s infinite;
	}

	.star5 {
		top: 200px;
		right: 90px;
		font-size: 5px;
		animation: star-five 2s infinite;
	}

	@keyframes star-one {
		0%,
		100% {
			transform: scale(0);
			opacity: 0;
		}
		50% {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes star-two {
		0%,
		100% {
			transform: scale(0);
			opacity: 0;
		}
		50% {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes star-three {
		0%,
		100% {
			transform: scale(0);
			opacity: 0;
		}
		50% {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes star-four {
		0%,
		100% {
			transform: scale(0);
			opacity: 0;
		}
		50% {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes star-five {
		0%,
		100% {
			transform: scale(0);
			opacity: 0;
		}
		50% {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>

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
		// 반응성 구문
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

	//cpu, memory 에 따라 반응하는 바차트
	function calculateCpuBarH(cpu: number) {
		const maxCpu = 100;
		const maxHeight = 300;
		return (cpu / maxCpu) * maxHeight;
	}

	function calculateMemBarH(memory) {
		const maxMemory = 100;
		const maxHeight = 300;
		return (memory / maxMemory) * maxHeight;
	}
</script>

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
				<!-- cpu, memory 값 따라 바뀌는 바차트 그리는 부분 -->
				<div class="flex w-[30px] bg-blue-500" style="height: {calculateCpuBarH(os.cpu)}px;"
				></div>
				<div
					class="flex w-[30px] bg-red-500"
					style="height: {calculateMemBarH(os.memory)}px;"></div>
			</ul>
		{/each}
	</ul>
</div>

<Circle />
