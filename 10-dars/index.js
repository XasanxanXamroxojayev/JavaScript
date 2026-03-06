// let summa = 0
// function aniqla() {
//     for (let i = 1; i <= 100; i++){
//         if (!(i % 3) && !(i % 5)) {
//             summa += i
//         }
//     }
//     console.log(summa);
// }
// aniqla()

// ================================================

// let aniqla = function () {
//     let sum = 0
//     for (let i = 1; i <= 20; i++){
//         sum += i
//     }
//     console.log(sum);
// }
// aniqla()

// ================================================

// let action = (a, b) => {
//     for (let i = a; i <= b; i++){
//         if(!(i % 2)) console.log(i);
//     }
// }
// action(10, 20)

// ================================================

let topib_ber = (one, ten) => {
    let summa = 0
    for (let i = one; i <= ten; i++) {
        if (i % 2) {
            summa += i
        }
    }
    console.log(Boolean(summa % 2));
}
topib_ber(1, 10)
