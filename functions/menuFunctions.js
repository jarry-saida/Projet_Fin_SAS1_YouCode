var prompt = require('prompt-sync')();
function menu(){
  const tickets = [];
  let choix;
  do {
    console.log("==========================================");
    console.log("             RAILWAY MANAGER");
    console.log("==========================================");
    console.log("1. Afficher les trajets ");
    console.log("2. Acheter un ticket ");
    console.log("3. Afficher les tickets ");
    console.log("4. Annuler un ticket ");
    console.log("5. Rechercher un ticket ");
    console.log("6. Filtrer les trajets ");
    console.log("7. Trier les trajets ");
    console.log("0. Quitter ");
    choix= Number(prompt("Tapez votre choix : "));
    switch (choix) {
      case 1:
        AfficherLesTrajets(trajets);
        break;
      case 2:
        AcheterUnTicket(trajets,tickets);   
        break;
      case 3:
        AfficherLesTickets(tickets,trajets);   
        break;
      case 4:
        AnnulerUnTicket(tickets,trajets);
        break;
      case 5:
        RechercherUnTicket(tickets,trajets);  
        break;
      case 6:
        FiltrerLesTrajets(trajets); 
        break;
      case 7:
        TrierLesTrajets(trajets);
        break;
      case 0:
        console.log("Au revoir !");
        break;
      default:
        console.log("Erreur : veuillez entrer une valeur entre 0 et 7.");
        break;
    }
  } while (choix !== 0);
}