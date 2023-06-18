function myFunction() {
    //pop-up prompt to ask user to input speed value
    let speed = prompt("Please enter the speed :", "0");
    //initialised variable as boolean to check if reassignment occurs
    let demerits = false;

    //if...else if statements to check speed range
    if (speed < 70 && speed >= 0){
        demerits = 0;
        document.getElementById("demo").innerHTML = "Ok";
    }
    else if(speed >= 70){
        demerits = ((speed-70)/5);
        //if...else statements to check if demerit points are more than 12
        if(demerits > 12){
            document.getElementById("demo").innerHTML = "License suspended"
        }
        else{
            document.getElementById("demo").innerHTML = "Points : " + Math.floor(demerits);
        }
    }
    //else if statement for speed input that is invalid(variable demerits reassignment does not occur)
    else if(typeof demerits === 'boolean'){
    document.getElementById("demo").innerHTML = "Your entry is invalid!";
    }
}