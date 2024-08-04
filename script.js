var bimg=document.querySelector(".banner");
var title=document.querySelector(".banner .title");
var desc=document.querySelector(".content span");
function m1(){
 bimg.style.backgroundImage="url('cindrella.jpg')";
 title.innerHTML="CINDRELLA";
desc.innerHTML="2009|12+|2hr15min|Romance";
 
}
function m2(){
    console.log("clicked");
    bimg.style.backgroundImage="url('joker.jpg')";
    title.innerHTML="JOKER";
    desc.innerHTML="2023|16+|2hr30min|Tragic"
   }
   function m3(){
    console.log("clicked");
    bimg.style.backgroundImage="url('squidgame.jpg')";
    title.innerHTML="SquidGame";
    desc.innerHTML="2023|18+|15episodes|Thriller";
   }
   function m4(){
    console.log("clicked");
    bimg.style.backgroundImage="url('tangled.jpg')";
    title.innerHTML="TANGLED";
    desc.innerHTML="2010|12+|2hr15min|Romance"
   }