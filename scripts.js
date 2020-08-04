// TODO: Get the bill amount
// TODO: Get the selected option
// TODO: Function to multiply the selected option by bill amount to get tip
// TODO: Calculate total bill
// TODO: Divide total bill by sharing people
// TODO: Return tip amount and total bill

// Variables
let subTotal = document.getElementById('billAmount').value;
let tipPercent = document.getElementById('tipPercents').value;
//let tipPercent = document.querySelectorAll("tipPercent").value
let numberOfBillSharers = document.getElementById('billSharers').value;
//let finalBill = billAmount + theTip;


function getBillAmount() {
    let theTip = 0;
    theTip = (subTotal * tipPercent) / numberOfBillSharers;
    theTip = Math.round(theTip * 100) / 100;
    theTip = theTip.toFixed(2);
    document.getElementById('returnedAmounts').style.display = 'block';
    document.getElementById('result').innerHTML = theTip;
    console.log(subTotal);
    console.log(tipPercent);
    console.log(numberOfBillSharers);
}

// Call function onclick
document.getElementById('calculateTip').onclick = function() {
    getBillAmount();
}