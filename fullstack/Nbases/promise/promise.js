import { readFile } from 'fs/promises';

console.log('1. Starting file read with promises.....');

fs.readFile('example.txt', 'utf8')
  .then((data) => {
    console.log('3. File content (from .then):', data);
  })
  .catch((err) => {
    console.error('Error reading file with promise: ', err);
  });
