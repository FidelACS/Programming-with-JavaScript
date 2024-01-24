//Operadores

//AND
var num = 10;
console.log(num > 9 && num < 17);
//OR
console.log(num < 9 || num > 17);
//NOT
var afirmacion = true;
console.log(afirmacion);
console.log(num > 9 && num < 17);

console.log("-------------------------------------")
//modulo
console.log(31 % 5); //Devuelve el resto de una división
//igualdad
console.log (5 == 5)
console.log (5 == 10)
console.log (5 == "5")
//igualdad estricta
console.log(5 !== "5")
console.log("-------------------------------------")
console.log("Operador + en strings y numeros" );
console.log("note" + "book")
console.log(365 + " days")
console.log(1 + "2") //se convierte en cadena

// asignación de suma +=
var overtime = 1;
overtime += 2;
overtime += 300;
console.log(overtime);

//asignación de concatenación +=
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."
//Precedencia de operadores y asociatividad
var num = 10; // the value on the right is assigned to the variable name on the left
console.log(5 > 4 > 3); 
// the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`