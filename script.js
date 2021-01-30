// onClick function for increasing/decreasing ticket amount using +- sign 
// action:true = +  action:false = -
function ticketAmountHandler(action, className) {
    let ticketAmount = parseInt(document.getElementById(className).value);
    if (action) {
        ticketAmount++;
    }
    else if (!action && ticketAmount > 0) {
        ticketAmount--;
    }

    document.getElementById(className).value = ticketAmount;
    costCalculation();
}

// cost display for calculation section
function costCalculation() {
    let firstClass = parseInt(document.getElementById('firstClass').value);
    let economy = parseInt(document.getElementById('economy').value);
    let currentSubtotal = firstClass * 150 + economy * 100;
    let vat = Math.round(currentSubtotal * 0.1);

    document.getElementById('subTotal').innerText = currentSubtotal;
    document.getElementById('vat').innerText = vat;
    document.getElementById('total').innerText = currentSubtotal + vat;
}

// function for handling user input from direct input
function inputValue(className) {
    let inputValue = document.getElementById(className).value;
    if (inputValue == '') {
        document.getElementById(className).value = 0;
    }
    costCalculation();
}

// after book now button is clicked
function bookingConfirm() {
    let totalCost = parseInt(document.getElementById('total').innerText);
    if (totalCost) {
        document.getElementById('booking-page').style.display = 'none';
        document.getElementById('confirmation-page').style.display = 'block';
    }
    // if user click book-now without purchasing 
    else {
        alert("You haven't purchase any ticket yet.");
    }
}