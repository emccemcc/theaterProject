$(function(){
<<<<<<< HEAD
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

//Clearing values from array and from screen
inputSeat = [];
$('#inputName').val('');
$('#inputEmail').val('');
$('#seatName').val('');
//changing class of the taken seats
$('.clicked').removeClass('clicked').addClass('taken');


<div class="modal fade" tabindex="-1" role="dialog">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
<h4 class="modal-title">Modal title</h4>
</div>
<div class="modal-body">
<p>One fine body&hellip;</p>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary">Save changes</button>
</div>
</div><!-- /.modal-content -->
</div><!-- /.modal-dialog -->
</div><!-- /.modal -->
});

$('.seat').hover(function() {
  //add opacity
  $( this ).fadeTo("fast",.25, function(){});
},
function(){
  //remove opacity
  $( this ).fadeTo("fast",1, function(){});
});


=======

    $('[data-toggle="popover"]').popover({
      trigger: 'hover'
    });


    var reservations = [];
    var inputName;
    var inputEmail;
    //Eric test array
    var inputSeat = [];

    class Reservation {
        constructor(name, email, seat) {
            this.name = name;
            this.email = email;
            this.seat = seat;
        }
    }

    $('.seat').click('on', function() {
        //create a new variable to push to inputSeat
        var seatNumber = $(this).attr('id');
        //change color
        $(this).toggleClass('clicked');
        //add if not already in the array and disable adding if already taken
        if (inputSeat.indexOf(seatNumber) === -1 //&& $(this).attr('class') == 'seat clicked'
        ) {
            inputSeat.push(seatNumber);
        }
        //remove if already in the array
        //grep taken from prior example
        else if (inputSeat.indexOf(seatNumber) > -1) {
            inputSeat = jQuery.grep(inputSeat, function(a) {
                return a !== seatNumber;
            });
        };
        $('#seatName').val(inputSeat);
        //testing to see that it comes out
        //console.log(inputSeat);
    });

    $('#inputButton').on('click', function() {
        inputName = $('#inputName').val();
        inputEmail = $('#inputEmail').val();
        inputSeat = inputSeat.toString();
        //inputSeat = $('.clicked').prop('id');

        var newRes = new Reservation(inputName, inputEmail, inputSeat);
        reservations.push(newRes);
        //if id is included in inputSeat then add class of taken
        console.log(reservations);
        //console.log(newRes);
        //console.log(inputSeat);

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
            $(this).fadeTo("fast", .25, function() {});
        },
        function() {
            //remove opacity
            $(this).fadeTo("fast", 1, function() {});
        });


    // Pull value from array of reservations based on reserved seat that is clicked

    $('.seat').on('click', function() {
        if (this.className.indexOf('taken') > -1) {
            //console.log($(this).attr('id'));
            for (var i = 0; i < reservations.length; i++) {
                if (reservations[i].seat === ($(this).attr('id'))) {
                    var checkedSeat = reservations[i];
                    $(this).attr({
                        'data-toggle': "popover",
                        'title': "Popover Header",
                        'data-content': "Some content inside the popover"
                    });

                };
            };

        } else {
            console.log("not taken");
        };

        console.log(checkedSeat);
    });

});
>>>>>>> b51ce90d4fa136183a3c268d08190c3d6a9f9648

//work on storage of seat
// now that seats are selected how to funnel them o an array
//how to put in selector


//Div click
