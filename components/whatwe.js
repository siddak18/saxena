const caro1=document.getElementById("caro1");
const caro2=document.getElementById("caro2");
const caro3=document.getElementById("caro3");
const onear=document.getElementById("onear");
const right=document.getElementById("oneri");
const left=document.getElementById("lefton");
const lastlet=document.getElementById("lastle");
const chal1=document.getElementById("chal21");
const chal2=document.getElementById("chal22");
const chal31=document.getElementById("chal31");
const chal32=document.getElementById("chal32");
const chal41=document.getElementById("chal41");
const chal42=document.getElementById("chal42");
const chal51=document.getElementById("chal51");
const chal52=document.getElementById("chal52");
const chal61=document.getElementById("chal61");
const chal62=document.getElementById("chal62");

onear.addEventListener('click',()=>{
    caro2.style.display="flex";
    caro1.style.display="none";
    caro3=style.display="none";
});

right.addEventListener('click',()=>{
     caro2.style.display="none";
     caro3.style.display="none";
     caro1.style.display="flex";
});

left.addEventListener("click",()=>{
    caro1.style.display="none";
    caro2.style.display="none";
    caro3.style.display="flex";
});

lastlet.addEventListener('click',()=>{
    caro1.style.display="none";
    caro2.style.display="flex";
    caro3.style.display="none";
});

chal1.addEventListener("click",()=>{
      chal1.style.display="none";
      chal2.style.display="flex";
});

chal2.addEventListener("click",()=>{
    chal1.style.display="flex";
    chal2.style.display="none";
});

chal31.addEventListener('click',()=>{
    chal31.style.display="none";
    chal32.style.display="flex";
});

chal32.addEventListener('click',()=>{
    chal31.style.display="flex";
    chal32.style.display="none";
});

chal41.addEventListener('click',()=>{
    chal41.style.display="none";
    chal42.style.display="flex";
});

chal42.addEventListener('click',()=>{
    chal41.style.display="flex";
    chal42.style.display="none";
});

chal51.addEventListener('click',()=>{
    chal51.style.display="none";
    chal52.style.display="flex";
});

chal52.addEventListener('click',()=>{
    chal51.style.display="flex";
    chal52.style.display="none";
});

chal61.addEventListener('click',()=>{
    chal61.style.display="none";
    chal62.style.display="flex";
});

chal62.addEventListener('click',()=>{
    chal61.style.display="flex";
    chal62.style.display="none";
});





const dialog=document.getElementById("opendia");
const openit=document.getElementById("get");
const donate=document.getElementById("donateit");
const collab=document.getElementById("collab");
const volent=document.getElementById("volent");
const hidetwo=document.getElementById("donatedialog");
const hidetwo2=document.getElementById("hidetwo2");
const det=document.getElementById("det");
dialog.addEventListener('click',()=>{
    if(openit.style.display==='none'){
        openit.style.display="flex";
    }else{
        openit.style.display="none";
    }
    collab.style.display="none";
    volent.style.display="flex";
    donate.style.display="none";
    det.style.display="none";
});
hidetwo.addEventListener('click',()=>{
    if(openit.style.display==='none'){
        openit.style.display="flex";
    }else{
        openit.style.display="none";
    }
    collab.style.display="none";
    volent.style.display="none";
    donate.style.display="flex";
    det.style.display="block";
});
hidetwo2.addEventListener('click',()=>{
    if(openit.style.display==='none'){
        openit.style.display="flex";
    }else{
        openit.style.display="none";
    }
    collab.style.display="flex";
    volent.style.display="none";
    donate.style.display="none";
    det.style.display="none";
});


const close=document.getElementById("closedialog");
close.addEventListener('click',()=>{
    openit.style.display="none";
    collab.style.display="none";
    volent.style.display="none";
    donate.style.dialog="none";
    det.style.display="none";
});