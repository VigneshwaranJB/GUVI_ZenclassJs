var object = {name:"RajiniKanth", age: 33, hasPets : false};
for (let key in object){
    if(object.hasOwnProperty(key)){
      console.log(`${object[key]}`)
    }
 }