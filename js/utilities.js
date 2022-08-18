function inputField(inputField) {

    const previousInputField = document.getElementById(inputField);
    const inputFieldAmountString = previousInputField.value;
    const inputFieldAmount = parseFloat(inputFieldAmountString);
    previousInputField.value = '';
    return inputFieldAmount;
}

function textField(textField) {

    const previousTotalAmounntField = document.getElementById(textField);
    const previousTotalAmounntString = previousTotalAmounntField.innerText;
    const previousTotalAmounnt = parseFloat(previousTotalAmounntString);
    return previousTotalAmounnt;
}

function setElement(elementId, currentTotalAmount) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = currentTotalAmount;
}
