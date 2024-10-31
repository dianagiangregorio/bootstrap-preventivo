//creo una variabile con il form

const calculatorForm = document.getElementById('calculator-form');

//creo delle variabili per i campi del form

const jobType = document.getElementById("job-type");
const codeToCheck = document.getElementById("promo-code");

//creo un array con i codici promozionali validi

const validPromoCode = ['YHDNU32',
    'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

//creo le variabili per il numero di ore per lavoro e il prezzo orario di ogni lavoro

const jobHours = 10
const backendHourPrice = 20.50
const frontendHourPrice = 15.30
const analysisHourPrice = 33.60


//all'invio del form, leggo i dati e calcolo il prezzo del lavoro

calculatorForm.addEventListener('submit', function (event) {
    event.preventDefault();

    //calcolo il prezzo orario per il tipo di lavoro selezionato dall'utente

    if (jobType.value === '1'){
        jobPrice(jobHours, backendHourPrice);
    }
    else if (jobType.value === '2'){
        jobPrice(jobHours, frontendHourPrice);
    }
    else {
        jobPrice(jobHours, analysisHourPrice);
    }
        
    //controllo se l'utente ha inserito un codice sconto e calcolo il prezzo finale

    if (promoCode(validPromoCode, codeToCheck.value)) {
        const finalPrice = totalJobPrice - ((totalJobPrice * 25)/100);
        console.log(finalPrice);
    }
    else if (codeToCheck.value === '') {
        const finalPrice = totalJobPrice;
        console.log(`Non hai inserito il codice ${finalPrice}`);
    }
    else {
        const finalPrice = totalJobPrice
        console.log(`Il codice inserito non è corretto ${finalPrice}`)
    }

})

//FUNZIONI


/**
 * calcola il prezzo totale di un determinato lavoro
 * @param {number} hoursToJob
 * @param {number} pricePerHour
 * @returns {number}
 */
function jobPrice (hoursToJob, pricePerHour) {
    return totalJobPrice = hoursToJob * pricePerHour
}

/**
 * funzione per controllare se il codice sconto inserito dall'utente è valido
 * @param {Array} arrayPromoCode
 * @param {string} codeToCheck
 * @returns {boolean}
 */
function promoCode (arrayPromoCode, codeToCheck) {
    return arrayPromoCode.includes(codeToCheck)
}
