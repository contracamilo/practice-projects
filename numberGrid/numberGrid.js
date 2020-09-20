class GridRotator {
	constructor(values){
		this.values = values || [];
	}

	rotate(){
		this.values.unshift(this.values.pop());
	}

	round(){
		this.rotate();
		this.render();
	}

	render(){
		const [btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4] = this.values;
		const values = {btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4};
		
		for (const key in values) {
			document.getElementById(key).innerHTML = values[key];
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const gridRotator = new GridRotator([1, 2, 3, 6, 9, 8, 7, 4]);
	gridRotator.render();

	document.getElementById('btn5').addEventListener('click', () => gridRotator.round());
});

