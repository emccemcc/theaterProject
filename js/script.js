$(function(){

var reservations=[];
var inputName='';
var inputEmail='';
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
          });
          };

          $('#seatName').val(inputSeat);

});


$('#inputButton').on('click', function(){
  inputName = $('#inputName').val();
  inputEmail = $('#inputEmail').val();
  inputSeat = inputSeat.toString();

  if (inputName=="" || inputEmail=="" || inputSeat.length==0){
    $('.modal-title').text('Error');
    $('#resMessage').text('Please enter a selection and fill out the form below.');
    }else{
      $('.modal-title').text('Reservation Confirmed');
      $('#resMessage').text('Enjoy the show, '+inputName+'!');
      $('.clicked').removeClass('clicked').addClass('taken');
  };


// Find the html element that has an ID equal to the value in inputSeat, and change its popover values to show its object content





  var newRes = new Reservation(inputName, inputEmail, inputSeat);
  reservations.push(newRes);

  console.log(reservations);
// if id is included in inputSeat then add class of taken

//Clearing values from array and from screen
inputSeat = [];
$('#inputName').val('');
$('#inputEmail').val('');
$('#seatName').val('');



});

$('.seat').hover(function() {
  //add opacity
  $( this ).fadeTo(50,.85, function(){});
},
function(){
  //remove opacity
  $( this ).fadeTo(50,1, function(){});
});
//work on storage of seat
//now that seats are selected how to funnel them o an array
//how to put in selector
//Div click
});
