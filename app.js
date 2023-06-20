"use strict"
console.log("Testing...")

const container = document.getElementById("container");
const storeTable = document.getElementById("store-table");

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


//Replace the lists of your data for each store and build a single table of data instead. 

//Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.

//1. Each cookie stand location should have a separate render() method that creates and appends its row to the table
//2. The header row and footer row are each created in their own stand-alone function
// NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).

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



    const seattle = new Location("seattle", 23, 65, 6.3);
    console.log(seattle)
    const tokyo = new Location("tokyo", 3, 24, 1.2,);
    const dubai = new Location("dubai", 11, 38, 3.7,);
    const paris = new Location("paris", 20, 38, 2.3,);
    const lima = new Location("lima", 2, 16, 4.6,);