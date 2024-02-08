function monthlySavings(arr, livingCost) {
    // Check for invalid input
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    // Calculate total freelancer income
    const totalIncome = arr.reduce((sum, payment) => sum + payment, 0);

     // total bank Text
    const bankTax = totalIncome > 3000 ? 0.2 * totalIncome : 0;
    const remainingAmount = totalIncome - bankTax - livingCost;
    if (remainingAmount >= 0) {
        return remainingAmount;
    } else {
        return "earn more";
    }
}

 // function call and result 
console.log(monthlySavings([1000, 2000, 3000], 5400)); 
console.log(monthlySavings([1000, 2000, 2500], 5000)); 
console.log(monthlySavings([900, 2700, 3400], 10000)); 
console.log(monthlySavings(100, [900, 2700, 3400])); 