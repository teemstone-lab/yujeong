<style>
	li {
		display: inline;
	}

	/* 최상단 메뉴바 스타일 start */
	.title-area {
		display: inline-block;
		width: 100%;
		border: 3px solid black;
		margin-bottom: 10px;
	}

	.title-area h1 {
		display: inline-block;
		border: 1px solid black;
		margin-left: 15%;
		vertical-align: middle;
	}

	#siteMap {
		display: inline-block;
		border: 1px solid black;
		margin-left: 1%;
		font-size: 10px;
		vertical-align: middle;
	}

	#siteMenu {
		display: inline-block;
		border: 1px solid black;
		margin-left: 15%;
		font-size: 10px;
		font-weight: bold;
		vertical-align: middle;
	}

	#siteMap li {
		margin-left: 3px;
		margin-right: 3px;
	}

	#siteMenu li {
		margin-left: 15px;
	}
	/* 최상단 메뉴바 스타일 end */

	/* 바디 스타일 start */
	.body-area {
		display: block;
		width: 100%;
		border: 3px solid black;
		margin-bottom: 10px;
	}
	/* 센터 스타일 start */
	.center {
		border: 1px solid black;
		text-align: left;
		width: 100%;
		background-image: url('../../../public/tab.jpg');
		background-size: 50%;
		background-repeat: no-repeat;
		background-position: right;
	}

	#centerText1 {
		display: inline-block;
		width: 300px;
		border: 1px solid red;
		margin-left: 15%;
		padding-right: 10px;
		font-size: 20px;
		font-style: italic;
	}

	#centerText2 {
		display: inline-block;
		border: 1px solid green;
		margin-top: 15px;
		font-size: 5px;
	}
	/* 센터 스타일 end */

	/* 바텀 스타일 start */
	.bottom {
		display: inline-block;
		width: 550px;
		border: 1px solid black;
		margin-left: 15%;
	}

	p.busiTitle {
		display: block;
		/* border: 1px solid black; */
		border-bottom: 1px solid black;
		font-size: 10px;
		padding-bottom: 5px;
	}

	.business p {
		display: block;
		border: 1px solid pink;
		width: 150px;
		font-size: 5px;
	}

	.business span {
		display: inline;
		border: 1px solid #ae9874;
		width: 100px;
		text-align: center;
		background: #ae9874;
		font-size: 5px;
		color: white;
	}

	#businessList {
		display: inline;
		border: 1px solid blue;
		float: right;
		padding-top: 10px;
		font-size: 5px;
	}

	#businessList li {
		margin-left: 50px;
	}
	/* 바텀 스타일 end */

	/* 노티스 스타일 start */
	.notice {
		display: inline-block;
		margin-left: 15%;
		border: 1px solid tomato;
		width: 800px;
	}

	.noticeBoard {
		display: inline-block;
		border: 1px solide black;
		width: 150px;
		padding-left: 10px;
	}

	p.notice {
		display: inline-block;
		border: 1px solid green;
		width: 150px;
		border-bottom: 1px solid black;
		font-size: 10px;
		margin-bottom: 10px;
		margin: 0;
	}

	p.artiTitle {
		display: block;
		border: 1px solid pink;
		width: 150px;
		font-size: 12px;
		font-weight: bold;
	}

	#article {
		display: block;
		border-top: 1px solid gray;
		font-size: 5px;
	}

	#notiDate {
		display: inline;
		width: 100px;
		text-align: center;
		border-top: 1px solid gray;
		font-size: 5px;
		color: gray;
	}

	.noticeIMG {
		display: inline-block;
		border: 1px solid black;
		width: 633px;
		height: 130px;
		margin-left: 10px;
		/* 	1. <p>들의 너비를 각각 지정하지 않고, 균등분할하는 방법이 있나요?
			2.  높이도 균등분할할 수 있나여?*/
	}

	p.philosophy {
		display: inline-block;
		position: relative;
		font-size: 5px;
		border: 1px solid blue;
		padding-bottom: 10px;
		width: 200px;
		height: 120px;
	}

	p.philosophy span {
		display: inline-block;
		position: absolute;
		bottom: 10%;
		left: 0;
	}

	p.history {
		display: inline-block;
		border: 1px solid blue;
		font-size: 5px;
		width: 200px;
		height: 120px;
	}

	p.prmovie {
		display: inline-block;
		position: relative;
		font-size: 5px;
		border: 1px solid blue;
		width: 200px;
		height: 120px;
	}

	p.prmovie span {
		display: inline-block;
		position: absolute;
		bottom: 10%;
		left: 0;
	}

	.noticeBoard,
	.noticeIMG {
		display: inline-block;
		vertical-align: top;
	}
	/* 노티스 스타일 end */
	/* 바디 스타일 end */

	/* 어드레스 start */
	address {
		padding-top: 15px;
		padding-bottom: 20px;
		background-color: darkgray;
		font-size: 5px;
		font-style: normal;
		padding-left: 16%;
	}

	address p {
		display: inline-block;
	}

	#phoneNumber {
		display: inline-block;
		border: 1px solid hotpink;
		margin-left: 20px;
	}

	dt,
	dd {
		display: inline;
	}

	address span {
		display: block;
	}
