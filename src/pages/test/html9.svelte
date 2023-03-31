<style>
	.viewer {
		display: flex;
		flex-direction: column;
	}

	.head,
	.body,
	.footer {
		display: flex;
	}

	.head {
		justify-content: space-between;
		height: 37px;
		align-items: center;
		background-color: #424242;
	}

	.topButton {
		display: flex;
	}

	.topButton ul {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.icon {
		border: 1px solid black;
		width: 36px;
		height: 36px;
		/* border: 0.5px solid white; */
	}

	.btnBundle .icon8-2 {
		/* border: 1px solid black; */
		width: 13px;
		height: 36px;
		margin-left: 1px;
	}

	.btnBundle {
		padding: 0 5px;
	}

	.btnBundle + .btnBundle {
		border-left: 3px solid #3b3b3b;
	}

	.btnBundle li + li {
		margin-left: 5px;
	}

	.icon1 {
		background: url(../../../public/top1.png) no-repeat;
		width: 36px;
		height: 36px;
		background-size: contain;
	}

	.icon2 {
		background: url(../../../public/top2.png) no-repeat;
		width: 36px;
		height: 36px;
		background-size: contain;
	}

	.icon3 {
		background: url(../../../public/top3.png) no-repeat;
		width: 36px;
		height: 36px;
		background-size: contain;
	}

	.icon4 {
		background: url(../../../public/top4.png) no-repeat;
		width: 36px;
		height: 36px;
		background-size: contain;
	}

	.icon5 {
		background: url(../../../public/top5.png) no-repeat;
		width: 36px;
		height: 36px;
		background-size: contain;
	}

	.icon6 {
		background: url(../../../public/top6.png) no-repeat;
		width: 36px;
		height: 36px;
		background-size: contain;
	}

	.icon7 {
		background: url(../../../public/top7.png) no-repeat;
		width: 36px;
		height: 36px;
		background-size: contain;
	}

	.icon8 {
		background: url(../../../public/top8.png) no-repeat;
		width: 36px;
		height: 36px;
		background-size: contain;
	}

	.icon8-2 {
		background: url(../../../public/top8-2.png);
		width: 13px;
		height: 36px;
		background-size: contain;
	}

	.icon9 {
		background: url(../../../public/top9.png);
		width: 36px;
		height: 36px;
		background-size: contain;
	}

	.icon10 {
		background: url(../../../public/top10.png);
		width: 36px;
		height: 36px;
		background-size: contain;
	}

	.icon11 {
		background: url(../../../public/top11.png);
		width: 36px;
		height: 36px;
		background-size: contain;
	}

	.icon12 {
		background: url(../../../public/top12.png);
		width: 36px;
		height: 36px;
		background-size: contain;
	}
	.topTimetable {
		display: flex;
		gap: 10px;
		color: white;
		font-size: 11px;
		font-weight: bold;
	}

	.topRealtime {
		display: flex;
		align-items: center;
	}
	.topClock {
		display: flex;
		border: 1px solid black;
		width: 36px;
		height: 36px;
	}

	.top-right0 {
		background: url(../../../public/top-right0.png) no-repeat;
		width: 36px;
		height: 36px;
		background-size: contain;
	}
	.sideTab {
		display: flex;
		flex-direction: column;
		width: 500px;
	}

	.hostTab {
		display: flex;
		height: 19px;
		background-color: #4e4e4e;
	}

	.hostTab ul {
		display: flex;
		align-items: center;
	}

	.hostTab ul li {
		display: flex;
		border: 1px solid #3a3a3a;
		padding: 0 4px;
		color: #c0bea4;
		font-size: 8px;
	}

	.hostTab ul li + li {
		display: flex;
	}

	.treeIcon {
		display: flex;
		height: 27px;
		background-color: #424242;
	}

	.treeIcon ul {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.btnBundle2 {
		padding: 0 5px;
	}
	.btnBundle2 + .btnBundle2 {
		border-left: 3px solid #3e3e3e;
	}

	.treeCon {
		border: 1px solid black;
		width: 25px;
		height: 25px;
	}

	.tree1 {
		background: url(../../../public/tree1.png);
		width: 25px;
		height: 25px;
		background-size: contain;
	}
	.tree2 {
		background: url(../../../public/tree2.png);
		width: 25px;
		height: 25px;
		background-size: contain;
	}

	.tree3 {
		background: url(../../../public/tree3.png);
		width: 25px;
		height: 25px;
		background-size: contain;
	}

	.tree4 {
		background: url(../../../public/tree4.png);
		width: 25px;
		height: 25px;
		background-size: contain;
	}

	.tree5 {
		background: url(../../../public/tree5.png);
		width: 25px;
		height: 25px;
		background-size: contain;
	}
	.hostTree {
		display: flex;
		overflow-y: scroll;
		height: calc(100vh - 166px);
		background-color: #4d4d4d;
		color: #fffefa;
		padding-left: 10px;
	}

	.chartTab {
		display: flex;
		background-color: #323232;
		width: 100%;
		border: 2px solid gray;
		min-height: calc(100vh - 120px);
	}

	.footer {
		height: 19px;
		align-items: center;
		gap: 5px;
		background-color: #353636;
	}
	.footer p {
		display: flex;
		align-items: center;
		margin-right: 20px;
		color: #ffffea;
		font-size: 10px;
	}

	.connectOn,
	.connectOff,
	.bottomRealtime {
		display: flex;
		padding-right: 5px;
		border-left: 3px solid #434444;
		padding: 0 5px;
	}
	/* padding-left: 2px; */

	.connectOn span,
	.connectOff span,
	.bottomRealtime span {
		display: flex;
		padding-right: 20px;
	}

	.bottomIcon1 {
		background: url(../../../public/bottom1.png) no-repeat;
		width: 14px;
		height: 14px;
		background-size: contain;
	}

	.bottomIcon2 {
		background: url(../../../public/bottom2.png) no-repeat;
		width: 14px;
		height: 14px;
		background-size: contain;
	}

	.bottomIcon3 {
		background: url(../../../public/bottom3.png) no-repeat;
		width: 14px;
		height: 14px;
		background-size: contain;
	}
</style>

<script lang="ts">
	interface Host {
		id: number;
		top: number;
		cpu: number;
		mem: number;
		swap: number;
		disk: number;
		isOn: boolean;
	}

	const myWorker = new Worker(new URL('./worker.ts', import.meta.url));
	myWorker.postMessage({ size: 100, isAllTrue: true });

	myWorker.onmessage = function (e) {
		const result = e.data as Host[];
		result.forEach((host) => {
			console.log(host);
		});
	};
	// 워커로부터 메시지를 받았다면 이 함수를 실행시켜줘 !

	const intervalWorkerCall = () => {
		setInterval(() => {
			myWorker.postMessage({ size: 100, isAllTrue: false });

			// myWorker.onmessage = function (e) {
			// 	const result = e.data as Host[];
			// 	result.forEach((host) => {
			// 		console.log(host);
			// 	});
			// };
		}, 3000);
	};
</script>

<main>
	<div class="viewer">
		<!-- <head>, <body>, <footer> stack -->
		<div class="head">
			<!--  -->
			<button on:click="{intervalWorkerCall}">startButton</button>
			<div class="topButton">
				<ul>
					<li class="btnBundle">
						<ul>
							<li class="icon">
								<button class="icon1"></button>
							</li>
							<li class="icon">
								<button class="icon2"></button>
							</li>
						</ul>
					</li>

					<li class="btnBundle">
						<ul>
							<li class="icon">
								<button class="icon3"></button>
							</li>
							<li class="icon">
								<button class="icon4"></button>
							</li>
						</ul>
					</li>

					<li class="btnBundle">
						<ul>
							<li class="icon">
								<button class="icon5"></button>
							</li>
							<li class="icon">
								<button class="icon6"></button>
							</li>
							<li class="icon">
								<button class="icon7"></button>
							</li>
						</ul>
					</li>

					<li class="btnBundle">
						<ul>
							<li class="icon">
								<button class="icon8"></button>
							</li>
							<li class="icon8-2">
								<button class="icon8-2"></button>
							</li>
							<li class="icon">
								<button class="icon9"></button>
							</li>
							<li class="icon">
								<button class="icon10"></button>
							</li>
							<li class="icon">
								<button class="icon11"></button>
							</li>
						</ul>
					</li>

					<li class="btnBundle">
						<ul>
							<li class="icon">
								<button class="icon12"></button>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<!--  -->
			<div class="topTimetable">
				<div class="topRealtime">
					<p>· Realtime: 2023-02-28 17:20:25</p>
				</div>
				<div class="topClock">
					<button class="top-right0"></button>
				</div>
			</div>
		</div>
		<!--  -->
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
				<div class="hostTree">
					<ul>
						<li>Host List</li>
						<li>All List</li>
						<li>Linux</li>
						<li>CentOS</li>
						<li>Host List</li>
						<li>All List</li>
						<li>Linux</li>
						<li>Host List</li>
						<li>CentOS</li>
						<li>All List</li>
						<li>Linux</li>
						<li>CentOS</li>
						<li>Host List</li>
						<li>All List</li>
						<li>Linux</li>
						<li>CentOS</li>
						<li>Host List</li>
						<li>All List</li>
						<li>Linux</li>
						<li>CentOS</li>
						<li>Host List</li>
						<li>All List</li>
						<li>Linux</li>
						<li>CentOS</li>
						<li>Host List</li>
						<li>All List</li>
						<li>Linux</li>
						<li>CentOS</li>
						<li>Host List</li>
						<li>All List</li>
						<li>Linux</li>
						<li>CentOS</li>
						<li>Host List</li>
						<li>All List</li>
						<li>Linux</li>
						<li>CentOS</li>
						<li>Host List</li>
						<li>All List</li>
						<li>Linux</li>
						<li>CentOS</li>
						<li>Host List</li>
						<li>All List</li>
						<li>Linux</li>
						<li>CentOS</li>
					</ul>
				</div>
			</div>

			<div class="chartTab"></div>
		</div>
		<!--  -->
		<div class="footer">
			<!-- height : 19px -->

			<div class="hostCount">
				<p>57 host(s) Selected</p>
			</div>
			<div class="connectOn">
				<p><span class="bottomIcon1"></span>50</p>
			</div>
			<div class="connectOff">
				<p><span class="bottomIcon2"></span>27</p>
			</div>
			<div class="bottomRealtime">
				<p><span class="bottomIcon3"></span>2023-02-28 17:20:25</p>
			</div>
		</div>
		<!--  -->
	</div>
</main>
