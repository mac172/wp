let svg = document.querySelector("svg");
let wibble = document.querySelector("#wibble");
var width = 100;
var pointz = 30;
var spacing = width / pointz;

let pointzArray = [];

for (var i = 0; i < pointz; i++) {
  var position = i / (pointz - 1);

  var point = wibble.points.appendItem(svg.createSVGPoint());

  point.x = i * spacing;
  point.y = 25;

  pointzArray.push(point);
}

let button = document.querySelector(".body");
let isAnimating = false;

button.addEventListener("mouseenter", () => {
  if (isAnimating === true) {
    console.log("return");
    return;
  }

  isAnimating = true;

  pointzArray.forEach((point, index) => {
    var mapper = gsap.utils.mapRange(0, pointz, 0, 0.4);

    if (index === 0) {
      gsap
        .to(point, {
          keyframes: [
            { y: "+=6", ease: "Sine.easeInOut" },
            { y: "-=12", ease: "Sine.easeInOut" },
            { y: "+=6", ease: "Sine.easeInOut" }
          ],
          yoyo: true,
          duration: 0.6,
          onComplete: () => {
            isAnimating = false;
            console.log("ended");
          }
        })
        .progress(mapper(index));
    } else {
      gsap
        .to(point, {
          keyframes: [
            { y: "+=6", ease: "Sine.easeInOut" },
            { y: "-=12", ease: "Sine.easeInOut" },
            { y: "+=6", ease: "Sine.easeInOut" }
          ],
          yoyo: true,
          duration: 0.6
        })
        .progress(mapper(index));
    }
  });
});