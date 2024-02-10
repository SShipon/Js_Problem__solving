function deleteInvalids(arr) {
    // Check if input array
    if (!Array.isArray(arr)) {
        return "Invalid Array";
    }

    const validNumbers = arr.filter(function(element) {
        return typeof element === 'number' && !isNaN(element);
    });

    return validNumbers;
}
 //all array data and function call 
const result = [1, null, undefined, 18, -19, NaN, "12", true, false  [1, 2], { ob: "lala" }]
const result1 = ["1", {num:2}, NaN]
const result2 = [1, 2, -3]
const result3 ={num: [1, 2, 3]}

 console.log(deleteInvalids(result)); 
 console.log(deleteInvalids(result1)); 
 console.log(deleteInvalids(result2)); 
 console.log(deleteInvalids(result3)); 
