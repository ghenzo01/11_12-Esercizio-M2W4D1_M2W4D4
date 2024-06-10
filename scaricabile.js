
/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come 
parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' 
possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) 
e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/
// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  }, //virgola finale o trailing comma, consentita, serve qualora si volessero aggiungere elementi, tutto funziona correttamente
]


//---------- COMMIT 1 ---------- 
function searchJob(title, location) {
  const results = []

  jobs.forEach(function (job) { //job è il singolo elemento dell'array jobs
    if (
      job.title.toLowerCase().includes(title.toLowerCase()) && job.location.toLowerCase().includes(location.toLowerCase())
    ) {
      results.push(job)
    }
  })

  // Restituisci un oggetto formato da un array di oggetti job, results, e la sua lunghezza
  return {
    result: results, //è un array dentro un oggetto
    count: results.length, //la lunghezza è riferita all'array result
  } //NB: results è l'array che viene assegnato all'oggetto e che in esso si chiamerà result!! results muore con questa funzione,
     // ma è copiato nell'array result che è restituito come oggetto
}
//---------- FINE COMMIT 1 ---------- 


//---------- COMMIT 2 ---------- 
let button = document.getElementById("search")

button.addEventListener("click", function () {

  let jobTitle = document.getElementById("job-title").value
  //console.log(jobTitle)
  let locat = document.getElementById("location").value
  //console.log(locat)

  const searchResult = searchJob(jobTitle, locat)
  //console.log(searchResult)
  //console.log (searchResult.count)
  //console.log (searchResult.result.length) //dà lo stesso valore di searchResult.count

  //pulisco i risultati di eventuali ricerche precedenti
  removeDivsByClass("div-style")
  removeDivsByClass("div-container")

  let divContainer = document.createElement("div")
  divContainer.classList.add("div-container")
  //console.log(divContainer)


  for (i = 0; i < searchResult.count; i++) {
    let div = document.createElement("div")

    //console.log(div)


    //div.innerText = `Job Title ${i + 1}: JOB TITLE: ${searchResult.result[i].title}, LOCATION: ${searchResult.result[i].location}`
    div.classList.add("div-style")

    const jobTitle = document.createTextNode (`Job Offer ${i + 1} : `)

    const br1 = document.createElement('br')

    const titleBold = document.createElement('strong')
    titleBold.textContent="JOB TITLE: "

    const jobText = document.createTextNode(searchResult.result[i].title)

    const br2 = document.createElement('br') //se non ne creo 2, appenderne uno 2 volte non funziona

    const locationBold = document.createElement('strong')
    locationBold.textContent = "LOCATION: "

    const locationText=document.createTextNode(searchResult.result[i].location)


    div.appendChild(jobTitle)
    div.appendChild(br1)
    div.appendChild(titleBold)
    div.appendChild(jobText)
    div.appendChild(br2)
    div.appendChild(locationBold)
    div.appendChild(locationText)

    divContainer.appendChild(div)

  }

  let body = document.querySelector("body")
  body.appendChild(divContainer)


})

// Rimuove tutti i div con una specifica classe
function removeDivsByClass(className) {
  const elements = document.querySelectorAll("." + className)
  elements.forEach(element => element.remove())
}


/*const searchResult = searchJob(jobTitle, locationTitle)*/
































