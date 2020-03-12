const dateBtn = document.getElementById("dateBtn");
const dateInputField = document.getElementById("dateInputField");
const dateInput = document.getElementById("dateInput");
const showDateField = document.getElementById("showDateField");
const sortByDate = document.getElementById("sortByDate");
const sortByPrice = document.getElementById("sortByPrice");
let toggleSortDate = false;
let toggleSortPrice = false;


function showDateInput(){
    dateInputField.classList.toggle("d-none")
};

dateBtn.addEventListener("click", showDateInput);

dateInput.addEventListener("input", function(){
    showDateField.innerHTML = dateInput.value;
});

sortByDate.addEventListener("click", function(e){
    if(e.target.matches(".fa-arrow-up")){
        window.location.href = "https://father-ledger.herokuapp.com/account/sortDate?sortType=ascend" || "http://localhost:3000/account/sortDate?sortType=ascend";
    }else if(e.target.matches(".fa-arrow-down")){
        window.location.href = "https://father-ledger.herokuapp.com/account/sortDate?sortType=descend" || "http://localhost:3000/account/sortDate?sortType=descend";
    }
})

sortByPrice.addEventListener("click", function(e){
    if(e.target.matches(".fa-arrow-up")){
        window.location.href = "https://father-ledger.herokuapp.com/account/sortPrice?sortType=ascend" || "http://localhost:3000/account/sortPrice?sortType=ascend";
    }else if(e.target.matches(".fa-arrow-down")){
        window.location.href = "https://father-ledger.herokuapp.com/account/sortPrice?sortType=descend" || "http://localhost:3000/account/sortPrice?sortType=descend";
    }
})
