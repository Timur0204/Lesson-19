   let leapYear = +prompt('Введите год, чтобы проверить високосный он или нет');
   console.log(`Год: ${leapYear}`);

   if(leapYear % 4 == 0  || leapYear % 400 == 0) {
    console.log('Год: високосный');
    alert('Год високосный');
   } else if(leapYear % 100 == 0) {
    console.log('Год: не високосный');
    alert('Год не високосный');
   } else {
    console.log('Год: не високосный');
    alert('Год не високосный');
   }