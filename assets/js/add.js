   
   let bodyWeight = +prompt('Для того, чтобы узнать ИМТ, для начала введите массу тела(в кг):');
   console.log(`Масса тела: ${bodyWeight} кг`);
   let bodyHeight = +prompt('Теперь напишите вашу высоту(в метрах):');
   console.log(`Высота тела: ${bodyHeight} метров`);

   let bodyMassIndex = bodyWeight / bodyHeight **2;
   bodyMassIndex = Math.round(bodyMassIndex * 10) / 10;
   console.log(`Ваш Индекс Массы Тела: ${bodyMassIndex}`);


   if (bodyMassIndex <= 16) {
    alert(`Ваш Индекс Массы Тела: ${bodyMassIndex} (у вас выраженый дефицит массы тела)`);
   } else if (bodyMassIndex >= 16 && bodyMassIndex < 18.5) {
    alert(`Ваш Индекс Массы Тела: ${bodyMassIndex} (у вас дефицит массы тела)`);
   } else if (bodyMassIndex >= 18.5 && bodyMassIndex < 25) {
    alert(`Ваш Индекс Массы Тела: ${bodyMassIndex} (у вас норма массы тела)`);
   } else if (bodyMassIndex >=25 && bodyMassIndex < 30) {
    alert(`Ваш Индекс Массы Тела: ${bodyMassIndex} (у вас избыточная масса тела или же предожирение)`);
   } else if (bodyMassIndex >= 30 && bodyMassIndex < 35) {
    alert(`Ваш Индекс Массы Тела: ${bodyMassIndex} (у вас ожирения 1 степени)`);
   } else if (bodyMassIndex >= 35 && bodyMassIndex < 40) {
    alert(`Ваш Индекс Массы Тела: ${bodyMassIndex} (у вас ожирения 2 степени)`);
   } else if (bodyMassIndex >= 40) {
    alert(`Ваш Индекс Массы Тела: ${bodyMassIndex} (у вас ожирения 3 степени)`);
   }
