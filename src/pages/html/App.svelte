<script>
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function generateStudentData() {
		const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
		const ages = [18, 19, 20, 21, 22];
		const money = [500, 1000, 1500, 2000, 2500];
		const races = ['Asian', 'Black', 'Caucasian', 'Hispanic', 'Mixed'];
		const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
		const skills = ['Math', 'Science', 'Art', 'Music', 'Sports'];
		const interests = ['Reading', 'Gaming', 'Traveling', 'Cooking', 'Photography'];
		const aptitudes = ['Logical', 'Creative', 'Analytical', 'Social', 'Practical'];

		return {
			name: names[getRandomInt(0, names.length - 1)],
			age: ages[getRandomInt(0, ages.length - 1)],
			money: money[getRandomInt(0, money.length - 1)],
			race: races[getRandomInt(0, races.length - 1)],
			location: locations[getRandomInt(0, locations.length - 1)],
			skill: skills[getRandomInt(0, skills.length - 1)],
			interest: interests[getRandomInt(0, interests.length - 1)],
			aptitude: aptitudes[getRandomInt(0, aptitudes.length - 1)],
		};
	}

	function generateSampleData(numStudents) {
		const students = [];
		for (let i = 0; i < numStudents; i++) {
			students.push(generateStudentData());
		}
		return students;
	}

	const sampleData = generateSampleData(10000);
	console.log(sampleData);
	// mock data

	console.time('test');
	const studentTestList = sampleData
		.map((item) => item)
		.map((item) => item)
		.map((item) => item);
	// .filter((student, i, arr) => {
	// 	// arr[i].age = arr[i].age + 1;
	// 	return student.name === 'Alice' && student.race === 'Asian';
	// })
	// .map((student) => {
	// 	return { ...student, age: student.age + 1 };
	// });
	console.timeEnd('test');
	console.log(studentTestList);

	//filter 예제
</script>
