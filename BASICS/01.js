// import c from 'ansi-colors';
const c = require('ansi-colors')

const hello = name => {
    console.log(`${c.green(name)} HI`);
}

hello("HAN")