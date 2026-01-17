let boxes=document.querySelectorAll(".box");
let newgame=document.querySelector("#new_game");
let btns=document.querySelector("#new_button");
let turnO=true; //player X and player Y 
const winpattern = [
    [0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("i'm in now");
        if(turnO){
            box.innerText="x";
            turnO=false;
        }
        else{
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;
       checkwinner();
    });
});
    const checkwinner=()=>{
            for(let pattern of winpattern){
                let pos1val=boxes[pattern[0]].innerText;
                let pos2val=boxes[pattern[1]].innerText;
                let pos3val=boxes[pattern[2]].innerText;
                if(pos1val!="" && pos2val!="" && pos3val!=""){
                    if(pos1val===pos2val && pos2val===pos3val){
                        console.log("WINNER", pos1val);
                        alert(pos1val + " is the winner!");
                        disableallboxes();
                    }
                }
                
            }
        };
    const  disableallboxes=()=>{
                boxes.forEach((box)=>{
                    box.disabled=true;
                });
            };
            btns.addEventListener("click",()=>{
                boxes.forEach((box)=>{
                    box.innerText="";
                    box.disabled=false;
                });
                turnO=true;
            });
            newgame.addEventListener("click",()=>{
                boxes.forEach((box)=>{
                    box.innerText="";
                    box.disabled=false;
                })
            });


