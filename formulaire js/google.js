function creerA() {
    effacerDOM(document.body.lastChild);
    // 1- Créer l'élément
    let newA = document.createElement('a'); // <a></a>
    // 2- Ajouter du contenu
    newA.textContent = 'mon favoris site'; // <a>mon favoris site</a>
    // 3- Ajouter des attribut(s)
    newA.setAttribute('href','http://www.google.fr');
    // newA.href = 'http://www.google.fr';
    // <a href = 'http://www.google.fr'>mon favoris site</a>
    // 4- Attacher l'élément au DOM
    document.body.appendChild(newA);
}
function creerImg() {
    effacerDOM(document.body.lastChild);
    let newImg = document.createElement('img');
    newImg.src = 'images/lapin.jpg';
    newImg.alt = 'image non dispo';
    document.body.appendChild(newImg);
}
function effacerDOM(elt) {
    // vérifier que l'élément existe
    if(elt != null){
        // vérifier que l'élément à des fils
        while (elt.hasChildNodes()) {
            // récupérer le premier fils
            let nf = elt.firstChild;
            elt.removeChild(nf);
        }
        elt.parentElement.removeChild(elt);
    }
}