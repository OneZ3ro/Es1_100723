/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

// vecchio metodo per creare una funzione
// const function1 = function (par1, par2) {
//   const first2Char = par1.slice(0, 2);
//   const last2Char = par2.slice(-2);
//   const result = first2Char + last2Char;
//   return result;
// };
// console.log(function1("ciao", "Pierino"));

// nuovo metodo per creare una funzione
const function1 = (par1, par2) => {
  const first2Char = par1.slice(0, 2);
  const last2Char = par2.slice(-2);
  const result = first2Char + last2Char;
  return result;
};
console.log(
  "----------------- Esercizio 1 -----------------\n",
  function1(
    "Si sta come d'autunno sugli alberi le foglie",
    "Mi illumino d'immenso"
  )
);

//___________________________________________________________________________________________

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

const Arr_random_num = [];
const function2 = () => {
  for (let i = 0; i < 10; i++) {
    let random_num = Math.floor(Math.random() * 101);
    Arr_random_num.push(random_num);
  }
  return Arr_random_num;
};
console.log("----------------- Esercizio 2 -----------------\n", function2());

//___________________________________________________________________________________________

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

const function3 = () => {
  const Arr_num_pari = Arr_random_num.filter((num) => num % 2 === 0);
  return Arr_num_pari;
};
console.log("----------------- Esercizio 3 -----------------\n", function3());

//___________________________________________________________________________________________

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const function4 = () => {
  let total = 0;
  Arr_random_num.forEach((num) => {
    total += num;
  });
  return total;
};
console.log(
  "----------------- Esercizio 4 -----------------\nSomma Array (forEach) es1:",
  function4()
);

//___________________________________________________________________________________________

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const function5 = () => {
  const total = 0;
  const somma = Arr_random_num.reduce((num1, num2) => num1 + num2, total);
  return somma;
};
console.log(
  "----------------- Esercizio 5 -----------------\nSomma Array (reduce) es1:",
  function5()
);

//___________________________________________________________________________________________

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const function6 = (n) => {
  const arr_add_n = Arr_random_num.map((num) => num + n);
  return arr_add_n;
};
console.log(
  "----------------- Esercizio 6 -----------------\nSomma Array es1 + n:",
  function6(20)
);

//___________________________________________________________________________________________

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

const arr1 = ["EPICODE", "is", "great"];
const function7 = () => {
  const arr_mapped = arr1.map((str) => str.length);
  return arr_mapped;
};
console.log("----------------- Esercizio 7 -----------------\n", function7());

//___________________________________________________________________________________________

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

const Arr_num_0_100 = [];
for (let i = 0; i < 100; i++) {
  Arr_num_0_100.push(i);
}

const Arr_num_dispari = [];
const function8 = () => {
  Arr_num_0_100.forEach((num) => {
    if (num % 2 !== 0) {
      Arr_num_dispari.push(num);
    }
  });
  return Arr_num_dispari;
};
console.log("----------------- Esercizio 8 -----------------\n", function8());

//___________________________________________________________________________________________

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

//___________________________________________________________________________________________

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

const function9 = () => {
  let year_min = 2023;
  movies.forEach((item) => {
    if (item.Year < year_min) {
      year_min = item.Year;
    }
  });
  return year_min;
};
console.log(
  "----------------- Esercizio 9 -----------------\nIl film più vecchio è del:",
  function9()
);

//___________________________________________________________________________________________

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

const function10 = () => {
  let conta = 0;
  // con il for
  // for (let i = 0; i < movies.length; i++) {
  //   switch (movies[i].Type) {
  //     case "movie":
  //       conta++;
  //       break;
  //   }
  // }

  // con forEach
  movies.forEach((item) => {
    switch (item.Type) {
      case "movie":
        conta++;
        break;
    }
  });
  return conta;
};
console.log(
  `----------------- Esercizio 10 -----------------\nNell'Array ci sono ${function10()} film`
);

//___________________________________________________________________________________________

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

const function11 = () => {
  const movie_name = movies.map((item) => item.Title);
  return movie_name;
};
console.log(
  "----------------- Esercizio 11 -----------------\nNomi dei film:",
  function11()
);

//___________________________________________________________________________________________

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const function12 = () => {
  const movie_mill_att = movies.filter((iteam) => parseInt(iteam.Year) >= 2000);
  return movie_mill_att;
};
console.log(
  "----------------- Esercizio 12 -----------------\nFilm del millennio:",
  function12()
);

//___________________________________________________________________________________________

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const function13 = () => {
  const initialValue = 0;
  const arr_movies_year = [];
  movies.forEach((item) => arr_movies_year.push(Number(item.Year)));
  const somma = arr_movies_year.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return somma;
};
console.log(
  "----------------- Esercizio 13 -----------------\nSomma anni di uscita film (reduce):",
  function13()
);

//___________________________________________________________________________________________

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

const function14 = (par) => {
  const movie_found = movies.find((item) => item.imdbID === par);
  return movie_found;
};
console.log(
  "----------------- Esercizio 14 -----------------\nIl film da te cercato è:",
  function14("tt0167261")
);

//___________________________________________________________________________________________

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

const function15 = (par) => {
  const movie_index = (item) => parseInt(item.Year) >= par;
  return movie_index;
};
console.log(
  "----------------- Esercizio 15 -----------------\nIl primo film di quell'anno è:",
  movies.findIndex(function15(2009))
);

//___________________________________________________________________________________________
