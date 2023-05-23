//1. 로직에서 사용할 변수 정의
let hostList = [];
let osInfo = {};

//2. 외부 https 경로 지정
const dev2 = process.env.NODE_ENV === 'development' ? '' : 'https://teemstone-lab.github.io';

//3. 워커 실행시 사용할 로직 정의
//   즉시 실행, fetch API 사용

// hostList data 호출하는 함수
function getHostList2() {
	return fetch(`${dev2}/hostList`, { method: 'GET' })
		.then((response) => response.json())
		.then((result) => {
			console.log('getHostList() → hostList 반환', result);
			postMessage({ dataName: 'hostList', result });
		})
		.catch((err) => {
			console.log('getHostList 에러남', err.message);
		});
}

// OS-info data 호출하는 함수
function getOsInfo2() {
	return fetch(`${dev2}/osInfo`, { method: 'GET' })
		.then((response) => response.json())
		.then((result) => {
			console.log('getOsInfo() → osInfoList 반환', result);
			postMessage({ dataName: 'osInfo', result });
		})
		.catch((err) => {
			console.log('getHostList 에러남', err.message);
		});
}

//4. 메인스레드에서 onMessage 받으면 실행할 내용
onmessage = function (e) {
	const message = e.data;
	if (message === 'hostList') {
		getHostList2();
	}
	if (message === 'osInfo') {
		setInterval(() => {
			getOsInfo2();
		}, 2000);
	}
};

//5. 응용) fetch 함수 모듈로 만들어보기
//  인자로 받아야 하는 것. 경로, 옵션
async function fetchGet(path) {
	const url = '${dev2}/${path}';
	const result = await fetch(url);
	const data = await result.json();
	if (result.ok) {
		return data;
	} else {
		throw Error(data);
	}
}

//6. 응용) fetch 모듈로 기존 코드 교체
function getOsInfo3() {
	return fetchGet('/host')
		.then((data) => {
			console.log('fetchGet 함수 data', data);
		})
		.catch((error) => {
			console.log('fetchGet 함수 error', error);
		});
}
