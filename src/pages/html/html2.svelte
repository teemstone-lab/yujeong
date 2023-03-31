<style>
	.body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background: #b33504;
		overflow: auto;
		gap: 10px;
		padding-bottom: 10px;
	}

	.title-area {
		display: flex;
		text-align: center;
		align-items: center;
		flex-direction: column;
		border: 1px solid pink;
		margin-bottom: 150px;
	}

	.title-area h1 {
		display: flex;
		order: 2;
		width: 50px;
		color: white;
	}

	.title-area p.floating-text {
		order: 1;
		color: black;
		font-weight: bold;
		font-size: 40px;
	}
	.center-typo {
		display: flex;
		justify-content: center;
		margin-bottom: 40px;
		border: 1px solid greenyellow;
	}

	.center-typo p {
		text-align: center;
		font-weight: bold;
		font-size: 50px;
		color: white;
	}
	.menu {
		display: flex;
		flex-direction: column;
		width: 220px;
		margin: 0 auto;
		font-weight: bold;
		column-gap: 10px;
		border: 1px solid tan;
		margin-bottom: 20px;
	}

	.menu-pr p span {
		display: flex;
		justify-content: center;
		font-size: 15px;
		background-color: white;
		color: #b33504;
		font-weight: bold;
	}

	.menu-inner {
		display: flex;
		flex-wrap: wrap;
		column-gap: 10px;
	}
	dl {
		display: flex;
		color: white;
	}
	dl * {
		font-size: 18px;
	}

	address {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-style: normal;
		border: 1px solid turquoise;
	}

	p.address_descr {
		display: flex;
		border-bottom: 1px solid black;
		font-weight: bold;
	}

	p.address2 {
		display: flex;
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
