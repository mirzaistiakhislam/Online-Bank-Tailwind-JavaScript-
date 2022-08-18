document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositInputField = document.getElementById('deposit-input-field');
    const depositFieldString = depositInputField.value;
    const depositField = parseFloat(depositFieldString);

    depositInputField.value = '';

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentTotalDeposit = depositField + previousDepositTotal;
    depositTotal.innerText = currentTotalDeposit;


    // <--------balance-------->

    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    const currentTotalBalance = previousTotalBalance + depositField;
    totalBalance.innerText = currentTotalBalance;

})