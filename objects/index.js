let personOne = {
    name: "Harunzy",
    age: 26,
    educationLlevel: "College",
    languageSppoken: ["English", "Dagbani", "Twi"]
}

let greet = "Good Morning " + personOne.name;
//alert(greet);

// Constructor function

function BellBoy (name, age, languages) {
    this.name = name;
    this.age = age;
    this.languages = languages;
    //this is a method 
    this.clean = function (){
        alert("Im cleaning now");
    }
}

// initializing object
let bellboy1 = new BellBoy("zak", 24, ["Dagbani", "English"]);
//alert("Good Morning " + bellboy1.name);
//bellboy1.clean();



//listen to  a key press on the keyboard
document.addEventListener("keypress", function (event) {
    console.log(event);
})