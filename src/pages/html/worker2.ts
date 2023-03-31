// postMessage("I'm working before postMessage('ali').");

type Host = { hostName: string; cpu: number; isOn: boolean };

const createHostList = ({
	hostLength,
	isOnAllTrue,
}: {
	hostLength: number;
	isOnAllTrue: boolean;
}) => {
	// 왜 리절트를 선언하지?
	const result = [];

	for (let index = 0; index < hostLength; index++) {
		const randomBoolean = Math.random() < 0.5 ? true : false;
		const resultItem: Host = {
			hostName: `host${index + 1}`,
			cpu: parseInt(`${Math.random() * 100}`),
			isOn: isOnAllTrue ? true : randomBoolean,
		};
		// console.log(resultItem);
		result.push(resultItem);
	}
	//아, 포문 내부에서는 값을 뭉칠 수가 없으니, 외부 변수 리절트에 모아서, 그 바구니를 반환하나보네.
	return result;
};

// console.log(list);
// 왜 온메시지에 함수를 할당함?
// 아, 외부에서 이놈한테 포스트 때리면, 온메시지가 그냥 실행되는거구나.
// 그 메시지 이벤트가 첫번째 인자인가보네.
onmessage = function (e) {
	// console.log(e);
	const result = createHostList(e.data);
	postMessage(result);
};
