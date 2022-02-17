

function getInputValue(inputValue) {
    const inputFieldFood = document.getElementById(inputValue);
    const foodAmount = inputFieldFood.value;
    const foodAmountNumber = parseFloat(foodAmount);
    if (foodAmountNumber == -1) {
        document.getElementById('total-expenses').innerText = 'please give number';
    }
    return foodAmountNumber;
}







document.getElementById('calculate').addEventListener('click', function () {
    // const inputField = document.getElementById('income-money');
    // const incomeAmount = inputField.value;
    // const incomeAmountNumber = parseFloat(incomeAmount);
    const incomeAmountNumber = getInputValue('income-money');
    // const inputFieldFood = document.getElementById('food-money');
    // const foodAmount = inputFieldFood.value;
    // const foodAmountNumber = parseFloat(foodAmount);
    const foodAmountNumber = getInputValue('food-money');

    // const inputFieldRent = document.getElementById('rent-money');
    // const rentAmount = inputFieldRent.value;
    // const rentAmountNumber = parseFloat(rentAmount);

    const rentAmountNumber = getInputValue('rent-money');

    // const inputFieldClothes = document.getElementById('clothes-money');
    // const clothesAmount = inputFieldClothes.value;
    // const clothesAmountNumber = parseFloat(clothesAmount);
    const clothesAmountNumber = getInputValue('clothes-money')

    const totalExpenses = foodAmountNumber + rentAmountNumber + clothesAmountNumber;


    const totalBalance = incomeAmountNumber - totalExpenses;

    console.log(setValueInnrText());

    document.getElementById('total-expenses').innerText = totalExpenses;

    document.getElementById('balance').innerText = totalBalance;



});


// function calculateTotalExpenses() {
//     const phoneTotal = getInputValue('phone') * 1219;
//     const caseTotal = getInputValue('case') * 59;

//     const subTotal = phoneTotal + caseTotal;
//     const tax = subTotal / 10;
//     const totalPrice = subTotal + tax;
//     document.getElementById('sub-total').innerText = subTotal;
//     document.getElementById('tax-amount').innerText = tax;
//     document.getElementById('total-price').innerText = totalPrice;


// }



