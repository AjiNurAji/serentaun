const preload = document.getElementById("preload");

setTimeout(() => {
  document.body.classList.remove("overflow-y-hidden")
  preload.classList.add("hidden");
}, 1500);
