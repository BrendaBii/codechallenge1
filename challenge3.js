function myFunction() {
    let period = document.forms["myForm"]["period"].value;
    let disability = document.forms["myForm"]["disability"].value;
    let gross = document.forms["myForm"]["gross"].value;
    let net, tax, nssf, nhif, salary, deduct;
    //else if(typeof demerits === 'boolean'){
    //document.getElementById("demo").innerHTML = "Your entry is invalid!";
    //}
    
    if (period === 'month'){
        const relief = 2400;
        if(gross < 24001){
            tax = (0.1*gross);
            salary = (gross - tax);
        }
        else if(gross > 24000 && gross <= 32333){
            tax = ((gross-24000)*0.25)+(24000*0.1);
            salary = (gross - tax);
        }
        else{
            tax = ((gross-32333)*0.3)+((32333-24000)*0.25)+(24000*0.1);
            salary = (gross - tax);
        }

        if(gross <100000){
            nssf = (gross*0.06)
        }else{
            nssf = 6000;
        }

        switch(gross){
            case 0-5999 : nhif = 150;
            break;
            case 6000-7999 : nhif = 300;
            break;
            case 8000-11999 : nhif = 400;
            break;
            case 12000-14999 : nhif = 500;
            break;
            case 15000-19999 : nhif = 600;
            break;
            case 20000-24999 : nhif = 750;
            break;
            case 25000-29999 : nhif = 850;
            break;
            case 30000-34999 : nhif = 900;
            break;
            case 35000-39999 : nhif = 950;
            break;
            case 40000-44999 : nhif = 1000;
            break;
            case 45000-49999 : nhif = 1100;
            break;
            case 50000-59999 : nhif = 1200;
            break;
            case 60000-69999 : nhif = 1300;
            break;
            case 70000-79999 : nhif = 1400;
            break;
            case 80000-89999 : nhif = 1500;
            break;
            case 90000-99999 : nhif = 1600;
            break;
            default : nhif = 1700;
            break;
        }
        if(disability === 'yes'){
            if(tax <= 152400){
                salary = gross;
                net = salary;
            }else{
                salary = gross - (tax - 147600);
                net = salary;
            }
            document.getElementById("waiver").innerHTML = "You get a Ksh. 150,000 tax waiver.";
        }else{
            deduct = (nhif+nssf)
            if(deduct <= relief){
                net = salary;
            }else{ 
                net = (salary - deduct) + relief;
            }
        }
        document.getElementById("demo").innerHTML = `Payee tax: ${tax} <br>` +
        `NHIF : ${nhif} <br>` + `NSSF : ${nssf} <br>` +`Net Salary : ${net}`;
    }
    else if(period === 'year'){
        const relief = 28800;
        if(gross < 288000){
            tax = (0.1*gross);
            salary = (gross - tax);
        }
        else if(gross > 288000 && gross <= 388000){
            tax = ((gross-288000)*0.25)+(288000*0.1);
            salary = (gross - tax);
        }
        else{
            tax = ((gross-388000)*0.3)+((388000-288000)*0.25)+(288000*0.1);
            salary = (gross - tax);
        }

        if(gross <1200000){
            nssf = (gross*0.6)
        }else{
            nssf = 72000;
        }

        switch(gross){
            case 0-5999 : nhif = 150;
            break;
            case 6000-7999 : nhif = 300;
            break;
            case 8000-11999 : nhif = 400;
            break;
            case 12000-14999 : nhif = 500;
            break;
            case 15000-19999 : nhif = 600;
            break;
            case 20000-24999 : nhif = 750;
            break;
            case 25000-29999 : nhif = 850;
            break;
            case 30000-34999 : nhif = 900;
            break;
            case 35000-39999 : nhif = 950;
            break;
            case 40000-44999 : nhif = 1000;
            break;
            case 45000-49999 : nhif = 1100;
            break;
            case 50000-59999 : nhif = 1200;
            break;
            case 60000-69999 : nhif = 1300;
            break;
            case 70000-79999 : nhif = 1400;
            break;
            case 80000-89999 : nhif = 1500;
            break;
            case 90000-99999 : nhif = 1600;
            break;
            default : nhif = 1700;
            break;
        }
        nhif = (nhif*12);
        if(disability === 'yes'){
            if(tax <= 1828800){
                salary = gross;
                net = salary;
            }else{
                salary = gross - (tax - 1771200);
                net = salary;
            }
            document.getElementById("waiver").innerHTML = "You get a Ksh. 1,800,000 tax waiver.";
        }else{
            deduct = (nhif+nssf)
            if(deduct <= relief){
                net = salary;
            }else{ 
                net = (salary - deduct) + relief;
            }
        }
        document.getElementById("demo").innerHTML = `Payee tax: ${tax} <br>` +
        `NHIF : ${nhif} <br>` + `NSSF : ${nssf} <br>` +`Net Salary : ${net}`;
    }
}