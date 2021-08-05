const app = document.getElementById("app");
const API = "https://www.boredapi.com/api/activity";
let div = document.createElement("div");

for (let i = 0; i < 10; i++) {
  fetchAndAddToTheNode(API, "div", (data, element) => {
    element.innerHTML = templateString(data);

    element.classList.add(data.type);
    if (i < 2) {
      element.classList.add("first-two");
    }
    div.appendChild(element);
  });
}

async function fetchAndAddToTheNode(api, element, cb) {
  let data = await fetch(api).then((response) => response.json());
  let createdElement = document.createElement(element);

  createdElement.classList.add("activity");
  cb(data, createdElement);
}

function templateString({ activity, type, participants }) {
  return `<h3>${activity}</h3>
  <h4> type: ${type}</h4>
  <p>posible with ${participants} participants</p>`;
}

app.appendChild(div);
