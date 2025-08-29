let boxes=document.querySelectorAll(".box");
let resbtn=document.querySelector("#btn");
let win=document.querySelector(".ma-container");
let newbutton=document.querySelector(".refre");
let massage=document.querySelector(".mag");
let turn0=true; //player x,player 0
 let winpattan=[ 
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];
//six------------------------------------------------------------
const enablebox= ( ) =>{
    for (let box of boxes){
        box.disabled=false; //box e likhte parbo
        box.innerText=""; //box er lekha delete hobe
    }
}
//5th-----------------------------------------------------------------------------------
const resetgame = () =>{
    turn0=true;// game start hole 0 thekei hobe all time eta na dile kokhono X theke aber kokhono 0 theke
    enablebox();
    win.classList.add("hide");  //winner er massage ta hide hoye jabe
}

//4rth------------------------------------------------
const disablebox= ( ) =>{
    for (let box of boxes){
        box.disabled=true; //eta hoye gele ar kono box  click hobe na
    }

}
//3rd----------------------------------------------------
function winercall(pos1){
    massage.innerText=`Congratulations,Winer is ${pos1}`;
    win.classList.remove("hide"); //massage show hobe
    disablebox();
}
//2nd--------------------------------------------
function checkwinner(){
    for(let pattan of winpattan ){
        pos1=boxes[pattan[0]].innerText;
        pos2=boxes[pattan[1]].innerText;
        pos3=boxes[pattan[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="" ){
            if(pos1 == pos2 && pos2 == pos3)
            winercall(pos1);
        }
    }
}

//first-----------------------------------------
boxes.forEach((box)=> {
box.addEventListener("click",()=>{
    if(turn0){
        box.innerText="O";
        turn0=false;

    }else{
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true; //ekta box e 0/x lekhar por kono change hobe na
    checkwinner(); //ekta box e lekhar por..i check korbe winner kina
    

    
});
});
//7th-------------------------------------------------------------------------
resbtn.addEventListener("click",resetgame ); //eta reset button er jonno
 newbutton.addEventListener("click",resetgame );