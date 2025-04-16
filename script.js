
function btnsave(e) {
  e.preventDefault(); 
  var form = document.getElementById("studentForm")
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const genderInput = document.querySelector("input[name='gender']:checked");
  const gender = genderInput ? genderInput.value : "";
  const course = document.getElementById("course").value;
  const email = document.getElementById("email").value.trim();


 // Simple validation
 if (!name || !age || !course || !email) {
  alert('Please fill in all fields.');
  return;
}

// Create table row and cells
const tbody = document.getElementById('tbody');
const row = document.createElement('tr');

[name, age, gender, course, email].forEach(text => {
  const cell = document.createElement('td');
  cell.textContent = text;
  row.appendChild(cell);
});

// Create Action cell with Delete button
const actionCell = document.createElement('td');
const deleteBtn = document.createElement('button');
deleteBtn.style.backgroundColor = 'red';
deleteBtn.style.color = 'white'; // Optional for better contrast
deleteBtn.style.border = 'none'; // Optional: cleaner look
deleteBtn.style.padding = '5px 10px'; // Optional: add some padding
deleteBtn.style.borderRadius = '4px'; // Optional: rounded corners
deleteBtn.textContent = 'Delete';
deleteBtn.onclick = () => row.remove();
actionCell.appendChild(deleteBtn);
row.appendChild(actionCell);

// Add row to table
tbody.appendChild(row);


// Clear form
form.reset();
}