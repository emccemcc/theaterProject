$(function(){


var reservations=[];
var inputName;
var inputEmail;
//Eric test array
var inputSeat;

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
/*
  inputSeat = if ($('.seat').hasClass('clicked')){
    $('.seat').hasClass('clicked').toString;
  }  )
*/
  var newRes = new Reservation(inputName, inputEmail);
  reservations.push(newRes);
  console.log(reservations);
  console.log(newRes);
})

$('.seat').hover(function() {
  //add opacity
  $( this ).fadeTo("slow",.25, function(){});
},
function(){
  //remove opacity
  $( this ).fadeTo("slow",1, function(){});
});

$('.seat').click('on', function(){
    $(this).toggleClass('clicked')
});

//work on storage of seat
// now that seats are selected how to funnel them o an array
//how to put in selector


//Div click



});
