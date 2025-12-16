// js/main.js
"use strict";

window.addEventListener("load", () => {
  const btn = document.getElementById("enterBtn");
  btn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    document.getElementById("msg").innerHTML = "Hello " + name;
    document.getElementById("date").innerHTML =
      "<h3>The Current Date & Time is:</h3>" + new Date();
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
  }
});
