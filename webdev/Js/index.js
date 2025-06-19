//nested fo loop using for loop
for (let i = 1; i <= 10; i++) {
  if (i === 1) {
    console.log('Gold medal');
  } else if (i === 2) {
    console.log('Silver medal');
  } else if (i === 3) {
    console.log('Bronze medal');
  } else {
    console.log(i);
  }
}

//Swtich statement
for (let i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log('Gold medal');
      break;
    case 2:
      console.log('Silver medal');
      break;
    case 3:
      console.log('Bronze medal');
      break;
    default:
      console.log(i);
  }
}

//both the nested for llop and the switch statement output the same results
