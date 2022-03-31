const textBill = document.querySelector('#bill-amt')
const textNoOfPeople = document.querySelector('#no_of_ppl')

const resultTip = document.querySelector('.result_amt--tip')
const resultTotal = document.querySelector('.result_amt--total')

const btnTip = document.querySelectorAll('.btn--tip')

/* 
1. Get bill amount
2. Get selected tip amount
3. Get number of people
4. Calculate total 
    Total Tip: bill*(tip/100)
    Total Bill: bill + tip

    Tip / person: Total tip/no of ppl
    Total /person: Total/no of ppl
*/