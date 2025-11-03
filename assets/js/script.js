// ====================================================
// =  Déclaration des variables globales              =
// ====================================================

var boutonTache = document.getElementById("boutonAjout");
var saisieTache = document.getElementById("saisie-tache");
var listeAFaire = document.getElementById("listeAFaire");
var listeFait = document.getElementById("listeFait");

// ====================================================
// =  Déclaration des événements                      =
// ====================================================

boutonTache.addEventListener("click", ajouterTache);

// ====================================================
// =  Code qui sera exécuté au chargement de la page  =
// ====================================================



// ====================================================
// =  Déclaration des fonctions                       =
// ====================================================

function ajouterTache(){
    if (saisieTache.value != ""){
        var tache = document.createElement("li");
        tache.innerText = saisieTache.value;
        tache.classList.add("tache");
        listeAFaire.append(tache);
        tache.addEventListener("click", enleverTache);
    }
}

function enleverTache(){
    tache.classList.add("fait");
}