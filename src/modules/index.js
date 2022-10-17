import "../styles/style.css";
import * as model from "./model.js";
import view from "./view.js";

const controlRecipes = async () => {
  try {
    view.renderSpinner();

    await model.loadResult("pizza");

    view.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = () => {
  view.addHandlerRender(controlRecipes);
};
init();
