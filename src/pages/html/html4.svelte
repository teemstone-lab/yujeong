<style>
	.body {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		/* padding-left: 15%; */
		gap: 20px;

		/* align-items: center; */
	}
	/* 최상단 메뉴바 스타일 start */

	.titleTxt {
		display: flex;
		align-items: center;
		padding-left: 5%;
		border: 3px solid black;
	}

	.title-area h1 {
		display: flex;
		border: 1px solid black;
		margin-right: 1%;
	}

	#siteMap {
		display: flex;
		border: 1px solid black;
		font-size: 10px;
		margin-right: 15%;
	}

	#siteMenu {
		display: flex;
		border: 1px solid black;
		font-size: 10px;
		font-weight: bold;
	}

	#siteMap li {
		margin-right: 3px;
	}

	#siteMenu li + li {
		margin-left: 10px;
	}
	/* 최상단 메뉴바 스타일 end */

	/* 바디 스타일 start */
	.body-area {
		display: flex;
		flex-direction: column;
		border: 3px solid black;
	}
	/* 센터 스타일 start */
	.center {
		display: flex;
		border: 1px solid black;
		background-image: url('../../../public/tab.jpg');
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: right;
	}

	.centerTxt {
		margin: 15px 0 80px 5%;
		width: 300px;
	}

	#centerText1 {
		display: flex;
		flex-direction: column;
		border: 1px solid red;
		font-size: 20px;
		font-style: italic;
	}

	#centerText2 {
		display: flex;
		border: 1px solid green;
		font-size: 5px;
	}
	/* 센터 스타일 end */

	/* 바텀 스타일 start */
	.bottom {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		border: 1px solid black;
		background-color: rgb(205, 205, 205);
	}

	.business {
		display: flex;
		gap: 20%;
		padding-left: 5%;
	}

	.business p {
		display: flex;
		flex-direction: column;
		border: 1px solid pink;
		width: 150px;
		font-size: 5px;
	}

	p.busiTitle {
		display: flex;
		border: 1px solid black;
		border-bottom: 1px solid black;
		font-size: 10px;
		padding-bottom: 5px;
	}

	.business span {
		display: flex;
		justify-content: center;
		border: 1px solid #ae9874;
		width: 100px;
		background: #ae9874;
		font-size: 5px;
		color: white;
	}

	#businessList {
		display: flex;
		align-items: flex-end;
		text-align: center;
		border: 1px solid blue;
		font-size: 5px;
		gap: 30%;
	}

	#businessList li {
		display: flex;
		flex-wrap: nowrap;
		flex-grow: 1;
	}
	/* 바텀 스타일 end */

	/* 노티스 스타일 start */
	.notice {
		display: flex;
		border: 1px solid tomato;
	}

	.notice-area {
		display: flex;
		justify-content: flex-start;
		padding-left: 5%;
	}
	.noticeBoard {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-content: space-between;
		background: rgb(201, 201, 201);
		width: 150px;
		padding: 0 10px 0 10px;
	}

	p.notice {
		display: flex;
		border: 1px solid green;
		border-bottom: 1px solid black;
		font-size: 10px;
	}

	p.artiTitle {
		display: flex;
		border: 1px solid pink;
		font-size: 10px;
		font-weight: bold;
	}

	#article {
		display: flex;
		border-top: 1px solid gray;
		font-size: 5px;
	}

	#notiDate {
		display: flex;
		border-top: 1px solid gray;
		font-size: 5px;
		color: gray;
	}

	.noticeIMG {
		display: flex;
		flex-direction: row;
		border: 1px solid black;
		height: 130px;
	}

	p.philosophy {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-content: space-between;
		font-size: 5px;
		border: 1px solid blue;
		padding-bottom: 10px;
		width: 200px;
		/* height: 120px; */
	}

	p.philosophy span {
		display: flex;
	}

	p.history {
		display: flex;
		border: 1px solid blue;
		font-size: 5px;
		width: 200px;
	}

	p.prmovie {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-content: space-between;
		font-size: 5px;
		border: 1px solid blue;
		width: 200px;
	}

	p.prmovie span {
		display: flex;
	}

	/* 노티스 스타일 end */
	/* 바디 스타일 end */

	/* 어드레스 start */
	address {
		display: flex;
		flex-direction: column;
		padding-top: 15px;
		padding-bottom: 20px;
		background-color: darkgray;
		font-size: 5px;
		font-style: normal;
	}

	.addContent {
		padding-left: 5%;
	}
	.addPhone {
		display: flex;
	}
	address p {
		display: flex;
		margin-right: 20px;
	}

	#phoneNumber {
		display: flex;
		border: 1px solid hotpink;
	}

	dt,
	dd {
		display: inline;
	}

	address span {
		display: flex;
	}

	.test-container {
		width: 100%;
		background: goldenrod;
		padding: 20px;
		position: relative;
	}
	.test-container .container-inner {
		width: 100;
		height: 2px;
		background: red;
		margin: 0 auto;
		position: absolute;
		top: 0;
		left: 0;
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

	<div class="body">
		<div class="title-area">
			<div class="titleTxt">
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
		</div>

		<div class="body-area">
			<div class="center">
				<div class="centerTxt">
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
			</div>

			<div class="bottom">
				<div class="business">
					<div class="busiTitleWrap">
						<p class="busiTitle">OUR BUSINESS</p>
						<p
							>TES creating a new history now by looking ten years ahead and embracing
							the entire century</p
						>
						<span>DISCOVER MORE</span>
					</div>

					<ul id="businessList">
						<li>SEMICONDUCTOR</li>
						<li>DISPLAY & OLED</li>
						<li>OPTO ELECTRONICS</li>
					</ul>
				</div>
			</div>

			<div class="notice">
				<div class="notice-area">
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
		</div>
		<address>
			<div class="addContent">
				<div class="addPhone">
					<p
						>2374-36 JUNGBUDAERO, YANGJI-MYUN, CHEOIN-GU, YONGIN-SI, GYEONGGI-DO, 17162
						KOREA</p
					>
					<dl id="phoneNumber">
						<dt>TEL :</dt>
						<dd>+82.31.323.2552</dd>
						<dt>FAX :</dt>
						<dd>+82.31.323.2555</dd>
					</dl>
				</div>

				<span>COPYRIGHT 2016 TES CO., LTD. ALL RIGHTS RESERVED. DESIGNED BY FISH</span>
			</div>
		</address>
		<div class="test-container">
			<div class="container-inner"></div>
		</div>
	</div>
</div>
