function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('input-pin').value = pin; 
}


document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;

    const inputField = document.getElementById('input-field');
    if(isNaN(number)){
        if(number == 'C'){
            inputField.value = '';
        }
    }
    else{
    const inputPin = inputField.value;
    inputField.value = inputPin + number;
    }
});

function notifyPin(){
    const pin = document.getElementById('input-pin').value;
    const givenPin = document.getElementById('input-field').value;

    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if(pin == givenPin){
        successMessage.style.display = 'block';
        failError.style.display = 'none';   
    }
    else{
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
}
