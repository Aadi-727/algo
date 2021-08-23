//? Reverse String
//////////////////////////////////////////////

function revString(str) {
	//* M1
	// 	return str.split("").reverse().join("");
	//* M2
	// let revString = "";
	// str.split("").forEach((rev) => (revString = rev + revString));
	// return revString;
	//* M3
	// return str.split("").reduce((reverseString, rev) => {
	// 	return rev + reverseString;
	// }, "");
	//* M4
	// let revString = "";
	// for (const rev of str) {
	// 	revString = rev + revString;
	// }
	// return revString;
}

//? Palindrome
//////////////////////////////////////////////

function isPalindome(value) {
	// 	const pal = value.split("").reverse().join("");
	// 	return pal === value;
}

// console.log(isPalindome("malayalam"));

//? Reverse INT
//////////////////////////////////////////////

function revInt(int) {
	// 	const revString = int.toString().split("").reverse().join("");
	// 	return parseInt(revString) * Math.sign(int); // Parse into a Integer
}

//? Capitalize letters
//////////////////////////////////////////////

function capitaliseLetters(str) {
	//* M1 -> for each
	//////////////////////////////////////////////
	// 	return str
	// 		.toLowerCase()
	// 		.split(" ")
	// 		.map((letter) => letter[0].toUpperCase() + letter.substr(1))
	// 		.join(" ");
	//* M2 -> with for loop
	//////////////////////////////////////////////
	// 	const strArray = str.toLowerCase().split(" ");
	// 	for (let i = 0; i < strArray.length; i++) {
	// 		strArray[i] =
	// 			strArray[i].substr(0, 1).toUpperCase() + strArray[i].substr(1);
	// 	}
	// 	return strArray.join(" ");
	//* M3 -> replace
	//////////////////////////////////////////////
	// return str.replace(/\b[a-z]/gi, (char) => {
	// 	return char.toUpperCase();
	// }); // \b -> word boundary g -> global i -> case insensitive
}

//? maxCharacter
//////////////////////////////////////////////
function maxCharacter(str) {
	// const charMap = {};
	// let maxNumber = 0;
	// let maxChar = "";
	// str.split("").forEach((char) => {
	// 	if (charMap[char]) {
	// 		charMap[char]++;
	// 	} else {
	// 		charMap[char] = 1;
	// 	}
	// });
	// for (let char in charMap) {
	// 	if (charMap[char] > maxNumber) {
	// 		maxNumber = charMap[char];
	// 		maxChar = char;
	// 	}
	// }
	// return maxChar;
}
//? fizzBuzz
//////////////////////////////////////////////
function fizzBuzz() {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	}
}

//? Call
const output = fizzBuzz();
console.log(output);
