import { rest } from 'msw';
import { v4 as uuid } from 'uuid';
// import { WebSocketServer } from 'ws';

//
// const wss = new WebSocketServer({ port: 8080 });
//
const hostList = [
	{
		name: 'host1',
		id: uuid(),
	},
	{
		name: 'host2',
		id: uuid(),
	},
	{
		name: 'host3',
		id: uuid(),
	},
	{
		name: 'host4',
		id: uuid(),
	},
	{
		name: 'host5',
		id: uuid(),
	},
	{
		name: 'host6',
		id: uuid(),
	},
	{
		name: 'host7',
		id: uuid(),
	},
	{
		name: 'host8',
		id: uuid(),
	},
	{
		name: 'host9',
		id: uuid(),
	},
	{
		name: 'host10',
		id: uuid(),
	},
];

const osInfo = [
	{ name: 'host1', cpu: 0, memory: 0, hostId: hostList[0].id },
	{ name: 'host2', cpu: 0, memory: 0, hostId: hostList[1].id },
	{ name: 'host3', cpu: 0, memory: 0, hostId: hostList[2].id },
	{ name: 'host4', cpu: 0, memory: 0, hostId: hostList[3].id },
	{ name: 'host5', cpu: 0, memory: 0, hostId: hostList[4].id },
	{ name: 'host6', cpu: 0, memory: 0, hostId: hostList[5].id },
	{ name: 'host7', cpu: 0, memory: 0, hostId: hostList[6].id },
	{ name: 'host8', cpu: 0, memory: 0, hostId: hostList[7].id },
	{ name: 'host9', cpu: 0, memory: 0, hostId: hostList[8].id },
	{ name: 'host10', cpu: 0, memory: 0, hostId: hostList[9].id },
];

export const handlers = [
	rest.get('/hostList', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(hostList));
	}),

	rest.get('/osInfo', (req, res, ctx) => {
		const updatedOsInfo = osInfo.map((info) => ({
			...info,
			cpu: Math.floor(Math.random() * 100),
			memory: Math.floor(Math.random() * 100),
		}));
		return res(ctx.status(200), ctx.json(updatedOsInfo));
	}),
];

//
// wss.on('connection', (ws) => {
// 	ws.on('message', (message) => {
// 		const { action } = JSON.parse(message.toString());

// 		if (action === 'getHostList') {
// 			ws.send(JSON.stringify({ dataName: 'hostList', result: hostList }));
// 		}

// 		if (action === 'getOsInfo') {
// 			setInterval(() => {
// 				const updatedOsInfo = osInfo.map((info) => ({
// 					...info,
// 					cpu: Math.floor(Math.random() * 100),
// 					memory: Math.floor(Math.random() * 100),
// 				}));
// 				ws.send(JSON.stringify({ dataName: 'osInfo', result: updatedOsInfo }));
// 			}, 2000); // setInterval 함수의 닫는 괄호 추가
// 		}
// 	});
// });
