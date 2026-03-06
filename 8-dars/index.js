// 1. For loop
// for (let raqam = 1; raqam <= 10; raqam++) {
//     if (raqam % 2) {
//         console.log(raqam, "Toq");
//     } else {
//         console.log(raqam, "Juft");
//     }
// }



// let raqam2 = 1
// while (raqam2 <= 10) {
//     if (raqam2 % 2) {
//         console.log(raqam2, "Toq");
//     } else {
//         console.log(raqam2, "Juft");
//     }
//     raqam2++
// }


// let raqam3 = 1
// do {
//     if (raqam3 % 2) {
//         console.log(raqam3, "Toq");
//     } else {
//         console.log(raqam3, "Juft");
//     }
//     raqam3++
// } while (raqam3 <= 10)



// 2. While Loop
// let raqam2 = 1
// while (raqam2 <= 10) {
//     console.log(raqam2);
//     raqam2++;
// }

// 3. Do While
// let raqam3 = 1
// do {
//     console.log(raqam3);
//     raqam3++;
// } while (raqam3 <= 10)

// =========================================

// let toqSumma = 0
// let juftSumma = 0
// for (let raqam = 1; raqam <= 10; raqam++) {
//     if (raqam % 2) {
//         toqSumma += raqam
//     } else {
//         juftSumma += raqam
//     }
// }
// console.log(toqSumma, juftSumma);



let toqSumma = 0
let juftSumma = 0

let raqam = 1
while (raqam <= 10) {
    if (raqam % 2) {
        toqSumma += raqam
    } else {
        juftSumma += raqam
    }
    raqam++
}
console.log(toqSumma, juftSumma);



let toqSumma2 = 0
let juftSumma2 = 0

let raqam2 = 1
do {
    if (raqam2 % 2) {
        toqSumma2 += raqam2
    } else {
        juftSumma2 += raqam2
    }
    raqam2++
} while (raqam2 <= 10)
console.log(toqSumma2, juftSumma2); 

