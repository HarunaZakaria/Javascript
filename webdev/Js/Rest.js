function unknownArgs(...args) {
  // Your code here
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

unknownArgs(1, 2, 3, 4, 5, 6);
unknownArgs('Haruna', 'Hamdan', 'Hamza', 'Hashim', 'Hamis');
