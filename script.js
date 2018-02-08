window.addEventListener("load", () => {
  'use strict';
  let rot = 0;
  let step = 30;
  let lis = document.querySelectorAll("li");
  function recolour() {
    let nextRot = rot+1;
    for (let li of lis) {
      if (!li.id) {
        li.style = `filter: hue-rotate(${rot}deg)`
        rot += step;
      }
    }
    rot=nextRot;
  }

  setInterval(recolour,1000);
  window.x.setAttribute("style", `filter: brightness(100%)`);
});
