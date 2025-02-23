function createTable() {
	  // Get input values
const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const isbn = document.getElementById('isbn').value;

// Get table reference
const table = document.getElementById('data-info'); // Assuming the table has this ID
const newRow = table.insertRow(); // Insert a new row

// Insert new cells in the row
const cell1 = newRow.insertCell(0);
const cell2 = newRow.insertCell(1);
const cell3 = newRow.insertCell(2);

// Assign values to the cells
cell1.innerHTML = title;
cell2.innerHTML = author;
cell3.innerHTML = isbn;

}