let colorSelected = "white";
let LastColorSelected = "white";

function setColor() {
    LastColorSelected = colorSelected;
    colorSelected = document.getElementById("selectedID").value;
}

function createCell() {
    let cell = document.createElement("td");
    cell.onclick = () => cell.style.backgroundColor = colorSelected;
    return cell;
}

function addRow() {
    let grid = document.querySelector("#grid");
    let rows = grid.querySelectorAll("tr");
    let numCols = rows[0] ? rows[0].children.length : 1;

    let row = document.createElement("tr");
    for (let i = 0; i < numCols; i++) {
        row.appendChild(createCell());
    }
    grid.appendChild(row);
}

function addColumn() {
    let rows = document.querySelectorAll("#grid tr");

    if (rows.length === 0) {
        addRow();
    } else {
        rows.forEach(row => row.appendChild(createCell()));
    }
}

function removeRow() {
    let grid = document.querySelector("#grid");
    let rows = grid.querySelectorAll("tr");

    if (rows.length === 0) {
        alert("There are no more rows to remove.");
    } else {
        grid.removeChild(rows[rows.length - 1]);
    }
}

function removeColumn() {
    let rows = document.querySelectorAll("#grid tr");

    if (rows.length === 0) {
        alert("There are no more columns to remove.");
    } else if (rows[0].children.length === 1) {
        document.querySelector("#grid").innerHTML = "";
        alert("The last column was removed. The grid is now empty.");
    } else {
        rows.forEach(row => row.removeChild(row.lastElementChild));
    }
}

function fillAll() {
    if(colorSelected == "white" || colorSelected === "rgb(255,255,255)"){
        alert("Please select the LastColor or pick another color before filling all!");
        return;
    }

    document.querySelectorAll("#grid td").forEach(cell => {
        cell.style.backgroundColor = colorSelected;
    });
}

function fillUncolored() {
    document.querySelectorAll("#grid td").forEach(cell => {
        if (cell.style.backgroundColor == "" || cell.style.backgroundColor == "white" || cell.style.backgroundColor === "rgb(255,255,255)") {
            cell.style.backgroundColor = colorSelected;
        }
    });
}

function clearAll() {
    document.querySelectorAll("#grid td").forEach(cell => {
        cell.style.backgroundColor = "";
    });
}

function eraser(){
    colorSelected = "white";
}

function LastColor(){
    colorSelected = LastColorSelected;
    document.getElementById("selectedID").value = colorSelected;
}