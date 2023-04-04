// grouping the elements of an array
const friendsList = [
    {name: 'Haruna', school: 'Tace', age: 24, id: 01},
    {name: 'Muaz', school: 'Bace', age: 25, id: 02},
    {name: 'Cury', school: 'Tace', age: 23, id: 03},
    {name: 'Ayana', school: 'Bace', age: 24, id: 04},
    {name: 'Fati', school: 'UDS', age: 26, id: 5},
];
// this count number of friends in the array
//const result = friendsList.reduce((acc,freind) => acc + 1, 0);
//console.log(result);

// array of names
//const result = friendsList.reduce((acc,friend) =>[...acc, friend.name], []);
//console.log(result);

// convert to id
//const result = friendsList.reduce((acc,friend) =>{
    
//    return{...acc, [friend.id]: friend};
//}, {});
//console.log(result['3']);

const result = friendsList.reduce((acc,friend) =>{
    
    if (friend.school === 'Tace') return friend;
    return null;
}, null);
console.log(result)
 