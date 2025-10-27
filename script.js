
const rows = document.querySelectorAll("tr");

let total = 0;

for (let i = 1; i < rows.length; i++) {
    const priceCell = rows[i].querySelector("td:nth-child(2)");
    total += Number(priceCell.innerText);
}

const newRow = document.createElement("tr");

const totalCell = document.createElement("td");
totalCell.innerText = "Total: " + total + " Rs";
totalCell.colSpan = 2; 

newRow.appendChild(totalCell);

const table = document.querySelector("table");
table.appendChild(newRow);