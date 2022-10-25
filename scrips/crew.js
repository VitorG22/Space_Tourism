var crewImage = document.getElementById("crewImage")
var crewPosto = document.getElementById("crewPosto")
var crewName = document.getElementById("crewName")
var crewDescripition = document.getElementById("crewDescripition")
var point1 = document.getElementById("point1")
var point2 = document.getElementById("point2")
var point3 = document.getElementById("point3")
var point4 = document.getElementById("point4")
var lastCrewSelected = point1
var crewSelected = point1

function crewSelect(value){



    switch (value){
        case point1:
            crewImage.setAttribute("src", "../assets/crew/image-anousheh-ansari.png")
            crewPosto.innerHTML = "flight enginner"
            crewName.innerHTML = "anoushen ansari"
            crewDescripition.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
            break
        case point2:
            crewImage.setAttribute("src","../assets/crew/image-douglas-hurley.png")
            crewPosto.innerHTML = "commander"
            crewName.innerHTML = "douglas hurley"
            crewDescripition.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2." 
            break
        case point3:
            crewImage.setAttribute("src","../assets/crew/image-mark-shuttleworth.png")
            crewPosto.innerHTML = "mission specialist"
            crewName.innerHTML = "mark shuttleworth"
            crewDescripition.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
            break
        case point4:
            crewImage.setAttribute("src","../assets/crew/image-victor-glover.png")
            crewPosto.innerHTML = "pilot"
            crewName.innerHTML = "victor glover"
            crewDescripition.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
            break
        }

        crewName.style.animation = "none"
        crewPosto.style.animation = "none"
        crewDescripition.style.animation = "none"
        crewImage.style.animation = "none"

        setTimeout(function() {
            crewName.style.animation = ""
            crewPosto.style.animation = ""
            crewDescripition.style.animation = ""
            crewImage.style.animation = ""

         }, 1);

        crewSelected = value
        lastCrewSelected.style.backgroundColor = ""
        crewSelected.style.backgroundColor = "white"
        
        lastCrewSelected = crewSelected
}



crewSelect(point1)







