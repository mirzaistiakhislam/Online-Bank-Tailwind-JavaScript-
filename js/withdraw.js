document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawInputField = document.getElementById('withdraw-input-field');
    const withdrawFieldString = withdrawInputField.value;
    const withdrawField = parseFloat(withdrawFieldString);

    withdrawInputField.value = '';

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + withdrawField;
    withdrawTotal.innerText = currentWithdrawTotal;


    // <-------balance------>

    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    const currentTotalBalance = previousTotalBalance - withdrawField;
    totalBalance.innerText = currentTotalBalance;

})