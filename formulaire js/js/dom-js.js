function effacerDOM() {
    let element = document.getElementById("dv");
    if (element) {
        element.parentNode.removeChild(element);
    } else {
        alert("L'élément avec l'ID 'dv' n'existe pas");
    }
}


function remplacerTexte() {
    let premierH1 = document.querySelector("#dv h1:first-of-type");
    if (premierH1) {
        premierH1.textContent = "Nouveau texte du premier fils de atef";
    } else {
        alert("Aucun élément <h1> trouvé sous la balise avec l'ID 'dv'.");
    }
}

function getTexte() {
    let titre = document.getElementById("titre");
    if (titre) {
        return titre.textContent;
    } else {
        alert("L'élément avec l'ID 'titre' n'existe pas");
    }
}

function effacerTitre() {
    let titre = document.getElementById("titre");
    if (titre) {
        let parent = titre.parentNode;
        parent.removeChild(titre);
    } else {
        alert("L'élément avec l'ID 'titre' n'existe pas");
    }
}