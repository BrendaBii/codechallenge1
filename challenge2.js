function myFunction() {
    let speed = prompt("Please enter the speed :", "0");
    let demerits = false;
    if (speed < 70 && speed >= 0){
        document.getElementById("demo").innerHTML = "Ok";
    }
    else if(speed >= 70){
        demerits = ((speed-70)/5);
        if(demerits > 12){
            document.getElementById("demo").innerHTML = "License suspended"
        }
        else{
            document.getElementById("demo").innerHTML = "Points : " + Math.floor(demerits);
        }
    }
    else if(typeof demerits === 'boolean'){
    document.getElementById("demo").innerHTML = "Your entry is invalid!";
    }
}