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

function createUI(movie_name, root) {
  input.value = ``;
  let ui = all_movie.map((movie, index) => {
    return React.createElement(
      `li`,
      null,
      React.createElement("label", { for: index }, movie.name),
      React.createElement(
        "button",
        { id: index, onClick: handleChange },
        movie.watched ? "Watched" : "To watch"
      ),
      React.createElement("hr", null)
    );
  });
  ReactDOM.render(ui, root);
}
// handle change

function handleChange(e) {
  let id = e.target.id;
  all_movie[id].watched = !all_movie[id].watched;
  createUI(all_movie, root);
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
    createUI(all_movie, root);
  }
}
input.addEventListener("keyup", add_movie);
createUI(all_movie, root);
