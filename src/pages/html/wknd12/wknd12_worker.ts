// 웹 소켓 연결하기
const ws = new WebSocket('ws:localhost:8080');

ws.onopen = () => {
	console.log('연결! WebSocket');
};

ws.onmessage = (event) => {
	const message = JSON.parse(event.data);
	const { dataName, result } = message;

	if (dataName === 'hostList') {
		postMessage({ dataName, result });
		ws.send(JSON.stringify({ action: getOsInfo }));
	}

	if (dataName === 'osInfo') {
		postMessage({ dataName, result });
	}
};
//
let hostList = [];
let osInfo = [];

function getHostList() {
	return fetch('/hostList', { method: 'GET' })
		.then((response) => response.json())
		.then((result) => {
			console.log('hostList', result);
			postMessage({ dataName: 'hostList', result });
		})
		.catch((err) => {
			err.message;
		});
}

function getOsInfo() {
	return fetch('/osInfo', { method: 'GET' })
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
