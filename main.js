//creo una variabile con il form

const calculatorForm = document.getElementById('calculator-form');


//creo delle variabili per i campi del form

const userName = document.getElementById("input-name")
const userSurname = document.getElementById("input-surname")
const userEmail = document.getElementById("email")
const userTextArea = document.getElementById("textarea")
const jobType = document.getElementById("job-type");
const codeToCheck = document.getElementById("promo-code");
const gridCheck = document.getElementById("grid-check")


//creo una variabile per mostrare il prezzo in pagina

const priceContainer = document.getElementById("price-container")
const promoContainer = document.getElementById("promo-container")
const price = document.getElementById("final-price");
const decimals = document.getElementById("decimals")


//creo un array con i codici promozionali validi

const validPromoCode = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];


//creo le variabili per il numero di ore per lavoro e il prezzo orario di ogni lavoro

const jobHours = 10
const backendHourPrice = 20.50
const frontendHourPrice = 15.30
const analysisHourPrice = 33.60


//all'invio del form, leggo i dati e calcolo il prezzo del lavoro

calculatorForm.addEventListener('submit', function (event) {
    event.preventDefault();

//controllo se i dati che l'utente ha inserito sono scritti correttamente
    if (checkName(userName.value) === true && checkName(userSurname.value) === true && checkEmail(userEmail.value) === true) {


        //calcolo il prezzo orario per il tipo di lavoro selezionato dall'utente


        let totalJobPrice = jobPrice(jobHours, backendHourPrice)

        if (jobType.value === '1') {
            totalJobPrice = jobPrice(jobHours, backendHourPrice);
        }
        else if (jobType.value === '2') {
            totalJobPrice = jobPrice(jobHours, frontendHourPrice);
        }
        else {
            totalJobPrice = jobPrice(jobHours, analysisHourPrice);
        }

        //controllo se l'utente ha inserito un codice sconto e calcolo il prezzo finale


        if (promoCode(validPromoCode, codeToCheck.value)) {
            const finalPrice = totalJobPrice - ((totalJobPrice * 25) / 100);
            const arrayPrice = (fixedPrice(finalPrice)).split(',');
            promoContainer.innerHTML = "É stato applicato lo sconto del 25%";
            price.innerHTML = `€ ${arrayPrice[0]}`;
            decimals.innerHTML = `,${arrayPrice[1]}`;
            priceContainer.classList.remove("d-none");


        }
        else if (codeToCheck.value === '') {
            const finalPrice = fixedPrice(totalJobPrice);
            const arrayPrice = finalPrice.split(',');
            price.innerHTML = `€ ${arrayPrice[0]}`;
            decimals.innerHTML = `,${arrayPrice[1]}`;
            priceContainer.classList.remove("d-none");
        }
        else {
            const finalPrice = fixedPrice(totalJobPrice);
            const arrayPrice = finalPrice.split(',');
            promoContainer.innerHTML = "Il codice inserito non è corretto";
            price.innerHTML = `€ ${arrayPrice[0]}`;
            decimals.innerHTML = `,${arrayPrice[1]}`;
            priceContainer.classList.remove("d-none");
        }
    }
    //se i campi inseriti non sono corretti compare un alert di errore
    else {
        alert ('I campi inseriti non sono corretti')
    }
        //dopo tutte le operazioni resetto il form
        userName.value = '';
        userSurname.value = '';
        userEmail.value = '';
        userTextArea.value = '';
        jobType.value = '';
        codeToCheck.value = '';
        gridCheck.value = '';
})

//FUNZIONI


/**
 * funzione per calcolare il prezzo totale di un determinato lavoro
 * @param {number} hoursToJob
 * @param {number} pricePerHour
 * @returns {number}
 */
function jobPrice(hoursToJob, pricePerHour) {
    return totalJobPrice = hoursToJob * pricePerHour
}

/**
 * funzione per controllare se il codice sconto inserito dall'utente è valido
 * @param {Array} arrayPromoCode
 * @param {string} codeToCheck
 * @returns {boolean}
 */
function promoCode(arrayPromoCode, codeToCheck) {
    let upperCaseCode = codeToCheck.toUpperCase(); //il codice è valido anche se viene scritto minuscolo
    return arrayPromoCode.includes(upperCaseCode)
}

/**
 * funzione per avere solo due cire decimali divise da una virgola
 * @param {number} price
 * @returns {string}
 */
function fixedPrice(price) {
    let correctPrice = price.toFixed(2);
    priceToString = correctPrice.toString().replace('.', ',')
    return priceToString
}

/**
 * funzione per controllare se il nome è scritto correttamente
 * @param {any} name
 * @returns {boolean}
 */
function checkName(name) {
    if (!(isNaN(name))) {
        return false
    }
    return true
}

/**
 * funzione per controllare se l'email inserita è corretta
 * @param {any} email
 * @returns {boolean}
 */
function checkEmail (email) {
    if (!(email.includes('@'))){
        return false
    }
    return true
}