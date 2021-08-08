const app = document.getElementById("app");
const API = "https://www.boredapi.com/api/activity";
let div = document.createElement("div");

for (let i = 0; i < 8; i++) {
  fetchAndAddToTheNode(API, "div", (data, element) => {
    element.innerHTML = templateString(data);

    element.classList.add(data.type);
    if (i < 2) {
      element.classList.add("first-two");
    }
    app.appendChild(element);
  });
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
