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

