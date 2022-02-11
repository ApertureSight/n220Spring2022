let dvTest = document.getElementById ("dvTest");
console.log(dvTest);

dvTest.innerHTML = "hello World";
dvTest.style.backgroundColor= "#00ff99";

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024

onclick