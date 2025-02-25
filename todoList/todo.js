

const btn=document.querySelector("#btn");

const inp=document.querySelector("#input");

const ul=document.querySelector("#ul");

// const rem=document.querySelector("#remove");
ul.addEventListener("click",e=>{
    
    if(e.target.tagName==="BUTTON"){
          e.target.parentElement.remove();
    }
    saveData();
})
 


function add(li){
   
    if(inp.value!=""){
     li.innerText=inp.value;
     ul.append(li);
     let x=document.createElement("button");
     x.innerText="X";
     li.append(x);
     x.setAttribute("class","btnX");
    //   x.setAttribute("onclick","remove()");

     inp.value="";

    

    }  
    saveData()
    
  
 
    
}


btn.addEventListener("click",()=>{

    let li=document.createElement("li");
    add(li);

});





function saveData(){
    localStorage.setItem("data",ul.innerHTML);
}
 
function show(){
    ul.innerHTML=localStorage.getItem("data")
}
show();



















