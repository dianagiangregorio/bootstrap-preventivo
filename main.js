//creare una variabile con il form

const calculatorForm = document.getElementById('calculator-form');

//creare delle variabili per i campi del form

const jobType = document.getElementById("job-type");
const promoCode = document.getElementById("promo-code");

//creare un array con i codici promozionali validi

const validPromoCode = ['YHDNU32',
    'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

//invio il form e leggo i dati
calculatorForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    console.log("tipo di lavoro:", jobType.value);
    console.log(promoCode.value);

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

    //controllare se è presente un codice sconto: se c'è applicare sconto, se non c'è stampare messaggio

    if (promoCode.value === ''){
        console.log('Non hai inserito un codice sconto')
    }
    else {
        for (let i = 0; i < validPromoCode.length; i++ ){
            if (validPromoCode.includes(promoCode.value)) {
                const finalPrice = (jobPrice * 25)/100
                console.log(finalPrice)
            }
            else {
                console.log('Il codice inserito non è corretto')
                const finalPrice = jobPrice
                console.log(finalPrice)
            }
        }
    }
})
