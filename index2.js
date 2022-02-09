console.log("Hi JacobSikkes94, welcome to looping-items!");

const response = await fetch("https://reqres.in/api/users");

const { results } = await response.json();

for (let i = 0; i < results.length; i++) {
  const listEl = document.createElement("li");
  listEl.innerHTML = `
        <div>${listEl.name}</div>
        <div>${listEl.email}</div>
      `;
  list.appendChild(resultsEl);
}
fetchList();

---------------------------------
Code Joren
console.log("Hi Joren Broekema, welcome to looping-items!");

/**
 * 1) loop over the items
 * 2) log each item
 * 3) create an unordered list
 * 4) select the list
 * 5) put each item as HTML elements into the list
 *    - you can use string building and innerHTML
 *    - or document.createElement and doing it imperatively (e.g. appendChild)
 * 6) fetch your data from an API
 */

// https://pokeapi.co/api/v2/pokemon?limit=100&offset=200

// const list = document.getElementById("list");

async function fetchEmail(url) {
  const response = await fetch(url);

  const data = await response.json();
  const { name, sprites } = data;
  return { name, picture: sprites.front_shiny };
}

async function fetchList() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
  );

  const { results } = await response.json();

  for (let i = 0; i < results.length; i++) {
    const pokemon = await fetchPokemon(results[i].url);

    const listEl = document.createElement("li");
    listEl.innerHTML = `
      <img src="${pokemon.picture}" />
      <div>${pokemon.name}</div>
    `;
    list.appendChild(listEl);
  }

  /**
   * Way more performant because in parallel..
   * but more complex to write :)
   */
  // const pokemonData = await Promise.all(
  //   results.map(
  //     (result) =>
  //       new Promise(async (resolve) => {
  //         const pokemon = await fetchPokemon(result.url);
  //         resolve(pokemon);
  //       })
  //   )
  // );
  // pokemonData.forEach((pokemon) => {
  //   const listEl = document.createElement("li");
  //   listEl.innerHTML = `
  //     <img src="${pokemon.picture}" />
  //     <div>${pokemon.name}</div>
  //   `;
  //   list.appendChild(listEl);
  // });
}

// fetchList();
