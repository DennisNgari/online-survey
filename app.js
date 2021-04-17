//Person Class
class Person {
  constructor(age, height, weight) {
    this.age = age;
    this.height = height;
    this.weight = weight;
  }
}

//UI Class: Handle UI tasks;
class UI {
  static addDataToList(data) {
    // const table = document.querySelector("#table-Id");
    const container = document.querySelector(".container");
    const table = document.createElement("table");
    // const tablehead = document.createElement("thead");
    container.innerHTML = `
    <table class="table">
    <thead >
    <caption class="caption">Research Survey Data</caption></thead>
    <thead>
      <tr>
          <th>Age</th>
          <th>Height (Cms)</th>
          <th>Weight (Kgs)</th>
        </tr>
    </thead>
      <td>${data.age}</td>
      <td>${data.height}</td>
      <td>${data.weight}</td>
      </table>
    `;
    container.appendChild(table);

    //Vanish in 3 seconds
    setTimeout(() => document.querySelector(".table").remove(), 3000);
  }

  static showAlert() {
    const alertDiv = document.querySelector(".showAlert");
    const successDiv = document.createElement("success");
    alertDiv.innerHTML = `
    <div class=success>
    <h2 class="success-text">SUCCESS!</h2>
    <h2 class="success-text">Thank you for Participating in this Survey...</h3>
    <div class=success>
    `;
    alertDiv.appendChild(successDiv);

    //Vanish in 3 seconds
    setTimeout(() => document.querySelector(".success").remove(), 3000);
  }

  //Function to clear input filds after submission.
  static clearFields() {
    document.getElementById("age").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
  }
}
////////////////////////////////////////////////////////
//Display Persons
document.addEventListener("DOMContentLoaded", UI.displayedData);

//Add a Person
//Event add age, height and weight on submit.
document.querySelector("#input-form").addEventListener("submit", (e) => {
  //Prevent actual submit
  e.preventDefault();
  //Add Event Listeners
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  //Instantiate Person
  const person1 = new Person(age, height, weight);

  //Add to the UI
  UI.addDataToList(person1);

  //Clear fields
  UI.clearFields();

  //Add success text
  UI.showAlert();
});
