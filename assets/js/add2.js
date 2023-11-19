   let leapYear = +prompt('Введите год, чтобы проверить високосный он или нет');
   console.log(`Год: ${leapYear}`);

   if(leapYear % 4 == 0) {
    alert('Год высокосный');
    console.log('Год: высокосный');
   } else {
    alert('Год не высокосный');
    console.log('Год: не высокосный');
   }