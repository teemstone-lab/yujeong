<style>
	.wave {
	}
	.grade-1 .text {
		color: #b1b1b1;
	}
	.grade-1 .circle.outer {
		background-color: rgba(4, 0, 255, 0.9);
	}

	.grade-1 .wave {
		background-color: rgba(4, 0, 255, 0.2);
	}

	.grade-2 .circle.outer {
		background-color: rgba(5, 255, 0, 0.6);
	}
	.grade-2 .wave {
		background-color: rgba(5, 255, 0, 0.2);
	}

	.grade-3 .circle.outer {
		background-color: rgba(255, 229, 0, 0.6);
	}
	.grade-3 .wave {
		background-color: rgba(255, 229, 0, 0.2);
	}

	.grade-4 .circle.outer {
		background-color: rgba(255, 122, 0, 0.6);
	}
	.grade-4 .wave {
		background-color: rgba(255, 122, 0, 0.2);
	}

	.grade-5 .circle.outer {
		background-color: rgba(255, 0, 0, 0.6);
	}
	.grade-5 .wave {
		background-color: rgba(255, 0, 0, 0.2);
	}

	.graph {
		height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.circle.outer {
		overflow: hidden;
		border-radius: 0;
		position: absolute;
		top: 0;
		left: -25%;
		transition: top 0.5s ease-out;
	}

	.circle.outer .circle {
		border: 0;
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

	/* moon css & animation */
</style>

<script lang="ts">
	import { onMount } from 'svelte';

	export let value: number;
	export let name: string = '';
	export let text: string = '';
	let percentage: number = 100 * 1.05 - 70 * 1.05;

	$: {
		percentage = 100 * 1.05 - (value * 1.05 + 20);
	}

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

<div class="{`grade-${gradeLevel} mt-2 flex flex-row justify-center`}">
	<div class="relative flex basis-1/2 justify-center">
		<div class="graph">
			<div
				class=" border-light-500 relative h-[300px] w-[300px] overflow-hidden rounded-full border-[4px] border-solid bg-white"
			>
				{#if text}
					<div
						class=" text text-stroke-light-100 absolute z-30 flex h-full w-full items-center justify-center text-[50px]  text-green-800 bg-blend-overlay"
						>{text}</div
					>
				{/if}
				{#if name}
					<div
						class="text text-stroke-light-100 absolute z-30 flex h-full w-full translate-y-[40px] items-center justify-center text-[50px]  font-bold text-green-800 bg-blend-overlay"
						>{name}</div
					>
				{/if}
				<div
					class="circle outer transition-transform duration-500"
					style="{`top: ${percentage}%`}"
				>
					<div class="circle">
						<!-- wave -->
						<div class="wave wave-one"></div>
						<div class="wave wave-two"></div>
						<div class="wave wave-three"></div>
						<div class="wave wave-four"></div>

						<!-- moon -->
						<i class="fas fa-moon"></i>
						<i class="fas fa-moon blur"></i>

						<!-- star -->
						<div class="star">
							<i class="fas fa-asterisk star1"></i>
							<i class="fas fa-asterisk star2"></i>
							<i class="fas fa-asterisk star3"></i>
							<i class="fas fa-asterisk star4"></i>
							<i class="fas fa-asterisk star5"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
