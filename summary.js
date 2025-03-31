/*
1 užduotis - mokytojo suvestinė +:
*/

/* ● Susikurkite bent 6 sąrašo (array) tipo kintamuosius, kurių pirmas narys yra mokinio
vardas, o toliau yra nevienodo kiekio skaičiaus tipo mokinio pažymiai
*/
const marks1 = ["Jonas", 9, 6, 8, 7, 9, 4];
const marks2 = ["Maryte", 7, 8, 8, 7, 9, 10, 10, 10];
const marks3 = ["Petras", 5, 4, 2, 2, 2, 2];
const marks4 = ["Jurga", 10, 7, 8, 10, 9, 8, 5];
const marks5 = ["Juozas", 8, 4, 8, 7, 9];
const marks6 = ["Antanas", 1, 2, 1, 1, 2, 1];

/* ● Sukurkite funkciją, kuri padaro šiuos veiksmus:
○ Išveda mokinio vardą.
■ Padarykite, kad funkcija parašytų taisyklingai: arba ‘mokinio’ arba
‘mokinės’ vardas yra: …
*/
console.log("           vardas yra");
function mokVardas(arr) {
  const vardasSplit = arr[0].split("");
  if (vardasSplit[vardasSplit.length - 1] === "s") {
    return `mokinio vardas yra: ${arr[0]}`;
  } else {
    return `mokinės vardas yra: ${arr[0]}`;
  }
}

console.log(mokVardas(marks1));
console.log(mokVardas(marks2));

/*● Sukurkite funkciją, kuri padaro šiuos veiksmus:
○ Išveda mokinio pažymių vidurkį ir praneša ar mokinys išlaikė ar neišlaikė kurso
*/
console.log("\n        vidurkis išlaikė");

function vidurkis(arr) {
  let pazymiuSuma = 0;

  for (let i = 1; i < arr.length; i++) {
    pazymiuSuma += arr[i];
  }
  const pazymiuVidurkis = (pazymiuSuma / (arr.length - 1)).toFixed(2);
  if (pazymiuVidurkis <= 4) {
    return `${arr[0]}, vidurkis: ${pazymiuVidurkis}, neišlaikyta`;
  } else {
    return `${arr[0]}, vidurkis: ${pazymiuVidurkis}, išlaikyta`;
  }
}

console.log(vidurkis(marks1));
console.log(vidurkis(marks3));

/* ● Sukurkite funkciją, kuri padaro šiuos veiksmus:
○ Jei mokinys neišlaiko kurso, parašykite ar mokinys, gavęs vieną gerą įvertį,
galėtų pasitaisyti savo vidurkį, ir koks tas įvertis turėtų būti.+
*/
console.log("\n        pasitaisyti");

function pasitaisyti(arr) {
  let pazymiuSuma1 = 0;

  for (let i = 1; i < arr.length; i++) {
    pazymiuSuma1 += arr[i];
  }
  let pazymiuVidurkis1 = (pazymiuSuma1 / (arr.length - 1)).toFixed(2);
  if (pazymiuVidurkis1 >= 4.5) {
    return `${arr[0]} nereikia taisytis, jis jau išlaikė`;
  }
  if (pazymiuVidurkis1 <= 4.5) {
    for (let i = 5; i < Infinity; i++) {
      if (pazymiuVidurkis1 < 4.5) {
        let pazymiuSuma2 = 0;
        arr.push(i);
        for (let i = 1; i < arr.length; i++) {
          pazymiuSuma2 += arr[i];
        }
        pazymiuVidurkis1 = (pazymiuSuma2 / (arr.length - 1)).toFixed(2);
      } else if (i <= 10) {
        return `${arr[0]} gali pasitaisyti jei gaus: ${i}`;
      } else {
        return `${arr[0]} negali pasitaisyti vienu pažymiu, jam reiktų gauti: ${i}`;
      }
    }
  }
}

console.log(pasitaisyti(marks1));
console.log(pasitaisyti(marks3));
console.log(pasitaisyti(marks6));
