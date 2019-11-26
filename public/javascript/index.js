const dateInputField = document.getElementById('dateInputField');
const dateInput = document.getElementById('dateInput');
const showDateField = document.getElementById('showDateField');

function showDateInput(){
    dateInputField.classList.toggle('d-none')
}

dateInput.addEventListener('input', function(){
    showDateField.innerHTML = dateInput.value;
})

