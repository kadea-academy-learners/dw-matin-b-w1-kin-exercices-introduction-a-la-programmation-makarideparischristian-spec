// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M3 — Le détecteur de champs vides (Truthy / Falsy) (Niveau 2 — Moyen)

Objectif : prédire si une valeur est truthy ou falsy.
Contexte : le formulaire d'inscription Kadea doit refuser les champs vides.

Consignes :
1. Écris estRempli, une fonction fléchée qui renvoie 'rempli' ou 'vide' avec un ternaire, sans comparaison (if (valeur) suffit).
2. Avant de tester, note tes prédictions pour : '', 'Esther', 0, 42, null, undefined, NaN, ' ', '0', false.
3. Teste et compare.

Résultat attendu :
vide, rempli, vide, rempli, vide, vide, vide, rempli, rempli, vide

Recherche (à rédiger dans RECHERCHES.md) :
Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)
`;

const estRempli = (valeur) => (valeur ? "rempli" : "vide");

const valeursATester = ["", "Esther", 0, 42, null, undefined, NaN, " ", "0", false];

valeursATester.forEach((valeur) => {
	console.log(estRempli(valeur));
});

