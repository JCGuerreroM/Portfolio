let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if(distancia_skills >= 300){
            let habildades = document.getElementsByClassName("progreso");
            habildades[0].classList.add("javascript");
            habildades[1].classList.add("htmlcss");
            habildades[2].classList.add("photoshop");
            habildades[3].classList.add("wordpress");
            habildades[4].classList.add("react");
            habildades[5].classList.add("comunicacion");
            habildades[6].classList.add("trequipo");
            habildades[7].classList.add("creatividad");
            habildades[8].classList.add("dedicacion");
            habildades[9].classList.add("prymanagement");
        }
}

window.onscroll = function() {
    efectoHabilidades();
}