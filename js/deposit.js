document.getElementById('deposit-btn').addEventListener('click', function () {

    const newDepositFieldAmount = inputField('deposit-input-field');
    const previousDepositTotal = textField('deposit-total');

    const totalDeposit = newDepositFieldAmount + previousDepositTotal;
    setElement('deposit-total', totalDeposit);


    const previousTotalBalanceAmount = textField('total-balance');

    const totalBalanceAmount = previousTotalBalanceAmount + totalDeposit;
    setElement('total-balance', totalBalanceAmount);

})