const billTotalDiv = document.getElementById('billTotalInput');
const tipTotalDiv = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
    const bill = Number(billTotalDiv.value);
    const tip = Number(tipTotalDiv.value) / 100
    const totalTipAmount = bill * tip
    const totalPayment = bill + totalTipAmount
    const perPersonTotal = totalPayment / numberOfPeople;
    perPersonTotalDiv.innerText = `€${perPersonTotal.toFixed(2)}`
}


const increasePeople = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}


const decreasePeople = () => {
    if (numberOfPeople <= 1) {
        return
    }
    numberOfPeople -= 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}