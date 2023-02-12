let input = document.querySelector("input");
let root = document.querySelector("ul");
let all_movie = [
  {
    name: "Forest Jump",
    watched: false,
  },
  {
    name: "Inception",
    watched: false,
  },
];

function createUI(movie_name) {
  root.innerHTML = "";
  input.value = ``;
  all_movie.forEach((movie, index) => {
    let li = createElement(
      `li`,
      null,
      createElement("label", { for: index }, movie.name),
      createElement(
        "button",
        { id: index, onClick: handleChange },
        movie.watched ? "Watched" : "To watch"
      )
    );
    let hr = createElement("hr");
    root.append(li, hr);
  });
}
// handle change

function handleChange(e) {
  let id = e.target.id;
  all_movie[id].watched = !all_movie[id].watched;
  createUI(all_movie);
}

// create element

function createElement(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else if (key.startsWith("on")) {
      let eventType = key.replace("on", "").toLowerCase();
      element.addEventListener(eventType, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }
    if (typeof child === "string") {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

// add_movie;
function add_movie(e) {
  if (e.keyCode === 13 && !e.target.value == ``) {
    let movie_name = e.target.value;
    let obj = {
      name: movie_name,
      watched: false,
    };
    all_movie.push(obj);
    createUI(all_movie);
  }
}
input.addEventListener("keyup", add_movie);
createUI(all_movie);
