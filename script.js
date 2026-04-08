// 1. Create a Date object
var date= new Date()
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();
// 4. Add leading zeros to month/day if needed
month = month.toString().padStart(2, "0");
day = day.toString().padStart(2, "0");
// 5. Create a string in the format: "Today is MM/DD/YYYY"
let formattedDate = month + "/" + day + "/" + year;
// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").innerHTML = formattedDate;


// ==========================
// Part 2: Number Conversion
// ==========================
// 1. Create at least 4 separate variables:
let num1 = "42"; // integer
let num2 = "12";
let num3 = "3.14"; // float
let num4 = "hello"; // string
// 2. Convert each variable to a number using Number() 
let num1Converted = Number(num1); // 42
let num2Converted = Number(num2); // 12
let num3Converted = Number(num3); // 3.14
let num4Converted = Number(num4); // NaN
//Check if it is NaN using Number.isNaN()
console.log(Number.isNaN(num1Converted)); // false
console.log(Number.isNaN(num2Converted)); // false
console.log(Number.isNaN(num3Converted)); // false
console.log(Number.isNaN(num4Converted)); // true
// c. Check if it is an integer using Number.isInteger()
console.log(Number.isInteger(num1Converted)); // true
console.log(Number.isInteger(num2Converted)); // true
console.log(Number.isInteger(num3Converted)); // false
console.log(Number.isInteger(num4Converted)); // false

// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
console.log(`Original: ${num1}, Converted: ${num1Converted}, Is NaN: ${Number.isNaN(num1Converted)}, Is Integer: ${Number.isInteger(num1Converted)}`);
console.log(`Original: ${num2}, Converted: ${num2Converted}, Is NaN: ${Number.isNaN(num2Converted)}, Is Integer: ${Number.isInteger(num2Converted)}`);
console.log(`Original: ${num3}, Converted: ${num3Converted}, Is NaN: ${Number.isNaN(num3Converted)}, Is Integer: ${Number.isInteger(num3Converted)}`);
console.log(`Original: "${num4}", Converted: ${num4Converted}, Is NaN: ${Number.isNaN(num4Converted)}, Is Integer: ${Number.isInteger(num4Converted)}`);

// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)
let finalOutput = `Original: ${num1}, Converted: ${num1Converted}, Is NaN: ${Number.isNaN(num1Converted)}, Is Integer: ${Number.isInteger(num1Converted)}\n` +
                  `Original: ${num2}, Converted: ${num2Converted}, Is NaN: ${Number.isNaN(num2Converted)}, Is Integer: ${Number.isInteger(num2Converted)}\n` +
                  `Original: ${num3}, Converted: ${num3Converted}, Is NaN: ${Number.isNaN(num3Converted)}, Is Integer: ${Number.isInteger(num3Converted)}\n` +
                  `Original: "${num4}", Converted: ${num4Converted}, Is NaN: ${Number.isNaN(num4Converted)}, Is Integer: ${Number.isInteger(num4Converted)}`;
 
if (Number.isNaN(num4Converted)) {
    finalOutput += `\nNote: "${num4}" cannot be converted to a number.`;
}else {
    finalOutput += `\nNote: "${num4}" was converted to ${num4Converted}.`;
}


                  // 5. Display the final string in the element with id="numberOutput"
document.getElementById("numberConversionOutput").innerHTML = finalOutput.replace(/\n/g, "<br>");

// ==========================
// Part 3: Math & Formatting
// ==========================
1. //Create at least 2-3 numeric variables
let a=11;
let b=5;
let c=3.14;
// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
let addition = a + b; // 16
let multiplication = a * c; // 34.54

// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
let additionFormatted = addition.toLocaleString(); // "16"
let multiplicationFormatted = multiplication.toFixed(2); // "34.54"
if (Number.isInteger(addition)) {
    additionFormatted += " (integer)";
}else {
    additionFormatted += " (not an integer)";
}
if (Number.isInteger(multiplication)) {
    multiplicationFormatted += " (integer)";
}else {
    multiplicationFormatted += " (not an integer)";
}

// 4. Build a string showing your results

let mathOutput = `Addition: ${a} + ${b} = ${additionFormatted}\n` +
                 `Multiplication: ${a} * ${c} = ${multiplicationFormatted}`;

// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").innerHTML = mathOutput.replace(/\n/g, "<br>");

// ==========================
// Part 4: Conditionals
// ==========================
// 1. Write at least TWO if/else statements
