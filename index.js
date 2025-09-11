function debounce(func, delay) {
  let timeoutID;
  return function () {
    const args = arguments;
    const context = this;
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => func.apply(context, args), delay)
  }
}

function performSearch() {
  const query = document.getElementById("searhInput").value;
  document.getElementById("searchResults").textContent = `${query}`;
}

document
.getElementById("searchInput")
.addEventListener("input", debounce(performSearch, 500));
