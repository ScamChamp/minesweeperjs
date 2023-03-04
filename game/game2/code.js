function draw() {
    document.getElementById("board").appendChild(createTable());
}

let components = {
    num_of_rows: 14,
    num_of_cols: 14,
    num_of_bombs: 35,
    bomb: "💣",
    alive: true,
};

function cellID(i, j) {
    return "cell-" + i + "-" + j;
}

function createTable() {
    let table, row, td, i, j;
    table = document.createElement("table");

    for (i = 0; i < components.num_of_rows; i++) {
        row = document.createElement("tr");
        for (j = 0; j < components.num_of_cols; j++) {
            td = document.createElement("td");
            td.id = cellID(i, j);
            td.className = "sq";
            td.innerHTML = "&nbsp;";
            td.flagged = false;
            td.revealed = false;
            td.bomb = false;
            td.adj = 0;
            // td.oncontextmenu = true;
            row.appendChild(td);
            addCellListeners(td, i, j);
        }
        table.appendChild(row);
    }
    return table;
}

function addCellListeners(td, i, j) {
    td.addEventListener("mousedown", function(event) {

        if (!components.alive) {
            return;
        }
        components.mousewhiches += event.which;
        if (event.which === 3) {
            return;
        }
        // if (this.flagged) {
        //   this.flagged=false
        // }

        this.className = "shq";
        this.revealed = true;
    });

    // look into event

    td.addEventListener(
        "contextmenu",
        function(event) {
            event.preventDefault();
            console.log("outer if block")
            console.log(this.revealed)
            if (this.revealed === false) {
                console.log("outer if block")
                if (this.flagged) {
                    console.log("inner if block")
                    this.textContent = " ";
                    this.flagged = false;
                } else {
                    console.log("else block")
                    this.textContent = "!";
                    this.flagged = true;
                }
            }
        },
        false
    );
}

function makeBombs() {
    document.getElementById("board").childElementCount;
}