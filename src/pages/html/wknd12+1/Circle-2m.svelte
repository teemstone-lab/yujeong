<!-- 1. 원래의 컴포넌트 가져오기 -->
<style>
	/* tailwind 로 적용
	.graph {
		height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
	} */

	.outer {
		overflow: hidden;
		background-color: red;
		border-radius: 0;
		position: absolute;
		top: 0;
		left: -20%;
		transition: top 0.5s ease-out;
	}

	.circle {
		width: 400px;
		height: 400px;
		position: relative;
		overflow: hidden;
		border: 7px solid #464343;
		border-radius: 100%;
		background: linear-gradient(#3c5aff, #52f2fd);
		transform: translate3d(0, 0, 0);
		top: -50%;
	}

	.wave-one {
		width: 600px;
		height: 600px;
		position: absolute;
		top: -65%;
		left: -30%;
		border-radius: 45%;
		animation: move 3s infinite linear;
	}

	.wave-two {
		width: 650px;
		height: 650px;
		position: absolute;
		top: -90%;
		left: -30%;
		border-radius: 45%;
		animation: move 5s infinite linear;
	}

	.wave-three {
		width: 650px;
		height: 650px;
		position: absolute;
		top: -100%;
		left: -30%;
		border-radius: 45%;
		animation: move 7s infinite linear;
	}

	.wave-four {
		width: 650px;
		height: 650px;
		position: absolute;
		top: -100%;
		left: -30%;
		border-radius: 46%;
		background: #fff !important;
		animation: move 7s infinite linear;
	}

	@keyframes move {
		100% {
			transform: rotate(360deg);
		}
	}
</style>

<script lang="ts">
	// ChartWindows 에서 받아온 데이터를 받을 변수
	// value: gauge 높이 산출
	// name: 자원 이름
	// text: 실제 자원 사용률
	export let value: number;
	export let name: string = '';
	export let text: string = '';

	// gauge 높이 환산용 변수
	let ratio: number;
	// 실제 자원 사용률이 1일 때,
	// Gauge 의 높이는 1.05
	$: {
		ratio = 100 * 1.05 - (value * 1.05 + 20);
	}

	// gauge 구간별 색상 지정용 변수
	let gradeLevel = 1;

	$: {
		switch (true) {
			case value > 89:
				gradeLevel = 5;
				break;
			case value > 79:
				gradeLevel = 4;
				break;
			case value > 69:
				gradeLevel = 3;
				break;
			case value > 59:
				gradeLevel = 2;
				break;
			default:
				gradeLevel = 1;
				break;
		}
	}
</script>

<div class="flex h-[500px] items-center justify-center">
	<div
		id="outSide"
		class="border-light-500
		relative
		h-[300px]
		w-[300px]
		overflow-hidden
		rounded-full
		border-[4px]
		border-solid
		bg-white"
	>
		<div>{text}</div>
		<div>{name}</div>
		<div class="circle outer transition-transform duration-500" style="{`top: ${ratio}%`}">
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
