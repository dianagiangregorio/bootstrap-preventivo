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

    //creo le variabili per il numero di ore per lavoro e il prezzo orario di ogni lavoro

    const jobHours = 10
    const backendHourPrice = 20.50
    const frontendHourPrice = 15.30
    const analysisHourPrice = 33.60

    //logica per scoprire il prezzo totale di ogni lavoro

    if (jobType.value === '1'){
        let jobPrice = jobHours * backendHourPrice;
        console.log(jobPrice);
    }
    else if (jobType.value === '2'){
        let jobPrice = jobHours * frontendHourPrice;
        console.log(jobPrice);
    }
    else if (jobType.value === '3'){
        let jobPrice = jobHours * analysisHourPrice;
        console.log(jobPrice);
    }
})