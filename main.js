function myFunction() {
    var x = document.getElementById("top_header");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }
