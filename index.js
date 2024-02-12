/** @format */

//დამატები 1.

const numbers = [15, 16, 17, 18, 19, 20, 21, 22, 23];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

//დამატებითი 2.

let newSum = sum;

function changeSum(callback) {
  callback();
}

console.log(newSum);

//დამატებითი 3.
console.log(Math.pow(sum, 2));

//დამატებითი 4.
let userInfo = { name: "mike", lastname: "doe" };

function addStatusAndPoint(person, status, point) {
  return { ...person, status: status, point: point };
}

let mergedInfo = addStatusAndPoint(userInfo, "New", 40);

console.log(mergedInfo);

//დამატებითი 5.
let a = 2;
let b = 2;

function comparision() {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}
console.log(comparision());

//დამატებითი 6.

let text = "lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ";

function textLength() {
  if (text.length > 6) {
    return text;
  } else {
    return;
  }
}

console.log(textLength());

//დამატებითი 8.

const newString = ["lion", "hippo", "tiger"];

console.log(newString.toString());

//დამატებითი 9.

let name = "David";

function addNameToP() {
  let paragraph = document.getElementById("nameP");
  paragraph.innerHTML = "Name: " + name;
}

//დამატებითი 10.
function showNameAlert() {
  let name = "David";
  alert("Your name is: " + name);
}

//ძირიითადი დავალება
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    createUserCards(json);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
function createUserCards(data) {
  const container = document.getElementById("userCards");

  data.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const name = document.createElement("p");
    name.textContent = `Name: ${user.name}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${user.email}`;

    const address = document.createElement("p");
    address.textContent = `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

    card.appendChild(name);
    card.appendChild(email);
    card.appendChild(address);

    container.appendChild(card);
  });
}

createUserCards(userData);
