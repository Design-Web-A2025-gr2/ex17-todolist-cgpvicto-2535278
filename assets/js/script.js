// ====================================================
// =  Déclaration des variables globales              =
// ====================================================

var boutonTache = document.getElementById("boutonAjout");
var saisieTache = document.getElementById("saisie-tache");
var listeAFaire = document.getElementById("listeAFaire");
var listeFait = document.getElementById("listeFait");
var poubelle = document.querySelector("icone-trash");

// ====================================================
// =  Déclaration des événements                      =
// ====================================================

boutonTache.addEventListener("click", ajouterTache);
saisieTache.addEventListener("keydown", function(t) {
    if(t.key === 'Enter'){
        ajouterTache();
    }
});
poubelle.addEventListener("click", clearTaches);

// ====================================================
// =  Code qui sera exécuté au chargement de la page  =
// ====================================================



// ====================================================
// =  Déclaration des fonctions                       =
// ====================================================

/**
 * Ajouter une tache a la liste de taches a faire
 */
function ajouterTache(){
    if (saisieTache.value != ""){
        let tache = document.createElement("li");
        tache.innerText = saisieTache.value;
        tache.className = "tache";
        listeAFaire.append(tache);
        saisieTache.value = "";
        //tache.addEventListener("click", enleverTache);
    }
}

function enleverTache(){
    tache.classList.add("fait");
    listeFait.append(tache);
}

function clearTaches(){
    listeFait.
}