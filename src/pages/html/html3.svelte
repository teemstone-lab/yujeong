<style>
	.body {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
		background: #f04823;
		text-align: center;
	}

	.bottom-company {
		display: flex;
		justify-content: center;
		order: 3;
		border: 1px solid yellow;
	}
	.center-typo {
		display: flex;
		flex-direction: column;
		align-items: center;
		-webkit-text-stroke: 1px #b12120;
		font-weight: bold;
		border: 1px solid yellow;
	}

	.center-typo p.bend-text {
		display: flex;
		color: white;
		white-space: nowrap;
		text-align: center;
		width: 100%;
	}

	.center-typo strong.border-text {
		display: flex;
		color: white;
		font-size: 150px;
		text-shadow: rgb(0, 0, 0) 1px 0 10px;
		box-sizing: border-box;
		border: 1px solid black;
		margin-bottom: -38px;
	}

	p.box-text {
		display: flex;
		justify-content: center;
		color: #b12120;
		background: white;
		width: 96px;
	}

	.center-typo span {
		color: yellow;
		font-size: 60px;
	}

	.center-typo p {
		color: white;
		font-size: 20px;
	}

	.body h1 {
		width: 100%;
	}

	.under-descr {
		order: 2;
	}
	.under-descr p {
		margin: 0 auto;
		width: 220px;
		text-align: center;
	}

	address {
		order: 4;
		top: 900px;
		right: 0;
		left: 0;
		padding-bottom: 10px;
		text-align: center;
		background: yellow;
		font-style: normal;
	}

	/* 다이어트가 필요한 을 휘고 + 확! 왼쪽 상단에 붙이려면? */
	/* 확! 과 찐자 사이 갭을 줄이려면? */
	/* p.address2 인스타그램 계정명을
	00시 00구 의 길이에 맞춰서 균등분할 정렬하려면? */
</style>

<script>
	import Header from '../../components/header/Header.svelte';
</script>

<div>
	<Header />
	<div> html3 </div>

	<head>DAWN</head>

	<div class="body">
		<div class="bottom-company">
			<h1>DAWN</h1>
		</div>

		<div class="center-typo">
			<p class="bend-text">다이어트가 필요한</p>
			<p><strong class="border-text">확!</strong><span>찐자</span>를</p>
			<p class="box-text">찾습니다!</p>
		</div>

		<div class="under-descr">
			<p>자가격리하기 좋을때 50일의 기적에 도전하세요!!</p>
		</div>

		<address>
			<p class="address1">00시 00구 0000로00길 00. 00타워 00층 (000역0번출구 도보0분거리)</p>
			<p class="address2">
				<span class="insta">@0000__00000</span>
				<span class="hashtag">#0000000</span>
				<span class="phoneNumber">000.0000.0000</span>
			</p></address
		>
	</div>
</div>
