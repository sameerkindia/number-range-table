const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const form = document.querySelector("form");
const container = document.querySelector(".container");

let numDiv = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let activeDiv;
  container.innerHTML = "";
  const from = input1.value * 1;
  const length = input2.value * 1;

  for (let i = from; i <= length; i++) {
    const tableDiv = document.createElement("div");
    tableDiv.classList.add("table");

    const tableHead = document.createElement("div");
    tableHead.classList.add("table-head");
    tableHead.textContent = i;

    tableDiv.appendChild(tableHead);

    for (let j = 1; j <= 10; j++) {
      const div = document.createElement("div");
      div.classList.add("num");
      div.textContent = j * i;
      tableDiv.appendChild(div);
    }

    container.appendChild(tableDiv);
  }

  numDiv = [...document.querySelectorAll(".num")];

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("num")) {
      activeDiv = +e.target.textContent;
      numDiv.forEach((div) => {
        if (+div.textContent % activeDiv === 0) {
          div.classList.add("active");
        } else {
          div.classList.remove("active");
        }
      });
    }
  });

  // numDiv.forEach((div) => {

  //   div.addEventListener("click", (e) => {
  //     activeDiv = e.target.textContent * 1;
  //     numDiv.forEach((div) => {
  //       if (+div.textContent % activeDiv === 0) {
  //         div.classList.add("active");
  //       } else {
  //         div.classList.remove("active");
  //       }
  //     });

  //     activeDiv = 0;
  //   });
  // });
});
