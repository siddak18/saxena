const arrow=document.getElementById("rightarrow");
const arrow2=document.getElementById("leftarrow");
const car11=document.getElementById("car11");
const car12=document.getElementById("car12");
const car13=document.getElementById("car13");
const car14=document.getElementById("car14");
const car15=document.getElementById("car15");
const car16=document.getElementById("car16");
// arrow.addEventListener('click',()=>{
//      arrow.style.display="none";
//      arrow2.style.display="flex";
//      car11.style.display="none";
//      car12.style.display="none";
//      car13.style.display="none";
//      car14.style.display="flex";
//      car15.style.display="flex";
//      car16.style.display="flex";
// });

// arrow2.addEventListener('click',()=>{
//     arrow.style.display="flex";
//     arrow2.style.display="none";
//      car11.style.display="flex";
//      car12.style.display="flex";
//      car13.style.display="flex";
//      car14.style.display="none";
//      car15.style.display="none";
//      car16.style.display="none";
// });



const hide=document.getElementById("moveall");
const hide1=document.getElementById("arrowcon");
const hide2=document.getElementById("hide2");
const hide3=document.getElementById("hide3");
const hide4=document.getElementById("hide4");
const hide5=document.getElementById("hide5");
const hide6=document.getElementById("hide6");
const hide22=document.getElementById("moveallleft");
hide.addEventListener('click',()=>{
console.log("wo");
   hide1.style.display="none";
   hide2.style.display="none";
   hide3.style.display="none";
   hide4.style.display="flex";
   hide5.style.display="flex";
   hide6.style.display="flex";
});

hide22.addEventListener('click',()=>{
    hide4.style.display="none";
    hide5.style.display="none";
    hide6.style.display="none";
    hide1.style.display="flex";
    hide3.style.display="flex";
    hide2.style.display="flex";
});