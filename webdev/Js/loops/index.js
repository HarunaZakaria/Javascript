// function

function studentsNames(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 'Alimatu ') {
      console.log(arr[i] + "I'm the class captain");
    } else {
      console.log(arr[i]);
    }
  }
}

let names = [
  'Alhassa',
  'Husein',
  'Mushraf',
  'Nana',
  'Alimatu',
  'Zeinab',
  'Muda',
  'Abass',
];

studentsNames(names);
