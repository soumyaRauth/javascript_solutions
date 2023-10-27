let value=null | undefined
let valueToNumber=Number(value)
console.log(typeof valueToNumber)
console.log(value)
console.log(valueToNumber) //*After conversion to number the value becomes NaN but yet it says the type is number. Means JS converts the string to type number if type casting is applied but yet it will show the value as NaN

//* string becomes NaN after number conversion
//* null becomes 0 after number conversion
//* undefined becomes NaN after number conversion
//* boolean becomes 1 or 0 based on boolean value after Number conversion 

