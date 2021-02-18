// Generates a random Integer number between min and max (max EXCLUDED!!!)
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random#Obtenir_un_entier_al%C3%A9atoire_dans_un_intervalle_ouvert_%C3%A0_droite

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}