const form = document.querySelector('#Form');

const tipPercent = document.querySelectorAll('input[name="tip"]');
const btnTip = document.querySelectorAll('.Btn-tip');
const labels = document.querySelectorAll('.Bt')
const btnCustom = document.querySelector('.Input-custom')


for (let i = 0; i < tipPercent.length; i++) {
    const tipLabel = tipPercent[i].closest('label');
    tipPercent[i].onclick = () => {
        for (let i = 0; i < btnTip.length; i++) {
            btnTip[i].style.color = 'hsl(0, 0%, 100%)';
            btnTip[i].style.backgroundColor = 'hsl(183, 100%, 15%)';
        }
        btnCustom.value = null;
        tipLabel.style.color = "hsl(0, 0%, 100%)";
        tipLabel.style.backgroundColor = "hsl(173, 61%, 77%)";
        // calculate();
    }
}

btnCustom.onclick = () => {
    for (let i = 0; i < labels.length; i++);
    labels[i].style.color = 'red';
    labels[i].style.backgroundColor = 'orange'
}





function validateInput(value) {
    if (value === "" || value === 0) {
        return false;
    }
}




// if (inputsFilled.value.length == 0 || inputsFilled.value == NaN) {
//     document.getElementById('Head').innerText = "*Can't be zero"
//     inputsFilled.focus();
//     return false



// function tipCalculation() {

// }

// textAlert.appendChild(document.createTextNode("*Can't be zero or empty "))

// btnTip.addEventListener("click", function () {
//     alert("What!?!?!?!")

// })


// const tip = new Tip();
// tipPercent['5'] = 5;
// tipPercent['10'] = 10;
// tipPercent['15'] = 15;
// tipPercent['25'] = 25;
// tipPercent['50'] = 50;



// function validateForm() {
//     const valid = document.forms["#form"]["billAmount"]["customTip"]["amountPeople"].value;
//     if (valid == "") {
//         alert("name must be filled out");
//         return false;
//     }
// }



// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (bill)
//         const billAmount = form.elements.billAmount;


//     console.log(billAmount.value)
// })

