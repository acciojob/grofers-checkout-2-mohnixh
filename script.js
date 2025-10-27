// Select all price cells using the data attribute
const priceCells = document.querySelectorAll('[data-ns-test="price"]');

// Calculate total by looping through all price cells
let total = 0;
for (let i = 0; i < priceCells.length; i++) {
    total += Number(priceCells[i].innerText);
}

// Create new row for the grand total
const newRow = document.createElement("tr");

// Create cell that spans 2 columns
const totalCell = document.createElement("td");
totalCell.colSpan = 2;
totalCell.setAttribute('data-ns-test', 'grandTotal');
totalCell.innerText = total;

// Add cell to row
newRow.appendChild(totalCell);

// Add row to table
const table = document.querySelector("table");
table.appendChild(newRow);