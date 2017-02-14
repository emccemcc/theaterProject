$(function(){


var reservations=[];
var inputName;
var inputEmail;


class Reservation {
  constructor(name, email){
    this.name = name;
    this.email = email;
    // this.seat = seat;
  }
}
$('#inputButton').on('click', function(){
  inputName = $('#inputName').val();
  inputEmail = $('#inputEmail').val();
  var newRes = new Reservation(inputName, inputEmail);
  reservations.push(newRes);
  console.log(reservations);
  console.log(newRes);
})
});
