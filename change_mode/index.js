let icon=document.querySelector('#icon');
let a=document.querySelector('#a');

let icon_tap=()=>{
  window.location.href='image/minecraft_build_bloc.png';
}
icon.addEventListener('click', icon_tap);

let body=document.querySelector('body');
let btn=document.querySelector("#dark");
let links=document.querySelectorAll('.link');
let nav=document.querySelector('#nav');
const STORAGE='modeIsDark';

function link_change(){
  links.forEach(link=>{
    link.style.color='white';
})}

function load(){
  const look=localStorage.getItem(STORAGE);
  if(look==="true"){
    body.classList.toggle('dark_mode');
    link_change();
    nav.classList.toggle('navDark');
  }
}
function change(){
  nav.classList.toggle('navDark');
  body.classList.toggle("dark_mode");
  let isDark=body.classList.contains('dark_mode');
  if(isDark===true){
  link_change();
    
  }else{links.forEach(link=>{link.style.color='black'})};
  localStorage.setItem(STORAGE, isDark);
}

load(); 
btn.addEventListener('click', change);

const selecter=document.querySelector('#select');
const text=document.querySelector("#text");

selecter.addEventListener('change',()=>{
  let selectedNumber= selecter.value;
  let selectedOption=selecter.options[selecter.selectedIndex];
  if(selectedOption.textContent==="Navigation" || selectedNumber==="null"){
  text.innerHTML=". . .";
    
  }
  text.innerHTML=selectedOption.innerHTML+" / "+selectedNumber;
});




const img=document.querySelectorAll(".image");
img.forEach(item=>{
  item.addEventListener("click",()=>{
  let link = item.src;
  location.href=link;
  });
}
)