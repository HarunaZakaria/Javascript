// iterators and iterable
const num = [1, 2, 4, 6, 8, 10];
const numIte = num[Symbol.iterator]();
//console.log(numIte.next());

//for of loop in iterating
// this output names in separate 
const names =['Haruna', 'Hamis', 'Soalihu', 'Daud'];
for (const name of names){
    console.log(name);
}
