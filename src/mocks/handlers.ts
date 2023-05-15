import { rest } from 'msw';
import { v4 as uuid } from 'uuid';

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
	{ name: 'host1', cpu: 0, memory: 0 },
	{ name: 'host2', cpu: 0, memory: 0 },
	{ name: 'host3', cpu: 0, memory: 0 },
	{ name: 'host4', cpu: 0, memory: 0 },
	{ name: 'host5', cpu: 0, memory: 0 },
	{ name: 'host6', cpu: 0, memory: 0 },
	{ name: 'host7', cpu: 0, memory: 0 },
	{ name: 'host8', cpu: 0, memory: 0 },
	{ name: 'host9', cpu: 0, memory: 0 },
	{ name: 'host10', cpu: 0, memory: 0 },
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