</style>

<script>
	// import { listen } from 'svelte/internal';
	import Header from '../../components/header/Header.svelte';
</script>

<div>
	<Header />
	<div> html4 </div>

	<head>TES</head>

	<body>
		<div class="title-area">
			<h1><strong>TES</strong></h1>

			<ul id="siteMap">
				<li>ENGLISH</li>
				<li>CONTACT US</li>
				<li>SITEMAP</li>
			</ul>

			<ul id="siteMenu">
				<li>About us</li>
				<li>Business</li>
				<li>Sustainable Management</li>
				<li>Investor Relations</li>
				<li>Recruitment</li>
				<li>Notice</li>
			</ul>
		</div>

		<div class="body-area">
			<div class="center">
				<p id="centerText1">
					Building a more comfortable and humane world through <strong>TES</strong>
					technology
					<span id="centerText2">
						We are emerging as a world-class company by securing technological
						competitiveness and paraticing sound business principles for providing
						exemplary customer satisfaction.</span
					></p
				>
			</div>

			<div class="bottom">
				<div class="business">
					<p class="busiTitle">OUR BUSINESS</p>
					<p
						>TES creating a new history now by looking ten years ahead and embracing the
						entire century</p
					>
					<span>DISCOVER MORE</span>

					<ul id="businessList">
						<li>SEMICONDUCTOR</li>
						<li>DISPLAY & OLED</li>
						<li>OPTO ELECTRONICS</li>
					</ul>
				</div>
			</div>

			<div class="notice">
				<div class="noticeBoard">
					<p class="notice">NOTICE</p>
					<p class="artiTitle">AEO경영을 위한 수출입 ...</p>
					<span id="article"
						>(주)테스는 AEO경영을 위한 수출입 법규준수 및 안전관리 경영방침을 정하고
						"종합인증우수업체(AEO)"의...</span
					>
					<span id="notiDate">2021-10-18</span>
				</div>

				<div class="noticeIMG">
					<p class="philosophy"
						>PHILOSOPHY
						<span>Challenge, Create & Change</span>
					</p>
					<p class="history">HISTORY</p>
					<p class="prmovie"
						>PR MOVIE
						<span>English | Chinese</span>
					</p>
				</div>
			</div>
		</div>
		<address>
			<p>2374-36 JUNGBUDAERO, YANGJI-MYUN, CHEOIN-GU, YONGIN-SI, GYEONGGI-DO, 17162 KOREA</p>
			<dl id="phoneNumber">
				<dt>TEL :</dt>
				<dd>+82.31.323.2552</dd>
				<dt>FAX :</dt>
				<dd>+82.31.323.2555</dd>
			</dl>
			<span>COPYRIGHT 2016 TES CO., LTD. ALL RIGHTS RESERVED. DESIGNED BY</span>
		</address>
	</body>
</div>
