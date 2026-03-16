let rot = 0;
let step = 30;
let revealOffset = 120;
let hallmarks = document.getElementById("x");
let lis = document.querySelectorAll(".hallmarks>li");

for (let [index, li] of lis.entries()) {
  li.style.filter = `hue-rotate(${rot}deg)`;
  li.style.animationDelay = `${index * revealOffset}ms`;
  li.addEventListener("click", function(e) {
      location.href = "#"+e.target.id;
  });
  rot += step;
}

hallmarks.classList.add("is-ready");
hallmarks.style.filter = "brightness(100%)";
