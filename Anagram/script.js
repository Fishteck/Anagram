// Вспомогательная функция, которая создаёт объект для хранения данных
const buildCharObject = str => {
    const charObj = {};
    for(let char of str.replace(/[^\w]/g).toLowerCase()) {
      // Если объект уже содержит пару ключ-значение равную значению в цикле,
      // увеличиваем значение на 1, в противном случае добавляем букву в качестве ключа
      // и 1 в качестве значения
      charObj[char] = charObj[char] + 1 || 1;
    }
    return charObj;
  };
  // Главная функция
  const anagram = (strA, strB) => {
    // Создаём объект для хранения strA
    const aCharObject = buildCharObject(strA);
    // Создаём объект для хранения strB
    const bCharObject = buildCharObject(strB);
    // Сравниваем количество ключей в обоих объектах 
    // (анаграммы должны иметь одинаковое количество букв)
    if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
      return false;
    }
    // Если оба объекта имеют одинаковое количество ключей, мы можем быть уверены,
    // что обе строки имеют одинаковое количество символов. Теперь мы можем сравнить
    // оба объекта, чтобы увидеть, имеют ли они одинаковые буквы в одинаковом количестве
    for(let char in aCharObject) {
      if(aCharObject[char] !== bCharObject[char]) {
        return false;
      }
    }
    // Если проверка успешна, строки являются анаграммами — возвращаем true
    return true;
  };
  console.log(anagram('finder', 'friend'));