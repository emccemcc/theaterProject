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
    //assign that selected seats to the seat field in  the screen
    $('#seatName').val(inputSeat);
  });


  $('#inputButton').on('click', function(){
    inputName = $('#inputName').val();
    inputEmail = $('#inputEmail').val();
    inputSeat = inputSeat.toString();

    if (inputName=="" || inputEmail=="" || inputSeat.length==0){
      $('.modal-title').text('Error');
      $('#resMessage').text('Please enter a selection and fill out the form below.');
    } else {
      var newRes = new Reservation(inputName, inputEmail, inputSeat);
      reservations.push(newRes);
      //Clearing values from array and from screen
      inputSeat = [];
      $('#inputName').val('');
      $('#inputEmail').val('');
      $('#seatName').val('');
      $('.modal-title').text('Reservation Confirmed');
      $('#resMessage').text('Enjoy the show, '+inputName+'!');
      $('.clicked').removeClass('clicked').addClass('taken');
    };
    // Find the html element that has an ID equal to the value in inputSeat, and change its popover values to show its object content
    // if id is included in inputSeat then add class of taken
  });

  $('.seat').hover(
    function() {
    //add opacity
      $( this ).fadeTo("fast",.25);
      if (this.className.indexOf('taken') > -1) {
          for (var i = 0; i < reservations.length; i++) {
              if (reservations[i].seat.indexOf($(this).attr('id')) >= 0) {
                  var checkedSeat = reservations[i];
                  $(this).attr('title',"Reserved for "+checkedSeat.name);
              }
          }
      } else if  (this.className.indexOf('clicked') > -1) {
        $(this).attr('title',"Selected");
      } else {
        $(this).attr('title',"Available");
      }
    },
    function(){
      //remove opacity
      $( this ).fadeTo("fast",1);
    });
});
