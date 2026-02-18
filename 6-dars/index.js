// Sonni Toq yoki Juft ekanligini aniqlab beradigan dastur:

// let num = prompt("Ixtiyori butun son kiriting")
// if (num == 0) console.log(num, "Bu son Top xam emas, Juft xam emas");
// else if (num % 2) console.log(num, "Bu Toq son");
// else console.log(num, "Bu Juft son");

let raqam1 = Number(prompt("raqam 1 ni kiriting"))
let raqam2 = Number(prompt("raqam 2 ni kiriting"))
if (raqam1 > raqam2) console.log(raqam1, "Soni katta", raqam2, "soni kichik");
else if(raqam2 > raqam1) console.log(raqam2, "Soni katta", raqam1, "soni kichik");
else console.log(raqam1, "va", raqam2, " - Bular bir biriga teng.");
