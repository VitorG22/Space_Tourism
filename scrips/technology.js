var technologyImage = document.getElementById("technologyImage")
var technologyName = document.getElementById("technoName")
var technoDescripition = document.getElementById("technoDescripition")
var subTitle = document.getElementById("subTitle")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var lastSelected = button1

function technologySelect(value){

    switch (value){
        case button1:
            technologyImage.setAttribute('src', '../assets/technology/image-launch-vehicle-portrait.jpg')
            technologyName.innerHTML = "LAUNCH VEHICLE"
            technoDescripition.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
            break
        case button2:
            technologyImage.setAttribute('src', '../assets/technology/image-spaceport-portrait.jpg')
            technologyName.innerHTML = "SPACEPORT"
            technoDescripition.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
            break
            
            case button3:
            technologyImage.setAttribute('src', '../assets/technology/image-space-capsule-portrait.jpg')
            technologyName.innerHTML = "SPACE CAPSULE"
            technoDescripition.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
            break
            
    }

    subTitle.style.animation = "none"
    technologyName.style.animation = "none"
    technoDescripition.style.animation = "none"
    technologyImage.style.animation = "none"
    
    
    setTimeout(function(){
        subTitle.style.animation = ""
        technologyName.style.animation = ""
        technoDescripition.style.animation = ""
        technologyImage.style.animation = ""
    }, 1)






    lastSelected.style.backgroundColor = ""
    lastSelected.style.color = ""
    value.style.backgroundColor = "white"
    value.style.color = "black"

    lastSelected = value
}



technologySelect(button1)