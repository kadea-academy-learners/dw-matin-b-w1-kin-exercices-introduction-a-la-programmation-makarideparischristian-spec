const ville = "Kinshasa";

if (true) {
  const commune = "Gombe";
  console.log(ville);
  console.log(commune);
}

const afficher = () => {
  const secret = "pondu";
  return secret;
};

console.log(afficher());

// Prédiction 1 : console.log(commune) en dehors du bloc if
// provoquerait une ReferenceError.
// Explication : const a une portée de bloc, commune n'existe plus
// après l'accolade fermante du if.

// Prédiction 2 : console.log(secret) en dehors de afficher
// provoquerait aussi une ReferenceError.
// Explication : secret n'existe que dans la fonction. Pour récupérer
// sa valeur, il faut passer par le return.

// Pourquoi afficher ne s'exécutait jamais dans la version d'origine :
// l'erreur (ReferenceError) arrêtait le programme avant l'appel de
// afficher, donc la suite n'était jamais exécutée.