const elBill = document.querySelector('#bill-amt')
const elNoOfPeople = document.querySelector('#no_of_ppl')
const elErrorMsg = document.querySelector('#error-msg')

const elResultTip = document.querySelector('.result_amt--tip')
const elResultTotal = document.querySelector('.result_amt--total')

const elBtnTip = document.querySelectorAll('.btn--tip')
const elTipCustom = document.querySelector('#custom-tip')

const elBtnReset = document.querySelector('.btn--reset')

elErrorMsg.setAttribute('class', 'hidden');

let bill = 0;
let no_of_ppl = 0;

let tip = 0;
let tip_custom = 0;

let total_tip = 0;
let total_bill = 0;

let tip_per_person = 0.00;
let bill_per_person = 0.00;

// Utility Functions
const calcTotalTip = (nbill, ntip) => nbill * (ntip/100);
const calcTotalBill = (nbill, ntip) => nbill + ntip;
const formatResultValue = (result) => Number.isInteger(result) ? `${result}.00` : result.toFixed(2);
//


//Select tip with button
for (const btn of elBtnTip) {
  btn.addEventListener('click', function() {
    bill = Number(elBill.value)
    no_of_ppl = Number(elNoOfPeople.value)
    tip = Number(btn.getAttribute('data-tip-amount'))

    calculateSplitAmount()
  })
}


//Select custom tip with keyboard
elTipCustom.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    bill = Number(elBill.value)
    no_of_ppl = Number(elNoOfPeople.value)
    tip = elTipCustom.value

    calculateSplitAmount()
  } 
})


// Reset Button
elBtnReset.addEventListener('click', function() {
  bill = 0;
  no_of_ppl = 0;
  
  tip = 0;
  
  total_tip = 0;
  total_bill = 0;
  
  tip_per_person = 0.00;
  bill_per_person = 0.00;

  elBill.value = ''
  elNoOfPeople.value = ''
  elTipCustom.value = ''
  elResultTip.innerHTML = '$0.00'
  elResultTotal.innerHTML = '$0.00'
})


//Calculate results
function calculateSplitAmount() {
  if(no_of_ppl == 0) {
    elErrorMsg.setAttribute('class', 'visible')
    elNoOfPeople.style.border = `2px solid ${'hsl(var(--clr-red))'}`
    
  } else {
    total_tip = calcTotalTip(bill, tip);
    total_bill = calcTotalBill(bill, total_tip);

    tip_per_person = total_tip / no_of_ppl
    bill_per_person = total_bill / no_of_ppl
    elResultTip.innerHTML = `$${formatResultValue(tip_per_person)}`
    elResultTotal.innerHTML = `$${formatResultValue(bill_per_person)}`

    elErrorMsg.setAttribute('class', 'hidden')
    elNoOfPeople.style.border = '2px solid transparent'
  }
}


