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
