const Lo=document.getElementById("Lo");
const Img=document.getElementById("shield");
const Btn=document.getElementById("my-btn");
// const Shi=document.getElementById("shieldring");

const FB=document.getElementById("fb");
const IN=document.getElementById("in");
const TW=document.getElementById("tw");
const GI=document.getElementById("gi");
const LN=document.getElementById("ln");




function Start(){
    console.log("yo");
    Lo.src="./Yo/1688998134468.png";
    Lo.classList.add("clicked");
   
    // Img.classList.add("zoom");
    
    setTimeout(()=>{
        console.log("yo2");
        Img.style.display="none";
    },2000);
    Btn.style.display="none";
    setTimeout(() => {
        FB.style.display="block";
        IN.style.display="block";
        TW.style.display="block";
        GI.style.display="block";
        LN.style.display="block";
        
        FB.classList.add("showT");
        TW.classList.add("showT");
        IN.classList.add("showT");
        LN.classList.add("showT");
        GI.classList.add("showT");
    }, 0);
   
    
}


// function Update(){
//     let Val=Fac.value;
//     Fbl.getAttribute("href");
//     Fbl.setAttribute("href",Val);
//     // Fbl.href='Val';
//     console.log(Fac.value);
// } 