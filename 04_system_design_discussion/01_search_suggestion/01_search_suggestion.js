console.log("Script Loaded");
let searchQuery = {};
function debounce(func, delay) {
  let timerId;

  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const input = document.getElementById("search-input");
const resultContainer = document.getElementById("result-container");
const loadingContainer = document.getElementById("loader");

input.addEventListener("input", (e) => debouncedSearch(e.target.value));

async function searchAPI(query) {
  if (!query) {
    console.log("QUery is emptied");
    return;
  }
  console.log(`Calling API with query: ${query}`);
  if (searchQuery[query]) {
    console.log("Data is fetched from localstorage");
    return searchQuery[query];
  }
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
  const results = [`${query} 1 `, `${query} 2`];
  searchQuery[query] = results;
  return results;
}

async function searchingQuery(inputQuery) {
  if (!inputQuery) {
    resultContainer.innerHTML = "";
    loadingContainer.style.display = "none";
    return;
  }
  loadingContainer.style.display = "block";
  const results = await searchAPI(inputQuery);
  console.log("Search results:", results);
  loadingContainer.style.display = "none";
  resultContainer.innerHTML = results
    .map((result) => `<div>${result}</div>`)
    .join("");
}

const debouncedSearch = debounce(searchingQuery, 300);
