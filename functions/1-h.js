const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
    ]);
    //it is used to add an array in a map
    fruits.set("lemmon", 400);
    //it is used to change the value of apples in a map
    fruits.set("apples", 50);
    //it is used to get the value of a key in a map
    //console.log(fruits.get("oranges"));

    function sum(a,b,...args) {
        let n = a+b;
        for (let x of args){
            n =n + x;
        }
        return n;
    }


    let result = sum(2,7,9,4,6);
    console.log(result);
