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

onmessage = function (e) {
	// console.log(e);
	const result = createHostList(e.data);
	console.log(result);
	postMessage(result);
};
