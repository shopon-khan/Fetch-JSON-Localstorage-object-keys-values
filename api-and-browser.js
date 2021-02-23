// JSON
// javascript object ke json a convert kora
const person = {
    name: 'abul',
    age: 34,
};
// console.log(JSON.stringify(person));

// json teke javascript object poriborton kora
//  kuno akti object ke json a convert korte gele stringify use r json ar kono akti object ke javascript object a poriporton korte parse use korbo

const data = JSON.stringify(person);
const dataParsed = JSON.parse(data);
// console.log(dataParsed.name);

// API fetch must be know to do javaScript application
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data));

// local storage use how to add some data in .
// localStorage.setItem('userId', 4258);
const userId = localStorage.getItem('userId');
console.log(userId);