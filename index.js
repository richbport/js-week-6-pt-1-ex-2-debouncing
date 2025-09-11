function debounce(func, delay) {
  let timeoutId;
  return function () {
    const args = arguments;
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(context, args), delay);
  };
}

function performSearch() {
  const query = document.getElementById("searhInput").ariaValueMax;
  document.getElementById("searchResults").textContent = `${query}`;
}

document
.getElementById("searchInput")
.addEventListener("input", debounce(performSearch, 500));
