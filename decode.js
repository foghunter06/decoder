const fs = require('fs');

let raw = fs.readFileSync('game.js', 'utf8');
global.arguments = [];

const log = console.log;
let output = '';
console.log = (msg) => { output += msg + '\n'; };

try {
  eval(raw);
} catch (e) {
  console.error("Çalıştırma hatası:", e.message);
}

console.log = log;
console.log("\n🎯 Decode Edilen Kod:\n");
console.log(output);
