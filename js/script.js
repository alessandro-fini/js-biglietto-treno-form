var inputName = document.getElementById('name').value;
var inputDistance = document.getElementById('distance').value;
var inputAge = document.getElementById('age').value;
var ticket = inputDistance * 0.21;
var ticketRate = 'Tariffa Standard';
var trainCar = Math.floor(Math.random()*10) +1;
var cpCode = Math.floor(Math.random() * (max - min) ) + min;
var min = 90000;
var max = 100000;

// biglietti scontati
if (inputAge == 'under18'){
  ticket -= ticket * 0.2;
  ticketRate = 'Sconto Minorenne'
} else if (inputAge == 'over65'){
  ticket -= ticket * 0.4;
  ticketRate = 'Sconto Silver'
}
// /biglietti scontati

// dettaglio biglietto
document.getElementById('passenger').innerHTML = inputName;
document.getElementById('rate').innerHTML = ticketRate;
document.getElementById('train_car').innerHTML = trainCar;
document.getElementById('cp_code').innerHTML = cpCode;
document.getElementById('ticket_cost').innerHTML = ticket.toFixed(2) + '€';
// /dettaglio biglietto

console.log(ticket);
