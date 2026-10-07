// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
F1 — Ma carte d'apprenant (Niveau 1 — Facile)

Objectif : choisir le bon mot-clé (const ou let) et reconnaître les 5 types primitifs.
Contexte : Kadea prépare les badges de la promo et a besoin de ta fiche.

Consignes :
1. Déclare prenom, age, commune, estInscrit, surnom (sans valeur) et ancienneFormation (valeur null).
2. Choisis const ou let pour chacune et justifie ton choix en commentaire.
3. Affiche ta fiche avec un seul gabarit littéral (une seule chaîne construite par interpolation).
4. Affiche le typeof de chaque variable.

Résultat attendu :
Je m'appelle Grâce, j'ai 22 ans et j'habite à Lemba.
puis : string, number, string, boolean, undefined, object

Recherche (à rédiger dans RECHERCHES.md) :
Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)
// const : la valeur ne change pas après la déclaration
const prenom = "Grâce";
const age = 22;
const commune = "Lemba";
const estInscrit = true;
const ancienneFormation = null; // null = "aucune valeur" volontaire, ne change pas

// let : la variable est déclarée sans valeur, on pourra la remplir plus tard
let surnom;

console.log(
	`Je m'appelle ${prenom}, j'ai ${age} ans et j'habite à ${commune}.`
);

console.log(typeof prenom);            // string
console.log(typeof age);               // number
console.log(typeof commune);           // string
console.log(typeof estInscrit);        // boolean
console.log(typeof surnom);            // undefined
console.log(typeof ancienneFormation); // object

