export interface Host {
	id: number;
	top: number;
	cpu: number;
	mem: number;
	swap: number;
	disk: number;
	isOn: boolean;
}
type MessageEventArgument = { size: number; isAllTrue: boolean };

onmessage = function (e: MessageEvent<MessageEventArgument>) {
	type Option = { isOn: boolean };

	// 외부세계에서 주는 데이터는 e.data에 할당됨
	// 만약 e.data에 {size:number,isAllTrue:boolean}을 준다면

	const size = e.data.size;
	const isAllTrue = e.data.isAllTrue;

	let currentId = 1;
	const createMockHost = (option: Option = { isOn: false }): Host => {
		const direction = option.isOn;
		return {
			id: currentId++,
			top: parseInt(`${Math.random() * 100}`),
			cpu: parseInt(`${Math.random() * 100}`),
			mem: parseInt(`${Math.random() * 100}`),
			swap: parseInt(`${Math.random() * 100}`),
			disk: parseInt(`${Math.random() * 100}`),
			isOn: direction ? true : Math.random() > 0.5,
		};
	};

	const creatMockHostArray = (size: number, isAllTrue: boolean = false) => {
		const result: Host[] = [];
		const initializingOption = { isOn: true };

		// if (isAllTrue) {
		// 	for (let index = 0; index < size; index++) {
		// 		result.push(createMockHost(initializingOption));
		// 	}
		// }

		// if (!isAllTrue) {
		for (let index = 0; index < size; index++) {
			isAllTrue
				? result.push(createMockHost(initializingOption))
				: result.push(createMockHost());
		}
		// }

		return result;
	};

	const result = creatMockHostArray(size, isAllTrue);
	postMessage(result);
};
