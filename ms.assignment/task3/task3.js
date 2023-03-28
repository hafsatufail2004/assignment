function calDiscounts(pPrice, disPercentage) {
    if (disPercentage >= 50) {
        console.error('Error: Invalid discount percentage!');
        return;
    }
    const discountAmount = pPrice * (disPercentage / 100);
    const fPrice = pPrice - discountAmount;
    console.log(`Original Price:$${pPrice.toFixed(2)}`);
    console.log(`Discount Percentage: $${disPercentage}%`);
    console.log(`Discount Amount: $${discountAmount.toFixed(2)}`);
    console.log(`Final Price: $${fPrice.toFixed(2)}`);
}
//calDiscounts(50,20);
//calDiscounts(70,30);
calDiscounts(90, 30);
export {};
