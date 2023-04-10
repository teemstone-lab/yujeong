<script lang="ts">
	import ChartTab from './ChartTab.svelte';
	import HostTree from './HostTree.svelte';

	type Host = { hostName: string; cpu: number; isOn: boolean; hostId: number };
	export let hostList: Host[];
</script>

<div class="body">
	<div class="sideTab">
		<div class="hostTab">
			<ul>
				<li>Host</li>
				<li>Groups</li>
				<li>VMWares</li>
				<li>VMWare Groups</li>
				<li>Xens</li>
			</ul>
		</div>
		<div class="treeIcon">
			<ul>
				<li class="btnBundle2">
					<ul>
						<li class="treeCon">
							<button class="tree1"></button>
						</li>
						<li class="treeCon">
							<button class="tree2"></button>
						</li>
					</ul>
				</li>

				<li class="btnBundle2">
					<ul>
						<li class="treeCon">
							<button class="tree3"></button>
						</li>
						<li class="treeCon">
							<button class="tree4"></button>
						</li>
						<li class="treeCon">
							<button class="tree5"></button>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<!--  hostList binding -->
		<HostTree hostList="{hostList}" />
	</div>
	<!--  chart binding -->
	<ChartTab hostList="{hostList}" />
</div>
