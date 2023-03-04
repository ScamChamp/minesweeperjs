function draw() {
  document.getElementById("board").appendChild(createTable());
}



var components = {
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

  var table, row, td, i, j;
  table = document.createElement("table");

  for (i = 0; i < components.num_of_rows; i++) {
    row = document.createElement("tr");
    for (j = 0; j < components.num_of_cols; j++) {
      td = document.createElement("td");
      td.id = cellID(i, j);
      td.className = "sq";
      td.innerHTML = "&nbsp;";
      td.flagged,td.reveled= false
      td.reveled=false
      td.bomb=false
      td.adj=0
      td.oncontextmenu="false"
      row.appendChild(td);
      addCellListeners(td, i, j);
    }
    table.appendChild(row);
  }
  return table;
}

function addCellListeners(td, i, j) {
  td.addEventListener("mousedown", function (event) {
    this.reveled= true
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

    this.className="shq"; 
  });

  // look into event

  td.addEventListener('contextmenu', function(ev) {
  if(this.reveled == false){
    if(this.flagged){
      this.textContent=' '
      this.flagged=false
    }else{
      this.textContent='!'
      this.flagged=true
    }}
},false);


}

function makeBombs() {
  document.getElementById("board").childElementCount;
}
