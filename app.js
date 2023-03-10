// const fancy = id => {
//     const element1 = document.getElementById(id)
//     element1.addEventListener("click", () => {
//         console.log("clicked")
//     })
// }

// const element1 = document.getElementById("social-link2");
// if (element1) {
//   element1.addEventListener("click",() => {
//     console.log("clicked")
//   });
// }

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fancy = (id) => {
  const element = document.getElementById(id),
    text = element.innerText.split("");

  element.innerText = "";

  text.forEach((value, index) => {
    const outer = document.createElement("span");
    outer.className = "outer";

    const inner = document.createElement("span");

    inner.className = "inner";

    inner.style.animationDelay = `${rand(-5000, 0)}ms`;

    const letter = document.createElement("span");
    letter.className = "letter";
    letter.innerText = value;

    letter.style.animationDelay = `${index * 1000}ms`;

    inner.appendChild(letter);
    outer.appendChild(inner);
    element.appendChild(outer);

    // element.appendChild(span);
  });
};

fancy("social-link1");
fancy("social-link2");

const button = document.getElementsByClassName("theme-button")[0];
const body = document.body;
if (button) {
  button.addEventListener("click", () => {
    console.log("first");
    body.classList.toggle("dark-mode");
  });
}

words = document.querySelectorAll("#word");

words.forEach((word) => {
  word.onmouseover = (event) => {
    let iterations = 0;

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })

        .join("");

      if (iterations >= event.target.dataset.value.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3;
    }, 30);
  };
});
