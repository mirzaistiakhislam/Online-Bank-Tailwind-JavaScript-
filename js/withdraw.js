document.getElementById('withdraw-btn').addEventListener('click', function () {


    const withdrawFieldAmount = inputField('withdraw-input-field');
    const previousTotalWithdrawAmount = textField('withdraw-total');

    const totalWithdrawAmount = withdrawFieldAmount + previousTotalWithdrawAmount;
    setElement('withdraw-total', totalWithdrawAmount);

    const previoustotalBalanceAmount = textField('total-balance');

    const totalBalanceAmount = previoustotalBalanceAmount - withdrawFieldAmount;
    setElement('total-balance', totalBalanceAmount);


})