import { readFile } from 'fs';

console.log('1. starting file read .....');

readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('error reading file:', err);
    return;
  }
  console.log('3. File content (from callback):', data);
});
console.log('2. file read initiaed. doing other work .....');
console.log('4. This line runs before the file content is logged ');
