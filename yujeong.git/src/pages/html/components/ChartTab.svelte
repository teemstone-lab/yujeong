<script lang="ts">
	type Host = { hostName: string; cpu: number; isOn: boolean; hostId: number };
	export let hostList: Host[];
</script>

<div class="chartTab h-[693px] overflow-auto">
	<ul class="flex w-full flex-col gap-4">
		{#each hostList as item (item.hostId)}
			<!-- {console.log(index)} -->

			<li class=" border-light-200 flex w-full  gap-5 border-[1px] border-solid text-white">
				<div>hostname: {item.hostName}</div>
				<div
					>cpu: {item.cpu}
					<div class="h4 border[1px] border-light-50 w-full border">
						<div
							style="{`width:${String(item.cpu)}%`}"
							class="{` h-4 bg-yellow-400 transition-all duration-500`}"></div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
