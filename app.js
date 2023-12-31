"use strict"
console.log("Testing...")

const container = document.getElementById("container");
const storeTable = document.getElementById("store-table");
const storeForm = document.getElementById("store-form");

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];


const allStores = [];


//Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

function randomNum(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
}

function Location(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerHour) {
    this.storeName = storeName;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesPerHour = avgCookiesPerHour; 
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.totalDailyCookies = 0;
    this.pushStore();
    this.render();
}

Location.prototype.calcCustomersEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(
            randomNum(this.minCustPerHour, this.maxCustPerHour)
        );
        // console.log(this.customersEachHour);
    }    
}

Location.prototype.calcCookiesEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
        this.cookiesEachHour.push(oneHour);
        this.totalDailyCookies += oneHour;
        // console.log(this.cookiesEachHour)
    }
};

Location.prototype.pushStore = function() {
    allStores.push(this);
}

// Location.prototype.calcHourlyTotal = function () {
//     for (let i = 0; i < )
// }


// console.log(getHeaderRow);


// Location.prototype.headerRowFunc = function (){
//     const headerRow = document.createElement("tr");
//     table.appendChild(headerRow);

//     for (let i = 0; i < hours.length; i++) {
//         const hoursHeader = document.createElement("th");
//         hoursHeader.textContent = `${hours[i]}` /* ${totalDailyCookies}*/;
//         headerRow.appendChild(hoursHeader);
//     }
// } headerRowFunc();




Location.prototype.render = function () {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();

        //create table row
    const tr = document.createElement("tr");
    // headerRow.appendChild(tr);

    //create table data cell/data header
    const th = document.createElement("th");
    th.textContent = this.storeName;

    //append table data to row
    tr.appendChild(th);

    // loop through cookiesEachHour - create td for each index and append to tr
    for (let i=0; i < hours.length; i++) {
        const td = document.createElement("td");
        td.textContent = this.cookiesEachHour[i];
        tr.appendChild(td);
    }

    // create th to display totals and append to tr
    const storeTotal = document.createElement("th");
    storeTotal.textContent = this.totalDailyCookies;
    tr.appendChild(storeTotal);

    //append tr to table (storeTable)
    storeTable.appendChild(tr);


}

function getHeaderRow() {
    
    //create hr element
    const headerRow = document.createElement("tr");
    storeTable.appendChild(headerRow);

    //create empty cell

    const storeNameHeader = document.createElement("th");
    storeNameHeader.textContent = "Store Location:"
    headerRow.appendChild(storeNameHeader);

    //create hours cells
    for (let i = 0; i < hours.length; i++) {
        const hoursHeader = document.createElement("th");
        hoursHeader.textContent = hours[i];
        headerRow.appendChild(hoursHeader);
    }

    //create total cell

    const totalCell = document.createElement("th");
    totalCell.textContent = "Daily Location Total";
    headerRow.appendChild(totalCell);
}


getHeaderRow();


    const seattle = new Location("seattle", 23, 65, 6.3);
    // console.log(seattle)
    const tokyo = new Location("tokyo", 3, 24, 1.2,);
    const dubai = new Location("dubai", 11, 38, 3.7,);
    const paris = new Location("paris", 20, 38, 2.3,);
    const lima = new Location("lima", 2, 16, 4.6,);


function getFooterRow() {


const tr = document.createElement("tr");
const th = document.createElement("th");
th.textContent = "Hourly Total";
tr.appendChild(th);

for (let i =0; i < hours.length; i++) {
    const th = document.createElement("th");
    let hoursAdded = 0;
    for (let j = 0; j < allStores.length; j++) {
        const hourlyAmount = allStores[j].cookiesEachHour[i];
        hoursAdded += hourlyAmount;
    }
    th.textContent = hoursAdded;
    tr.appendChild(th);
}

let finalTotals = 0;
for (let i = 0; i < allStores.length; i++) {
    finalTotals += allStores[i].totalDailyCookies;
}

const finalTotalsCell = document.createElement("th");
finalTotalsCell.textContent = finalTotals;
tr.appendChild(finalTotalsCell);

storeTable.appendChild(tr);
}

getFooterRow();



    storeForm.addEventListener("submit", function (event){
        event.preventDefault();
        storeTable.innerHTML = "";
        getHeaderRow();

        for (let i = 0; i < allStores.length; i++) {
            allStores[i].render();
        }
      
        const storeName = event.target.storeName.value;
        const minCustPerHour = event.target.minCustPerHour.value;
        const maxCustPerHour = event.target.maxCustPerHour.value;
        const avgCookiesPerHour = event.target.avgCookies.value;
    
        const newStore = new Location(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerHour);
        // console.log(newStore);

        getFooterRow();


        storeForm.reset();
    });

   