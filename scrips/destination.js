var name_destiny = document.getElementById("name_destiny_selected")
var descripition_destiny = document.getElementById("descripition_destiny_selected")
var image_destiny = document.getElementById("image_destiny")
var distance_travelim = document.getElementById("distance_travelim")
var time_travelim = document.getElementById("time_travelim")
var moon = document.getElementById("moon")
var mars = document.getElementById("mars")
var europa = document.getElementById("europa")
var titan = document.getElementById("titan")
var lastDestinySelected = moon
var zero = 0


function select_destiny(destiny){

    name_destiny.style.animation = "none"
    descripition_destiny.style.animation = "none"
    distance_travelim.style.animation = "none"
    time_travelim.style.animation =  "none"
    image_destiny.style.animation = "none"

    switch(destiny){
        case moon:
            name_destiny.innerHTML = "MOON"
            descripition_destiny.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
            image_destiny.setAttribute("src","../assets/destination/image-moon.png")
            distance_travelim.innerHTML = "384,400 KM"
            time_travelim.innerHTML =  " 3 DAYS"
            
            break 
        case mars:
            name_destiny.innerHTML = "MARS"
            descripition_destiny.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
            image_destiny.setAttribute("src","../assets/destination/image-mars.png")
            distance_travelim.innerHTML = "225 MIL. KM"
            time_travelim.innerHTML = "9 MONTHS"
      
            break 
        case europa:
            name_destiny.innerHTML = "EUROPA"
            descripition_destiny.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
            image_destiny.setAttribute("src","../assets/destination/image-europa.png")
            distance_travelim.innerHTML = "628 MIL. KM"
            time_travelim.innerHTML = "3 YEARS"
          
            break 
        case titan:
            name_destiny.innerHTML = "TITAN"
            descripition_destiny.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
            image_destiny.setAttribute("src","../assets/destination/image-titan.png")
            distance_travelim.innerHTML = "1.6 BIL. KM"
            time_travelim.innerHTML = "7 YEARS"
            
            break 
    }


    setTimeout(function(){

        name_destiny.style.animation = ""
        descripition_destiny.style.animation = ""
        distance_travelim.style.animation = ""
        time_travelim.style.animation =  ""
        image_destiny.style.animation = ""

    }, 1);


    lastDestinySelected.style.borderBottom = ""
    lastDestinySelected.style.transform = ""
    lastDestinySelected.style.color = ""

    var destinySelected = destiny
    destinySelected.style.borderBottom = "solid white 2px"
    destinySelected.style.transform = "translateY(-10px)"
    destinySelected.style.color = "white"
    lastDestinySelected = destiny
    console.log(destinySelected)

    

}




select_destiny(moon)

