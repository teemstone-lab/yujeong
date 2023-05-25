<script lang="ts">
	import Circle_2m from './Circle-2m.svelte';
	import type { HostList } from './2m-types';
	import { osInfoStore } from './2m-store';

	export let hostList: HostList;

	//1. Liquid Circle 컴포넌트 가져오기
	//2. 필요한 html 생성

	//3. 설정 아이콘 클릭으로 리소스 고르는 select-box 노출
	let resourceBoxVisible = false;

	function toggleResourceBox() {
		resourceBoxVisible = !resourceBoxVisible;
	}

	function keepResourceBoxVisible() {
		resourceBoxVisible = true;
	}

	//4. 리소스 select-box 에서 선택한 value 다루는 함수
	// 선택된 value 를 저장할 변수, 초기값은  'cpu' 가 들어간 배열
	let selectedResource: Array<'cpu' | 'memory'> = ['cpu'];
	// cpu + memory 가 선택되면, 'cpu'랑 'memory' 값을 배열에 저장시키는 함수
	// 그 외의 value 가 선택되면, 선택된 value 그대로 배열에 저장
	const selectResourceHandler = (
		e: Event & {
			currentTarget: EventTarget & HTMLSelectElement;
		},
	) => {
		let value = e.currentTarget.value as 'cpu' | 'memory' | 'cpuAndMemory';
		if (value === 'cpuAndMemory') {
			selectedResource = ['cpu', 'memory'];
		} else {
			selectedResource = [value];
		}
	};

	//5. 호스트 select-box 에서 선택한 host 다루는 함수
	// 선택된 호스트의 index를 저장할 변수, 초기값은 null
	let selectedIndex: number | null = null;
	// hostList 받아와서 each문으로 하나씩 그릴테니, 선택한 value랑 id랑 비교하는 함수
	function selectHostHandler2(
		e: Event & {
			currentTarget: EventTarget & HTMLSelectElement;
		},
	) {
		const selectedHostId = e.currentTarget.value;
		selectedIndex = hostList.findIndex((host) => {
			return host.id === selectedHostId;
		});
		console.log('selectedIndex', selectedIndex);
		console.log('selectedHostId 는?', selectedHostId);
	}

	//6. 선택된 value 들을 차트와 연결해주기 위한 html 작성하기
	// 최초 렌더링시 화면에 표시되는 호스트들의 index 저장하는 변수
	// 최초 렌더링시 [0, 1, 2, 3] 배열을 사용하여 4개의 차트만 출력
	// 해당 배열의 index 를 props로 받아와 initialIndex 로 활용
	export let initialIndex: number;
</script>

<div>
	<button on:click="{toggleResourceBox}">⚙</button>
</div>

<div>
	{#if resourceBoxVisible}
		<select
			id="resourceBox"
			on:change="{(e) => {
				keepResourceBoxVisible();
				selectResourceHandler(e);
			}}"
		>
			<option value="cpu">cpu</option>
			<option value="memory">memory</option>
			<option value="cpuAndMemory">cpu + memory</option>
		</select>
	{/if}
</div>

<div>
	<select on:change="{selectHostHandler2}">
		<!-- 최초 렌더링시 host1 의 데이터로 차트 그리게 함 -->
		<!-- <option value="{hostList[0].id}">고르세요</option> -->
		{#each hostList as host}
			<option value="{host.id}">{host.name}</option>
		{/each}
	</select>
</div>

<!-- 6. 선택된 value 들을 차트와 연결해주기 위한 html 작성하기 -->
<div class="flex w-full justify-center">
	<!-- 일단 resource 가 선택되고, osInfo 가 받아져 와있는 상태에서 렌더링 -->
	<!-- osInfo 의 몇 번째 객체를 렌더링 할 것인지 다중 삼항연산자로 판단 -->
	{#if selectedResource && $osInfoStore[selectedIndex === 0 ? '0' : selectedIndex !== null ? selectedIndex : initialIndex]}
		{#each selectedResource as resource}
			<Circle_2m
				value="{$osInfoStore[
					selectedIndex === 0
						? '0'
						: selectedIndex !== null
						? selectedIndex
						: initialIndex
				][resource]}"
				text="{String(
					$osInfoStore[
						selectedIndex === 0
							? '0'
							: selectedIndex !== null
							? selectedIndex
							: initialIndex
					][resource],
				)}"
				name="{resource}"
			/>
		{/each}
	{/if}
</div>
