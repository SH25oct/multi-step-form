const form = document.querySelector('#form-1')
const btn = document.querySelector('#btn')
const next = document.querySelector('#next')
const form2 = document.querySelector('#form-2')
const required = document.querySelectorAll('.required')
const inputContainers = document.querySelectorAll('.input-container');


function showForm(e) {
    event.preventDefault()
    form.classList.remove('form-1');
    console.log("button is clicked")

}

btn.addEventListener("click", showForm);

function showFormNext(e) {
    event.preventDefault()
    let allFilled = true;
    required.forEach(input => {
        if(input.value === ""){
         allFilled = false;
        }
    })
   if(allFilled) {
    form2.classList.remove('form-2');
    console.log("button is clicked")
}else {alert("please fill the form first")}{
   }
}

next.addEventListener("click", showFormNext);

function addSwapButtonListeners(containerList) {
    containerList.forEach((container, index) => {
        const upBtn = container.querySelector('.up-btn');
        const downBtn = container.querySelector('.down-btn');

        upBtn.addEventListener('click', () => {
            if (index > 0) {
                const previousInput = containerList[index - 1].querySelector('input');
                previousInput.focus();
            }
        });

        downBtn.addEventListener('click', () => {
            if (index < containerList.length - 1) {
                const nextInput = containerList[index + 1].querySelector('input');
                nextInput.focus();
            }
        });
    });
}

// Attach event listeners for swapping buttons in both forms
const form1InputContainers = document.querySelectorAll('#form-1 .input-container');
const form2InputContainers = document.querySelectorAll('#form-2 .input-container');

addSwapButtonListeners(form1InputContainers);
addSwapButtonListeners(form2InputContainers);