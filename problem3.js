function calculateMoney(tickets) {
 
    if (!Number.isInteger(tickets) || tickets < 0) {
        return "Error: Invalid input. Please provide  Positive Number.";
    }
    // Constants
    const ticketPrice = 120;
    const security = 500;
    const CostPerStaff = 50;
    const staffCount = 8;
    //total amount 
    const totalIncome = tickets * ticketPrice;
    const totalExpenses = security + (staffCount * CostPerStaff);
    const remainingAmount = totalIncome - totalExpenses;
    return remainingAmount;
}
const inputTickets = -130 ;
const result = calculateMoney(inputTickets);

console.log(result);