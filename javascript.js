
































































































































































































const jar = document.querySelector("#jar")
const container = document.querySelector("#container");
const containerBtn = document.querySelector("#containerBtn");
const button = document.querySelector("#btn");

const popUpBtn = document.createElement("button");
popUpBtn.classList.add("custom")
containerBtn.appendChild(popUpBtn);
popUpBtn.textContent = "pick Number of sqaures!"

let userNum = 1;
let hover = false
let erase = false

popUpBtn.addEventListener("click", () => {

    let selection = "input any number from 1 to 100";
    
    while (true) {

        userNum = +prompt(selection)
        if (userNum <= 100 && userNum > 0)
            break;

        selection = "thats not a valid number!"
    }
})



const eraseBtn = document.createElement("button");
eraseBtn.classList.add("custom")
eraseBtn.textContent = "Eraser"
containerBtn.appendChild(eraseBtn)

eraseBtn.addEventListener("click", () => {
    erase = !erase
    console.log(userNum)
})




const clickBtn = document.createElement("button");
clickBtn.classList.add("custom")
clickBtn.addEventListener("click", () => {
    hover = !hover
    console.log(hover)
    /*if (hover == false ) {
        hover = true;
    }
    if (hover == true) {
        hover = false;
    }*/
})
clickBtn.textContent = "Hover or Click drawing"
containerBtn.appendChild(clickBtn);


function createGrid () {

    let size = (1 / userNum) * 100;
    for (let i = 0; i < userNum; i++) {
        for(let j = 0; j < userNum; j++) {
            let div = document.createElement("div");

            div.style.width = size + "%";
            div.style.height = size + "%";
          //div.style.border = "1px solid #000000"
            div.classList.add("grid-item")
            document.getElementById("jar").appendChild(div);
            
            div.addEventListener("mouseover", () => {
                if (erase == true)
                    div.style.backgroundColor = "#ffffff"
            })

            div.addEventListener("click", () => {
                if (hover == false && erase == false)
                    div.style.backgroundColor ="#000000"
                
            })
            div.addEventListener("mouseover", () => {
                if (hover == true && erase == false)
                    div.style.backgroundColor ="#000000"
                
            })
        }
          //let jump = document.createElement("br");
          //document.getElementById("jar").appendChild(jump)
    }
}

button.addEventListener("click", () => {
    function deleteBoard(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }

    deleteBoard(jar)
    createGrid()
})




















/*let userNum;
let gridItem;

const container = document.querySelector("#container");
const divs = document.createElement("div");
const btn = document.querySelector("#btn");

const remove = document.createElement("button");
remove.textContent = "remove"

const start = document.createElement("button");
start.textContent = "start"

const buttons = document.querySelector("#containerBtn");
buttons.appendChild(remove);
buttons.appendChild(start);
buttons.appendChild(btn);






btn.addEventListener("click", () => {
    userNum = +prompt("pick a valid number")
})

start.addEventListener("click", () => {
    generateGrid()
})

remove.addEventListener("click", () => {
    const myNode = document.getElementById("container")
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
})

function generateGrid() {
    for(let i = 0; i < userNum; i++) {
        for(let j = 0; j < userNum; j++){
            let square = document.createElement("div");
            square.style.width = ((1000 / userNum)-2) + "px"
            square.style.height = ((1000 / userNum)-2) + "px"
            square.style.border = "1px solid #000000"
            //square.classList.add("grid-item")
            container.append(square)

        }
    }
}
    
    //document.getElementsByClassName("grid-item").setAttribute("style", "width:" + (960/userNum).toString());
    //document.getElementsByClassName("grid-item").setAttribute("style", "height:" + (960/userNum).toString());







/*function generateGridVert() {
    for (let i = 0; i < userNum; i++) {
        for (let j = 0; j < userNum; j++) {
            gridItem = document.createElement("div");
            gridItem.classList.add('.grid-item');

            gridItem.style.left = j * 100 + "px"
            gridItem.style.top = i * 100 + "px"
            container.appendChild(gridItem);
        }
    }
}
*/