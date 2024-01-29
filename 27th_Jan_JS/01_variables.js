const studRollno = 123
let studEmail = "acde@gamil.com"
var studPasswd = "college"
studCity = "mumbai"
let studState = "Maharashtra"

//studRollno = 2 //this is not allowed
console.log(studRollno);

studEmail = "xay@yahoo.com"
studPasswd = "213987"
studCity = "thane"

//console.log(studEmail);
//console.log(studPasswd);

console.table([studRollno, studEmail, studPasswd,studCity,studState])

/*
perfer not to use var
because of issue in block scope & function scope 
*/