var technologyImageDesktop = document.getElementById("technologyImageDesktop")
var technologyImageMobile = document.getElementById("technologyImageMobile")
var technologyName = document.getElementById("technoName")
var technologyNameMobile = document.getElementById("technoNameMobile")
var technoDescripition = document.getElementById("technoDescripition")
var technoDescripitionMobile = document.getElementById("technoDescripitionMobile")
var subTitle = document.getElementById("subTitle")
var button1 = document.querySelectorAll("#button1")
var button2 = document.querySelectorAll("#button2")
var button3 = document.querySelectorAll("#button3")
var lastSelected = button1

function technologySelect(value){

    switch (value){
        case button1:
            technologyImageDesktop.setAttribute('src', '../assets/technology/image-launch-vehicle-portrait.jpg')
            technologyName.innerHTML = "LAUNCH VEHICLE"
            technoDescripition.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
            technoDescripitionMobile.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
            technologyImageMobile.setAttribute('src', '../assets/technology/image-launch-vehicle-landscape.jpg')
            technologyNameMobile.innerHTML = "LAUNCH VEHICLE"
            break
        case button2:
            technologyImageDesktop.setAttribute('src', '../assets/technology/image-spaceport-portrait.jpg')
            technologyName.innerHTML = "SPACEPORT"
            technoDescripition.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
            technoDescripitionMobile.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
            technologyImageMobile.setAttribute('src', '../assets/technology/image-spaceport-landscape.jpg')
            technologyNameMobile.innerHTML = "SPACEPORT"
            break
            
        case button3:
            technologyImageDesktop.setAttribute('src', '../assets/technology/image-space-capsule-portrait.jpg')
            technologyName.innerHTML = "SPACE CAPSULE"
            technoDescripition.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
            technoDescripitionMobile.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
            technologyImageMobile.setAttribute('src', '../assets/technology/image-space-capsule-landscape.jpg')
            technologyNameMobile.innerHTML = "SPACE CAPSULE"
            break
        
    }

    subTitle.style.animation = "none"
    technologyName.style.animation = "none"
    technologyNameMobile.style.animation = "none"
    technoDescripition.style.animation = "none"
    technoDescripitionMobile.style.animation = "none"
    technologyImageDesktop.style.animation = "none"
    technologyImageMobile.style.animation = "none"
    
    
    setTimeout(function(){
        subTitle.style.animation = ""
        technologyName.style.animation = ""
        technologyNameMobile.style.animation = ""
        technoDescripition.style.animation = ""
        technoDescripitionMobile.style.animation = ""
        technologyImageDesktop.style.animation = ""
        technologyImageMobile.style.animation = ""
    }, 1)

    console.log(value)
    lastSelected[0].style.backgroundColor = ""
    lastSelected[1].style.backgroundColor = ""
    lastSelected[0].style.color = ""
    lastSelected[1].style.color = ""
    value[0].style.backgroundColor = "white"
    value[1].style.backgroundColor = "white"
    value[0].style.color = "black"
    value[1].style.color = "black"

    lastSelected = value
    console.log(value)
}



technologySelect(button1)