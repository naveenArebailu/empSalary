var basic_salary=15000;
var working_hr=10;

function employee(sal,hr){

    if(sal>basic_salary && hr>working_hr)
    {
         return (0.1*sal)+sal;
    }
    else
    {
        return (0.05*sal)+sal;
    }
}

document.write("Basic salary with bonus: "+ employee(parseFloat(prompt("Enter basic salary")),parseFloat(prompt("Enter working hour"))));
