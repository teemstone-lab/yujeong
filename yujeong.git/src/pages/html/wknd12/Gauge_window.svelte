<script lang="ts">
	import Circle from './Circle.svelte';
	import type { HostList, OsInfo } from './types';
	import { osInfoStore } from './store';

	export let hostList: HostList;
	export let initialIndex: number;

	let selectedIndex: number | null = null;
	let selectedValue: Array<'cpu' | 'memory'> = ['cpu']; //select box 초기값 지정

	//select box 에서 선택한 value 분기 처리. cpuAndMemory 일 때, cpu, memory 둘 다 받아오게
	const selectInfoHandler = (
		e: Event & {
			currentTarget: EventTarget & HTMLSelectElement;
		},
	) => {
		let value = e.currentTarget.value as 'cpu' | 'memory' | 'cpuAndMemory';
		if (value === 'cpuAndMemory') {
			selectedValue = ['cpu', 'memory'];
		} else {
			selectedValue = [value]; //변수 value의 값을 배열로
		}
	};

	function selectHostHandler(
		e: Event & {
			currentTarget: EventTarget & HTMLSelectElement;
		},
	) {
		const selectedHostId = e.currentTarget.value;
		console.log('selectedHostId', selectedHostId);

		selectedIndex = hostList.findIndex((item) => {
			return item.id === selectedHostId;
		});
		console.log(selectedIndex);
		// getCurrentWindowHostIndex();
	}
</script>

<div class="border-light-100 flex w-[calc(50%-5px)] flex-wrap border-[2px] border-solid">
	<div class="flex w-full">
		<p>{selectedIndex === 0 ? '0' : selectedIndex !== null ? selectedIndex : initialIndex}</p>
		<button>⚙</button>

		<select on:change="{selectInfoHandler}" class="h-[20px] w-[100px]" id="selectBox">
			<option value="cpu">cpu</option>
			<option value="memory">memory</option>
			<option value="cpuAndMemory">cpu + memory</option>
		</select>
	</div>

	<div class="flex w-full justify-center">
		{#if selectedValue && $osInfoStore[selectedIndex === 0 ? '0' : selectedIndex !== null ? selectedIndex : initialIndex]}
			{#each selectedValue as v}
				<div class="flex w-[50%]">
					<Circle
						value="{$osInfoStore[
							selectedIndex === 0
								? '0'
								: selectedIndex !== null
								? selectedIndex
								: initialIndex
						][v]}"
						text="{String(
							$osInfoStore[
								selectedIndex === 0
									? '0'
									: selectedIndex !== null
									? selectedIndex
									: initialIndex
							][v],
						)}"
						name="{v}"
					/>
					<!-- osInfo[v] : osInfo 객체에 v 라는 프로퍼티key 에 접근 = > ex) osInfo 의 cpu 의 값 -->
				</div>
			{/each}
		{/if}
	</div>
	<select on:change="{selectHostHandler}" class="h-[20px] w-[100px]" id="selectBox">
		<option value="{hostList[0].id}">select</option>
		{#each hostList as host}
			<option value="{host.id}">{host.name}</option>
		{/each}
	</select>
</div>
