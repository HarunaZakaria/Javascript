// fs-operations.js
import {
  writeFile,
  appendFile,
  readFile,
  mkdir,
  readdir,
  unlink,
  rmdir,
} from 'fs/promises';
import { join } from 'path'; // Node.js built-in module for path manipulation

async function performFileOperations() {
  const fileName = 'mydata.txt';
  const folderName = 'temp_data';
  const filePath = join(__dirname, fileName); // __dirname is the current directory
  const folderPath = join(__dirname, folderName);

  console.log('--- File System Operations ---');

  try {
    // 1. Write to a file
    console.log(`Writing to ${fileName}...`);
    await writeFile(filePath, 'This is some data for my file.\n');
    console.log('Data written successfully.');

    // 2. Append to the file
    console.log(`Appending to ${fileName}...`);
    await appendFile(filePath, 'Appended new line of data.');
    console.log('Data appended successfully.');

    // 3. Read the file
    console.log(`Reading from ${fileName}...`);
    const content = await readFile(filePath, 'utf8');
    console.log('File Content:', content);

    // 4. Create a directory
    console.log(`Creating directory ${folderName}...`);
    await mkdir(folderPath, { recursive: true }); // recursive: true creates parent folders if they don't exist
    console.log('Directory created successfully.');

    // 5. Write a file inside the new directory
    const newFilePath = join(folderPath, 'another_file.txt');
    console.log(`Writing to ${newFilePath}...`);
    await writeFile(newFilePath, 'Content inside new folder.');
    console.log('File written in new directory.');

    // 6. Read directory contents
    console.log(`Reading directory ${folderName}...`);
    const filesInDir = await readdir(folderPath);
    console.log('Files in directory:', filesInDir);

    // 7. Delete the file inside the new directory
    console.log(`Deleting ${newFilePath}...`);
    await unlink(newFilePath);
    console.log('File deleted from new directory.');

    // 8. Delete the main file
    console.log(`Deleting ${filePath}...`);
    await unlink(filePath);
    console.log('Main file deleted.');

    // 9. Delete the directory (must be empty first)
    console.log(`Deleting directory ${folderName}...`);
    await rmdir(folderPath); // Or fs.rm(folderPath, { recursive: true }) for newer Node.js
    console.log('Directory deleted.');
  } catch (err) {
    console.error('An error occurred during file operations:', err);
  } finally {
    console.log('--- File System Operations Complete ---');
  }
}

performFileOperations();
