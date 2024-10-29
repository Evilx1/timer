let userInput = parseInt(prompt("How many hours of timer?"))
let finalinput = userInput*60*60
console.log(finalinput)
var a = finalinput
// hours config
if (a>=1){
    const intervalidmin = setInterval(() => {
    if(a>=1){
    a = a - 1
    let hours = Math.floor((a/60)/60)
    document.getElementById("clockH").innerHTML=hours
    // console.log(a + "sec hours remain")
    }
    else{
        clearInterval(intervalidmin)
    }
}, 1000);
}

// MINUTES CONFIG
var min = 59
// seconds config
if (a>=1){
    var sec = 60
    const intervalidSec = setInterval(()=>{
        if(a>=1){
            if(sec>=1){
                sec = sec -1
                document.getElementById("clockS").innerHTML=sec
                document.getElementById("clockM").innerHTML= min
            }
            else{
                sec = 60
                if(min>=0){
                    min = min-1
                }
                else{
                    min = 60
                }  
            }
        }
        else{
            clearInterval(intervalidSec)
            document.getElementById("clockS").innerHTML="0"
            document.getElementById("clockM").innerHTML= "0"
        }
        console.log(min)
    },1000)
}