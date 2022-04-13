console.log("this is a script file")

console.log("load")

/*console.dir(document)*/

async function loadEvent() {
    let countriesdata = await fetch("https://restcountries.com/v3.1/all")
    let countriesjson = await countriesdata.json()
    console.log(countriesjson[111])

    let countriesSection = document.getElementById("countries")
    //console.dir(countriesSection);
    //countriesSection.innerHTML+="Bali";
    countriesSection.insertAdjacentHTML("beforeend",`
    <h1>Countires</h1>
    `)

    countriesSection.insertAdjacentHTML("beforeend", countriesjson[111].name.common)
    
   /* let countryComponent = `
        <div class="country">
            <h2>
                ide kerül az ország neve
            </h2>
        </div>
    `
    */

function countryComponent(countryName){
    return `
    <div class="country">
        <h2>
            ${countryName}
        </h2>
    </div>
    `
}

    for (let index = 0; index < countriesjson.length; index++) {
        console.log(index)
        //countriesSection.insertAdjacentHTML("beforeend", countriesjson[index].name.common)
        countriesSection.insertAdjacentHTML("beforeend", countryComponent(countriesjson[index].name.common))
    }
}

window.addEventListener("load", loadEvent)

function logger(logThis) {
    console.log(logThis)
}

logger("hello")
logger("hello2")
logger(9)
logger(true)

