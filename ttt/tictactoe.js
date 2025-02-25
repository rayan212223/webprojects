let boxes=document.querySelectorAll(".box");//here boxes is an array
let h=document.querySelector("h1");
let rst=document.querySelector("#rst");
let ng=document.querySelector("#newgame");

let winningPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],
                    [2,5,8],[2,4,6],[3,4,5],[6,7,8]];


let count=0;

turnO=true;

boxes.forEach((box)=>{
    
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        
        else{
            box.innerText="X"
            turnO=true;

        } 
        
        box.disabled=true;
        
       if(count<8){
          checkWinner(box);
       }
       else{
          drawn();
       }

    })
})


const checkWinner=(box)=>{
    count++;
    for(let patterns of winningPatterns){
        
        let pos1=boxes[patterns[0]].innerText
        let pos2=boxes[patterns[1]].innerText
        let pos3=boxes[patterns[2]].innerText   
        
             if(pos1!="" && pos2!="" && pos3!=""){
                
                 if(pos1===pos2 && pos2===pos3){
                    
                    winnerDeclaration(box);
                    disableBoxes();
                 }
            }
    }
}




//disabling boxes
let disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}




let winnerDeclaration=(box)=>{
   h.innerText="The winner is "+ box.innerText;
}

let drawn=()=>{
    h.innerText="Drawn";
 }

ng.addEventListener("click",()=>{
    count=0;
    for(box of boxes){
        box.innerText="";
        h.innerText="Tic Tac Toe"
        box.disabled=false;
    }
    

})

rst.addEventListener("click",()=>{
    count=0;
    for(box of boxes){
        box.innerText="";
        h.innerText="Tic Tac Toe"
        box.disabled=false;
    }
    turnO=true;
   
    
})

