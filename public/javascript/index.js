const dateInputField = document.getElementById('dateInputField');
const dateInput = document.getElementById('dateInput');
const showDateField = document.getElementById('showDateField');
const sortDate = document.getElementById('sortDate');

function showDateInput(){
    dateInputField.classList.toggle('d-none')
}


dateInput.addEventListener('input', function(){
    showDateField.innerHTML = dateInput.value;
})

// sortDate.addEventListener('click', function(){
//     sortByDate();
// })

