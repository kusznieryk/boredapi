let animation = document.querySelector(".loading");
const app = document.getElementById("app");
const btnToLoad = document.getElementById("btn-to-load");
const API = "https://www.boredapi.com/api/activity";

let div = document.createElement("div");

btnToLoad.addEventListener("click", () => {
  startTheFetching();
});

window.onload = (event) => {
  startTheFetching();
};

async function startTheFetching() {
  animation.classList.add("loading");
  for (let i = 0; i < 8; i++) {
    await fetchAndAddToTheNode(API, "div", (data, element) => {
      element.innerHTML = templateString(data);

      element.classList.add(data.type);

      app.appendChild(element);
    });
  }
  animation.classList.remove("loading");
}

async function fetchAndAddToTheNode(api, element, cb) {
  let data = await fetch(api).then((response) => response.json());
  let createdElement = document.createElement(element);

  createdElement.classList.add("activity");
  cb(data, createdElement);
}

function templateString({ activity, type }) {
  return `<h3>${activity}</h3>
  <p> Type: ${type}</p>`;
}
