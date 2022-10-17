import "../styles/style.css";
import * as model from "./model.js";
import view from "./view.js";

const controlRecipes = async () => {
  try {
    view.renderSpinner();

    await model.loadResult("pizza");

    view.render(model.state.search.results);
  } catch (err) {
    view.renderError();
  }
};

const init = () => {
  view.addHandlerRender(controlRecipes);
};
init();
