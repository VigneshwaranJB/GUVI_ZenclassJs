var object = { name: "RajiniKanth", age: 33, hasPets: false };
for (var key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(key + ":" + object[key]);
    }
}
