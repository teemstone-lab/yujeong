<style>
	.font .text {
		text-transform: uppercase;
	}

	.grade-1 .text {
		color: #b1b1b1;
	}
	.grade-1 .circle.outer {
		background-color: rgba(0, 0, 255, 0.6);
	}

	.grade-1 .wave {
		background-color: rgba(0, 0, 255, 0.2);
	}

	.grade-2 .circle.outer {
		background-color: rgba(5, 255, 0, 0.3);
	}
	.grade-2 .wave {
		background-color: rgba(5, 255, 0, 0.2);
	}

	.grade-3 .circle.outer {
		background-color: rgba(255, 229, 0, 0.3);
	}
	.grade-3 .wave {
		background-color: rgba(255, 229, 0, 0.2);
	}

	.grade-4 .circle.outer {
		background-color: rgba(255, 122, 0, 0.3);
	}
	.grade-4 .wave {
		background-color: rgba(255, 122, 0, 0.2);
	}

	.grade-5 .circle.outer {
		background-color: rgba(255, 0, 0, 0.3);
	}
	.grade-5 .wave {
		background-color: rgba(255, 0, 0, 0.2);
	}

	.circle.outer {
		overflow: hidden;
		border-radius: 0;
		position: absolute;
		top: 0;
		left: -25%;
		transition: top 0.5s ease-out;
		display: flex;
	}

	.circle {
		width: 400px;
		height: 400px;
		position: relative;
		overflow: hidden;
		/* border: 7px solid #464343; */
		border-radius: 100%;
		/* background: linear-gradient(#3c5aff, #52f2fd); */
		transform: translate3d(0, 0, 0);
		top: -50%;
		display: flex;
	}

	.wave-one {
		width: 600px;
		height: 600px;
		position: absolute;
		top: -65%;
		left: -30%;
		border-radius: 45%;
		animation: move 3s infinite linear;
		display: flex;
	}

	.wave-two {
		width: 650px;
		height: 650px;
		position: absolute;
		top: -90%;
		left: -30%;
		border-radius: 45%;
		animation: move 5s infinite linear;
		display: flex;
	}

	.wave-three {
		width: 650px;
		height: 650px;
		position: absolute;
		top: -100%;
		left: -30%;
		border-radius: 45%;
		animation: move 7s infinite linear;
		display: flex;
	}

	.wave-four {
		width: 650px;
		height: 650px;
		position: absolute;
		top: -103%;
		left: -30%;
		border-radius: 46%;
		background: #fff !important;
		animation: move 7s infinite linear;
		display: flex;
	}

	@keyframes move {
		100% {
			transform: rotate(360deg);
		}
	}
</style>

<script lang="ts">
	// ChartWindows 에서 받아온 데이터를 받을 변수
	// value: 자원 사용률
	// name: 자원 이름
	// text: String(자원 사용률)
	export let value: number;
	export let name: string = '';
	export let text: string = '';

	// Top 속성값 산출용 변수
	let ratio: number;
	// 실제 자원 사용률이 1일 때,
	// Gauge 의 높이는 1.05
	// Top 속성값은 105% - gauge 높이.
	// 보정값 20
	$: {
		ratio = 100 * 1.05 - (value * 1.05 + 20);
	}

	// gauge 구간별 색상 지정용 변수
	let alertLevel = 1;

	$: {
		switch (true) {
			case value > 89:
				alertLevel = 5;
				break;
			case value > 79:
				alertLevel = 4;
				break;
			case value > 69:
				alertLevel = 3;
				break;
			case value > 59:
				alertLevel = 2;
				break;
			default:
				alertLevel = 1;
				break;
		}
	}
</script>

<div class="{`grade-${alertLevel} mt-2 flex  flex-row justify-center`}">
	<div class="circleSection flex h-[400px] basis-1/2 items-center justify-center">
		<div class="flex h-[500px] items-center justify-center">
			<div
				id="outerEdge"
				class="border-light-500
			relative
		h-[250px]
		w-[250px]
		shrink
		overflow-hidden
		rounded-full
		border-[4px]
		border-solid
		bg-white"
			>
				<!-- 범례 -->
				<div class="font">
					<div
						class="text text-stroke-light-100 absolute top-[-9%] z-30 flex h-full w-full items-center justify-center text-[40px] font-bold text-green-800 bg-blend-overlay mix-blend-multiply"
						>{text}</div
					>
					<div
						class="text text-stroke-light-100 absolute top-[-9%] z-30 flex h-full w-full translate-y-[40px] items-center justify-center text-[26px]  font-bold text-green-800 bg-blend-overlay"
						>{name}</div
					>
				</div>
				<!-- Circle -->
				<div
					class="circle outer transition-transform duration-500"
					style="{`top: ${ratio}%`}"
				>
					<div class="circle">
						<!-- wave -->
						<div class="wave wave-one"></div>
						<div class="wave wave-two"></div>
						<div class="wave wave-three"></div>
						<div class="wave wave-four"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
