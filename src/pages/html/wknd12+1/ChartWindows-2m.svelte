<script lang="ts">
	import Circle_2m from './Circle-2m.svelte';
	import type { HostList } from './2m-types';
	import { osInfoStore } from './2m-store';

	export let hostList: HostList;

	// 토글 버튼으로 자원 선택 select-box 노출
	let resourceBoxVisible = false;

	function toggleResourceBox() {
		resourceBoxVisible = !resourceBoxVisible;
	}

	function keepResourceBoxVisible() {
		resourceBoxVisible = true;
	}

	// 자원 선택 select-box 에서 선택한 option-value 다루는 함수
	let selectedResource: Array<'cpu' | 'memory'> = ['cpu'];

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

	// 호스트 선택 select-box 에서 선택한 host 다루는 함수
	let selectedIndex: number | null = null;

	function selectHostHandler2(
		e: Event & {
			currentTarget: EventTarget & HTMLSelectElement;
		},
	) {
		const selectedHostId = e.currentTarget.value;
		selectedIndex = hostList.findIndex((host) => {
			return host.id === selectedHostId;
		});
		// console.log('selectedIndex', selectedIndex);
		// console.log('selectedHostId 는?', selectedHostId);
	}

	// 최초 렌더링시 [0, 1, 2, 3] 배열을 사용하여 4개의 차트만 출력
	// 해당 배열의 index 를 props로 받아와 initialIndex 로 활용
	export let initialIndex: number;
</script>

<div
	class="border-light-100 flex w-[520px] shrink flex-col flex-wrap rounded border-[4px] border-solid hover:bg-stone-100"
>
	<div class="flex h-[50px] items-center justify-between px-4">
		<!-- 호스트 선택 박스 -->
		<div class="flex">
			<select on:change="{selectHostHandler2}" class="rounded text-lg">
				{#each hostList as host, i}
					<option value="{host.id}" selected="{i === initialIndex}">{host.name}</option>
				{/each}
			</select>
		</div>

		<div class="flex">
			<!-- 리소스 선택 박스 -->
			<div>
				{#if resourceBoxVisible}
					<select
						id="resourceBox"
						on:change="{(e) => {
							keepResourceBoxVisible();
							selectResourceHandler(e);
						}}"
						class="rounded text-lg"
					>
						<option value="cpu">cpu</option>
						<option value="memory">memory</option>
						<option value="cpuAndMemory">cpu + memory</option>
					</select>
				{/if}
			</div>
			<!--토글 버튼 -->
			<button on:click="{toggleResourceBox}">⚙</button>
		</div>
	</div>

	<div class="flex justify-center gap-x-2">
		{#if selectedResource && $osInfoStore[selectedIndex !== null ? selectedIndex : initialIndex]}
			{#each selectedResource as resource}
				<div class="flex">
					<Circle_2m
						value="{$osInfoStore[selectedIndex !== null ? selectedIndex : initialIndex][
							resource
						]}"
						text="{String(
							$osInfoStore[selectedIndex !== null ? selectedIndex : initialIndex][
								resource
							],
						)}"
						name="{resource}"
					/>
				</div>
			{/each}
		{/if}
	</div>
</div>
