<script lang="ts">
	import type { HostList } from './2m-types';
	import { onMount } from 'svelte';

	//1. 로직에서 사용할 변수 정의
	let hostList: HostList = [];

	//2. 워커 생성
	const worker = new Worker(new URL('./2m-worker', import.meta.url));

	//3. 워커 실행 요청1 : hostList
	//	onMount 후, 워커 즉시 실행
	onMount(() => {
		worker.postMessage('hostList');
	});

	//4. 워커 실행1 결과 수신
	worker.onmessage = (e) => {
		if (e.data.dataName) {
		}
	};
</script>
