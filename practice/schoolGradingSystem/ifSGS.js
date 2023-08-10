//Using if statement to write a school grading system and its remarks.

function gradingSystem(mark) {
    if (mark <= 34) {
        return ["F9", "Lowest"]; // returns "F9" if grade is  less than or equals to 34.
    } else if (mark >= 35 && mark <= 39) {
        return ["E8", "Lower"]; // returns "E8" if grade is less than or equals to 35 and less than or equals to 39
    } else if (mark >= 40 && mark <= 49) {
        return ["D7", "Low"]; // returns "D7" if grade is less than or equals to 40 and less than or equals to 49
    } else if (mark >= 50 && mark <= 54) {
        return ["C6", "Low Average"]; // returns "C6" if grade is less than or equals to 50 and less than or equals to 54
    } else if (mark >= 55 && mark <= 60) {
        return ["C5", "Averagge"]; // returns "C5" if grade is less than or equals to 55 and less than or equals to 60
    } else if (mark >= 61 && mark <= 69) {
        return ["C4", "High Average"]; // returns "C4" if grade is less than or equals to 61 and less than or equals to 69
    } else if (mark >= 70 && mark <= 79) {
        return ["B3", "High"]; // returns "B3" if grade is less than or equals to 70 and less than or equals to 79
    } else if (mark >= 80 && mark <= 89) {
        return ["B2", "Higher"]; // returns "B2" if grade is less than or equals to 80 and less than or equals to 89
    } else if (mark >= 90 && mark <= 100) {
        return ["A1", "Highest"]; // returns "A1" if grade is less than or equals to 90 and less than or equals to 100
    }
     else{
        return "Your mark is out of range!"
    }
        
}

console.log(gradingSystem(550));
