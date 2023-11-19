   let leapYear = +prompt('Введите год, чтобы проверить високосный он или нет');
   console.log(`Год: ${leapYear}`);

   if(leapYear % 4 == 0) {
    alert('Год високосный');
    console.log('Год: високосный');
   } else {
    alert('Год не високосный');
    console.log('Год: не високосный');
   }