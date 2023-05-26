import { v4 as uuid } from 'uuid';

export const hostList = [
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

export const osInfo = [
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

export const requestResultData = [hostList, osInfo];
