const app = document.getElementById("app");
const API = "https://www.boredapi.com/api/activity";
let div = document.createElement("div");

for (let i = 0; i < 10; i++) {
  fetchAndAddToTheNode(API, "div", (data, element) => {
    element.innerHTML = `<h3>${data.activity}</h3>`;
    element.innerHTML += `<h4> type: ${data.type}</h4>`;
    element.innerHTML += `<p>posible with ${data.participants} participants</p>`;
    element.classList.add(data.type);
    div.appendChild(element);
  });
}

async function fetchAndAddToTheNode(api, element, cb) {
  let data = await fetch(api).then((response) => response.json());
  let createdElement = document.createElement(element);
  cb(data, createdElement);
}

app.appendChild(div);
