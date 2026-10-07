// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
F2 — Le convertisseur de saisie (Niveau 1 — Facile)

Objectif : comprendre qu'une saisie est du texte et la convertir avec Number().
Contexte : un formulaire de recharge mobile money renvoie toujours le montant sous forme de texte.

Consignes :
1. Déclare const saisie = '2500'; et affiche saisie + 500.
2. Explique en commentaire pourquoi le résultat est faux.
3. Corrige avec Number() et affiche le bon total.
4. Avant de les tester, écris tes prédictions pour Number(''), Number('abc'), Number(' 42 ') et Number(true), puis vérifie.

Résultat attendu :
2500500, puis 3000 ; les prédictions vérifiées : 0, NaN, 42, 1.

Recherche (à rédiger dans RECHERCHES.md) :
Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)
const saisie = "2500";

// Étape 1 : saisie est du texte (string), donc le + concatène au lieu d'additionner.
// "2500" + 500 devient "2500500" : JavaScript convertit 500 en texte et colle les deux.
console.log(saisie + 500); // 2500500

// Étape 3 : on convertit d'abord le texte en nombre avec Number()
const montant = Number(saisie);
console.log(montant + 500); // 3000

// Étape 4 : prédictions écrites avant de tester
// Number("")      -> 0    (chaîne vide = 0)
// Number("abc")   -> NaN  (pas un nombre)
// Number(" 42 ")  -> 42   (les espaces autour sont ignorés)
// Number(true)    -> 1    (true = 1, false = 0)

console.log(Number(""));
console.log(Number("abc"));
console.log(Number(" 42 "));
console.log(Number(true));

