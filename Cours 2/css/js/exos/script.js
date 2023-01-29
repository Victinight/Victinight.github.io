console.log(typeof "hello")

const nom = "Yerasimos"
const ville = "Mexico"

let temps = 10

const detailCity = `A ${ville} il est${temps}`

temps = temps + 1

/*const calculPopulation = () =>{

    popuStart = popuStart + 3000
    console.log(popuStart)
}

calculPopulation() */

function bonjour(name){
    return `Bonjour ${name}`
}

bonjour("loc")

bonjour("al")

bonjour("to")


function LeNomDeMonVoisin(nom){
    (nom).toString();
    console.log(nom)
    return nom
}

LeNomDeMonVoisin("Pedro")

function aujourdhui(date, heure){
    (date).toString();
    (heure).toString();
    return `la date est ${date} et l'heure ${heure}`
}

/*function capitalize(nom, prenom){
    const firstnom= nom.chartAt(0).toUppercase;
    const firstprenom= prenom.chartAt(0).toUppercase;
    console.log(firstnom, firstprenom)
}

capitalize("pome","trop")*/

function capitalize1(nom, prenom){
    const firstnom = nom.chartAt(0).toUppercase
    const restenom = nom.substring(1)
    const firstprenom = prenom.chartAt(0).toUppercase
    const resteprenom = nom.substring(1)
    return `${firstnom} ${restenom} ${firstprenom} ${resteprenom}`
}


function canYouVote(age){
    if (age>18){
        return "you can vote"
    }
    else{
        return "you can't vote"
    }
}

/*if (x>y && y!=0) || (y>x && x!=0{}
elif{}*/

/*execrcice 1 */

function evenOrOdd(nombre){
    return nombre % 2 == 0;
}

/*exercice 2 */

function sumOfNegative(tab){
    let i = 0
    tab.forEach(element => {
        if (element < 0){
            i = i + element
        }
    });
    return i
}

/*ex 3*/
let tab=[]
function listItem(content){
    return `<li class="list-group-item">${content}</li>`
}

function unorderedList(tabl){
    let Ul= '<ul class="list-group">'
    tabl.forEach(elem => {
        Ul+=listItem(elem)
    });
    return Ul + "</ul>"
}

/*obj */

const objetPizza= {nomDeLaPizza:"Margarita",prix:15,toppings:["piment,chorizo"]}

objetPizza.nomDeLaPizza="Pizzamo"

/*navbar = document.querySelector (".nom du compartiment") permet de selectionner un elem de la page */
/*navbar.innerHTML = "<h1> Hello </h1>" permet de changer des elem du site*/
/*navbar.style.backgroundColor = "red"*/
/*navbar.classList.add("blue") navbar.classList.remove("blue") */
/*
function reactionAuClick(){
    navbar.classList.toggle("navbar") permet de retire ou remettre l'elem si il est la ou non
}
navbar.addEventListener("click, ractionAuClick") */


/*ex 1.1 */

const button = document.querySelector("#clickme")
function clique(){
    /*button.classList.add("disabled")*/
    button.disabled=true
    button.style.backgroundColor="red"
    button.innerHTML("bingo")
 }

 button.addEventListener("click", clique)

 const banner= document.querySelector(".banner")
 const card=document.querySelectorAll(".carte-produit")

 banner.addEventListener("click",reac)

 function reac(){
    card.style.transform="rotate(90deg)"
 }