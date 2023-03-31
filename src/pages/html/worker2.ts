// postMessage("I'm working before postMessage('ali').");

type Host = { hostName: string; cpu: number; isOn: boolean };

const createHostList = ({
	hostLength,
	isOnAllTrue,
}: {
	hostLength: number;
	isOnAllTrue: boolean;
}) => {
	const result = [];

	for (let index = 0; index < hostLength; index++) {
		const randomBoolean = Math.random() < 0.5 ? true : false;
		const resultItem: Host = {
			hostName: `host${index + 1}`,
			cpu: parseInt(`${Math.random() * 100}`),
			isOn: isOnAllTrue ? true : randomBoolean,
		};

		result.push(resultItem);
	}

	return result;
};

// console.log(list);
// 왜 온메시지에 함수를 할당함?
// 아, 외부에서 이놈한테 포스트 때리면, 온메시지가 그냥 실행되는거구나.
// 그 메시지 이벤트가 첫번째 인자인가보네.
onmessage = function (e) {
	// console.log(e);
	const result = createHostList(e.data);
	console.log(result);
	postMessage(result);
};
