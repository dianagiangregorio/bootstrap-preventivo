//creare una variabile con il form

const calculatorForm = document.getElementById('calculator-form');

//creare delle variabili per i campi del form

const jobType = document.getElementById("job-type");
const promoCode = document.getElementById("promo-code");

//invio il form e leggo i dati
calculatorForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    console.log("tipo di lavoro:", jobType.value);
    console.log(promoCode.value)
})