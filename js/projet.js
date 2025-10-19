const listeProjets = [
    {
        titre: "Attempt On Delivery",
        description: "Attempt-On-Delivery et un jeu roblox développé en collaboration avec deeco. Je m'occupais du Game design de niveau et d'intégrer des nouvelles fonctionnalités.",
        image: "./img/Attempt-On-Delivery.webp",
        lien: "https://www.roblox.com/games/13301445090/EVENT-Attempt-On-Delivery",
        Number: 1
    },
    {
        titre: "Legacy-Engine",
        description: "Legacy Engine simule l'ancien Roblox de 2006 à 2008, mais avec une petite touche d'originalité. C'est complètement différent ! Essayez-le !",
        image: "./img/LegacyEngine.webp",
        lien: "https://www.roblox.com/games/15205936662/Legacy-Engine-Does-NOT-simulate-old-roblox",
        Number: 2
    },
    {
        titre: "Ultimate Party",
        description: "Ultimate Party est un jeu mini-game, il s'inspira de Mario Party et de Warioware. Le jeu est en cours de développement.",
        image: "./img/UltimateParty.png",
        lien: "./page/construction.html",
        Number: 3
    },
];

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


document.addEventListener("click", () => {
  const projetsContainer = document.querySelector('.background-clip');
  if (projetsContainer) {
    projetsContainer.muted = false;
    projetsContainer.play(); // facultatif, si tu veux lancer la vidéo
  }
});