const gate=document.getElementById("ageGate");
if(sessionStorage.getItem("wellDosed21")==="yes") gate.classList.add("hidden");
document.getElementById("enter").onclick=()=>{sessionStorage.setItem("wellDosed21","yes");gate.classList.add("hidden")};
document.getElementById("exit").onclick=()=>{document.querySelector(".age-panel").innerHTML="<h1>Thanks for stopping by.</h1><p>This website is intended only for adults age 21 and older.</p>"};
const menu=document.getElementById("menu"),nav=document.getElementById("nav");
menu.onclick=()=>nav.classList.toggle("open");
nav.querySelectorAll("a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));