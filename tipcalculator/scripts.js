// TODO: Get the bill amount
// TODO: Get the selected option
// TODO: Function to multiply the selected option by bill amount to get tip
// TODO: Calculate total bill
// TODO: Divide total bill by sharing people
// TODO: Return tip amount and total bill

"use strict";

function getBillAmount() {
    // Declare variables
    let subTotal = document.getElementById('billAmount').value;
    let tipPercent = document.getElementById('tipPercents').value;
    let numberOfBillSharers = document.getElementById('billSharers').value;
    
    // Calculate Tip
    let totalTip = (subTotal * tipPercent);
    let yourTip = totalTip / numberOfBillSharers;
        yourTip = Math.round(yourTip * 100) / 100;
        yourTip = yourTip.toFixed(2);
    
    // Calculate Total Bill
    let billResult = parseFloat(totalTip) + parseFloat(subTotal);
    
    // Display Results
    document.getElementById('returnedAmounts').style.display = 'block';
    document.getElementById("billResult").innerHTML = 'Your subtotal is $' + billResult + '.';
    document.getElementById('tipResult').innerHTML = 'Your share of the tip is $' + yourTip + '.';

}

// Call function onclick
document.getElementById("calculateTip").onclick = function () {
    getBillAmount();
}
