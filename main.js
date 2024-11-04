//creo una variabile con il form

const calculatorForm = document.getElementById('calculator-form');

//creo delle variabili per i campi del form

const userName = document.getElementById("input-name")
const userSurname = document.getElementById("input-surname")
const userEmail = document.getElementById("email")
const userTextArea = document.getElementById("textarea")
const jobType = document.getElementById("job-type");
const codeToCheck = document.getElementById("promo-code");

//creo una variabile dove mostrerò il prezzo

const priceContainer = document.getElementById("price-container")
const promoContainer = document.getElementById("promo-container")
const price = document.getElementById("final-price");
const decimals = document.getElementById("decimals")


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

    let totalJobPrice = jobPrice (jobHours, backendHourPrice)

    if (jobType.value === '1'){
        totalJobPrice = jobPrice(jobHours, backendHourPrice);
    }
    else if (jobType.value === '2'){
        totalJobPrice = jobPrice(jobHours, frontendHourPrice);
    }
    else {
        totalJobPrice = jobPrice(jobHours, analysisHourPrice);
    }
        
    //controllo se l'utente ha inserito un codice sconto e calcolo il prezzo finale


    if (promoCode(validPromoCode, codeToCheck.value)) {
        const finalPrice = totalJobPrice - ((totalJobPrice * 25)/100);
        const arrayPrice = (fixedPrice(finalPrice)).split(',');
        price.innerHTML = `€ ${arrayPrice[0]}`;
        decimals.innerHTML = `,${arrayPrice[1]}`;
        priceContainer.classList.remove("d-none");


    }
    else if (codeToCheck.value === '') {
        const finalPrice = fixedPrice(totalJobPrice);
        const arrayPrice = finalPrice.split(',');
        promoContainer.innerHTML = "Non hai inserito il codice";
        price.innerHTML = `€ ${arrayPrice[0]}`;
        decimals.innerHTML = `,${arrayPrice[1]}`;
        console.log(`Non hai inserito il codice ${finalPrice}`);
        priceContainer.classList.remove("d-none");
    }
    else {
        const finalPrice = fixedPrice(totalJobPrice);
        const arrayPrice = finalPrice.split(',');
        promoContainer.innerHTML = "Il codice inserito non è corretto";
        price.innerHTML = `€ ${arrayPrice[0]}`;
        decimals.innerHTML = `,${arrayPrice[1]}`;
        console.log(`Il codice inserito non è corretto ${finalPrice}`);
        priceContainer.classList.remove("d-none");
    }

    //dopo tutte le operazioni resetto il form
    userName.value = '';
    userSurname.value = '';
    userEmail.value = '';
    userTextArea.value = '';
    jobType.value = '';
    codeToCheck.value = '';

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

/**
 * funzione per avere solo due cire decimali divise da una virgola
 * @param {number} price
 * @returns {string}
 */
function fixedPrice (price) {
    let correctPrice = price.toFixed(2);
    priceToString = correctPrice.toString().replace('.', ',')
    return priceToString
}
