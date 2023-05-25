//1. 로직에서 사용할 변수 정의
let hostList = [];
let osInfo = {};

//2. 외부 https 경로 지정
// const dev2 = process.env.NODE_ENV === 'development' ? '' : 'https://teemstone-lab.github.io';
const dev2 = process.env.NODE_ENV === 'development' ? '' : 'http://192.168.0.89:3000';

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

//5. 응용) fetch 함수 모듈로 만들어보기
//  인자로 받아야 하는 것. 경로, 옵션
async function fetchGet(path: string) {
	const url = `${dev2}/${path}`;
	const result = await fetch(url);
	const data = await result.json();
	if (result.ok) {
		return data;
	} else {
		throw Error(data);
	}
}

//6. 응용) fetch 모듈로 기존 코드 교체
function getHostList3() {
	return fetchGet('hostList')
		.then((data) => {
			console.log('fetchGet() HostList', data);
			postMessage({ dataName: 'hostList', data });
		})
		.catch((error) => {
			console.log('fetchGet() HostList error', error);
		});
}

function getOsInfo3() {
	return fetchGet('osInfo')
		.then((data) => {
			console.log('fetchGet() OsInfo', data);
			postMessage({ dataName: 'osInfo', data });
		})
		.catch((error) => {
			console.log('fetchGet() OsInfo error', error);
		});
}

//4. 메인스레드에서 onMessage 받으면 실행할 내용
onmessage = function (e) {
	const message = e.data;
	if (message === 'hostList') {
		getHostList3();
	}
	if (message === 'osInfo') {
		setInterval(() => {
			getOsInfo3();
		}, 2000);
	}
};
