// Get the form element
var form = document.getElementById("myForm");

// Get the table element
var table = document.getElementById("myTable");

// Add an event listener for the "submit" event
form.addEventListener("submit", function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the values of the form fields
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var gender = document.getElementById("gender").value;

  // Create a new row in the table
  var row = table.insertRow();

  // Add cells for each field in the form
  var firstNameCell = row.insertCell(0);
  var lastNameCell = row.insertCell(1);
  var genderCell = row.insertCell(2);

  // Set the text content of each cell to the value of the corresponding form field
  firstNameCell.innerHTML = firstName;
  lastNameCell.innerHTML = lastName;
  genderCell.innerHTML = gender;

  // Clear the form fields
  form.reset();
});
