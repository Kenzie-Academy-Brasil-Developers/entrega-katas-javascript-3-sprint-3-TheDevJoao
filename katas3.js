const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848,
  179, 535, 940, 472,
];

function showResults(x) {
  let newDiv = document.createElement('div');
  let txt = document.createTextNode(x);
  newDiv.appendChild(txt);
  document.body.appendChild(newDiv);
}

function kata1() {
  // implemente o código do kata 1 aqui
  let array = [];
  for (let i = 1; i <= 25; i++) {
    array += i + ' ';
  }
  showResults(array);
}

kata1();

function kata2() {
  // implemente o código do kata 2 aqui
  let array = [];
  for (let i = 25; i >= 1; i--) {
    array += i + ' ';
  }
  showResults(array);
}

kata2();

function kata3() {
  // implemente o código do kata 3 aqui
  let array = [];
  for (let i = -1; i >= -25; i--) {
    array += i + ' ';
  }
  showResults(array);
}

kata3();

function kata4() {
  // implemente o código do kata 4 aqui
  let array = [];
  for (let i = -25; i <= -1; i++) {
    array += i + ' ';
  }
  showResults(array);
}

kata4();

function kata5() {
  // implemente o código do kata 5 aqui
  let array = [];
  for (let i = 25; i >= -25; i -= 2) {
    array += i + ' ';
  }
  showResults(array);
}

kata5();

function kata6() {
  // implemente o código do kata 6 aqui
  let array = [];
  for (let i = 3; i < 100; i++) {
    if (i % 3 === 0) {
      array += i + ' ';
    }
  }
  showResults(array);
}

kata6();

function kata7() {
  // implemente o código do kata 7 aqui
  let array = [];
  for (let i = 7; i <= 100; i += 7) {
    array += i + ' ';
  }
  showResults(array);
}

kata7();

function kata8() {
  // implemente o código do kata 8 aqui
  let array = [];
  for (let i = 100; i > 0; i--) {
    if (i % 3 === 0) {
      array += i + ' ';
    } else if (i % 7 === 0) {
      array += i + ' ';
    }
  }
  showResults(array);
}

kata8();

function kata9() {
  // implemente o código do kata 9 aqui
  let array = [];
  for (let i = 1; i < 100; i++) {
    if (i % 5 === 0 && i % 2 !== 0) {
      array += i + ' ';
    }
  }
  showResults(array);
}

kata9();

function kata10() {
  // implemente o código do kata 10 aqui
  showResults(sampleArray);
}

kata10();

function kata11() {
  // implemente o código do kata 11 aqui
  let array = [];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 === 0) {
      array += sampleArray[i] + ' ';
    }
  }
  showResults(array);
}

kata11();

function kata12() {
  // implemente o código do kata 12 aqui
  let array = [];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 !== 0) {
      array += sampleArray[i] + ' ';
    }
  }
  showResults(array);
}

kata12();

function kata13() {
  // implemente o código do kata 13 aqui
  let array = [];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 8 === 0) {
      array += sampleArray[i] + ' ';
    }
  }
  showResults(array);
}

kata13();

function kata14() {
  // implemente o código do kata 14 aqui
  let array = [];
  for (let i = 0; i < sampleArray.length; i++) {
    array += sampleArray[i] ** 2 + ' ';
  }
  showResults(array);
}

kata14();

function kata15() {
  // implemente o código do kata 15 aqui
  let resultado = 0;
  for (let i = 1; i <= 20; i++) {
    resultado += i;
  }
  showResults(resultado);
}

kata15();

function kata16() {
  // implemente o código do kata 16 aqui
  let count = 0;
  for (let i = 0; i < sampleArray.length; i++) {
    count += sampleArray[i];
  }
  showResults(count);
}

kata16();

function kata17() {
  // implemente o código do kata 17 aqui
  let minimum = sampleArray[0];
  for (let i = 1; i < sampleArray.length; i++) {
    if (minimum > sampleArray[i]) {
      let value = sampleArray[i];
      minimum = value < minimum ? value : minimum;
    }
  }
  showResults(minimum);
}

kata17();

function kata18() {
  // implemente o código do kata 18 aqui
  let maximum = sampleArray[0];
  for (let i = 1; i < sampleArray.length; i++) {
    {
      let value = sampleArray[i];
      maximum = value > maximum ? value : maximum;
    }
  }
  showResults(maximum);
}

kata18();

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
  // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
  // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
  // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
  // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
  // implemente o código do kata bonus 5 aqui
}
