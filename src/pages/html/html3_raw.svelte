<style>
	.body {
		width: 100%;
		height: 900px;
		background: #f04823;
		text-align: center;
	}

	.center-typo {
		-webkit-text-stroke: 1px #b12120;
		font-weight: bold;
		position: relative;
	}

	.center-typo p.bend-text {
		text-align: left;
		white-space: pre-wrap;
		color: white;
		position: absolute;
		top: 0;
		left: 0;
		white-space: nowrap;
		text-align: center;
		width: 100%;
	}

	.center-typo strong.border-text {
		display: block;
		color: white;
		font-size: 150px;
		padding-top: 2px;
		text-shadow: rgb(0, 0, 0) 1px 0 10px;
		box-sizing: border-box;
		border: 4px solid black;
		padding-top: 100px;
		margin-bottom: 100px;
	}

	p.box-text {
		display: inline;
		color: #b12120;
		background: white;
		width: 17%;
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
		position: absolute;
		width: 100%;
		bottom: 31.5%;
	}

	.under-descr p {
		display: block;
		margin: 0 auto;
		padding-top: 10px;
		width: 220px;
		text-align: center;
	}

	address {
		position: absolute;
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
