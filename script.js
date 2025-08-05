let son = prompt("Sonni kiriting:"); 
while (isNaN(son) || son === "" || son === null) { 

    son = prompt("Iltimos, sonni to'g'ri kiriting:"); }

let daraja = prompt("Darajani kiriting:"); 

while (isNaN(daraja) || daraja === "" || daraja === null) { 

    daraja = prompt("Iltimos, darajani to'g'ri kiriting:"); }

let natija = 1; let i = 0;

while (i < daraja) { natija = natija * son; i++; }

alert(son + " ning " + daraja + "-darajasi: " + natija);



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


