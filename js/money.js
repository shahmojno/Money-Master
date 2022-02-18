

function getInputValue(inputValue) {
    const inputField = document.getElementById(inputValue);
    const valueAmount = inputField.value;
    const amountNumber = parseFloat(valueAmount);
    return amountNumber;
}



document.getElementById('calculate').addEventListener('click', function () {
    const incomeAmountNumber = getInputValue('income-money');
    const foodAmountNumber = getInputValue('food-money');
    const rentAmountNumber = getInputValue('rent-money');
    const clothesAmountNumber = getInputValue('clothes-money')
    const totalExpenses = foodAmountNumber + rentAmountNumber + clothesAmountNumber;
    const totalBalance = incomeAmountNumber - totalExpenses;
    document.getElementById('total-expenses').innerText = totalExpenses;
    document.getElementById('balance').innerText = totalBalance;

});



document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = document.getElementById('Save-money')
    const saveAmount = saveInput.value;
    const saveAmountNumer = parseFloat(saveAmount);

    // const foodAmountNumber = parseFloat(foodAmount);
    const incomeAmountNumber = getInputValue('income-money');
    const foodAmountNumber = getInputValue('food-money');
    const rentAmountNumber = getInputValue('rent-money');
    const clothesAmountNumber = getInputValue('clothes-money');

    const totalExpenses = foodAmountNumber + rentAmountNumber + clothesAmountNumber;
    const totalBalance = incomeAmountNumber - totalExpenses;
    const saveAmountPercent = saveAmountNumer / 100 * totalBalance;
    const remainingBalance = totalBalance - saveAmountPercent;

    document.getElementById('saving-Amount').innerText = saveAmountPercent;
    document.getElementById('remaining-Balance').innerText = remainingBalance;
});



// function ErrorMassege() {
//     const incomeAmountNumber = document.getElementById('income-money').value;

//     const foodAmountNumber = document.getElementById('food-money').value;
//     const successMessage = document.getElementById('notify-income');
//     const failError = document.getElementById('notify-rent');
//     if (incomeAmountNumber == foodAmountNumber) {

//         successMessage.style.display = 'block';
//         failError.style.display = 'none';
//     }
//     else {

//         failError.style.display = 'block';
//         successMessage.style.display = 'none';
//     }
// }




document.getElementById('calculate').addEventListener('click', function () {
    const incomeAmountNumber = document.getElementById('income-money').value;

    const foodAmountNumber = document.getElementById('food-money').value;
    const successMessage = document.getElementById('notify-income');
    const failError = document.getElementById('notify-rent');
    if (incomeAmountNumber == foodAmountNumber) {

        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {

        failError.style.display = 'block';
        successMessage.style.display = 'none';
    }
}

});