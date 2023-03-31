<style>
	.body {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
		text-align: center;
		border: 1px solid black;
		gap: 10px;
	}

	/* 전단지 지참시 모든 품목 10% 할인 */
	.top-bubble {
		order: 1;
		width: 100%;
		border: 1px solid blue;
		background-color: red;
	}

	.top-bubble .floating-text-top {
		top: 10px;
	}

	.top-bubble .floating-text-top strong {
		color: yellow;
	}
	/* 전단지 지참시 모든 품목 10% 할인 */

	/* 2016.11.06(일) GRAND OPEN */
	.center {
		order: 2;
	}
	.center p {
		display: flex;
		flex-flow: column;
		border: 1px solid black;
	}

	.center-text1 {
		order: 2;
		width: 100%;
		text-align: center;
		font-size: 45px;
		color: red;
		margin-top: -15px;
	}

	.center-text2 {
		order: 1;
		width: 100%;
		text-align: center;
		font-size: 24px;
		font-weight: bold;
	}

	.center-text1 + .center-text2 {
		margin-top: 20px;
	}
	/* 2016.11.06(일) GRAND OPEN */

	/* 애견용품 할인매장 도그버디 */
	.title-area {
		order: 3;
		display: flex;
		flex-flow: row;
		justify-content: center;
		top: 200px;
		left: 0;
		width: 100%;
		border: 1px solid black;
		gap: 10px;
		padding-bottom: 10px;
	}

	.title-area h1 {
		order: 2;
	}
	.title-area p {
		order: 1;
	}
	/* 애견용품 할인매장 도그버디 */

	/* 내 반려견의 편안한 안식처, ~ */
	.center-bubble {
		order: 4;
		display: inline-flex;
		align-items: baseline;
		justify-content: center;
		border: 1px solid hotpink;
	}

	.center-bubble strong {
		font-weight: bold;
	}

	.center-bubble p strong {
		color: red;
	}
	/* 내 반려견의 편안한 안식처, ~ */

	/* 영업시간 */
	.bottom-map {
		order: 5;
		margin-top: 100px;
		background: blue;
		padding: 20px;
		text-align: left;
		margin-left: 10px;
	}

	dl dt {
		display: inline-block;
	}

	dl dd {
		display: inline-block;
		float: none;
		margin-left: 10px;
	}

	.bottom-map > dl {
		color: white;
		border: 1px solid violet;
	}
	.bottom-map > dl > dt {
		display: inline-block;
		vertical-align: top;
		color: yellow;
	}

	.bottom-map > dl > dd {
		display: inline-block;
	}
	.bottom-map > dl > dd > dl {
		display: block;
		font-size: 15px;
	}
	/* 영업시간 */

	/* 문의 */
	address {
		font-style: normal;
	}
	address dl dt {
		color: yellow;
	}
	address dl dd {
		color: white;
		font-size: 20px;
	}
	/* 문의 */

	.test {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.test > li {
		height: 20px;
		background: palegreen;
	}
	.test2 > p {
		background: red;
	}
</style>

<script>
	import Header from '../../components/header/Header.svelte';
</script>

<div>
	<Header />

	<div> html1 </div>

	<head>
		<title>도그버디</title>
	</head>

	<div class="body">
		<div class="title-area">
			<h1><strong>도그버디</strong></h1>
			<p><span>애견용품 할인매장</span></p>
		</div>

		<div class="center">
			<p>
				<strong class="center-text1"> GRAND OPEN </strong>
				<span class="center-text2">2016.11.06(일)</span>
			</p>
		</div>

		<div class="top-bubble">
			<p class="floating-text-top">전단지 지참시 모든 품목 <strong>10% 할인</strong></p>
		</div>

		<div class="center-bubble">
			<p
				>내 반려견의 편안한 안식처, 애견용품 할인매장 도그버디가<br /><strong
					>여러분과 함께합니다!</strong
				></p
			>
		</div>
		<!-- <dl>
		<dt>영업시간</dt>
		<dt>평일</dt>
		<dd>AM10:00~PM10:00</dd>
		<dt>주말</dt>
		<dd>AM10:00~PM8:00</dd>
	</dl> -->
		<div class="bottom-map">
			<dl>
				<dt>영업시간</dt>
				<dd>
					<dl>
						<dt>평일</dt>
						<dd>AM10:00~PM10:00</dd>
					</dl>
					<dl>
						<dt>주말</dt>
						<dd>AM10:00~PM8:00</dd>
					</dl>
				</dd>
			</dl>

			<address>
				<dl>
					<dt> 문의 </dt>
					<dd> 070-4266-9323</dd>
				</dl>
			</address>
		</div>
	</div>
</div>

<ul class="test">
	<li></li>
	<li></li>
</ul>

<div class="test2">
	<p>
		asdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa
		asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda
		sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a
		asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as
		asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda
		asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa
		asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda
		sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a
		asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as
		asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda
		asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa
		asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda
		sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a
		asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as
		asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda
		asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa
		asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda
		sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a
		asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as
		asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda
		asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asdasdsdasd as asdd a asdasdasda sdasdasdaa
		asda asdasdsdasd as asdd a asdasdasda sdasdasdaa asda asd
	</p>
</div>
<!-- <div>
			<img src="../../../public/vite.svg" />
		</div> -->
