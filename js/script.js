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
$('#seatName').val(inputSeat);
//testing to see that it comes out
console.log(inputSeat);
});
$('#inputButton').on('click', function(){
  inputName = $('#inputName').val();
  inputEmail = $('#inputEmail').val();
  inputSeat = inputSeat.toString();
  //inputSeat = $('.clicked').prop('id');


  var newRes = new Reservation(inputName, inputEmail, inputSeat);
  reservations.push(newRes);
//if id is included in inputSeat then add class of taken
  console.log(reservations);
  console.log(newRes);
  console.log(inputSeat);

// Pull value from array of reservations based on reserved seat that is clicked

    $('.seat').on('click', function() {
        if (this.className.indexOf('taken') > -1) {
            //console.log($(this).attr('id'));
            for (var i = 0; i < reservations.length; i++) {
                if (reservations[i].seat === ($(this).attr('id'))) {
                    var checkedSeat = reservations[i];
                    $(this).html(
                      "<span>"+checkedSeat.name+"</span>"
                    )}}}});


//Clearing values from array and from screen
inputSeat = [];
$('#inputName').val('');
$('#inputEmail').val('');
$('#seatName').val('');
//changing class of the taken seats
$('.clicked').removeClass('clicked').addClass('taken');


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

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("inputButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
