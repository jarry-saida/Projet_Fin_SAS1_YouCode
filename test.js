var prompt = require('prompt-sync')();
const trajets = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = [];
function menu(){
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
        AfficherLesTickets(tickets);   
        break;
      case 4:
        AnnulerUnTicket(tickets,trajets);
        break;
      case 5:
        RechercherUnTicket(tickets,trajets);  
        break;
      case 6:
        FiltrerLesTrajets(); 
        break;
      case 7:
        TrierLesTrajets();
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


function AfficherLesTrajets(trajets){
  console.log("Les trajets sont :");
  for(let i=0; i < trajets.length ; i++){
    console.log("#"+trajets[i].id +" " + trajets[i].departure + " ---> " + trajets[i].destination);
    console.log("Départ : "+ trajets[i].departureTime );
    console.log("Arrivée : "+ trajets[i].arrivalTime );
    console.log("Prix : "+ trajets[i].price );
    console.log("Places disponibles : "+ trajets[i].availableSeats );
  }
}
let Id_Trajet;
function TrajetExiste(trajets){
  Id_Trajet = Number(prompt("Entrer identifiant du trajet : "));
  for (let i = 0 ; i <trajets.length ;i++){
    if(Id_Trajet === trajets[i].id){
      return trajets[i] ;
    }
  }
  return null;
}
let id_ticket = 1 ;
let ticket ;
function AcheterUnTicket(trajets,tickets){
  let NomDePassager = prompt("Entrer votre nom : ");
  let trajet = TrajetExiste(trajets);
  if(trajet === null){
    console.log("Trajet introuvable.");
    return;
  }else
  if(trajet.availableSeats === 0 ){
    console.log("le train est complet !");
    return;
  }
  ticket = {
  id: id_ticket++ , 
  passengerName: NomDePassager , 
  tripId: Id_Trajet, 
  seatNumber: trajet.availableSeats, 
  price: trajet.price
  }
  tickets.push(ticket);
  trajet.availableSeats--;
  console.log("Ticket acheté avec succés !");
  console.log(ticket);
}
function AfficherLesTickets(tickets){
  if (tickets.length === 0) {
    console.log("Aucun ticket enregistré.");
    return;
    }
  console.log("=== TICKETS ===");
  for(let i = 0 ;i < tickets.length ; i++){
    console.log("Ticket #" + tickets[i].id);
    console.log("Passager : " + tickets[i].passengerName);
    console.log("Trajet : " + tickets[i].departure + "----> " + tickets[i].destination);
    console.log("Place : " + tickets[i].seatNumber);
    console.log("Prix : " + tickets[i].price + " DH");
    console.log("----------------------");
  }
}
let Id_Ticket ;
function TicketExiste(tickets){
  Id_Ticket = Number(prompt("Entrer identifiant du ticket : "));
  for (let i = 0 ; i <tickets.length ;i++){
    if(Id_Ticket === tickets[i].id){
      return tickets[i];
    }
  }
  return null;
}
function AnnulerUnTicket(tickets,trajets){
  let ticket = TicketExiste(tickets);
  if(ticket === null){
    console.log("le ticket introuvable !");
    return;
  }
  for (let i = 0; i < trajets.length; i++){
    if(trajets[i].id === ticket.tripId ){
      trajets[i].availableSeats++;
      for(let j = 0;j < tickets.length ;j++){
        if(trajets[j].id === ticket.id){
          tickets.splice(j,1);
          break;
        }
      }
      console.log("Ticket annulé avec succès.")
      return;
    }
  }
}
function RechercherUnTicket(tickets,trajets){
  let Nom = prompt("Entrer votre nom : ");
  let trouve = false;
  for(let i = 0;i < tickets.length; i++){
    if(tickets[i].passengerName === Nom){
      trouve = true;
      console.log("votre ticket est :");
      console.log("Ticket #" + tickets[i].id);
      console.log("Passager : " + tickets[i].passengerName);
      for(let j = 0; j < trajets.length; j++){
        if(tickets[i].tripId === trajets[j].id){
          console.log("Trajet : " + trajets[j].departure + " ----> " + trajets[j].destination);
        }
      }
      console.log("Place : " + tickets[i].seatNumber);
      console.log("Prix : " + tickets[i].price);
      console.log("----------------------");
    }
  }
  if(trouve === false){
   console.log("Aucun ticket trouvé.");
  }
}
menu();
