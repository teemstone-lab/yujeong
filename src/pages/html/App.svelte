<!-- 	
<script>
let maxSequence = function(arr){
	let max = 0;
	let sum = arr.reduce(function(ac, cv) {
		if(ac < 0) {
			ac = 0;
		}
		if(ac > max) {
			max = ac;
		}
		return ac + cv;
	}, 0);
	return Math.max(sum, max);
}
</script> -->
<script>
	const arr = [-1, -2, 3, 0, -1, 0, 4, -2];

	const maxSum = arr.reduce(
		(result, _, i) => {
			let sum = 0;
			for (let j = i; j < arr.length; j++) {
				sum += arr[j];
				if (sum > result.sum) {
					result.sum = sum;
					result.start = i;
					result.end = j;
				}
			}
			return result;
		},
		{ sum: -Infinity, start: 0, end: 0 },
	);

	console.log(
		`총합의 구간은 [${arr.slice(maxSum.start, maxSum.end + 1)}] 이며, 합은 ${
			maxSum.sum
		} 입니다.`,
	);
</script>
