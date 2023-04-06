// postMessage("I'm working before postMessage('ali').");

type Host = { hostId: number; hostName: string; cpu: number; isOn: boolean };

const createHostList = ({
	hostLength,
	isOnAllTrue,
}: {
	hostLength: number;
	isOnAllTrue: boolean;
}) => {
	const hostArray = Array(hostLength).fill(undefined);
	for (let index = 0; index < hostArray.length; index++) {
		const randomBoolean = Math.random() < 0.5 ? true : false;
		hostArray[index] = {
			hostId: index + 1,
			hostName: `host${index + 1}`,
			cpu: parseInt(`${Math.random() * 100}`),
			isOn: isOnAllTrue ? true : randomBoolean,
		};
	}
	return hostArray;
};

//<<!-- 수정코드-->
// {
// 	const result = Array.from({ length: hostLength }).map((item, index) => {
// 		const randomBoolean = Math.random() < 0.5 ? true : false;
// 		const resultItem: Host = {
// 			hostId: index + 1,
// 			hostName: `host${index + 1}`,
// 			cpu: parseInt(`${Math.random() * 100}`),
// 			isOn: isOnAllTrue ? true : randomBoolean,
// 		};
// 		return resultItem;
// 	});

// 	return result;
// };

//<<!-- 기존 코드 -->
// {
// 	const result = [];

// 	for (let index = 0; index < hostLength; index++) {
// 		const randomBoolean = Math.random() < 0.5 ? true : false;
// 		const resultItem: Host = {
// 			hostId: index + 1,
// 			hostName: `host${index + 1}`,
// 			cpu: parseInt(`${Math.random() * 100}`),
// 			isOn: isOnAllTrue ? true : randomBoolean,
// 		};

// 		result.push(resultItem);
// 	}

// 	return result;
// };

// onmessage = function (e) {
// 	// console.log(e);
// 	const result = createHostList(e.data);
// 	console.log(result);
// 	postMessage(result);
// };
let isResolve = false;
onmessage = function (e) {
	// const result = createHostList(e.data);
	const randomSeconds = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const randomSetTimeOut = () => {
		setTimeout(() => {
			let result;
			if (e.data.isOnAllTrue && !isResolve) {
				result = createHostList(e.data);
				isResolve = true;
			} else {
				result = createHostList({ ...e.data, isOnAllTrue: false });
			}

			console.log(result);
			postMessage(result);
			randomSetTimeOut();
		}, randomSeconds(1000, 5000));
	};

	randomSetTimeOut();
};
