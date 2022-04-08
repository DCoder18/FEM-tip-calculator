const elBill = document.querySelector('#bill-amt')
const elNoOfPeople = document.querySelector('#no_of_ppl')

const elResultTip = document.querySelector('.result_amt--tip')
const elResultTotal = document.querySelector('.result_amt--total')

const elBtnTip = document.querySelectorAll('.btn--tip')
const elTipCustom = document.querySelector('#custom-tip')

let bill = 0;
let no_of_ppl = 0;
let tip = 0;
let tip_custom = 0;
// const total_amount = 0;
// const total_tip = 0;

//Get total tip
const total_tip = (bill, tip) => bill * (tip/100);

for (const btn of elBtnTip) {
  btn.addEventListener('click', function() {
    bill = Number(elBill.value)
    no_of_ppl = Number(elNoOfPeople.value)
    tip = Number(btn.getAttribute('data-tip-amount'))
    tip_custom = elTipCustom.value

    total_tip(bill, tip);

    console.log(bill, no_of_ppl, tip, total_tip);
  })
}




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