const bande = document.querySelectorAll(".bande")
const avatar=document.querySelector(".small-avatar")
console.log(bande)


bande.forEach(element => {
    element.addEventListener("mouseenter",over)
    function over(){
        //element.style.transform= "scale(1.5,1)"
        //element.style.justifyContent="flex-start"
        //element.style.justifyContent="flex-end"
        //element.style.transform= "scale(1,1)"
        //element.style.justifyContent="space-between"
        //element.classList.toggle("bflexS")
        element.style.animationName = "move"
        //element.classList.toggle("bflexS")
        //element.classList.toggle("bflexE")
        //element.classList.toggle("bflexE")
    }
});


var i=0
var array=[]
const code='ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba'


window.addEventListener("keyup",up)

function up(event){
    array.push(event.key)

    if (array.length > 10) {
        array=[]
        console.log("try again ;)")
    }

    if(array.join/*element qui rejoint le array */('').includes(code)){
        console.log("SUCCES, you activated my trap card")
        avatar.classList.toggle("border-anim")
        window.open("https://www.youtube.com/watch?v=rAx5LIul1N8")
    }

    console.log(array)
    /*if (event.key=="ArrowUp" && i==0) {
        i=i+1
    }
    else{
        i=0
    }

    if (event.key=="ArrowUp" && i==1) {
            i=i+1
        }
    else{
            i=0
        }

    if (event.key=="ArrowDown" && i==2) {
                i=i+1
            }
    else{
                i=0
            }

     if (event.key=="ArrowDown" && i==3) {
                    i=i+1
                }
    else{
                    i=0
                }

    if (event.key=="ArrowLeft" && i==4) {
                        i=i+1
                    }
    else{
                        i=0
                    }

    if (event.key=="ArrowRight" && i==5) {
                            i=i+1
                        }
    else{
                            i=0
                        }
    if (event.key=="ArrowLeft" && i==6) {
                                i=i+1
                            }
    else{
                                i=0
                            }

    if (event.key=="ArrowRight" && i==7) {
                                    i=i+1
                                }
    else{
                                    i=0
                                }

    if (event.key=="a" && i==8) {
                                        i=i+1
                                    }
    else{
                                        i=0
                                    }

    if (event.key=="b" && i==9) {
                                            i=i+1
     console.log(i)
                                        }
                                        else{
                                            i=0
                                        }*/
}