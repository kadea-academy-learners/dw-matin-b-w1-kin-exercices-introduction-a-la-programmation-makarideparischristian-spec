# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 — Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

`typeof null` renvoie "object" à cause d'un bug des tout débuts de JavaScript (1995). À l'époque, les valeurs étaient stockées avec une étiquette de type, et celle des objets était 0. `null` était représenté par le pointeur nul (tous les bits à 0), donc il recevait la même étiquette que les objets.
Ce comportement n'a jamais été corrigé pour ne pas casser les sites existants. `null` est bien une valeur primitive, pas un objet. Pour le tester, on utilise `valeur === null`.
...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

`NaN` veut dire « Not a Number » : c'est la valeur que JavaScript renvoie quand un calcul numérique n'a pas de résultat valide, par exemple `Number("abc")`. Bizarrement, son type est `number`.
`NaN === NaN` renvoie `false` car, d'après la norme IEEE 754, NaN n'est égal à aucune valeur, pas même à lui-même. On ne peut donc pas le détecter avec `===`.
Pour le détecter, on utilise `Number.isNaN(valeur)`. Il est plus fiable que l'ancienne `isNaN()`, qui convertit d'abord la valeur en nombre (`isNaN("abc")` renvoie `true` alors que `"abc"` n'est pas NaN).
...

**Mon test dans la console :**

```js
// colle ici le console.log(NaN === NaN);          // false
console.log(Number.isNaN(NaN));    // true
console.log(Number.isNaN("abc"));  // false
console.log(isNaN("abc"));         // true (l'ancienne fonction convertit d'abord)
console.log(Number("abc"));        // NaNtest que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :**  MDN, pages « NaN » et « Number.isNaN() » (developer.mozilla.org)

## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

En JavaScript, le résultat de `%` prend le signe du premier nombre (le dividende). Donc `-7 % 2` renvoie `-1`, et non `1`.
Si on teste `% 2 === 1` pour détecter un impair, `-7` ne serait pas reconnu comme impair, car `-1 === 1` est `false`. Avec `% 2 !== 0`, on teste simplement « le reste n'est pas 0 », ce qui marche pour les positifs comme pour les négatifs (`-1 !== 0` est `true`).
...

**Mon test dans la console :**

```js
// colle iciconsole.log(-7 % 2);        // -1
console.log(-7 % 2 === 1);  // false
console.log(-7 % 2 !== 0);  // true le test que tu as exécuté et le résultat obtenu
```

**Source :** MDN, page « Reste (%) » (developer.mozilla.org)


**IA utilisée ? (prompt + vérification sur MDN) :** non

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Oui, on peut enchaîner plusieurs ternaires : `age < 5 ? 0 : age < 18 ? 500 : 1000`. Le deuxième ternaire se place dans la partie « sinon » du premier.
C'est souvent déconseillé parce que la lecture devient difficile dès qu'il y a plus de deux niveaux : on doit deviner quelle condition appartient à quelle branche. Un `if / else if / else` est plus clair, plus facile à déboguer et à modifier. On garde le ternaire pour les cas simples à deux choix.
...

**Mon test dans la console :**

```js
node semaine-13/NOM-DU-FICHIER-F4.js
```

**Source :**  MDN, « Opérateur conditionnel (ternaire) » (developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

**IA utilisée ? (prompt + vérification sur MDN) :** MDN, « Opérateur conditionnel (ternaire) » (developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Les parenthèses autour du paramètre peuvent être enlevées quand il y a un seul paramètre simple : `nombre => nombre * nombre`. Elles sont obligatoires s'il n'y a aucun paramètre `() =>`, s'il y en a plusieurs `(a, b) =>`, ou s'il y a une valeur par défaut.
On peut enlever `return` et les accolades quand le corps tient en une seule expression : le résultat est alors renvoyé automatiquement. Dès qu'il y a plusieurs instructions, il faut les accolades et `return`. Pour renvoyer un objet sans `return`, on l'entoure de parenthèses : `() => ({ nom: "Lys" })`.
...

**Mon test dans la console :**

```js
// colle ici le tconst double = n => n * 2;
console.log(double(4));        // 8

const somme = (a, b) => a + b;
console.log(somme(2, 3));      // 5

const creerEleve = () => ({ nom: "Lys" });
console.log(creerEleve());     // { nom: 'Lys' }est que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :**  oui. J'ai demandé à Claude quand on peut enlever les parenthèses, `return` et les accolades dans une fonction fléchée. J'ai ensuite vérifié sur MDN (Arrow function expressions) et testé les exemples dans la console.

## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

`continue` arrête le tour de boucle en cours et passe directement au tour suivant : la boucle continue de tourner. Par exemple, avec `if (i === 5) { continue; }`, le 5 est ignoré mais les autres nombres sont affichés.
`break` est différent : il arrête complètement la boucle, et le programme continue après elle. Avec `break` à `i === 5`, on afficherait 10, 9, 8, 7, 6 puis on sortirait de la boucle.
...

**Mon test dans la console :**

```js
// colle ici le test quefor (let i = 1; i <= 5; i++) {
	if (i === 3) continue;
	console.log(i); // 1, 2, 4, 5
}
for (let i = 1; i <= 5; i++) {
	if (i === 3) break;
	console.log(i); // 1, 2
} tu as exécuté et le résultat obtenu
```

**Source :** MDN « continue » (et « break »).

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

FizzBuzz est célèbre en entretien parce que c'est un exercice très simple qui permet de vérifier rapidement les bases : boucle, modulo, conditions et ordre des tests. Beaucoup de candidats échouent sur le cas « multiple de 3 et de 5 », en le plaçant après les autres conditions.
Il montre aussi si le candidat sait écrire un code propre, lisible et le tester, sans avoir besoin d'un algorithme compliqué.
...

**Mon test dans la console :**

```js
// colle**Mon test dans la console :**
for (let i = 1; i <= 15; i++) {
	if (i % 3 === 0 && i % 5 === 0) console.log("MalewaWewa");
	else if (i % 3 === 0) console.log("Malewa");
	else if (i % 5 === 0) console.log("Wewa");
	else console.log(i);
}
// Résultat obtenu : 1, 2, Malewa, 4, Wewa, Malewa, 7, 8, Malewa, Wewa, 11, Malewa, 13, 14, MalewaWewa

**Source :** MDN Reste (%) + Wikipédia « Fizz buzz »

**IA utilisée ? (prompt + vérification sur MDN) :** oui

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?
# M2 — Le distributeur automatique (DAB)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

`toLocaleString()` met un nombre au format d'une langue. Avec `(75000).toLocaleString("fr-FR")`, on obtient "75 000" : en français, les milliers sont séparés par une espace (une espace insécable fine, pas une espace normale).
Le résultat est une chaîne de caractères, donc on l'utilise pour l'affichage seulement, pas pour continuer à calculer. On peut aussi ajouter des options, par exemple `toLocaleString("fr-FR", { style: "currency", currency: "CDF" })` pour afficher une monnaie.

**Mon test dans la console :**

```js
console.log((75000).toLocaleString("fr-FR"));

```

**Source :** 
MDN, Number.prototype.toLocaleString().
**IA utilisée ? (prompt + vérification sur MDN) :** oui

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

En JavaScript, il y a huit valeurs falsy : `false`, `0`, `-0`, `0n` (le BigInt zéro), `""` (chaîne vide, ainsi que `''` et les gabarits vides), `null`, `undefined` et `NaN`. Toutes les autres valeurs sont truthy, y compris `"0"`, `" "`, `[]`, `{}` et `"false"`.
Il y a aussi un cas particulier, `document.all`, qui est falsy dans les navigateurs, mais on le rencontre très rarement.


**Mon test dans la console :**

```js
// colle iconsole.log(Boolean(0n));   // false
console.log(Boolean(-0));   // false
console.log(Boolean([]));   // true
console.log(Boolean({}));   // trueci le test que tu as exécuté et le résultat obtenu
```

**Source :** MDN « Falsy » (glossaire)

**IA utilisée ? (prompt + vérification sur MDN) :** oui

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

L'opérateur `??` (coalescence des nuls) renvoie sa valeur de droite uniquement quand celle de gauche est `null` ou `undefined`. Sinon, il garde la valeur de gauche.
`||` est différent : il renvoie la valeur de droite dès que celle de gauche est falsy, donc aussi pour `0`, `""`, `false` ou `NaN`. Avec `0 || "aucun"` on obtient "aucun", alors que `0 ?? "aucun"` donne `0`. On utilise `??` quand `0` ou une chaîne vide sont des valeurs valides.

```js
// colle ici lconsole.log(0 || "aucun");   // aucun
console.log(0 ?? "aucun");   // 0
console.log("" ?? "aucun");  // (chaîne vide)
console.log(null ?? "aucun"); // aucune test que tu as exécuté et le résultat obtenu
```

**Source :** 
MDN « Opérateur de coalescence des nuls (??) »
**IA utilisée ? (prompt + vérification sur MDN) :** oui

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
JavaScript stocke les nombres décimaux en binaire (norme IEEE 754). Certains décimaux comme 0.1 et 0.2 n'ont pas d'écriture exacte en binaire, comme 1/3 n'en a pas en base 10 : l'ordinateur garde une approximation. Quand on les additionne, l'erreur apparaît : 0.1 + 0.2 donne 0.30000000000000004, donc `0.1 + 0.2 === 0.3` vaut `false`.
`toFixed()` est un piège car il renvoie une chaîne de caractères, pas un nombre : `(0.1 + 0.2).toFixed(2) + 1` donne "0.301" (concaténation) au lieu d'additionner. Il vaut mieux garder les nombres bruts pendant tout le calcul, arrondir une seule fois à la fin (comme avec `Math.round()`) et réserver `toFixed()` à l'affichage.
...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
`.reduce()` parcourt un tableau et le réduit à une seule valeur (un total, par exemple). Elle prend une fonction `(accumulateur, élément)` et une valeur de départ : à chaque tour, ce qui est renvoyé devient l'accumulateur du tour suivant. Contrairement à `.forEach()`, elle renvoie un résultat, donc pas besoin de variable `let` extérieure.
Étape 2 réécrite : `const totalHeures = heuresSemaine.reduce((accumulateur, heures) => accumulateur + heures, 0);` Le calcul donne 0+8, +9, +10, +8, +7, +6 = 48.
...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non
