// THIS

let obj = {
    id: 1,
    name: "Ali",
    age: 20,
    getData: function () {
        console.log(this.name, this.age);
    }
}

let newObj = obj
obj = null

let cloneObj = newObj
newObj = null

cloneObj.getData()