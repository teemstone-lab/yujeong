<script lang="ts">
	import type { HostList } from './2m-types';
	import { onMount } from 'svelte';
	import ChartWindows_2m from './ChartWindows-2m.svelte';

	//1. 로직에서 사용할 변수 정의
	let hostList: HostList = [];
	let osInfo = [];

	//2. 워커 생성
	const worker = new Worker(new URL('./2m-worker', import.meta.url));

	//3. 워커 실행 요청1 : hostList
	//	onMount 후, 워커 즉시 실행
	onMount(() => {
		worker.postMessage('hostList');
	});

	//4. 워커 실행1 결과 수신
	//	워커로부터 받은 데이터의 이름이 hostList 라면, 변수 hostList에 저장하고, 워커에 다시 osInfo 데이터 요청하는 postMessage 보낼 것
	// 	워커로부터 받은 데이터의 이름이 osInfo 라면, 변수 osInfo 에 저장
	worker.onmessage = (e) => {
		if (e.data.dataName === 'hostList') {
			hostList = e.data.data;
			worker.postMessage('osInfo');
			console.log('메인스레드 호스트리스트', hostList);
		}
		if (e.data.dataName === 'osInfo') {
			osInfo = e.data.data;
		}
	};

	//5. 필요한 데이터 수신이 완료 → 화면에 보여줄 host 골라내기
	// hostList 에 isVisible 속성 추가 함수
	// mock data에서 default 속성으로 지정하지 않는 이유: 화면 출력 여부는 FE 한테만 필요한 거라서
	// 워커에서 받아온 hostList 배열을 매개변수로 받을 것
	// 매개변수로 받은 배열에 isVisibe 프로퍼티를 추가
	// isVisible 프로퍼티의 초기값은 false 이고, true 일 경우에만 화면에 나타나게 할 것
	// 속성이 추가된 hostList 를 업데이트
	function hostInitialize2(hostList: HostList) {
		hostList.forEach((host, i) => {
			if (i < 4) {
				host.isVisible = true;
			} else {
				host.isVisible = false;
			}
		});
		hostList = hostList;
	}

	//6. 렌더 조건이 충족되었을 때에만 html 출력하게 만들기
	// 데이터가 준비가 안되어 있는 상태에서 html 이 읽히면 err 나니까
	// 렌더 조건을 담고있는 변수 생성.
	// 렌더 조건은 hostList 와 osInfo 가 새로운 값을 가질 때마다 갱신되어야 함
	// $:{} 블록문은, 해당 블록 내의 변경을 감지하고 자동으로 업데이트
	let isRenderReady: Boolean;
	$: {
		isRenderReady = hostList && osInfo;
	}
</script>

<!-- 7. 1번 host ~ 4번 host 까지만 화면에 출력할 것  -->
<!--  -->
<div>
	{#if isRenderReady}
		{#each [0, 1, 2, 3] as index, i (i)}
			{hostList}
		{/each}
	{/if}
</div>

<div>
	<ChartWindows_2m hostList="{hostList}" />
</div>
