const projetsContainer = document.querySelector('.projets-container');

for (let index = 0; index < listeProjets.length; index++) {
    const element = listeProjets[index];

    const divProjets = document.createElement('div');
    divProjets.classList.add('projet-item');

    const titreProjet = document.createElement('h3');
    titreProjet.innerText = `Projet ${element.Number}: ${element.titre}`;

    const descProjet = document.createElement('p');
    descProjet.innerText = element.description;

    const lienProjet = document.createElement('a');
    lienProjet.setAttribute('href', element.lien);

    const imgProjet = document.createElement('img');
    imgProjet.setAttribute('src', element.image);
    imgProjet.setAttribute('alt', element.titre);

    divProjets.appendChild(titreProjet);
    divProjets.appendChild(descProjet);
    divProjets.appendChild(lienProjet);
    lienProjet.appendChild(imgProjet);

    projetsContainer.appendChild(divProjets);
    
}
