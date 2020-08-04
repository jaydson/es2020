const str = "hello world on the road Vitoria, meu nome é Jaydson Gomes"
console.log(str.match(/[A-Z][a-z]+/g))

const rx = /[A-Z][a-z]+/g;

let found;
while(found=rx.exec(str)) {
  console.log(found);
}

console.log(str.matchAll(rx))

for (const found of str.matchAll(rx)) {
  console.log(found);
}