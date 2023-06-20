"use strict"

console.log("Testing...")

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

function Location(storeName, minCustPerHour, maxCustPerHour, avgCookiesPerHour, customersEachHour, cookiesEachHour, totalDailyCookies) {
    this.storeName = storeName;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesPerHour = avgCookiesPerHour; 
    this.customersEachHour = customersEachHour;
    this.cookiesEachHour = cookiesEachHour;
    this.totalDailyCookies = totalDailyCookies;
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
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
        const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerHour);
        this.cookiesEachHour.push(oneHour);
        this.totalDailyCookies += oneHour;
        // console.log(this.cookiesEachHour)
    }
}


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
    const container = document.getElementById("container");
    
    const article = document.createElement("article");
    container.appendChild(article);

    const table = document.createElement("table");
    article.appendChild(table);

// TABLE HEAD
    const tableHead = document.createElement("thead");
    table.appendChild(tableHead);

    const headerRow = document.createElement("tr");
    tableHead.appendChild(headerRow);

    for (let i = 0; i < hours.length; i++) {
        const hoursHeader = document.createElement("th");
        hoursHeader.textContent = `${hours[i]}` /* ${totalDailyCookies}*/;
        headerRow.appendChild(hoursHeader);
    }
//TABLE BODY
    const tableBody = document.createElement("tbody");
table.appendChild(tableBody);

// const colGroupLocation = document.createElement("colgroup");
// tableBody.appendChild(colGroupLocation);

const seattleRow = document.createElement("tr");
seattleRow.textContent = "seattle";
tableBody.appendChild(seattleRow);

const tokyoRow = document.createElement("tr");
tokyoRow.textContent = "tokyo";
tableBody.appendChild(tokyoRow);

const dubaiRow = document.createElement("tr");
dubaiRow.textContent = "dubai";
tableBody.appendChild(dubaiRow);

const parisRow = document.createElement("tr");
parisRow.textContent = "paris";
tableBody.appendChild(parisRow);

const limaRow = document.createElement("tr");
limaRow.textContent = "lima";
tableBody.appendChild(limaRow);

//TABLE FOOT

const tableFoot = document.createElement("tfoot");
table.appendChild(tableFoot)


}





    // const h3 = document.createElement("h3");
    // h3.textContent = this.storeName;
    // article.appendChild(h3);

    // const ul = document.createElement("ul");
    // article.appendChild(ul);

    // for (let i = 0; i < hours.length; i++) {
    //   const li = document.createElement("li");
    //   li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
    //   ul.appendChild(li);
    // }

    // const li = document.createElement("li");
    // li.textContent = `Total cookies: ${this.totalDailyCookies}`;
    // ul.appendChild(li);


    const seattle = new Location("seattle", 23, 65, 6.3, [],[], 0);
    // console.log(seattle)
    const tokyo = new Location("tokyo", 3, 24, 1.2, [], [], 0);
    const dubai = new Location("dubai", 11, 38, 3.7, [], [], 0);
    const paris = new Location("paris", 20, 38, 2.3, [], [], 0);
    const lima = new Location("lima", 2, 16, 4.6, [], [], 0);