let boxes=document.querySelectorAll(".btn")
let box2=document.querySelector(".reset")
let turnO=true;
let newbutton=document.querySelector(".new-btn");
let mess=document.querySelector(".message")
let win=document.querySelector(".winner")
const winpossibilities=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const resetgame=()=>{
    turnO=true;
    enablebox();
    mess.classList.add("hide")
}


boxes.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log("button was clicked")
        if(turnO){
            btn.innerText="O";
            turnO=false;
        }
        else{
            btn.innerText="X";
            turnO="true";
        }
        btn.disabled=true;
        checkwinner();

    })
})



// const checkwinner=()=>{
//     for(let winner of winpossibilities){
//         let pos1=boxes[winner[0]].innerText;
//         let pos2=boxes[winner[1]].innerText;
//         let pos3=boxes[winner[2]].innerText;
//         if(pos1!=""&& pos2!=""&&pos3!=""){
//             if(pos1==pos2 && pos2==pos3){
//                 console.log("winner",pos1)
//                 displaywinner(pos1);
//             }
//         }
//     }
// }
const boxdisabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
}
const displaywinner=(a)=>{
    win.innerText=`Congratulations,winner is ${a}`
    mess.classList.remove("hide")
    boxdisabled();
}

const checkwinner=()=>{
    for(let winner of winpossibilities){
        let pos1=boxes[winner[0]].innerText;
        let pos2=boxes[winner[1]].innerText;
        let pos3=boxes[winner[2]].innerText;
        if(pos1!=""&& pos2!=""&&pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("winner",pos1)
                displaywinner(pos1);
            }
        }
    }
}

newbutton.addEventListener("click",resetgame)
box2.addEventListener("click",resetgame)

