const preload = document.getElementById("preload");

setTimeout(() => {
  scrollTo({
    top: 0,
    smooth: true
  })
  document.body.classList.remove("overflow-y-hidden")
  preload.classList.add("hidden");
}, 1500);
