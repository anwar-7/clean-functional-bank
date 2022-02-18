function gatInputValue(fieldId) {
  const inputValue = document.getElementById(fieldId);
  const value = parseFloat(inputValue.value);
  inputValue.value = '';
  return value;
}

function updateTotal(fieldId, amount) {
  const totalTag = document.getElementById(fieldId);
  const previousTotal = parseFloat(totalTag.innerText);
  const currentTotal = previousTotal + amount;
  totalTag.innerText = currentTotal;
}

// handle deposit button
document
  .getElementById('deposit-button')
  .addEventListener('click', function () {
    const amount = gatInputValue('deposit-input');
    updateTotal('deposit-total', amount);
  });

// handle withdraw button
document.getElementById('');
