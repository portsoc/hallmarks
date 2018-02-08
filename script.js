window.addEventListener("load", () => {
  'use strict';
  let rot = 0;
  let step = 30;
  let lis = document.querySelectorAll(".hallmark");


  for (let li of lis) {
    li.style = `filter: hue-rotate(${rot}deg)`;
    li.addEventListener("click", function(e) {
        location.href = "#"+e.target.id;
//        history.pushState({}, e.target.textContent, "#"+e.target.id);
    });
    rot += step;
  }

  window.x.setAttribute("style", `filter: brightness(100%)`);
});
