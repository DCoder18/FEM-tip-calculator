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

let total_tip = 0;
let total_bill = 0;

let tip_per_person = 0;
let bill_per_person = 0;

//Get total tip
const calcTotalTip = (nbill, ntip) => nbill * (ntip/100);
const calcTotalBill = (nbill, ntip) => nbill + ntip;

for (const btn of elBtnTip) {
  btn.addEventListener('click', function() {
    bill = Number(elBill.value)
    no_of_ppl = Number(elNoOfPeople.value)
    tip = Number(btn.getAttribute('data-tip-amount'))
    tip_custom = elTipCustom.value

    total_tip = calcTotalTip(bill, tip);
    total_bill = calcTotalBill(bill, total_tip);

    tip_per_person = total_tip / no_of_ppl
    bill_per_person = total_bill / no_of_ppl

    elResultTip.innerHTML = `$${tip_per_person.toFixed(2)}${Number.isInteger(tip_per_person) ? '.00' : ''}`
    elResultTotal.innerHTML = `$${bill_per_person.toFixed(2)}${Number.isInteger(bill_per_person) ? '.00' : ''}`

    // console.log(total_tip, total_bill, tip_per_person, bill_per_person);
  })
}