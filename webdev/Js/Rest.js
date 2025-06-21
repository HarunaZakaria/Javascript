function unknownArgs(...args) {
  // Your code here
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

//unknownArgs(1, 2, 3, 4, 5, 6);
//unknownArgs('Haruna', 'Hamdan', 'Hamza', 'Hashim', 'Hamis');
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);
//console.log(set);
