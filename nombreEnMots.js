function nombreEnMots(nombre) {
  // Tableau des noms des chiffres de 0 à 19
  var unites = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
  // Tableau des noms des dizaines de 20 à 90
  var dizaines = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
  // Tableau des noms des puissances de mille
  var milliers = ["", "mille", "million", "milliard", "billion", "billiard", "trillion", "trilliard"];
  // Variable qui contiendra le résultat
  var mots = "";
  // Variable qui indique le rang du groupe de 3 chiffres en cours de traitement
  var rang = 0;
  // Tant qu'il reste des chiffres à traiter
  while (nombre > 0) {
    // On extrait le groupe de 3 chiffres à droite
    var groupe = nombre % 1000;
    // On enlève ce groupe du nombre
    nombre = Math.floor(nombre / 1000);
    // Si le groupe n'est pas nul
    if (groupe > 0) {
      // Variable qui contiendra le nom du groupe en cours
      var nomGroupe = "";
      // On extrait les centaines, les dizaines et les unités du groupe
      var centaines = Math.floor(groupe / 100);
      var dizaines = Math.floor((groupe % 100) / 10);
      var unites = groupe % 10;
      // Si le groupe vaut 1 et qu'on est au rang des mille ou plus, on met "un" devant
      if (groupe == 1 && rang > 1) {
        nomGroupe = "un ";
      }
      // Si les centaines sont supérieures à 0
      if (centaines > 0) {
        // Si les centaines valent 1, on met "cent" sinon on met le nom de l'unité suivi de "cent"
        if (centaines == 1) {
          nomGroupe += "cent ";
        } else {
          nomGroupe += unites[centaines] + " cent ";
        }
        // Si les dizaines ou les unités sont supérieures à 0, on met un "s" à "cent"
        if (dizaines > 0 || unites > 0) {
          nomGroupe += "s ";
        }
      }
      // Si les dizaines sont supérieures à 0
      if (dizaines > 0) {
        // Si les dizaines valent 7 ou 9, on utilise la forme réduite avec "dix"
        if (dizaines == 7 || dizaines == 9) {
          nomGroupe += dizaines[dizaines - 1] + "-" + unites[10 + unites] + " ";
        } else {
          // Sinon, on met le nom de la dizaine
          nomGroupe += dizaines[dizaines] + " ";
          // Si les unités valent 1 et que les dizaines ne valent pas 8, on met "et" devant
          if (unites == 1 && dizaines != 8) {
            nomGroupe += "et ";
          }
        }
      }
      // Si les unités sont supérieures à 0 et que les dizaines ne valent pas 7 ni 9, on met le nom de l'unité
      if (unites > 0 && dizaines != 7 && dizaines != 9) {
        nomGroupe += unites[unites] + " ";
      }
      // Si le rang vaut 1 et que le groupe vaut 1, on ne met pas "mille" sinon on met le nom du rang
      if (rang == 1 && groupe == 1) {
        mots = nomGroupe + mots;
      } else {
        mots = nomGroupe + milliers[rang] + " " + mots;
      }
    }
    // On passe au rang suivant
    rang++;
  }
  // On renvoie le résultat
  return mots.trim();
}
