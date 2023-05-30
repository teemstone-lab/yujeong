//1. 로직에서 사용할 변수 정의
let hostList = [];
let osInfo = {};

//2. 외부 https 경로 지정
const dev2 = process.env.NODE_ENV === 'development' ? '' : 'https://teemstone-lab.github.io';

//3. 워커 실행시 사용할 로직
// get 옵션 fetch
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

// hostList 데이터 호출
function getHostList3() {
	return fetchGet('hostList')
		.then((data) => {
			postMessage({ dataName: 'hostList', data });
			// console.log('fetchGet() HostList', data);
		})
		.catch((error) => {
			console.log('fetchGet() HostList error', error);
		});
}

// Os-Info 데이터 호출
function getOsInfo3() {
	return fetchGet('osInfo')
		.then((data) => {
			postMessage({ dataName: 'osInfo', data });
			// console.log('fetchGet() OsInfo', data);
		})
		.catch((error) => {
			console.log('fetchGet() OsInfo error', error);
		});
}

// postMessage 받으면 실행할 내용
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

//
//
//
// previous ver.
// hostList 데이터 호출하는 함수
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

// OS-info 데이터 호출하는 함수
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
