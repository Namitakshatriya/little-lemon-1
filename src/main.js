const selectedDate = "2025-04-07";

fetchAPI(selectedDate).then(times => {
  console.log("Available times:", times);

  const dropdown = document.getElementById("timeDropdown");
  dropdown.innerHTML = "";
  times.forEach(time => {
    const option = document.createElement("option");
    option.value = time;
    option.textContent = time;
    dropdown.appendChild(option);
  });
});