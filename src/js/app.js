// JS Goes here - ES6 supported
function toggleMap() {
    event.preventDefault();
    x = document.getElementById("Maps");
    console.log("test")
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(event) {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        event.preventDefault();
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
