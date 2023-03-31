<style>
	@media (min-width: 0px) {
		.body {
			display: flex;
			border: 1px solid black;
			padding: 20px;
			column-gap: 20px;
		}

		.itemList {
			display: flex;
			width: 100%;
			gap: 10px;
		}

		.itemList > li {
			display: flex;
			justify-content: center;
			border: 1px solid red;
			padding: 20px 20px;
			width: 25%;
		}

		ul > li > ul {
			display: flex;
			flex-direction: column;
			border: 1px solid blue;
			width: 100%;
		}

		ul > li > ul > li {
			display: flex;
			position: relative;
			gap: 10px;
		}

		.tableDescr {
			display: flex;
		}

		.back {
			background-color: yellowgreen;
			width: 100%;
			height: 100px;
		}

		.homeSVC {
			position: absolute;
			background-color: violet;
			font-size: 10px;
		}

		.descr {
			position: absolute;
			padding-top: 80px;
			font-size: 10px;
		}

		.heart {
			position: absolute;
			padding-top: 80px;
			right: 0;
			font-size: 10px;
		}
	}

	@media (min-width: 481px) and (max-width: 1200px) {
		.body {
			display: flex;
			border: 1px solid black;
			padding: 20px;
			column-gap: 20px;
		}

		.itemList {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			gap: 10px;
			justify-content: space-between;
		}

		.itemList > li {
			display: flex;
			justify-content: center;
			border: 1px solid red;
			padding: 20px 20px;
			width: calc(50% - (10px * 3) / 4);
		}

		ul > li > ul {
			display: flex;
			flex-direction: column;
			border: 1px solid blue;
			width: 100%;
		}

		ul > li > ul > li {
			display: flex;
			position: relative;
			gap: 10px;
		}

		.tableDescr {
			display: flex;
		}

		.back {
			background-color: yellowgreen;
			width: 100%;
			height: 100px;
		}

		.homeSVC {
			position: absolute;
			background-color: violet;
			font-size: 10px;
		}

		.descr {
			position: absolute;
			padding-top: 80px;
			font-size: 10px;
		}

		.heart {
			position: absolute;
			padding-top: 80px;
			right: 0;
			font-size: 10px;
		}
	}

	@media (min-width: 0px) and (max-width: 480px) {
		.body {
			display: flex;
			flex-direction: column;
			border: 1px solid black;
			padding: 20px;
			column-gap: 20px;
		}

		.itemList {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			gap: 10px;
		}

		.itemList > li {
			display: flex;
			width: 100%;
			justify-content: center;
			border: 1px solid red;
			padding: 20px 20px;
		}

		ul > li > ul {
			display: flex;
			flex-direction: column;
			border: 1px solid blue;
			width: 100%;
		}

		ul > li > ul > li {
			display: flex;
			position: relative;
			gap: 10px;
		}

		.tableDescr {
			display: flex;
		}

		.back {
			background-color: yellowgreen;
			width: 100%;
			height: 100px;
		}

		.homeSVC {
			position: absolute;
			background-color: violet;
			font-size: 10px;
		}

		.descr {
			position: absolute;
			padding-top: 80px;
			font-size: 10px;
		}

		.heart {
			position: absolute;
			padding-top: 80px;
			right: 0;
			font-size: 10px;
		}
	}

	/* 테블릿 */
	/* @media (min-width: 481px) and (max-width: 1200px) {
		ul {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			border: 1px solid black;
			padding: 20px;
			gap: 20px;
		}

		ul li {
			display: flex;
			justify-content: center;
			width: calc(50% - (20px * 1) / 2);
			border: 1px solid black;
			padding: 20px 20px;
			gap: 20px;
		}
	}

	@media (min-width: 0px) and (max-width: 480px) {
		ul {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			border: 1px solid black;
			padding: 20px;
			gap: 20px;
		}

		ul li {
			display: flex;
			justify-content: center;
			border: 1px solid black;
			padding: 20px 20px;
			gap: 20px;
		}
	} */
</style>

<div>
	<head></head>

	<body>
		<div class="body">
			<ul class="itemList">
				<li class="prideZone">
					<ul class="prideTable">
						<li
							><span class="back"></span>
							<span class="homeSVC">홈서비스</span>
							<span class="descr">2012년식 휘발유</span>
							<span class="heart">♥ | VS</span>
						</li>
						<li class="tableDescr">기아 올뉴프라이드</li>
					</ul>
				</li>

				<li class="aveoZone">
					<ul class="aveoTable">
						<li
							><span class="back"></span>
							<span class="homeSVC">홈서비스</span>
							<span class="descr">2012년식 휘발유</span>
							<span class="heart">♥ | VS</span>
						</li>
						<li class="tableDescr">쉐보레/대우 아베오</li>
					</ul>
				</li>
				<li class="aveoZone">
					<ul class="aveoTable">
						<li
							><span class="back"></span>
							<span class="homeSVC">홈서비스</span>
							<span class="descr">2012년식 휘발유</span>
							<span class="heart">♥ | VS</span></li
						>
						<li class="tableDescr">쉐보레/대우 스파크</li>
					</ul>
				</li>
				<li class="aveoZone">
					<ul class="aveoTable">
						<li
							><span class="back"></span>
							<span class="homeSVC">홈서비스</span>
							<span class="descr">2012년식 휘발유</span>
							<span class="heart">♥ | VS</span></li
						>
						<li class="tableDescr">르노삼성 뉴SM3</li>
					</ul>
				</li>
			</ul>
		</div>
	</body>
</div>
