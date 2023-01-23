// ELEMENTI SELEZIONATI
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const date = document.getElementById("date");
const btn = document.getElementsByClassName("btn");
const firstNameCell = document.getElementById("first-name-cell");
const lastNameCell = document.getElementById("last-name-cell");
const dateCell = document.getElementById("date-cell");

// COSTRUTTORE OGGETTO
const UserProfile = function () {
  this.firstName = "";
  this.lastName = "";
  this.date = "";
};

// OGGETTO CREATO
const user = new UserProfile();

// FUNZIONI
const assignValue = (firstName, lastName, date) => {
  user.firstName = firstName;
  user.lastName = lastName;
  user.date = date;
};

const tableData = () => {
  firstNameCell.textContent = firstName.value;
  lastNameCell.textContent = lastName.value;
  dateCell.textContent = date.value;
};

// EVENTO AL CLICK
btn[0].onclick = function () {
  assignValue(firstName.value, lastName.value, date);

  firstName.value === "" || lastName.value === "" || date.value === ""
    ? alert("Ops, inserire dati")
    : tableData();

  firstName.value = "";
  lastName.value = "";
  date.value = "";
};
