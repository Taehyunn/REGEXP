console.log(123);
const str = `
010-1234-5678
regexp@gmail.com
https://www.naver.com
I love you
aabbccdd
`;

// 생성자함수 const regexp = new RegExp("I", "gi");
const regexp = /I/gi;
console.log(str.match(regexp));
