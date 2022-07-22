//ITERACION #1//
const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

products.forEach((element) => {
  if (element.includes("Camiseta")) {
    console.log(element);
  }
});

//ITERACION #2//

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

alumns.forEach((element, index) => {
  console.log(element.T1, element.T2, element.T3);
  if (
    (element.T1 && element.T2) ||
    (element.T1 && element.T3) ||
    (element.T2 && element.T3)
  ) {
    alumns[index].isApproved = true;
  } else {
    alumns[index].isApproved = false;
  }
});
console.log(alumns);

const numero1 = 1;
const numero2 = 1;
const numero3 = false;
if (numero2 == numero1) {
  console.log("si");
}

//ITERACION #3//
const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (objects of placesToTravel) {
  console.log(objects);
}

//ITERACION #4//
const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (key in alien) {
  console.log(alien.key);
}

//ITERACION #5//
const placesToTravel1 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

let ide = [];

for (let index = 0; index < placesToTravel1.length; index++) {
  const place = placesToTravel1[index];
  if (place.id != 11 && place.id != 40) {
    ide.push(place);
  }
}
console.log(ide);

//ITERACION #6//
const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

let ide2 = [];

for (toy of toys) {
  if (!toy.name.includes("gato")) {
    ide2.push(toy);
  }
}
console.log(ide2);

//ITERACION #7//
const popularToys = [];
const toys1 = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];

for (toy1 of toys1) {
  if (toy1.sellCount > 15) {
    popularToys.push(toy1);
  }
}
console.log(popularToys);
