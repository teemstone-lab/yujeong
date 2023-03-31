<style>
	.body {
		width: 100%;
		/* height: 900px; */
		background: #b33504;
		text-align: center;
		overflow: auto;
	}

	.title-area {
		position: relative;
		height: 300px;
		margin-top: 30px;
	}

	.title-area h1 {
		padding-top: 60px;
		color: white;
	}

	.title-area p.floating-text {
		color: black;
		font-weight: bold;
		font-size: 40px;
	}
	.title-area p {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
	}
	.center-typo {
		position: relative;
		height: 500px;
		text-align: center;
	}

	.center-typo p {
		position: absolute;
		top: 25%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-weight: bold;
		font-size: 30px;
		color: white;
	}
	.menu {
		font-weight: bold;
		width: 280px;
		margin: 0 auto;
		font-size: 0;
	}

	.menu-pr p span {
		font-size: 15px;
		margin-top: 10px;
		background-color: white;
		color: #b33504;
		width: 220px;
		text-align: center;
		display: block;
		margin: 0 auto;
		margin-top: 13px;
	}

	dl {
		display: inline-block;
		margin: 0;
		padding: 0;
		width: 40%;
		height: 22px;
		color: white;
		text-align: left;
	}
	dl * {
		font-size: 18px;
	}

	dt,
	dd {
		display: inline-block;
		margin: 0;
		padding: 0;
	}

	address {
		padding-bottom: 10px;
		margin-top: 20px;
		margin-bottom: 10px;
		font-style: normal;
	}

	p.address_descr {
		border-bottom: 1px solid black;
		width: 59%;
		margin: 0 auto;
		font-weight: bold;
	}

	p.address2 {
		font-size: 14px;
	}
</style>

<script>
	import Header from '../../components/header/Header.svelte';
</script>

<div>
	<Header />
	<div> html2 </div>

	<head>HOLA NAIL</head>

	<div class="body">
		<div class="title-area">
			<h1><span>HOLA NAIL</span></h1>
			<p class="floating-text">OPEN</p>
		</div>

		<div class="center-typo">
			<p>손톱관리<br />어디서 하세요?</p>
		</div>

		<div class="menu">
			<div class="menu-inner">
				<dl>
					<dt>손젤</dt>
					<dd>20,000</dd>
				</dl>
				<dl>
					<dt>손케어</dt>
					<dd>10,000</dd>
				</dl>
				<dl>
					<dt>발젤</dt>
					<dd>30,000</dd>
				</dl>
				<dl>
					<dt>발케어</dt>
					<dd>15,000</dd>
				</dl>
			</div>

			<div class="menu-pr">
				<p><span>(패디 시술시 족욕 서비스~~)</span></p>
			</div>
		</div>

		<address>
			<p class="phoneNumber">02-2345-6543</p>
			<p class="address_descr">사전 예약 필수!! 24시간 예약문의 환영!!</p>
			<p class="address2">서울특별시 강남구 논현동 46-17 홀리빌딩 1층</p>
		</address>
	</div>
</div>
