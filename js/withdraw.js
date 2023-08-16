/* 
1. add event handler to the withdraw button
2. get the withdraw amount from the withdraw input field. make sure to parseFloat
3. get previous total amount
4. calculate total withdraw amount and set total withdraw
5. get the previous balance total
6. calculate new balance total and set new balance total
7. clear out the input field
*/

// step 1:
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step 2:
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountStr = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountStr);

  // step 3
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const oldWithdrawTotalStr = withdrawTotalElement.innerText;
  const oldWithdrawTotal = parseFloat(oldWithdrawTotalStr);

  // step 4:
  const currentWithdrawTotal = oldWithdrawTotal + newWithdrawAmount;

  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step 5:
  const balanceTotalElement = document.getElementById("balance-total");
  const oldBalanceTotalStr = balanceTotalElement.innerText;
  const oldBalanceTotal = parseFloat(oldBalanceTotalStr);

  // step 6
  const newBalanceTotal = oldBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;

  // step 7:
  withdrawField.value = "";
});
