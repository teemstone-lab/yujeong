<script lang="ts">
	type Host = { hostName: string; cpu: number; isOn: boolean; hostId: number };
	export let hostList: Host[];
</script>

<div class="hostTree">
	<ul>
		<!-- {console.log('hostList.length', hostList.length)} -->
		{#each hostList as item (item.hostId)}
			<li class=" flex items-center gap-2">
				<div class="flex items-center">{item.hostName}</div>
				<div
					class="{`flex h-4 w-4 rounded-full transition-all duration-700 ${
						item.isOn ? 'bg-blue-700' : 'bg-slate-100'
					}`}"
				>
				</div>{item.isOn ? 'on' : 'off'}</li
			>
		{/each}
	</ul>
</div>
