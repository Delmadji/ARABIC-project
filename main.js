const container = document.querySelector("container");

const charHalk = ["ء", "ه", "ح", "خ", "غ"];
const charLahaw = ["ق", "ك"];
const charMouthaTongue = [
  "ج",
  "ش",
  "ي",
  "ض",
  "ل",
  "ن",
  "ر",
  "د",
  "ط",
  "ت",
  "ز",
  "ظ",
  "ص",
  "ث",
  "س",
  "ذ",
];
const charLip = ["و", "ف", "ب", "م"];

let arrf = [];
let arrf2 = [];

//FUNCTION

//function double
const arrayCombinDouble = (arr1, arr2) => {
  let arrfunc = [];

  arr1.map((i) => {
    arr2.map((j) => {
      arrfunc = [...arrfunc, i + j, j + i];
    });
  });

  return arrfunc;
};

//function triple
const arrayCombinTriple = (arr1, arr2, arr3) => {
  let arrfunc = [];
  let arrpro = [];
  let arrfunc2 = arrayCombinDouble(arr2, arr3);
  let arrfunc3 = arrayCombinDouble(arr1, arr3);

  arrfunc2.map((i) => {
    arr1.map((j) => {
      arrfunc = [...arrfunc, i + j, j + i];
    });
  });

  arrfunc3.map((i) => {
    arr2.map((j) => {
      arrfunc = [...arrfunc, i + j, j + i];
    });
  });

  arrfunc.map((i) => {
    arrfunc.map((j) => {
      if (i !== j) {
        arrpro = [...arrpro, j];
      }
    });
  });

  return arrfunc;
};

//function affichage
const arrayAffichage = (array) => {
  array.forEach((arr) => {
    return console.log(arr);
  });
};

arrf = arrayCombinDouble(charHalk, charLahaw);
arrayAffichage(arrf);
//arrf2 = arrayCombinTriple(charLahaw, charHalk, charLip);
console.log("#".repeat(15));
//console.log(arrf2.length);
//arrayAffichage(arrf2);
