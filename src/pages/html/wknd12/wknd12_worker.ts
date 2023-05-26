let hostList = [];
let osInfo = {};

// const dev = process.env.NODE_ENV === 'development' ? '' : 'https://teemstone-lab.github.io';
const dev = process.env.NODE_ENV === 'development' ? '' : ' http://192.168.0.89:3000';

// Host-List 생성 함수
function getHostList() {
	return fetch(`${dev}/hostList`, { method: 'GET' })
		.then((response) => response.json())
		.then((result) => {
			console.log('hostList', result);
			postMessage({ dataName: 'hostList', result });
		})
		.catch((err) => {
			err.message;
		});
}

// Os-Info random 생성 함수
function getOsInfo() {
	return fetch(`${dev}/osInfo`, { method: 'GET' })
		.then((response) => response.json())
		.then((result) => {
			postMessage({ dataName: 'osInfo', result });
		})
		.catch((err) => {
			err.message;
		});
}

onmessage = function (e) {
	const message = e.data;
	if (message === 'hostList') {
		getHostList();
	}
	if (message === 'osInfo') {
		setInterval(() => {
			getOsInfo();
		}, 2000);
	}
};
