import { setupWorker } from 'msw';
import handlers from './handlers';
// 서비스 워커 셋업
export const worker = setupWorker(...handlers);
