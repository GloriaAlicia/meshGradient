let button = document.querySelector("button");
button.addEventListener("click",()=>{
    let color1 = document.getElementById("color1").value;
    let color2 = document.getElementById("color2").value;
    let color3 = document.getElementById("color3").value;
    let color4 = document.getElementById("color4").value;

    changeColor(document.querySelector(".gradient"), color1, color2, color3, color4);
})

function changeColor(element, color1, color2, color3, color4){
    let generatedGradient = "radial-gradient(farthest-side at "+ randomNumber(0,100,"%") +" "+ randomNumber(0,100,"%") +","+ color1 +" 0%,rgba(0,0,0,0)70%), radial-gradient(farthest-side at "+ randomNumber(0,100,"%") +" "+ randomNumber(0,100,"%") +","+ color2 +" 0%,rgba(0,0,0,0)80%),    radial-gradient(circle farthest-side at "+ randomNumber(0,100,"%") +" "+ randomNumber(0,100,"%") +","+ color3 +" 0%,transparent),radial-gradient(circle farthest-side at "+ randomNumber(0,100,"%") +" "+ randomNumber(0,100,"%") +","+ color4 +" 0%,transparent)"


    element.style.backgroundImage = generatedGradient;
    document.getElementById("output").textContent = "background-image:" + generatedGradient + ";" + "background-color:" + document.getElementById("background").value + ";";
    element.style.backgroundRepeat = "no-repeat";
    element.style.backgroundColor = document.getElementById("background").value;
}
//-----------------funciones utiles----------------
function randomNumber(min,max,unit){
    let minNumber = min;
    let maxNumber = max;
    let randomNumber = Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber);
    randomNumber += unit
    return randomNumber;
}