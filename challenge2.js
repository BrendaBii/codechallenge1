function myFunction() {
    let speed = prompt("Please enter the speed :", "0");
    let demerits = false;
    if (speed < 70){
        document.getElementById("demo").innerHTML = "Ok";
    }
    else{
    for (demerits = 0, demerits < 12, demerits++){

    }}
    
    if(typeof grade === 'string'){    
    document.getElementById("demo").innerHTML =
    "Demerit points : " + demerits;
    }
    else if(typeof grade === 'boolean'){
    document.getElementById("demo").innerHTML = "Your entry is invalid!";
    }
}