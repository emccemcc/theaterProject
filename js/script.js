// ©2017 Eric McCormick, Priyanka Shaji, Adam Mason

$(function() {

    //Allow popovers to load
    $('[data-toggle="popover"]').popover();

    //Set global variables
    var reservations = [];
    var inputName = '';
    var inputEmail = '';
    var inputSeat = [];

    //Constructor Object for created Reservation
    class Reservation {
        constructor(name, email, seat) {
            this.name = name;
            this.email = email;
            this.seat = seat;
        }
    }

    //When clicking on a seat to select it, take the seat number (element ID) and add it to a temporary array (inputSeat). Toggle the class to display a green color.

    $('.seat').click('on', function() {
        //create a new variable to push to inputSeat
        var seatNumber = $(this).attr('id');
        //change color
        $(this).toggleClass('clicked');
        //add if not already in the array and disable adding if already taken
        if (inputSeat.indexOf(seatNumber) === -1 && $(this).attr('class') == 'seat clicked') {
            inputSeat.push(seatNumber);
        }
        //remove if already in the array
        //grep taken from prior example
        else if (inputSeat.indexOf(seatNumber) > -1) {
            inputSeat = jQuery.grep(inputSeat, function(a) {
                return a !== seatNumber;
            });
        };
        //assign that selected seats to the seat field in the screen
        $('#seatName').val(inputSeat);
    });

    //CLick the button to create a new Reservation object, and add it to the array of created reservations.

    $('#inputButton').on('click', function() {
        //Sets values of form to variables
        inputName = $('#inputName').val();
        inputEmail = $('#inputEmail').val();
        inputSeat = inputSeat.toString();

        //Verify that all required data has been entered. If not, kick back an error message. If so, display a reservation confirmation screen.
        if (inputName == "" || inputEmail == "" || inputSeat.length == 0) {
            $('.modal-title').text('Error');
            $('#resMessage').text('Please enter a selection and fill out the form below.');
            $('.clicked').removeClass('clicked');
            inputSeat = [];
            $('#inputName').val('');
            $('#inputEmail').val('');
            $('#seatName').val('');
        } else {
            var newRes = new Reservation(inputName, inputEmail, inputSeat);
            reservations.push(newRes);
            console.log(reservations);
            //On a successful reservation, remove displayed seat name, and replace with glyphicon to represent a taken seat
            $('.clicked span').text('');
            $('.clicked span').addClass('glyphicon glyphicon-user');

            //Add popover data to reserved seat div showing reserved information
            // $('.clicked').attr({
            // 'title':'',
            // 'data-toggle':'popover',
            // 'data-trigger':'hover',
            // 'data-content':'Reserved for '+inputName,
            //   'data-original-title':''
            // });

            //Clear values from temp array and from form inputs, then display confirmation
            inputSeat = [];
            $('#inputName').val('');
            $('#inputEmail').val('');
            $('#seatName').val('');
            $('.modal-title').text('Reservation Confirmed');
            $('#resMessage').text('Enjoy the show, ' + inputName + '!');
            //Remove the 'clicked' class, and add class 'taken'
            $('.clicked').removeClass('clicked').addClass('taken');
        };
    });

    // Add hover functionality and edit title for seats. Displays either "Available" or "Reserved for 'name'"

    $('.seat').hover(
        function() {
            //add opacity
            $(this).fadeTo(50, .85);
            //Verify if seat has been reserved, and display reserved tooltip
            if (this.className.indexOf('taken') > -1) {
                for (var i = 0; i < reservations.length; i++) {
                    if (reservations[i].seat.indexOf($(this).attr('id')) >= 0) {
                        var checkedSeat = reservations[i];
                        $(this).attr('title', "Reserved for " + checkedSeat.name);
                    }
                }
                //If not reserved, display either Selected or Available
            } else if (this.className.indexOf('clicked') > -1) {
                $(this).attr('title', "Selected");
            } else {
                $(this).attr('title', "Available");
            }
        },
        function() {
            //remove opacity
            $(this).fadeTo(50, 1);
        });
        responsiveVoice.speak("Hello, and welcome to The Fancy Movie club.", "UK English Male");

});
