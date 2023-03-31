<style>
	@media (min-width: 0px) {
		.body {
			display: flex;
			flex-direction: column;
		}

		.searchDiv {
			display: flex;
		}

		.mediaDiv {
			display: flex;
		}

		.sideTab {
			display: flex;
			flex-direction: column;
			gap: 10px;
			min-width: 200px;
			height: 100vh;
			overflow-y: scroll;
		}

		.home,
		.storage,
		.subscribe,
		.explorer,
		.more,
		.settings {
			display: flex;
			padding: 10px 0 0 10px;
		}

		.mainSection {
			display: flex;
			flex-direction: column;
		}

		.top {
			display: flex;
			flex-direction: column;
		}

		.searchTab {
			display: flex;
			justify-content: space-between;
			justify-items: center;
			align-items: center;
		}

		#search-form {
			display: flex;
			justify-content: center;
			flex-basis: 600px;
			height: 40px;
		}

		#search-form input[type='search'] {
			display: flex;
			min-width: 0;
			flex: 1;
		}
		#search-form input[type='submit'] {
			display: flex;
			width: 4em;
		}

		.profile {
			display: flex;
			border: 1px solid black;
			min-width: 142px;
			/* min-width 화면이 줄어도 영역이 줄어들지 않기 위해서 */
		}

		.profile ul li {
			display: inline;
			vertical-align: middle;
		}

		.category {
			display: flex;
			justify-content: flex-start;
		}

		.category ul li {
			display: inline;
			border: 1px solid black;
		}

		.mediaTab {
			display: flex;
			width: 100%;
			justify-content: center;
		}

		.mediaList {
			display: flex;
			flex-direction: column;
			width: 100%;
			padding: 0 16px;
		}

		.line_1 {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			gap: 10px;
		}

		.mediaList ul ~ ul li {
			display: flex;
			width: calc(25%- (10px * 3) / 4);
		}

		.media-1,
		.media-2,
		.media-3,
		.media-4 {
			display: flex;
			flex-direction: column;
			flex-basis: calc(25% - 30px * 3 / 4);
		}

		span[id*='back'] {
			height: 100px;
			background-color: mediumaquamarine;
		}

		span[id*='descr'] {
			height: 50px;
		}
	}

	@media (max-width: 800px) {
		#search-form {
			justify-content: flex-end;
		}
		#search-form input[type='search'] {
			display: none;
			flex: 1;
		}

		.media-1,
		.media-2,
		.media-3,
		.media-4 {
			display: flex;
			flex-direction: column;
			flex-basis: calc(50% - 10px * 2 / 2);
		}
	}

	@media (max-width: 600px) {
		#search-form {
			justify-content: flex-end;
		}
		#search-form input[type='search'] {
			display: none;
			flex: 1;
		}

		.media-1,
		.media-2,
		.media-3,
		.media-4 {
			display: flex;
			flex-direction: column;
			flex-basis: 100%;
		}
	}
</style>

<main>
	<div class="body">
		<div class="searchDiv">
			<div class="searchTab">
				<div class="homeButton">
					<p>YouTube</p>
				</div>
				<form id="search-form">
					<input type="search" />
					<input type="submit" value="검색" />
				</form>
				<div class="profile">
					<ul>
						<li>만들기</li>
						<li>알림</li>
						<li>프로필</li>
					</ul>
				</div>
			</div>
		</div>
		<!--  -->
		<div class="mediaDiv">
			<!--  -->
			<div class="side">
				<div class="sideTab">
					<div class="home">
						<ul>
							<li>홈</li>
							<li>Shorts</li>
							<li> 구독</li>
						</ul>
					</div>

					<div class="storage">
						<ul>
							<li>보관함</li>
							<li>시청 기록</li>
							<li>나중에 볼 동영상</li>
							<li>좋아요 표시한 동영상</li>
						</ul>
					</div>

					<div class="subscribe">
						<ul>
							<li><span>구독</span></li>
							<li>노마드 코더</li>
							<li>aaa</li>
							<li>bbb</li>
							<li>ccc</li>
						</ul>
					</div>

					<div class="explorer">
						<ul>
							<li>인기 급상승</li>
							<li>쇼핑</li>
							<li>음악</li>
							<li>영화</li>
							<li>실시간</li>
							<li>게임</li>
							<li>스포츠</li>
							<li>학습</li>
						</ul>
					</div>

					<div class="more">
						<ul>
							<li>YouTube Premium</li>
							<li>크리에이터 스튜디오</li>
							<li>YouTube Music</li>
							<li>YouTube Kids</li>
							<li>YouTube Kids</li>
							<li>YouTube TV</li>
						</ul>
					</div>

					<div class="settings">
						<ul>
							<li>설정</li>
							<li>신고 기록</li>
							<li>고객센터</li>
							<li>의견 보내기</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="mainSection">
				<div class="top">
					<div class="category">
						<ul>
							<li>전체</li>
							<li>음악</li>
							<li>실시간</li>
							<li>뉴스</li>
							<li>게임</li>
							<li>믹스</li>
							<li>피트니스</li>
							<li>뷰티 팁</li>
							<li>반려동물</li>
							<li>액션 어드벤처 게임</li>
							<li>요리</li>
							<li>최근에 업로드된 동영상</li>
							<li> 감상한 동영상</li>
							<li>새로운 맞춤 동영상</li>
						</ul>
					</div>
				</div>

				<div class="mediaTab">
					<div class="mediaList">
						<ul class="line_1">
							<li class="media-1">
								<span id="back">background-img</span>
								<span id="descr">자바스크립트 단기완성</span></li
							>
							<li class="media-2">
								<span id="back">background-img</span>
								<span id="descr">WEB1 - 21. 수업을 마치며 2/3</span></li
							>
							<li class="media-3">
								<span id="back">background-img</span>
								<span id="descr">기분이 풀리는 노래♬</span></li
							>
							<li class="media-4">
								<span id="back">backgounrd-img</span>
								<span id="descr">이전까지는 제발 긴장을 늦추지 마세요</span></li
							>
							<li class="media-1">
								<span id="back">background-img</span>
								<span id="descr">자바스크립트 단기완성</span></li
							>
							<li class="media-2">
								<span id="back">background-img</span>
								<span id="descr">WEB1 - 21. 수업을 마치며 2/3</span></li
							>
							<li class="media-3">
								<span id="back">background-img</span>
								<span id="descr">기분이 풀리는 노래♬</span></li
							>
							<li class="media-4">
								<span id="back">backgounrd-img</span>
								<span id="descr">이전까지는 제발 긴장을 늦추지 마세요</span></li
							>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
