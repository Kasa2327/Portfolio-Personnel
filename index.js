let btn=document.querySelector("#btn");
let body=document.querySelector("body");
const STORAGE="darkIsActive";

const load=()=>{
  let look=localStorage.getItem(STORAGE);
  if(look=="true"){
    body.classList.toggle("dark");
  }
}

const change=()=>{
  body.classList.toggle("dark");
  let isDark=body.classList.contains("dark");
  
  localStorage.setItem(STORAGE, isDark);
}

load();
btn.addEventListener("click", change);