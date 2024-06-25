let GridActions = (() => {
    let colorSelected;

    function setColor() {
        colorSelected = document.getElementById("selectedID").value;
    }

    function createCell() {
        const cell = document.createElement("td");
        cell.onclick = () => cell.style.backgroundColor = colorSelected;
        return cell;
    }

    function addRow() {
        const grid = document.querySelector("#grid");
        const rows = grid.querySelectorAll("tr");
        const numCols = rows[0] ? rows[0].children.length : 1;

        const row = document.createElement("tr");
        for (let i = 0; i < numCols; i++) {
            row.appendChild(createCell());
        }
        grid.appendChild(row);
    }

    function addColumn() {
        const rows = document.querySelectorAll("#grid tr");

        if (rows.length === 0) {
            addRow();
        } else {
            rows.forEach(row => row.appendChild(createCell()));
        }
    }

    function removeRow() {
        const grid = document.querySelector("#grid");
        const rows = grid.querySelectorAll("tr");

        if (rows.length === 0) {
            alert("There is nothing to delete");
        } else {
            grid.removeChild(rows[rows.length - 1]);
        }
    }

    function removeColumn() {
        const rows = document.querySelectorAll("#grid tr");

        if (rows.length === 0) {
            alert("There is nothing to delete");
        } else if (rows[0].children.length === 1) {
            document.querySelector("#grid").innerHTML = "";
        } else {
            rows.forEach(row => row.removeChild(row.lastElementChild));
        }
    }

    function fillAll() {
        document.querySelectorAll("#grid td").forEach(cell => {
            cell.style.backgroundColor = colorSelected;
        });
    }

    function fillUncolored() {
        document.querySelectorAll("#grid td").forEach(cell => {
            if (!cell.style.backgroundColor) {
                cell.style.backgroundColor = colorSelected;
            }
        });
    }

    function clearAll() {
        document.querySelectorAll("#grid td").forEach(cell => {
            cell.style.backgroundColor = "";
        });
    }

    return {
        setColor,
        addRow,
        addColumn,
        removeRow,
        removeColumn,
        fillAll,
        fillUncolored,
        clearAll
    };
})();