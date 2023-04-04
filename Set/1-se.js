const mySt = new Set([1, 2, 3, 4, 5, 6, 7]);
//The iteration over a set visits elements in insertion order.
for (const items of mySt.keys()) {
    console.log(items);
}
console.log(mySt);
