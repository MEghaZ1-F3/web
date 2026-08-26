// Validation functions for Registration & Payment
function validateCheckout() {
    var card = document.getElementById('amzCard').value;
    var cvv = document.getElementById('amzCvv').value;
    
    if (card.length !== 16 || isNaN(card)) {
        alert("Validation Error: Please enter a valid 16-digit credit card number.");
        return false;
    }
    if (cvv.length !== 3 || isNaN(cvv)) {
        alert("Validation Error: Please enter a valid 3-digit CVV number.");
        return false;
    }
    alert("Success: Payment Verified and Order Confirmed!");
    return true;
}