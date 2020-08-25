const gni = [];
const endpoint =
	'http://api.worldbank.org/v2/country/all/indicator/NY.GNP.PCAP.CD?per_page=264&date=2018&format=json';
fetch(endpoint)
	.then((blob) => blob.json())
    .then((data) => {
        gni.push(...data)
        selectPop(gni);
    })

//use geoLocation to set user currency
// const successfulLookup = (position) => {
// 	const { latitude, longitude } = position.coords;
// 	fetch(
// 		`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=56e5936c1b55473684945f12656c6b24`
// 	)
// 		.then((response) => response.json())
// 		.then((locate) => (address = locate));
// };

//accept user's inputed salary

function updateSalary(){
salary = this.value
console.log(salary)
}

let salary = document.querySelector('#salary');
salary.addEventListener('change', updateSalary);

//user selects comparison country

function selectPop(gni){
let selectCountry = document.querySelector('#countries');
gni[1].slice(47,264).forEach((index) => {
    let country = document.createElement('option');
	country.setAttribute('value', `${index['value']}`);
	country.innerText = `${index['country'].value}`;
	selectCountry.appendChild(country);
});
}

//user salary is compared to county GNI

function calcComparison (event){
    
    let countryName = document.querySelector('#countries');
    let countrySlected = countryName.options[countryName.selectedIndex]
    let countryGni = countrySlected.value;
    let output = document.querySelector('.finalRes')
    
    if(countryGni === null) {
		return	output.innerText = `Unfortunately at this time we do not have data for the Gross National Income of ${countrySlected.innerText}. Please try another country.`;
		} else {
            let percent = salary / countryGni;
			percent = (Math.round(percent * 100) / 100).toFixed(2);
            return output.innerText = `Your current salary is ${percent} times the Gross National Income of ${countrySlected.innerText}`;
		}
    
    
} 
const selectForm = document.querySelector('#selectBtn');
selectForm.addEventListener('click', calcComparison)

//user recieves output


// navigator.geolocation.getCurrentPosition(successfulLookup, console.log);
// searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);
