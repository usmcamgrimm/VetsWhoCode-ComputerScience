/* O(1) */
// Constant time
let arr = ["orange", "black"];

arr.push("white");
console.log(arr);

/* O(n) */
//Linear time
let massillonOpps = ["LaSalle", "Avon", "Hoban", "Perry", "Harding"];

function playoffSearch(array) {
  for (i = 0; i < massillonOpps.length; i++) {
    if (massillonOpps[i] == array) console.log(massillonOpps[i]);
  }
  return false;
}

console.log(massillonOpps);

/* O(n^k) */
// Polynomial time
let titleGames = [
  2019,
  2018,
  2005,
  1982,
  1980,
  1967,
  1963,
  1957,
  1955,
  1934,
  1909,
  1916,
  1922,
  1935,
  1936,
  1937,
  1938,
  1939,
  1940,
  1941,
  1943,
  1948,
  1949,
  1950,
  1951,
  1952,
  1953,
  1954,
  1959,
  1960,
  1961,
  1964,
  1965,
  1970
];

function massillonTigers(array) {
  for (let t = 0; t < titleGames.length; t++) {
    let champGames = titleGames[t];
    for (let w = t + 1; w < titleGames.length; w++) {
      let champWins = titleGames[w];
      console.log(champGames, champWins);
    }
  }
}

massillonTigers(titleGames);
