var create = document.getElementById('create');
var erase = document.getElementById('delete');

create.addEventListener('click',
  function() {
    var inputName = document.getElementById('name').value;
    var inputDistance = document.getElementById('distance').value;
    var inputAge = document.getElementById('age').value;
    var ticket = inputDistance * 0.21;
    var ticketRate = 'Tariffa Standard';
    var trainCar = Math.floor(Math.random()*10) +1;
    var min = 90000;
    var max = 100000;
    var cpCode = Math.floor(Math.random() * (max - min) ) + min;

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

    document.getElementById('ticket').className = 'ticket show';
  }
);

erase.addEventListener('click',
  function(){
    document.getElementById('name').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('age').value = '';

    // dettaglio biglietto
    document.getElementById('passenger').innerHTML = '';
    document.getElementById('rate').innerHTML = '';
    document.getElementById('train_car').innerHTML = '';
    document.getElementById('cp_code').innerHTML = '';
    document.getElementById('ticket_cost').innerHTML = '';
    // /dettaglio biglietto

    document.getElementById('ticket').className = 'ticket hidden';
  }
);
