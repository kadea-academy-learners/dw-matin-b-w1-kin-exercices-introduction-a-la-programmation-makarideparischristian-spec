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


**Mon test dans la console :**

```js
  console.log(typeof null);   // object
  console.log(null === null); // true
```
**Source :** MDN "typeof" https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
**IA utilisée ? (prompt + vérification sur MDN) :** oui, j'ai demandé à Gemini

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

`NaN` veut dire « Not a Number » : c'est la valeur que JavaScript renvoie quand un calcul numérique n'a pas de résultat valide, par exemple `Number("abc")`. Bizarrement, son type est `number`.
`NaN === NaN` renvoie `false` car, d'après la norme IEEE 754, NaN n'est égal à aucune valeur, pas même à lui-même. On ne peut donc pas le détecter avec `===`.
Pour le détecter, on utilise `Number.isNaN(valeur)`. Il est plus fiable que l'ancienne `isNaN()`, qui convertit d'abord la valeur en nombre (`isNaN("abc")` renvoie `true` alors que `"abc"` n'est pas NaN).


**Mon test dans la console :**

```js
console.log(NaN === NaN);          
console.log(Number.isNaN(NaN));    
console.log(Number.isNaN("abc"));
console.log(isNaN("abc"));         
console.log(Number("abc"));        
```

**Source :** MDN « NaN » https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
**IA utilisée ? (prompt + vérification sur MDN) :**  « oui, j'ai demandé à Gemini d'expliquer NaN, puis vérifié sur MDN ».

## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

En JavaScript, le résultat de `%` prend le signe du premier nombre (le dividende). Donc `-7 % 2` renvoie `-1`, et non `1`.
Si on teste `% 2 === 1` pour détecter un impair, `-7` ne serait pas reconnu comme impair, car `-1 === 1` est `false`. Avec `% 2 !== 0`, on teste simplement « le reste n'est pas 0 », ce qui marche pour les positifs comme pour les négatifs (`-1 !== 0` est `true`).

**Mon test dans la console :**

```js
console.log(-7 % 2);       
console.log(-7 % 2 === 1);  
console.log(-7 % 2 !== 0);  
```

**Source :** MDN, page « Reste (%) » (developer.mozilla.org) https://developer.mozilla.org/fr/

**IA utilisée ? (prompt + vérification sur MDN) :** oui, j'ai demandé à Gemini ce que renvoie -7 % 2, puis vérifié sur MDN (Reste %).

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Oui, on peut enchaîner plusieurs ternaires : `age < 5 ? 0 : age < 18 ? 500 : 1000`. Le deuxième ternaire se place dans la partie « sinon » du premier.
C'est souvent déconseillé parce que la lecture devient difficile dès qu'il y a plus de deux niveaux : on doit deviner quelle condition appartient à quelle branche. Un `if / else if / else` est plus clair, plus facile à déboguer et à modifier. On garde le ternaire pour les cas simples à deux choix.


**Mon test dans la console :**

```js
  console.log(3 < 5 ? 0 : 3 < 18 ? 500 : 1000); // 0
```

**Source :**  MDN, « Opérateur conditionnel (ternaire) » (developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

**IA utilisée ? (prompt + vérification sur MDN) :** « oui, j'ai demandé à Gemini si on peut enchaîner des ternaires, puis vérifié sur MDN ».

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Les parenthèses autour du paramètre peuvent être enlevées quand il y a un seul paramètre simple : `nombre => nombre * nombre`. Elles sont obligatoires s'il n'y a aucun paramètre `() =>`, s'il y en a plusieurs `(a, b) =>`, ou s'il y a une valeur par défaut.
On peut enlever `return` et les accolades quand le corps tient en une seule expression : le résultat est alors renvoyé automatiquement. Dès qu'il y a plusieurs instructions, il faut les accolades et `return`. Pour renvoyer un objet sans `return`, on l'entoure de parenthèses : `() => ({ nom: "Lys" })`.


**Mon test dans la console :**

```js
const double = n => n * 2;
console.log(double(4));        

const somme = (a, b) => a + b;
console.log(somme(2, 3));      

const creerEleve = () => ({ nom: "Lys" });
console.log(creerEleve());     
```

**Source :** MDN « Fonctions fléchées » https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions
**IA utilisée ? (prompt + vérification sur MDN) :**  oui. J'ai demandé à chatgpt quand on peut enlever les parenthèses, `return` et les accolades dans une fonction fléchée. J'ai ensuite vérifié sur MDN (Arrow function expressions) et testé les exemples dans la console.

## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

`continue` arrête le tour de boucle en cours et passe directement au tour suivant : la boucle continue de tourner. Par exemple, avec `if (i === 5) { continue; }`, le 5 est ignoré mais les autres nombres sont affichés.
`break` est différent : il arrête complètement la boucle, et le programme continue après elle. Avec `break` à `i === 5`, on afficherait 10, 9, 8, 7, 6 puis on sortirait de la boucle.


**Mon test dans la console :**

```js
for (let i = 1; i <= 5; i++) {
	if (i === 3) continue;
	console.log(i); // 1, 2, 4, 5
}
for (let i = 1; i <= 5; i++) {
	if (i === 3) break;
	console.log(i); // 1, 2
}
```

**Source :** MDN « continue » (et « break ») https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/continue

**IA utilisée ? (prompt + vérification sur MDN) :** oui

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

FizzBuzz est célèbre en entretien parce que c'est un exercice très simple qui permet de vérifier rapidement les bases : boucle, modulo, conditions et ordre des tests. Beaucoup de candidats échouent sur le cas « multiple de 3 et de 5 », en le plaçant après les autres conditions.
Il montre aussi si le candidat sait écrire un code propre, lisible et le tester, sans avoir besoin d'un algorithme compliqué.


**Mon test dans la console :**

```js
for (let i = 1; i <= 15; i++) {
	if (i % 3 === 0 && i % 5 === 0) console.log("MalewaWewa");
	else if (i % 3 === 0) console.log("Malewa");
	else if (i % 5 === 0) console.log("Wewa");
	else console.log(i);
}

// Résultat obtenu : 1, 2, Malewa, 4, Wewa, Malewa, 7, 8, Malewa, Wewa, 11, Malewa, 13, 14, MalewaWewa
```

**Source :** MDN Reste (%) + Wikipédia « Fizz buzz » https://fr.wikipedia.org/wiki/Fizz_buzz

**IA utilisée ? (prompt + vérification sur MDN) :** oui

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

`toLocaleString()` met un nombre au format d'une langue. Avec `(75000).toLocaleString("fr-FR")`, on obtient "75 000" : en français, les milliers sont séparés par une espace (une espace insécable fine, pas une espace normale).
Le résultat est une chaîne de caractères, donc on l'utilise pour l'affichage seulement, pas pour continuer à calculer. On peut aussi ajouter des options, par exemple `toLocaleString("fr-FR", { style: "currency", currency: "CDF" })` pour afficher une monnaie.

**Mon test dans la console :**
```js
console.log((75000).toLocaleString("fr-FR"));

```
**Source :** MDN, Number.prototype.toLocaleString() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
**IA utilisée ? (prompt + vérification sur MDN) :** oui

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :**  Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)
**Ma réponse (avec mes mots, 3 à 5 lignes) :**
En JavaScript, il y a huit valeurs falsy : `false`, `0`, `-0`, `0n` (le BigInt zéro), `""` (chaîne vide, ainsi que `''` et les gabarits vides), `null`, `undefined` et `NaN`. Toutes les autres valeurs sont truthy, y compris `"0"`, `" "`, `[]`, `{}` et `"false"`.
Il y a aussi un cas particulier, `document.all`, qui est falsy dans les navigateurs, mais on le rencontre très rarement.

**Mon test dans la console :**

```js
console.log(Boolean(0n));  
console.log(Boolean(-0));   
console.log(Boolean([]));   
console.log(Boolean({}));   
```
**Source :** MDN « Falsy » (glossaire) https://developer.mozilla.org/fr/docs/Glossary/Falsy
**IA utilisée ? (prompt + vérification sur MDN) :** oui

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

L'opérateur `??` (coalescence des nuls) renvoie sa valeur de droite uniquement quand celle de gauche est `null` ou `undefined`. Sinon, il garde la valeur de gauche.
`||` est différent : il renvoie la valeur de droite dès que celle de gauche est falsy, donc aussi pour `0`, `""`, `false` ou `NaN`. Avec `0 || "aucun"` on obtient "aucun", alors que `0 ?? "aucun"` donne `0`. On utilise `??` quand `0` ou une chaîne vide sont des valeurs valides.

**Mon test dans la console :**

```js
console.log(0 || "aucun");  
console.log(0 ?? "aucun");   
console.log("" ?? "aucun");  
console.log(null ?? "aucun"); 
```

**Source :** MDN « Opérateur de coalescence des nuls (??) » https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
**IA utilisée ? (prompt + vérification sur MDN) :** oui

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
`var` est banni du code moderne parce qu'il a une portée de fonction et non de bloc : une variable `var` déclarée dans un `if` ou une boucle reste visible en dehors, ce qui crée des bugs difficiles à repérer. Il permet aussi de déclarer deux fois la même variable sans erreur.
Le hoisting (« remontée ») veut dire que les déclarations `var` sont déplacées en haut de leur fonction avant l'exécution : on peut lire la variable avant sa ligne de déclaration et obtenir `undefined`, sans erreur. `let` et `const` sont aussi remontés, mais restent inutilisables avant leur déclaration (ReferenceError), ce qui est plus sûr.


**Mon test dans la console :**

```js
try { console.log(c); } catch (e) { console.log(e.message); }
let c = 5;
if (true) { let d = 1; }
try { console.log(d); } catch (e) { console.log(e.message); } 
```

**Source :** MDN « var » et « let »
**IA utilisée ? (prompt + vérification sur MDN) :** oui, j'ai demandé à Gemini pourquoi var est banni et ce que sont la portée de fonction et le hoisting, puis vérifié sur MDN (var et let). Je n'ai pas testé var dans le code, car il est interdit dans ce cours.

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
L'insertion automatique de point-virgule (ASI) est un mécanisme de JavaScript : quand le point-virgule manque à la fin d'une instruction, le moteur en ajoute un lui-même, selon des règles précises.
Une de ces règles concerne `return` : si un retour à la ligne suit directement `return`, JavaScript écrit `return;` et la valeur qui est sur la ligne suivante est ignorée. La fonction renvoie alors `undefined`. Pour éviter ce piège, on écrit toujours la valeur sur la même ligne que `return`.


**Mon test dans la console :**

```js
const test = () => {
	return
	42;
};
console.log(test()); 
```

**Source :** MDN « Insertion automatique de points-virgules » https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Lexical_grammar
**IA utilisée ? (prompt + vérification sur MDN) :** oui

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Un opérateur d'affectation composée combine une opération et une affectation : `a += 5` équivaut à `a = a + 5`. Les principaux sont :
`+=` (`x += 2`), `-=` (`x -= 2`), `*=` (`x *= 2`), `/=` (`x /= 2`), `%=` (`x %= 2`) et `**=` (`x **= 2`, puissance).
Il existe aussi des versions pour les opérations sur les bits (`<<=`, `>>=`, `>>>=`, `&=`, `^=`, `|=`) et pour les opérateurs logiques : `&&=` (`x &&= y`), `||=` (`x ||= y`) et `??=` (`x ??= y`, affecte seulement si x est null ou undefined).


**Mon test dans la console :**

```js
let x = 10;
x += 5;  console.log(x);
x -= 3;  console.log(x);
x *= 2;  console.log(x); 
x /= 4;  console.log(x); 
x %= 4;  console.log(x); 
x **= 3; console.log(x); 
```

**Source :** MDN « Opérateurs d'affectation » (Assignment operators) https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Assignment

**IA utilisée ? (prompt + vérification sur MDN) :** oui

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
`while` teste la condition **avant** chaque tour : si elle est fausse dès le départ, le corps de la boucle ne s'exécute jamais. `do...while` exécute d'abord le corps, puis teste la condition **après** : il fait donc toujours au moins un tour.
Pour l'étape 4 (départ à 15 %), `while` fait 0 tour. Avec `do...while`, la boucle ferait 1 tour : la batterie passerait à 0 % et le compteur à 1 h, ce qui est absurde ici car on retire de la batterie alors qu'elle était déjà sous le seuil.


**Mon test dans la console :**

```js
let a = 15;
let tours = 0;
do {
	a -= 15;
	tours++;
} while (a > 20);
console.log(a, tours);
```

**Source :** MDN « do...while » et « while » https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/do...while

**IA utilisée ? (prompt + vérification sur MDN) :** oui

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
JavaScript stocke les nombres décimaux en binaire (norme IEEE 754). Certains décimaux comme 0.1 et 0.2 n'ont pas d'écriture exacte en binaire, comme 1/3 n'en a pas en base 10 : l'ordinateur garde une approximation. Quand on les additionne, l'erreur apparaît : 0.1 + 0.2 donne 0.30000000000000004, donc `0.1 + 0.2 === 0.3` vaut `false`.
`toFixed()` est un piège car il renvoie une chaîne de caractères, pas un nombre : `(0.1 + 0.2).toFixed(2) + 1` donne "0.301" (concaténation) au lieu d'additionner. Il vaut mieux garder les nombres bruts pendant tout le calcul, arrondir une seule fois à la fin (comme avec `Math.round()`) et réserver `toFixed()` à l'affichage.


**Mon test dans la console :**

```js
console.log(0.1 + 0.2);                
console.log(0.1 + 0.2 === 0.3);         
console.log((0.1 + 0.2).toFixed(2)); 
console.log((0.1 + 0.2).toFixed(2) + 1); 
```

**Source :** MDN, Number et Number.prototype.toFixed https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

**IA utilisée ? (prompt + vérification sur MDN) :** oui

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
`.reduce()` parcourt un tableau et le réduit à une seule valeur (un total, par exemple). Elle prend une fonction `(accumulateur, élément)` et une valeur de départ : à chaque tour, ce qui est renvoyé devient l'accumulateur du tour suivant. Contrairement à `.forEach()`, elle renvoie un résultat, donc pas besoin de variable `let` extérieure.
Étape 2 réécrite : `const totalHeures = heuresSemaine.reduce((accumulateur, heures) => accumulateur + heures, 0);` Le calcul donne 0+8, +9, +10, +8, +7, +6 = 48.


**Mon test dans la console :**

```js
const heuresSemaine = [8, 9, 10, 8, 7, 6];
const total = heuresSemaine.reduce((acc, h) => acc + h, 0);
console.log(total); // 48


```

**Source :** MDN, Array.prototype.reduce() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
**IA utilisée ? (prompt + vérification sur MDN) :** oui

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
Pour afficher seulement certaines colonnes, on passe un tableau de noms en deuxième argument : `console.table(inventaire, ["nom", "stock"])`.
Quand rien ne correspond, `.find()` renvoie `undefined`, alors que `.filter()` renvoie un tableau vide `[]`. C'est pourquoi on teste `=== undefined` après `.find()` et `.length === 0` après `.filter()`.

**Mon test dans la console :**

```js
const liste = [{ nom: "A", stock: 1 }];
console.log(liste.find((p) => p.nom === "Z")); 
console.log(liste.filter((p) => p.nom === "Z"));
```
**Source :** MDN, console.table(), Array.prototype.find() et filter() https://developer.mozilla.org/fr/docs/Web/API/console/table
**IA utilisée ? (prompt + vérification sur MDN) :** oui

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
On trie avec `[...bulletin].sort((a, b) => b.moyenne - a.moyenne)` : si la fonction renvoie un nombre négatif, `a` passe avant `b`, donc `b.moyenne - a.moyenne` place la meilleure moyenne en premier.
`.sort()` trie « sur place » : il réorganise le tableau d'origine et renvoie ce même tableau. Pour l'éviter, on trie une copie : `[...tableau]`, `.slice()` ou `.toSorted()`.


**Mon test dans la console :**

```js
const notes = [10, 9, 1];
const copie = [...notes].sort((a, b) => b - a);
console.log(copie); 
console.log(notes); 
console.log([10, 9, 1].sort()); 
```

**Source :** MDN, Array.prototype.sort() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
**IA utilisée ? (prompt + vérification sur MDN) :** oui

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
La recherche dichotomique consiste à proposer à chaque essai le milieu de l'intervalle restant : la réponse « plus grand » ou « plus petit » élimine la moitié des nombres.
Avec 7 essais, on peut distinguer 2^7 = 128 possibilités, ce qui dépasse 100. Donc 7 essais suffisent toujours (2^6 = 64 ne suffirait pas).


**Mon test dans la console :**

```js
console.log(2 ** 6); // 64
console.log(2 ** 7); // 128
console.log(Math.ceil(Math.log2(100)));
```

**Source :** Wikipédia, « Recherche dichotomique » https://fr.wikipedia.org/wiki/Recherche_dichotomique
**IA utilisée ? (prompt + vérification sur MDN) :** oui