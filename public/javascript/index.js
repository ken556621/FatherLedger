const dateBtn = document.getElementById('dateBtn');
const dateInputField = document.getElementById('dateInputField');
const dateInput = document.getElementById('dateInput');
const showDateField = document.getElementById('showDateField');
const sortByDate = document.getElementById('sortByDate');
const sortByPrice = document.getElementById('sortByPrice');


function showDateInput(){
    dateInputField.classList.toggle('d-none')
};

dateBtn.addEventListener('click', showDateInput);

dateInput.addEventListener('input', function(){
    showDateField.innerHTML = dateInput.value;
});

sortByDate.addEventListener('click', function(){
    console.log('date')
})

sortByPrice.addEventListener('click', function(){
    console.log('price')
})
