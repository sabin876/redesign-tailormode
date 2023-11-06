let currentStep = 1;
const form = document.getElementById('tailormade-form');

function nextStep(step) {
    if (step < 7) {
        document.querySelector(`.step-${step}`).style.display = 'none';
        document.querySelector(`.step-${step + 1}`).style.display = 'block';
        currentStep = step + 1;
    }

    if (currentStep === 7) {
        updateConfirmation();
    }
}

function prevStep(step) {
    if (step > 1) {
        document.querySelector(`.step-${step}`).style.display = 'none';
        document.querySelector(`.step-${step - 1}`).style.display = 'block';
        currentStep = step - 1;
    }
}

function updateConfirmation() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const bookingDate = document.getElementById('booking-date').value;
    const service = document.getElementById('service').value;

    document.getElementById('confirmation-name').textContent = name;
    document.getElementById('confirmation-email').textContent = email;
    document.getElementById('confirmation-date').textContent = bookingDate;
    document.getElementById('confirmation-service').textContent = service;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Step 1 script

const countryLabelDiv = document.querySelector(".labels");
const step1 = document.querySelector(".step-1");

countryLabelDiv.onclick = (e) => {
    const elem = e.target;
    if (elem.tagName === "LABEL") {
        elem.classList.toggle("country-checked");
    }

    const numberOfCountrySelected = step1.querySelectorAll(".country-checked");
    // Toggle disable of button
    step1.querySelector(".next-btn").classList.toggle("disabled", !(numberOfCountrySelected.length > 0));

}


// Step 2 script

const step2 = document.querySelector(".step-2");
const activitiesDiv = step2.querySelector(".activities");

activitiesDiv.onclick = () => {
    const allActivity = Array.from(activitiesDiv.querySelectorAll("input[type=checkbox]"));


    const checkedActivity = allActivity.filter((activity) => activity.checked);

    step2.querySelector(".next-btn").classList.toggle("disabled", !(checkedActivity.length > 0));

}

// Step 3 script

const step3 = document.querySelector(".step-3");

const date = flatpickr("#date-picker", {
    enableTime: false,
    dateFormat: "Y-m-d",
    minDate: "today",
    mode: "range",
    onClose: (selectedDates) => {
        console.log((selectedDates[0].toString() === selectedDates[1].toString()));
        step3.querySelector(".next-btn").classList.toggle("disabled", (selectedDates.length === 2 && selectedDates[0].toString() === selectedDates[1].toString()));
    }
});


// Step 4 script

const step4 = document.querySelector(".step-4");

step4.querySelector("#adult").oninput = (e) => {

    if (Number(e.target.value) < 0){
        e.target.value = 0;
    }

    step4.querySelector(".next-btn").classList.toggle("disabled", !(Number(e.target.value) >= 1))
}






const step5 = document.querySelector(".step-5");

const requiredInputFields = [
    step5.querySelector("#full-name"),
    step5.querySelector("#email"),
    step5.querySelector("#phone"),
    step5.querySelector("#nationality"),
    step5.querySelector("#nationality"),
]

step5.querySelector(".next-btn").onclick = () =>{
    for (let i = 0; i < requiredInputFields.length; i++) {
        const element = requiredInputFields[i];
        if (element.value.trim() === ""){
            break;
        }
    }

    if(Array.from(step5.querySelectorAll(".contact-way-checkbox:checked")).length > 0)
    {
        nextStep(5);
        return;
    }

    step5.querySelector(".errormsg").innerText = "*All fields are required!"
    setTimeout(()=>{
        step5.querySelector(".errormsg").innerText = ""
    }, 3000)

}

// Step 6 script

const step6 = document.querySelector(".step-6");


step6.querySelector(".submit-btn").onclick = ()=>{
    document.forms['tailormade-form'].submit();
}

const incrementtoo = document.getElementById("increment");
const decrementtoo = document.getElementById("decrement");
const countDisplay = document.getElementById("count");

let count = 0;

incrementtoo.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});

decrementtoo.addEventListener("click", function () {
    if (count > 0) {
        count--;
        countDisplay.textContent = count;
    }
});


const showTextAreaButton = document.getElementById("showTextAreaButton");
        const textArea = document.getElementById("textArea");

        showTextAreaButton.addEventListener("click", function() {
            if (textArea.style.display === "none") {
                textArea.style.display = "block";
            } else {
                textArea.style.display = "none";
            }
        });