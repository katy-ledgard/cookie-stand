"use strict";

console.log("Hey Cookie.");

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











const seattle = {
  storeName: "Seattle",
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  customersEachHour: [33, 31, 33, 31, 33, 31, 33, 31, 33, 31, 33, 31, 33, 31],
  cookiesEachHour: [
    198, 200, 198, 200, 198, 200, 198, 200, 198, 200, 198, 200, 198, 200,
  ],
  totalDailyCookies: 2786,

  render: function() {
    const parentElement = document.getElementById("container");
console.log(parentElement);

const article = document.createElement("article");
parentElement.appendChild(article);

const h3 = document.createElement("h3");
h3.textContent = this.storeName;
article.appendChild(h3);

const ul = document.createElement("ul");
article.appendChild(ul)

for (let i = 0; i < hours.length; i++) {
const li = document.createElement("li");
li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
ul.appendChild(li);

}
},
};

console.log(seattle)

seattle.render();