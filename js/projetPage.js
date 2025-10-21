const projetsContainerPersonnel = document.querySelector('.personnel');
const projetsContainerStage = document.querySelector('.stage');
const projetsContainerTP = document.querySelector('.tp');
const projetsContainerDessin = document.querySelector('.dessin');

for (let index = 0; index < listeProjets.length; index++) {
    
    if (listeProjets[index].projets === 1) {
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
        imgProjet.setAttribute('src', element.imageliste);
        imgProjet.setAttribute('alt', element.titre);

        divProjets.appendChild(titreProjet);
        divProjets.appendChild(descProjet);
        divProjets.appendChild(lienProjet);
        lienProjet.appendChild(imgProjet);

        projetsContainerPersonnel.appendChild(divProjets);
    }
    else if (listeProjets[index].projets === 2) {
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
        imgProjet.setAttribute('src', `.${element.imageliste}`);
        imgProjet.setAttribute('alt', element.titre);

        divProjets.appendChild(titreProjet);
        divProjets.appendChild(descProjet);
        divProjets.appendChild(lienProjet);
        lienProjet.appendChild(imgProjet);

        projetsContainerStage.appendChild(divProjets);
    }
    else if (listeProjets[index].projets === 3) {
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
        imgProjet.setAttribute('src', element.imageliste);
        imgProjet.setAttribute('alt', element.titre);

        divProjets.appendChild(titreProjet);
        divProjets.appendChild(descProjet);
        divProjets.appendChild(lienProjet);
        lienProjet.appendChild(imgProjet);

        projetsContainerTP.appendChild(divProjets);
    }
}

for (let index = 0; index < listeDessin.length; index++) {
    
    const element = listeDessin[index];

        const divProjets = document.createElement('div');
        divProjets.classList.add('dessin-item');

        const titreProjet = document.createElement('h3');
        titreProjet.innerText = element.titre;

        const imgProjet = document.createElement('img');
        imgProjet.setAttribute('src', element.image);
        imgProjet.setAttribute('alt', element.titre);

        divProjets.appendChild(titreProjet);
        divProjets.appendChild(imgProjet);
        projetsContainerDessin.appendChild(divProjets);

}