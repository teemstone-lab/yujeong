//모킹하려는 api를 handlers 에 위치시킨다. 연관된 api 끼리 묶어주기 위해서

import requestResultHandler from './api/requestResult';

const handlers = [...requestResultHandler];

export default handlers;
