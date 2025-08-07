let sum = prompt("Biror son kiriting");

while (isNaN(sum)|| sum ==="" || sum === null) {
  sum = prompt("Iltimos, faqat son kiriting");
}

let a = prompt("Darajani kiriting");
while (isNaN(a)|| a ==="" || a === null) {
  a = prompt("Iltimos, faqat son kiriting");
}

let b = 1;
for (let i = 1; i <= a; i*=4) {
  b = b * i;
}

alert("javob:"+b);



//while (true) {

  //  let son = prompt("Iltimos, biror son kiriting:");

    //if (son === null) {
    //} else if (son == "" || isNaN(son)) {
    //  alert("Bu son emas, iltimos son kiriting.");
    //} else {
    //  if (son % 2 == 0) {
    //    alert("Bu son JUFT.");
    //  } else {
    //    alert("Bu son TOQ.");
    //  }
    //}
  //}


