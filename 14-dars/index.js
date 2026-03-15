// let user = {
//     id: 1,
//     name: "Eshmat",
//     age: 65,
//     status: "Nafaqa Oluvchi",
//     Child: {
//         id: 2,
//         name: "Toshmat",
//         age: 30,
//         status: "Talaba",
//     }
// }

// let clonUser = stractureClone(user);
// clonUser.Child.age = 45;

// console.log(user);
// console.log(clonUser);

// =================================================

// let user = {
//     id: 1,
//     name: "Eshmat",
//     age: 65,
//     status: "Nafaqa oluvchi",
//     child: {
//         id: 2,
//         name: "Toshmat",
//         age: 30,
//         status: "talaba",
//         func() {
//             return this.age
//         }
//     }
// }

// let cloneUser = { child: {} }

// for (let key in user) {
//     if (typeof user[key] === "object") {
//         for (let key2 in user[key]) cloneUser.child[key2] = user[key][key2]
//     } else cloneUser[key] = user[key]
// }

// cloneUser.child.age = 45

// console.log(user);
// console.log(cloneUser);


// =================================================


// function Calculator(a, b) {
//     this.read = function () {
//         console.log(a, b);
//     }
//     this.sum = function () {
//         console.log(a + b);
//     }
//     this.mul = function () {
//         console.log(a * b);
//     }
// }

// let calculator = new Calculator(7, 15)


// calculator.read()
// calculator.sum()
// calculator.mul()


// =================================================


// let obj = {
//     id: 1,
//     name: "WebBrain",
// }

// for (let key in obj) {
//     console.log(key);
// }


// =================================================

// let obj = {
//     id: 1,
//     name: "WebBrain",
//     surname: "academy",
//     year: 2902,
// }
// for (let key in obj) {
//     if (typeof obj[key] === "number") {
//         console.log(key);
//     }
// }


// =================================================

// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false,
// }

// for (let key in obj) {
//     if (typeof obj[key] === "boolean") {
//         console.log(key,":",obj[key]);
//     }
// }

// =================================================

let obj = {
    id: 1,
    name: "WebBrain",
    offline: true,
    online: true,
    individual: false,
}

function search(obj, str) {
    for (let key in obj) {
        if (typeof obj[key] === 'str') {
            console.log("name:", obj[key]);
        }
    }
}
search(obj, "WebBrain")

