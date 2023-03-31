<script lang="ts">
	type Host = { hostName: string; cpu: number; isOn: boolean };

	let list: Host[] = [];

	// < !-- 워커 생성 -->
	const worker = new Worker(new URL('./worker2.ts', import.meta.url));

	// << !-- 워커 실행 요청-->
	worker.postMessage({ hostLength: 100, isOnAllTrue: true });

	// << !-- 워커 실행 결과 수신 -->
	worker.onmessage = (e) => {
		// 이렇게 스벨트ui에 반영을 하네?
		list = e.data;
	};
	console.log('list.length', list.length);
	// < !-- random Interval -->
	// 뭔진 모르겠는데, 혹은 대충은 알겠는데. 머..복잡하게 해서 먼가 나오네.
	const randomSeconds = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	// 이놈의 역할은?
	// 어떻게 매번 다른시간으로 계속 돌지??
	// 구조 해석이 가능한가 나는?
	// 이 안에서 뭐하는데 ?
	//전체적인 코드의 의미가 그래서 뭔데?

	const randomSetTimeOut = () => {
		setTimeout(() => {
			worker.postMessage({ hostLength: 100, isOnAllTrue: false });
			randomSetTimeOut();
		}, randomSeconds(1000, 5000));
	};

	// list = createHostList({ hostLength: 100, isOnAllTrue: true });
	// console.log(list);
	randomSetTimeOut();
</script>

<main>
	<div class="viewer">
		<!-- <head>, <body>, <footer> stack -->
		<div class="head">
			<!--  -->
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
				<!--  list binding -->
				<div class="hostTree">
					<ul>
						{console.log('list.length', list.length)}
						{#each list as item}
							<li
								><div
									class="{`h-4 w-4 rounded-full transition-all duration-700 ${
										item.isOn ? 'bg-blue-700' : 'bg-slate-100'
									}`}"
								>
								</div>{item.isOn}</li
							>
						{/each}
					</ul>
				</div>
			</div>
			<!--  chart binding -->
			<div class="chartTab">
				<ul class="flex w-full flex-col gap-4">
					{#each list as item}
						<li
							class=" border-light-200 flex w-full  gap-5 border-[1px] border-solid text-white"
						>
							<div>hostname: {item.hostName}</div>
							<div
								>cpu: {item.cpu}
								<div class="h4 border[1px] border-light-50 w-full border">
									<div
										style="{`width:${String(item.cpu)}%`}"
										class="{` h-4 bg-yellow-400 transition-all duration-500`}"
									></div>
								</div>
							</div>
						</li>
					{/each}
				</ul>
			</div>
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
