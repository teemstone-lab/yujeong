<!-- 1. 원래의 컴포넌트 가져오기 -->
<style>
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
</script>

<div class="circle">
	<!-- wave -->
	<div class="wave wave-one"></div>
	<div class="wave wave-two"></div>
	<div class="wave wave-three"></div>
	<div class="wave wave-four"></div>
</div>
