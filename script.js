window.addEventListener("load", () => {
  'use strict';
  let rot = 0;
  let step = 30;
  let lis = document.querySelectorAll("li");
  for (let li of lis) {
    if (!li.id) {
      li.style = `filter: hue-rotate(${rot}deg)`
      rot += step;      
    }
  }
  window.x.setAttribute("style", `filter: brightness(100%)`);
});
