// let center = {
//     id: 1,
//     brend: "oxford",
//     year: 2023,
//     filial: "Namangan",
// }

// let center2 = Object.assign({}, center);

// center2.filial = "Kosonsoy";
// center2.year = 2025;
// center2.id = 2

// console.log(center);
// console.log(center2);

// Object.assign()

// ===========================================
// ===========================================

let parent = {
    id: 1,
    ism: "Eshmat",
    manzil: "Kosonsoy",
    child: {
        id: 2,
        ism: "Toshmat",
        manzil: "Kosonsoy",
    }
}

        //   let parent2 = Object.assign({}, parent)
let parent2 = structuredClone(parent)
parent2.ism = "salim"
parent2.manzil = "To'raqo'rg'on"
parent2.child.ism = "Alim"
parent2.child.manzil = "To'raqo'rg'on"

console.log(parent);
console.log(parent2);

// structuredClone()

// ====================================
// ====================================

// for in

// let obj = {
//     id: 1,
//     ism: "Ali",
//     familyasi: "Valiyev",
//     manzili: "Kosonsoy",
//     telRaqam: "+998 99 111 22 33",
// }

// for (let kalit in obj) {
//     console.log(obj[kalit]);
// }