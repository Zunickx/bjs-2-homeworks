"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let oneRoot = 0;
	let firstRoot = 0;
	let secondRoot = 0;
	let d = Math.pow(b, 2) - (4 * a * c);
	console.log(d);

	if (d == 0) {
		oneRoot = -b / (2 * a);
		arr.push(oneRoot);
		console.log(arr);
	} else if (d > 0) {
		firstRoot = (-b + Math.sqrt(d)) / (2 * a);
		arr.push(Number(firstRoot.toFixed(2)));
		secondRoot = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(Number(secondRoot.toFixed(2)));
		console.log(arr);
	}

	return arr;
}

solveEquation(1, 4, 1);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentMounth = (percent / 12) / 100;
	console.log(percentMounth);
	let loanBody = amount - contribution;
	let payUser = loanBody * (percentMounth + (percentMounth / (((1 + percentMounth) ** countMonths) - 1)));
	let totalDebt = payUser * countMonths;
	console.log(Number(totalDebt.toFixed(2)));
	return Number(totalDebt.toFixed(2));
}

calculateTotalMortgage(10, 0, 50000, 12);