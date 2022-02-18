

function getInputValue(inputValue) {
    const inputFieldFood = document.getElementById(inputValue);
    const foodAmount = inputFieldFood.value;
    const foodAmountNumber = parseFloat(foodAmount);
    return foodAmountNumber;
}



document.getElementById('calculate').addEventListener('click', function () {

    const incomeAmountNumber = getInputValue('income-money');

    const notNumber = document.getElementById('notify-rent');
    const successMessage = document.getElementById('notify-income');

    if (incomeAmountNumber == -1) {
        notNumber.style.display = 'block';
    }
    else if (typeof incomeAmountNumber != Number) {
        successMessage.style.display = 'block';

    }


    else {
        successMessage.style.display = 'none';
    }

    const foodAmountNumber = getInputValue('food-money');


    const rentAmountNumber = getInputValue('rent-money');




    // const inputFieldClothes = document.getElementById('clothes-money');
    // const clothesAmount = inputFieldClothes.value;
    // const clothesAmountNumber = parseFloat(clothesAmount);
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




