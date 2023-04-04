//create a buffer and asign 16 bytes to it
const buffer = new ArrayBuffer(16);
if (buffer.byteLength === 16) {
    console.log('Haruna created this bufeer')
} else {
    console.log('He dooes not know this buffer exist')
};
