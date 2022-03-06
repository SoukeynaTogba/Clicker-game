var cliquer = 0;
var bonus1 = 0;
var bonus2 = 0;
var bonus3 = 0;

function imageSuivante (){

    if (document.getElementById('image').getAttribute("src") == "img/emojiS.png") {
        document.getElementById('image').setAttribute("src", "img/emojiO.png");
    }

    else if(document.getElementById('image').getAttribute("src") == "img/emojiO.png") {
        document.getElementById('image').setAttribute("src", "img/emojiCa.jpeg");
    }

    else if(document.getElementById('image').getAttribute("src") == "img/emojiCa.jpeg") {
        document.getElementById('image').setAttribute("src", "img/emojiS.png");
    }
}
/*true - The button is disabled
false - Default. The button is not disabled */

setInterval(()=>{
    console.log("echo"); /* afficher echo */
    cliquer++; /* clic = +1 */
    document.getElementById("compteur").innerText=cliquer; /* modifier texte */

    if (cliquer < 50){
        document.getElementById("compteur").style.color =  "purple";
    }
    if (cliquer > 100){
        document.getElementById("compteur").style.color = "#719bac";
    }
    if (cliquer > 200) {
        document.getElementById("compteur").style.color = "black";
    }
    window.localStorage.setItem("compteur", cliquer) /* sauvegarder */

}, 1000) /* 1 seconde */

/* 1 + (NOMBRE DE BONUS x BONUS RAPPORTE X POINTS)*/ 

function OnLoad(){ /* charger */
    cliquer = parseFloat(window.localStorage.getItem("compteur"));
    if (cliquer < 50){
        document.getElementById("b1").setAttribute("disabled", true); 
        document.getElementById("b2").setAttribute("disabled", true);
        document.getElementById("b3").setAttribute("disabled", true);
    }
        else if (cliquer >= 50 && cliquer < 100){
            document.getElementById("b1").removeAttribute("disabled");
            document.getElementById("b2").setAttribute("disabled", true);
            document.getElementById("b3").setAttribute("disabled", true);
        }
        else if (cliquer >=100 && cliquer < 200){
            document.getElementById("b1").removeAttribute("disabled");
            document.getElementById("b2").removeAttribute("disabled");
            document.getElementById("b3").setAttribute("disabled", true);
        }
        else if (cliquer >= 200 ){
            document.getElementById("b1").removeAttribute("disabled");
            document.getElementById("b2").removeAttribute("disabled");
            document.getElementById("b3").removeAttribute("disabled");
        }
}

function ajouter1(){ /* augmenter +1 en cliquant sur la photo */
    cliquer = cliquer + 1 + (bonus1 * 2) + (bonus2 * 5) + (bonus3 * 10);  /* cliquer = +1 */
    console.log(cliquer); 
    document.getElementById("compteur").innerText=cliquer /* modifier le texte */

    window.localStorage.setItem("compteur", cliquer)  /* sauvegarder */

    if (cliquer < 50){
        document.getElementById("b1").setAttribute("disabled", true); 
        document.getElementById("b2").setAttribute("disabled", true);
        document.getElementById("b3").setAttribute("disabled", true);
    }
        else if (cliquer >= 50 && cliquer < 100){
            document.getElementById("b1").removeAttribute("disabled");
            document.getElementById("b2").setAttribute("disabled", true);
            document.getElementById("b3").setAttribute("disabled", true);
        }
        else if (cliquer >=100 && cliquer < 200){
            document.getElementById("b1").removeAttribute("disabled");
            document.getElementById("b2").removeAttribute("disabled");
            document.getElementById("b3").setAttribute("disabled", true);
        }
        else if (cliquer >= 200 ){
            document.getElementById("b1").removeAttribute("disabled");
            document.getElementById("b2").removeAttribute("disabled");
            document.getElementById("b3").removeAttribute("disabled");
        }
}


function moins1() {
    cliquer = cliquer - 10;
    document.getElementById("compteur").innerText=cliquer; /* modifier texte */
    window.localStorage.setItem("compteur", cliquer) /* sauvegarder */

    bonus1++;
    document.getElementById("diminuer1").innerText=bonus1;
    window.localStorage.setItem("diminuer1",bonus1)

    if (cliquer <= 50){
        document.getElementById("b1").setAttribute("disabled", true); 
    }
        else if (cliquer >= 50){
            document.getElementById("b1").removeAttribute("disabled")

        }
}

function moins2() {
    cliquer = cliquer - 50;
    document.getElementById("compteur").innerText=cliquer; /* modifier texte */
    window.localStorage.setItem("compteur", cliquer) /* sauvegarder */

    bonus2++;
    document.getElementById("diminuer2").innerText=bonus2;
    window.localStorage.setItem("diminuer2",bonus2)

    if (cliquer <= 100){
        document.getElementById("b2").setAttribute("disabled", true); 
    }
        else if (cliquer >= 100){
            document.getElementById("b2").removeAttribute("disabled")

        }
}

function moins3() {
    cliquer = cliquer - 100;
    document.getElementById("compteur").innerText=cliquer; /* modifier texte */
    window.localStorage.setItem("compteur", cliquer) /* sauvegarder */

    bonus3++;
    document.getElementById("diminuer3").innerText=bonus3;
    window.localStorage.setItem("diminuer3",bonus3)

    if (cliquer <= 200){
        document.getElementById("b3").setAttribute("disabled", true); 
    }
        else if (cliquer >= 200){
            document.getElementById("b3").removeAttribute("disabled")

        }
}

function reset(){
    window.localStorage.clear();
    cliquer = 0;
}


const boutons = document.querySelectorAll ("button");

boutons.forEach (button => {

    button.addEventListener("click", effet);
});

function effet (event){

    var cercle = document.createElement("div");
    this.appendChild(cercle);
    cercle.classList.add("oui");

    cercle.style.left = event.clientX - this.offsetLeft + "px";
    cercle.style.top = event.clientY - this.offsetTop + "px";
    cercle.style.transform ="translate(-50%, -50%)";

}