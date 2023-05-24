<script lang="ts">
	import Circle_2m from './Circle-2m.svelte';
	import type { HostList } from './2m-types';
	import { onMount } from 'svelte';
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
	// 선택된 리소스를 저장할 변수
	let selectedResource: Array<'cpu' | 'memory'> = ['cpu'];
	// cpu + memory 가 선택되면, 'cpu'랑 'memory' 값이 배열에 저장시키는 함수
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
	// 선택된 호스트의 index를 저장할 변수
	let selectedIndex;
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
	let initialIndex: number;
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
<div>
	<!-- 일단 resource 가 선택되고, osInfo 가 받아져 와있는 상태에 렌더링 -->
	{#if selectedResource}
		<Circle_2m />
	{/if}
</div>
