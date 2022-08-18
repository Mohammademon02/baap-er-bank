

// step-1: add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){

    // step-2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;

    // also male sure to convert the input into a number by using parseFloat
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step-7: clear the input field
    withdrawField.value = '';


    if(isNaN(newWithdrawAmount)){
        alert('Please enter a valid number')
        return;
    }

    // step-3: get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  

    // step-5: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrawAmount > previousBalanceTotal){
        alert('Baap er Bank a ato taka nai');
        return;
    }

      // step-4: calculate total withdraw amount
      const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

      // set total withdraw amount
      withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6: calculate net balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // set new balance total 
    balanceTotalElement.innerText = newBalanceTotal;

    
})