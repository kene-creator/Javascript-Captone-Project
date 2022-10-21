import '../styles/style.css';
import * as model from './model.js';
import view from './view.js';
import likes from './likes.js';
import search from './search.js';
import popup from './popupView.js';
import comment from './comments.js';
import { COMMENT_API_URL } from './config';

const controlRecipes = async () => {
  try {
    view.renderSpinner();

    await model.loadResult('pizza');

    view.render(model.state.search.results);
    popup.renderPopup(model.state.search.results);
  } catch (err) {
    view.renderError();
  }
};

const controlSearch = async function () {
  try {
    view.renderSpinner();

    const query = search.getQuery();

    if (!query) return;

    await model.loadResult(query);

    view.render(model.state.search.results);
    popup.renderPopup(model.state.search.results);
  } catch (error) {
    search.renderError();
  }
};

const init = () => {
  view.addHandlerRender(controlRecipes);
  search.addHandler(controlSearch);
};
init();
likes.renderLikes();
popup.renderCloseBtn();
popup.renderComment();

window.addEventListener('load', comment.refreshComment(COMMENT_API_URL));
document.querySelector('.home-link').innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/AllRecipes-Logo.svg/1200px-AllRecipes-Logo.svg.png" alt="logo picture" class="logo-img" />';
