const app = document.getElementById("app");
const API = "https://www.boredapi.com/api/activity";
const numberOfActivities = 8;
let firstFetching = true;

let div = document.createElement("div");

const btn = document.getElementById("btn-to-load");

btn.onclick = startTheFetching;

function startTheFetching() {
  for (let i = 0; i < numberOfActivities; i++) {
    fetchAndAddToTheNode(API, "div", (data, element) => {
      element.innerHTML = templateString(data);

      element.classList.add(data.type);

      app.appendChild(element);
    });
  }
  if (firstFetching) btnToLoad.innerHTML = "Load more.";

  firstFetching = false;
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
