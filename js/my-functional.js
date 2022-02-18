function gatInputValue(fieldId) {
  const inputValue = document.getElementById(fieldId);
  const value = parseFloat(inputValue.value);
  inputValue.value = '';
  return value;
}

function getInnerTextValue(fieldId) {
  const inputInnerTextValue = document.getElementById(fieldId);
  const value = parseFloat(inputInnerTextValue.innerText);
  return value;
}

function updateTotal(fieldId, amount) {
  const totalTag = document.getElementById(fieldId);
  const previousTotal = parseFloat(totalTag.innerText);
  const currentTotal = previousTotal + amount;
  totalTag.innerText = currentTotal;
}

function updateBalance(amount, isAdding) {
  const balanceTag = document.getElementById('balance-total');
  const previousBalance = parseFloat(balanceTag.innerText);
  let currentBalance;
  if (isAdding == true) {
    currentBalance = previousBalance + amount;
  } else if (isAdding == false) {
    currentBalance = previousBalance - amount;
  }
  balanceTag.innerText = currentBalance;
}

// handle deposit button
document
  .getElementById('deposit-button')
  .addEventListener('click', function () {
    const amount = gatInputValue('deposit-input');
    if (amount > 0) {
      updateTotal('deposit-total', amount);
      updateBalance(amount, true);
    }
  });

// handle withdraw button
document
  .getElementById('withdraw-button')
  .addEventListener('click', function () {
    const amount = gatInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && balance > amount) {
      updateTotal('withdraw-total', amount);
      updateBalance(amount, false);
    }
  });
