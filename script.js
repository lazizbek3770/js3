let son = prompt("Sonni kiriting:");
while (isNaN(son)|| son ===""|| son === null){
 son = prompt("Iltimos,sonni tugri kiriting:");  
}

let daraja = prompt("Darajani kiriting:");
while (isNaN(daraja)|| daraja ==="" || daraja===null) {
 daraja = prompt("Iltimos,darajani tugri kiriting:");   
}

son = Number(son);
daraja = Number(daraja);

let natija = 1;
for (let i = 0; i < daraja; i++) {
    natija = natija * son;
}
alert(son + "ning" + daraja + "-darajasi:" + natija); 


while (true) {
    let son = prompt("Iltimos, biror son kiriting:");
  
    if (son === null) {
      alert("Dastur tugadi.");
    }
  
    else if (son == "" || isNaN(son)) {
      alert("Bu son emas, iltimos son kiriting.");
    }
  
    else {
      son = Number(son);
  
      if (son % 2 === 0) {
        alert("Bu son JUFT.");
      } else {
        alert("Bu son TOQ.");
      }
    }
  }