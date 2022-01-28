"use strict";

const navBtn = document.querySelector(".nav-btn");
const imgBox = document.querySelector(".imgBox");
const nav = document.querySelector(".nav");
const screenhtml = document.querySelector(".screen");
const text = document.querySelector(".text");

const tl = new TimelineMax();

tl.fromTo(
  imgBox,
  1,
  { width: "0", height: "0" },
  { width: "100%", height: "450px" }
);

tl.fromTo(text, 1.5, { opacity: "0" }, { opacity: "1" }, "<");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    tl.to(nav, 1, { left: "50%" });
    tl.to(screenhtml, 1, { right: "50%" }, "<");
  } else {
    tl.to(nav, 1, { left: "150%" });
    tl.to(screenhtml, 1, { right: "120%" }, "<");
  }
});
