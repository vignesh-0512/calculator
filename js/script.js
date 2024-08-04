function appendToScreen(value){
    document.getElementById('screen').value+=value;
}

function clearScreen(){
    document.getElementById('screen').value = "";
}

function calculate(){
    try{
        let result = eval(document.getElementById('screen').value);
        document.getElementById('screen').value = result;
    }catch(e){
        alert("Error");
    }
}
function calculateSqrt(){
    let value = document.getElementById('screen').value;
    document.getElementById('screen').value = Math.sqrt(eval(value));
}

function calculateTrig(func){
    let value = document.getElementById('screen').value;
    let result;
    switch(func){
        case 'sin':
            result = Math.sin(eval(value))
            break;
        case 'cos':
            result = Math.cos(eval(value));
            break;
        case 'tan':
            result = Math.tan(eval(value));
            break;
    }

    document.getElementById('screen').value = result;
}