const $form = document.querySelector('#Form')

const $people = document.querySelector('#Amount-people')
const $customTip = document.querySelector('.Input-custom')

const $tipPerPerson = document.querySelector('#tipPerPerson')
const $totalPerPerson = document.querySelector('#totalPerPerson')

const tipSelector = 'input[name="tip"]'

const $tipInputs = document.querySelectorAll(tipSelector)

const alert = document.querySelector('#Alert')

function calculateTip() {
  const amount = parseFloat($amount.value || 0)
  const people = parseInt($people.value || 1, 10)

  const $tip = document.querySelector(`${tipSelector}:checked`)

  const tip = $tip ? parseInt($tip.value, 10) : $customTip.value

  const tipPerPerson = (amount * (tip / 100)) / people

  const totalPerPerson = (amount / people) + tipPerPerson

  showTotal(totalPerPerson, tipPerPerson)
}

function showTotal(totalPerPerson, tipPerPerson) {
  $totalPerPerson.textContent = `$ ${totalPerPerson.toFixed(2)}`
  $tipPerPerson.textContent = `$ ${tipPerPerson.toFixed(2)}`
}

function resetTip() {
  showTotal(0, 0)
}

function handleCustomTip() {
  $tipInputs.forEach(input => {
    input.checked = false
  })
}

$form.addEventListener('input', calculateTip)

$form.addEventListener('reset', resetTip)

$customTip.addEventListener('focus', handleCustomTip)
$customTip.addEventListener('input', () => {
  handleCustomTip()
})
