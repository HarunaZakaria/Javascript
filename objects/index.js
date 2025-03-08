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
    this.name;
    this.age;
    this.languages; 
}

// initializing object
let bellboy1 = new BellBoy("zak", 24, ["Dagbani", "English"]);