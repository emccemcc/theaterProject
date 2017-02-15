$(function(){


var reservations=[];
var inputName;
var inputEmail;
//Eric test array
var inputSeat = [];

class Reservation {
  constructor(name, email,seat){
    this.name = name;
    this.email = email;
    this.seat = seat;
  }
}

$('.seat').click('on', function(){
  //create a new variable to push to inputSeat
  var seatNumber = $(this).attr('id');
  //change color
    $(this).toggleClass('clicked');
    //add if not already in the array and disable adding if already taken
if(inputSeat.indexOf(seatNumber) === -1 && $(this).attr('class') == 'seat clicked'){
  inputSeat.push(seatNumber);
}
  //remove if already in the array
  //grep taken from prior example
  else if(inputSeat.indexOf(seatNumber) > -1){
    inputSeat = jQuery.grep(inputSeat, function(a) {
      return a !== seatNumber;
  }); };

//testing to see that it comes out
console.log(inputSeat);
});

$('#inputButton').on('click', function(){
  inputName = $('#inputName').val();
  inputEmail = $('#inputEmail').val();
  inputSeat = inputSeat;
  //inputSeat = $('.clicked').prop('id');


  var newRes = new Reservation(inputName, inputEmail, inputSeat);
  reservations.push(newRes);
//if id is included in inputSeat then add class of taken
  console.log(reservations);
  console.log(newRes);
  console.log(inputSeat);

//Removing it
inputSeat = [];
//changing class
$('.clicked').removeClass('clicked').addClass('taken');
//Prevent from selection


});

$('.seat').hover(function() {
  //add opacity
  $( this ).fadeTo("fast",.25, function(){});
},
function(){
  //remove opacity
  $( this ).fadeTo("fast",1, function(){});
});



//work on storage of seat
// now that seats are selected how to funnel them o an array
//how to put in selector


//Div click



});
