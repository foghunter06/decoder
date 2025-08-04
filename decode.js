const fs = require('fs');

// Tarayıcı ortamını taklit eden sahte nesneler
global.window = {};
global.document = {};
global.navigator = {};
global.location = {};
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};
global.sessionStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};
global.XMLHttpRequest = function () {
  return {
    open: () => {},
    send: () => {},
    setRequestHeader: () => {},
    readyState: 4,
    status: 200,
    responseText: ''
  };
};

let raw = fs.readFileSync('game.js', 'utf8');
global.arguments = [];

const log = console.log;
let output = '';
console.log = (msg) => { output += msg + '\\n'; };

try {
  eval(raw);  // game.js içeriğini çalıştır
} catch (e) {
  console.error("Çalıştırma hatası:", e.message);
}

console.log = log;
console.log("\\n🎯 Decode Edilen Kod:\\n");
console.log(output);
