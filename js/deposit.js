document.getElementById("btn-deposit").addEventListener("click", function () {
  // step 2: get the deposit amount from the deposit input field
  // for input fields, use .value to the value inside the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountStr = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountStr);

  // step 3: get the current deposit amount
  // for non-input(element other than input, textarea) use innerText to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  const oldDepositTotalStr = depositTotalElement.innerText;
  const oldDepositTotal = parseFloat(oldDepositTotalStr);

  // step 4: add numbers to set the total deposit
  const currentDepositAmount = oldDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositAmount;

  // step 5: get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const oldBalanceTotalStr = balanceTotalElement.innerText;
  const oldBalanceTotal = parseFloat(oldBalanceTotalStr);

  // step 6: calculate current total balance
  currentBalanceTotal = oldBalanceTotal + newDepositAmount;
  // set the balance
  balanceTotalElement.innerText = currentBalanceTotal;

  // step 7: clear the input field
  depositField.value = "";
});
