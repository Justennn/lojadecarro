document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const fuelFilter = document.getElementById("fuelFilter");
  const turboFilter = document.getElementById("turboFilter");
  const clearBtn = document.getElementById("clearFilters");
  const cars = document.querySelectorAll("#carList .card");

  function applyFilters() {
    const searchText = searchInput.value.toLowerCase();
    const fuelValue = fuelFilter.value;
    const turboChecked = turboFilter.checked;

    cars.forEach(car => {
      const title = car.querySelector(".card-title").textContent.toLowerCase();
      const fuel = car.dataset.fuel;
      const turbo = car.dataset.turbo === "true";

      const matchesText = title.includes(searchText);
      const matchesFuel = !fuelValue || fuel === fuelValue;
      const matchesTurbo = !turboChecked || turbo;

      if (matchesText && matchesFuel && matchesTurbo) {
        car.style.display = "block";
      } else {
        car.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", applyFilters);
  fuelFilter.addEventListener("change", applyFilters);
  turboFilter.addEventListener("change", applyFilters);

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    fuelFilter.value = "";
    turboFilter.checked = false;
    applyFilters();
  });

  applyFilters();
});
