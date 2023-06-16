function myFunction() {
    let marks = prompt("Please enter your marks", "0");
    let grade = false;
    if (marks > 79 && marks <=100) {
      grade = "A";
    }
    else if (marks > 60 && marks <=79) {
        grade = "B";
    }
    else if (marks > 49 && marks <=60) {
        grade = "C";
    }
    else if (marks > 40 && marks <=49) {
        grade = "D";
    }
    else if (marks > 0 && marks <=40) {
        grade = "E";
    }
    
    if(typeof grade === 'string'){    
    document.getElementById("demo").innerHTML =
    "Your grade is : " + grade;
    }
    else if(typeof grade === 'boolean'){
    document.getElementById("demo").innerHTML = "Your entry is invalid!";
    }
}