var burger = document.getElementById("burger")
var Closed = document.getElementById("closed")
var navBar = document.getElementById("navBar")
var opition = document.querySelectorAll("#opition")

console.log(opition)




function burgerOpen(value){  


    
    
    switch (value){

        case 'Open':
            burger.style.display = "none"
            Closed.style.display = "flex"
            navBar.style.width = "60vw"

            for(let i = 0 ; i <4 ; i++){
                opition[i].style.display = ""
            }

            break
            
            case 'Close':
                burger.style.display = "flex"
                Closed.style.display = "none"
                navBar.style.width = "0vw"

             setTimeout(() => {
                 
                 for(let i = 0 ; i <4 ; i++){
                     opition[i].style.display = "none"
                    }
             }, 200);   
            break
    }

}


