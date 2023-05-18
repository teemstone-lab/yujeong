<script lang="ts">
	import Body from './components/Body.svelte';
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';

	type Host = { hostName: string; cpu: number; isOn: boolean; hostId: number };

	let hostList: Host[] = [];

	// << !-- 워커 생성 -->
	const worker = new Worker(new URL('./wknd9_worker.ts', import.meta.url));

	// << !-- 워커 실행 요청-->
	worker.postMessage({ hostLength: 100, isOnAllTrue: true });

	// << !-- 워커 실행 결과 수신 -->
	worker.onmessage = (e) => {
		hostList = e.data;
	};

	console.log('최초빈배열', hostList);

	// << !-- random Interval -->
	// const randomSeconds = (min: number, max: number) => {
	// 	return Math.floor(Math.random() * (max - min + 1)) + min;
	// };

	// const randomSetTimeOut = () => {
	// 	setTimeout(() => {
	// 		worker.postMessage({ hostLength: 100, isOnAllTrue: false });
	// 		randomSetTimeOut();
	// 	}, randomSeconds(1000, 5000));
	// };

	// randomSetTimeOut();
</script>

<main>
	<div class="viewer">
		<!-- <head>, <body>, <footer> stack -->
		<Header />
		<!--  -->
		<Body hostList="{hostList}" />
		<!--  -->
		<Footer />
		<!--  -->
	</div>
</main>
