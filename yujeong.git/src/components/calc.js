export class Calculator {
	constructor() {
		this.firstValue = null;
		this.secondValue = null;
		this.selectedOprator = null;
		this.currentValue = 0;
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
	}

	plusminus() {
		this.currentValue = this.currentValue * -1;
	}

	percentage() {
		this.currentValue = this.currentValue * 0.01;
	}

	inputNumber(number) {
		// if (selectedOprator == null) {

		if (!this.selectedOeprator) {
			const nextFirstValue = this.firstValue === null ? '' : String(this.firstValue);
			this.firstValue = nextFirstValue + String(number);
		} else {
			const nextSecondValue = this.secondValue === null ? '' : String(this.secondValue);
			this.secondValue = nextSecondValue + String(number);
		}
	}

	selectOeprator(operator) {
		this.selectedOeprator = operator;
	}

	makeResult() {
		if (this.selectedOeprator === '+') {
			return this.plus(Number(this.firstValue), Number(this.secondValue));
		}

		if (this.selectedOeprator === '-') {
			return this.minus(Number(this.firstValue), Number(this.secondValue));
		}

		if (this.selectedOeprator === '*') {
			return this.multi(Number(this.firstValue), Number(this.secondValue));
		}

		if (this.selectedOeprator === '/') {
			return this.divi(Number(this.firstValue), Number(this.secondValue));
		}
	}
}
