// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M7 — La tirelire numérique (Niveau 2 — Moyen)

Objectif : utiliser une boucle for avec un accumulateur et une condition à l'intérieur.
Contexte : Patience épargne 2 000 FC par semaine ; toutes les 4 semaines, sa tante ajoute un bonus de 1 000 FC.

Consignes :
1. Simule 12 semaines avec une boucle.
2. À chaque tour, affiche : Semaine 4 : 9000 FC (bonus !).
3. Affiche le total final.

Résultat attendu :
Total après 12 semaines : 27000 FC

Recherche (à rédiger dans RECHERCHES.md) :
Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)
const epargneHebdomadaire = 2000;
const bonus = 1000;
const nombreSemaines = 12;

let total = 0;

for (let semaine = 1; semaine <= nombreSemaines; semaine++) {
	total += epargneHebdomadaire;

	if (semaine % 4 === 0) {
		total += bonus;
		console.log(`Semaine ${semaine} : ${total} FC (bonus !)`);
	} else {
		console.log(`Semaine ${semaine} : ${total} FC`);
	}
}

console.log(`Total après ${nombreSemaines} semaines : ${total} FC`);

