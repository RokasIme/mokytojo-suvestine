/*
2 užduotis - filmų rekomendacija +:
● Padarykite funkciją, kuri iš visų esamų filmų sąrašo (kuris gali būti bet kada
papildomas), pagal jūsų norimą žanrą ir įvertį išveda į console kokie filmai jums patiktų.
Jei joks filmas netinka, turi tai pranešti.
● Jei vietoj įverčio arba žanro yra pateikiamas žodis ‘nesvarbu’, yra pateikiami filmai pagal
tą kriterijų, kuris yra svarbus.
● Jei abu kriterijai yra nesvarbūs, parekomenduokite top 3 įvertintus filmus.
*/

const filmai = [
  { name: "Transformer", genre: "action", imdb: "geras" },
  { name: "Final destination", genre: "drama", imdb: "geras" },
  { name: "Santa barbara", genre: "drama", imdb: "blogas" },
  { name: "Guliverio keliones", genre: "adventure", imdb: "vidutinis" },
  { name: "American pie", genre: "comedy", imdb: "geras" },
  { name: "Matrica", genre: "action", imdb: "blogas" },
  { name: "Simpson movie", genre: "comedy", imdb: "vidurinis" },
  { name: "Rock", genre: "drama", imdb: "geras" },
];

function films(zanr, ivert) {
  let tinkamiFilmai = "";
  for (let i = 0; i < filmai.length; i++) {
    if (filmai[i].genre === zanr && filmai[i].imdb === ivert) {
      tinkamiFilmai += filmai[i].name + ", ";
    }
    if (filmai[i].genre === zanr && ivert === "nesvarbu") {
      tinkamiFilmai += filmai[i].name + ", ";
    }
    if (zanr === "nesvarbu" && filmai[i].imdb === ivert) {
      tinkamiFilmai += filmai[i].name + ", ";
    }
    if (zanr === "nesvarbu" && ivert === "nesvarbu") {
      if (filmai[i].imdb === "geras") {
        tinkamiFilmai += filmai[i].name + ", ";
      }
    }
  }
  if (tinkamiFilmai.length === 0) {
    return "Jums tinkamų filmų nerasta";
  }
  if (zanr === "nesvarbu" && ivert === "nesvarbu") {
    const trysFilmai = tinkamiFilmai.split(",");
    return `Kai nežinai ko nori siūlome top 3 geriausiai įvertintus filmus: ${trysFilmai[0]}, ${trysFilmai[1]}, ${trysFilmai[2]}`;
  }
  return `Jums patiktų šie filmai: ${tinkamiFilmai.slice(
    0,
    tinkamiFilmai.length - 2
  )}`;
}
console.log("\n         gera drama:");
console.log(films("drama", "geras"));

console.log("\n         action blogas:");
console.log(films("action", "blogas"));

console.log("\n         adventure blogas:");
console.log(films("adventure", "blogas"));

console.log("\n         adventure nesvarbu:");
console.log(films("adventure", "nesvarbu"));

console.log("\n         nesvarbu geras:");
console.log(films("nesvarbu", "geras"));

console.log("\n         nesvarbu nesvarbu:");
console.log(films("nesvarbu", "nesvarbu"));
