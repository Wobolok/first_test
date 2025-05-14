const fixedHeader = document.getElementById("fixed_header");

window.addEventListener("scroll", (e) => {
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 450) {
    fixedHeader.classList.remove("fixed_header--hidden");
  } else {
    fixedHeader.classList.add("fixed_header--hidden");
  }
})