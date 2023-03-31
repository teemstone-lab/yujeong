<style>
	body,
	.calTop,
	.calBottom {
		display: flex;
	}

	body {
		flex-direction: column;
		width: 400px;
		height: 500px;
	}

	form {
		display: flex;
		width: 100%;
		height: 150px;
		flex-wrap: wrap;
		align-items: flex-end;
		padding-bottom: 10px;
		border: 1px solid red;
	}

	input {
		font-size: 30px;
		text-align: right;
		overflow: hidden;
	}

	input:focus {
		outline: none;
	}
	.result {
		display: flex;
		flex-wrap: wrap;
		width: 400px;
	}

	.calcPad1 {
		display: flex;
		flex-direction: column;
	}

	.calcSign {
		display: flex;
	}

	.calcSign ul {
		display: flex;
	}

	calcSign ul li {
		display: flex;
	}

	.funcKeytop,
	.numbKey,
	.funcKeyRight {
		width: 100px;
		height: 100px;
		border: 1px solid black;
		font-size: 35px;
		line-height: 0;
	}

	.funcKeytop button {
		background-color: #a5a5a5;
	}

	.funcKeytop button:active {
		background-color: white;
	}
	.calcSign button :hover::before {
		background-color: #a5a5a5;
	}

	.padRow1 {
		display: flex;
		flex-wrap: wrap;
	}

	.padRow2 {
		display: flex;
		flex-direction: row;
		width: 300px;
	}

	.padRow2 .numbKey {
		display: flex;
		align-items: center;
		/* padding-left: 15%; */
		width: 200px;
		/* border-radius: 50px; */
	}

	.padRow2 .numbKey .num0 {
		display: flex;
		align-items: center;
		margin: 2%;
		padding-left: 15%;
		width: 200px;
		border-radius: 50px;
	}
	.padRow2 .decimalPoint {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90px;
	}

	.numbKey button {
		background-color: #333333;
		color: white;
		position: relative;
	}
	.numbKey button:active::after {
		/* background-color: rgba(255, 255, 255, 0.8); */
		/* background: red; */
		/* position: absolute; */
		/* border-radius: 50%; */
		/* top: 0; */
		/* left: 0; */
		/* width: 100%; */
		/* height: 100%; */
		/* content: ''; */
	}

	.numbKey button:active {
		background-color: #545454;
	}

	.funcKeyRight button {
		background-color: #fe9f0c;
		color: white;
	}

	.funcKeyRight button:active {
		background-color: white;
		color: #fe9f0c;
	}
	ul li {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	ul li button {
		width: 90px;
		height: 90px;
		border-radius: 50%;
		border: 1px solid black;
	}
</style>

<script>
	import { onMount } from 'svelte';

	class Calculator {
		constructor() {
			this.firstValue = null;
			this.secondValue = null;
			this.selectedOperator = null;
			this.currentValue = 0;
			this.displayText = '';
		}

		plus(n1, n2) {
			return n1 + n2;
		}

		minus(n1, n2) {
			return n1 - n2;
		}

		multi(n1, n2) {
			return n1 * n2;
		}

		divi(n1, n2) {
			return n1 / n2;
		}

		clear() {
			this.currentValue = 0;
			this.displayText = '';
			this.firstValue = null;
			this.secondValue = null;
			this.selectedOperator = null;
			console.log(this);
		}

		plusminus() {
			if (this.currentValue && this.firstValue && this.selectedOperator && this.secondValue) {
				this.currentValue = this.currentValue * -1;
				this.displayText = String(this.currentValue);
				return;
			}
			if (this.firstValue === null) {
				console.log('aaaa');
				this.firstValue = '-0';
				return;
			}

			if (this.firstValue === '-0') {
				console.log('bbb');
				this.firstValue = '0';
				return;
			}

			if (this.firstValue === '0') {
				console.log('cccc');
				this.firstValue = '-0';
				return;
			}

			if (this.firstValue) {
				if (!this.secondValue && !this.selectedOperator) {
					this.firstValue = String(this.firstValue * -1);
					this.displayText = this.firstValue;
					console.log(this);

					return;
				}
				if (this.firstValue && !this.secondValue && this.selectedOperator) {
					this.displayText = this.firstValue;
					console.log(this);
					return;
				}
			}

			if (this.firstValue && this.selectedOperator && this.secondValue) {
				this.secondValue = String(this.secondValue * -1);
				this.displayText = `${this.firstValue} ${this.selectedOperator} ${this.secondValue}`;
				console.log(this);
				return;
			}
		}

		percentage() {
			this.currentValue = this.currentValue * 0.01;
		}

		inputNumber(number) {
			// if (selectedOperator == null) {

			if (!this.selectedOperator) {
				const nextFirstValue = this.firstValue === null ? '' : String(this.firstValue);
				this.firstValue = nextFirstValue + String(number);
			} else {
				const nextSecondValue = this.secondValue === null ? '' : String(this.secondValue);
				this.secondValue = nextSecondValue + String(number);
			}

			this.displayText = this.displayText + String(number);
			console.log(this);
		}

		selectOperator(operator) {
			this.selectedOperator = operator;
			//이 클래스의 displayText 에는 이 클래스의 displayText 와 연산기호를 함께 표기해줄거다.
			// 인스턴스의 displayText에 값을 할당한다.
			// this.displayText + this.selectedOperator
			this.displayText = this.displayText + this.selectedOperator;
		}

		makeResult() {
			if (this.selectedOperator === '+') {
				const result = this.plus(Number(this.firstValue), Number(this.secondValue));
				this.currentValue = result;
				this.displayText = String(result);
				console.log(this);
				return;
			}

			if (this.selectedOperator === '-') {
				const result = this.minus(Number(this.firstValue), Number(this.secondValue));
				this.currentValue = result;
				this.displayText = String(result);
				console.log(this);
				return;
			}

			if (this.selectedOperator === '*') {
				const result = this.multi(Number(this.firstValue), Number(this.secondValue));
				this.currentValue = result;
				this.displayText = String(result);
				console.log(this);
				return;
			}

			if (this.selectedOperator === '/') {
				const result = this.divi(Number(this.firstValue), Number(this.secondValue));
				this.currentValue = result;
				this.displayText = String(result);
				console.log(this);
				return;
			}
		}

		getDisplayNumber() {
			return this.displayText;
		}
	}

	const calculator = new Calculator();

	// 작동 점검
	// calculator.inputNumber(1);
	// calculator.inputNumber(1);
	// calculator.inputNumber(1);
	// calculator.selectOperator('/');
	// calculator.inputNumber(1);
	// calculator.inputNumber(1);
	// console.log(calculator);
	// console.log(calculator.makeResult());

	onMount(() => {
		const pctg = document.querySelector('.percentage');
		const num1 = document.querySelector('.num1');
		const num2 = document.querySelector('.num2');
		const num3 = document.querySelector('.num3');
		const num4 = document.querySelector('.num4');
		const num5 = document.querySelector('.num5');
		const num6 = document.querySelector('.num6');
		const num7 = document.querySelector('.num7');
		const num8 = document.querySelector('.num8');
		const num9 = document.querySelector('.num9');
		const num0 = document.querySelector('.num0');
		const division = document.querySelector('.divi');
		const multiply = document.querySelector('.multi');
		const minus = document.querySelector('.minus');
		const plus = document.querySelector('.plus');
		const equal = document.querySelector('.equal');
		const input = document.querySelector('.result');
		const ac = document.querySelector('.allClear');

		ac.style.color = 'red';
		console.log(ac);

		const plma = document.querySelector('.plusMinus');
		plma.style.color = 'red';

		const plusMinuskHandler = () => {
			console.log('plusMinuskHandler');
		};

		const inputNumberHandler = (e) => {
			const number = Number(e.target.innerText);
			console.log('bb', number);
			calculator.inputNumber(number);

			input.value = calculator.getDisplayNumber();

			// 숫자 누르면 인풋창에 찍히는 기능
		};

		const inputACHandler = () => {
			console.log('inputACHandler');
			calculator.clear();
			input.value = calculator.getDisplayNumber();
		};

		const inputPlmaHandler = () => {
			console.log('inputPlmaHandler');
			calculator.plusminus();
			input.value = calculator.getDisplayNumber();
		};

		const inputPctgHandler = () => {
			//percentage()
			console.log('inputPctgHandler');
			calculator.percentage();
			input.value = calculator.percentage();
		};

		const inputDiviHandler = () => {
			console.log('inputDiviHandler');
			calculator.selectOperator('/');
			input.value = calculator.getDisplayNumber();
		};

		const inputMultiHandler = () => {
			console.log('inputMultiHandler');
			calculator.selectOperator('*');
			input.value = calculator.getDisplayNumber();
		};

		const inputMinusHandler = () => {
			//minus(n1, n2)
			console.log('inputMinusHandler');
			calculator.selectOperator('-');
			input.value = calculator.getDisplayNumber();
		};

		const inputPlusHandler = () => {
			//plus(n1, n2)
			console.log('inputPlusHandler');
			calculator.selectOperator('+');
			input.value = calculator.getDisplayNumber();

			// console.log(calculator);
		};

		const inputEqualHandler = () => {
			// 아직 정의 안함
			console.log(calculator.makeResult());
			console.log('inputEqualHandler');
			input.value = calculator.getDisplayNumber();
		};

		plma?.addEventListener('click', inputPlmaHandler);
		num0?.addEventListener('click', inputNumberHandler);
		num1?.addEventListener('click', inputNumberHandler);
		num2?.addEventListener('click', inputNumberHandler);
		num3?.addEventListener('click', inputNumberHandler);
		num4?.addEventListener('click', inputNumberHandler);
		num5?.addEventListener('click', inputNumberHandler);
		num6?.addEventListener('click', inputNumberHandler);
		num7?.addEventListener('click', inputNumberHandler);
		num8?.addEventListener('click', inputNumberHandler);
		num9?.addEventListener('click', inputNumberHandler);
		division?.addEventListener('click', inputDiviHandler);
		multiply?.addEventListener('click', inputMultiHandler);
		minus?.addEventListener('click', inputMinusHandler);
		plus?.addEventListener('click', inputPlusHandler);
		equal?.addEventListener('click', inputEqualHandler);
		pctg?.addEventListener('click', inputPctgHandler);
		ac?.addEventListener('click', inputACHandler);
	});
</script>

<main>
	<body>
		<!-- result -->
		<div class="calTop">
			<form>
				<input class="result" type="text" />
			</form>
		</div>

		<!-- keyPad -->
		<div class="calBottom">
			<div class="calcPad1">
				<div class="calcSign">
					<ul>
						<li class="funcKeytop"><button class="allClear">AC</button></li>
						<li class="funcKeytop"><button class="plusMinus">±</button></li>
						<li class="funcKeytop"><button class="percentage">%</button></li>
					</ul>
				</div>
				<div class="keyPad">
					<ul>
						<div class="padRow1">
							<li class="numbKey"><button class="num7">7</button></li>
							<li class="numbKey"><button class="num8">8</button></li>
							<li class="numbKey"><button class="num9">9</button></li>
							<li class="numbKey"><button class="num4">4</button></li>
							<li class="numbKey"><button class="num5">5</button></li>
							<li class="numbKey"><button class="num6">6</button></li>
							<li class="numbKey"><button class="num1">1</button></li>
							<li class="numbKey"><button class="num2">2</button></li>
							<li class="numbKey"><button class="num3">3</button></li>
						</div>
						<div class="padRow2">
							<li class="numbKey"><button class="num0">0</button></li>
							<li class="numbKey"><button class="decimalPoint">.</button></li>
						</div>
					</ul>
				</div>
			</div>
			<div class="calcPad2">
				<div class="elementary4">
					<ul>
						<li class="funcKeyRight"><button class="divi">÷</button></li>
						<li class="funcKeyRight"><button class="multi">×</button></li>
						<li class="funcKeyRight"><button class="minus">－</button></li>
						<li class="funcKeyRight"><button class="plus">＋</button></li>
						<li class="funcKeyRight"><button class="equal">＝</button></li>
					</ul>
				</div>
			</div>
		</div>
	</body>
</main>
