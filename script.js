var cells = document.getElementsByClassName("xo-cell")
var x_o = "x"; 
var indexOfCell = null;
var newDivision = null;
var title = document.getElementById("title")
var cellIsClicked = [null, null, null, null, null, null, null, null, null]


for (let cellIndex = 0; cellIndex < cells.length; cellIndex++){
    cells[cellIndex].addEventListener("click", () => {
        indexOfCell = cellIndex
        cellClicked();
    })
}

function cellClicked(){
    newDivision = document.createElement("div")
    if(cellIsClicked[indexOfCell] == null){
        cellIsClicked[indexOfCell] = x_o
        if (x_o == "x"){
            newDivision.className = x_o
            x_o = "o"
        }
        else{
            newDivision.className = x_o
            x_o = "x"
        }
        cells[indexOfCell].append(newDivision)
    }
    else{
        console.log("cell have been clicked")
    }
}

function isGameOver(sign){
    function winningWord(){
        clearInterval(isGameOverInterval)
        for (let cellIndex = 0; cellIndex < cells.length; cellIndex++){
            cellIsClicked[cellIndex] = true
        }        
        return `${sign} wins`
    }
    if(cellIsClicked[0] == sign && cellIsClicked[1] == sign && cellIsClicked[2]== sign){
        return winningWord()
    }
    else if(cellIsClicked[3] == sign && cellIsClicked[4] == sign && cellIsClicked[5] == sign){
        return winningWord()
    }
    else if(cellIsClicked[6] == sign && cellIsClicked[7] == sign && cellIsClicked[8] == sign){
        return winningWord()
    }

    else if(cellIsClicked[0] == sign && cellIsClicked[3] == sign && cellIsClicked[6] == sign){
        return winningWord()
    }
    else if(cellIsClicked == sign && cellIsClicked[4] == sign && cellIsClicked[7] == sign){
        return winningWord()
    }
    else if(cellIsClicked[2] == sign && cellIsClicked[5] == sign && cellIsClicked[8] == sign){
        return winningWord()
    }
    else if(cellIsClicked[0] == sign && cellIsClicked[4] == sign && cellIsClicked[8] == sign){
        return winningWord()
    }
    else if(cellIsClicked[2] == sign && cellIsClicked[4] == sign && cellIsClicked[6] == sign){
        return winningWord()
    }
    else if (cellIsClicked[0] != null && cellIsClicked[1] != null && cellIsClicked[2] != null && cellIsClicked[3]
            != null && cellIsClicked[4] != null && cellIsClicked[5] != null && cellIsClicked[6] != null &&
            cellIsClicked[7] != null && cellIsClicked[8]){
                return "draw"
    }


}

var isGameOverInterval = setInterval(
    () => {
        var finalResult = (isGameOver("x") || isGameOver("o") || "X_O game")
        title.innerHTML = finalResult
        if (finalResult[0] == "x"){
            title.style.color = "#0974B3"
        }
        else if (finalResult[0] == "o"){
            title.style.color = "#B32D25"
        }
        else if (finalResult[0] == "d"){ 
            title.style.color = "gray"
        }
        
}, 1_000
)
