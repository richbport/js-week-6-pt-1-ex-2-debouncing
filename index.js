function debounce(func, delay) {
  let timeoutId;
  return function() {
    const args = arguments;
    const context = this;
  }
}





function performSearch () {
    const query = document.getElementById("searhInput").ariaValueMax;
    document.getElementById("searchResults").textContent = `${query}`;
}