const contact = new Map();
contact.set('haruna', {
    phone: '+233545771497', email: 'harunzy55@gmail.com'
});
contact.set('daud', {
    phone: '+233544166883', email: 'harundy55@gmail.com'
});
// this return the keys
for (const key of contact.keys()){
    console.log(key)
}
// this return values
for (const value of contact.values()){
    console.log(value)
}
