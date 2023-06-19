function menu() {
    //window.location.href = 'rancagua.html'; this opens the file in the same window.



}

function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
   // dropdown.style.transform = "scale(1.2)";
    dropdown.style.transition = "transition: all 0.9s linear";
  }