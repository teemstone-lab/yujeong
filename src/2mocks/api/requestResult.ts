import { rest } from 'msw';
import { requestResultData } from './data/requestResultData';
const [hostList, osInfo] = requestResultData;

// 모킹 api 설정
// 첫번째 인자: 경로, 두번째 인자: request, response, context
// reponse 와 context.json 을 조합하면 API 응답 값을 넣을 수 있음
// 원하는 API가 여러 개라면, handlers 배열에 여러 개를 넣어주기

const handlers = [
	rest.get('/hostList', (_, res, ctx) => {
		return res(ctx.json(hostList));
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

export default handlers;
