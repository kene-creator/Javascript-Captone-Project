import '../styles/style.css';
import * as model from './model.js';
import view from './view.js';
import likes from './likes.js';
import search from './search.js';
import popup from './popupView.js';

const controlRecipes = async () => {
  try {
    view.renderSpinner();

    await model.loadResult('pizza');

    view.render(model.state.search.results);
    popup.renderPopup(model.state.search.results);
    const count = (res) => `<p class="count">Recipe Count(${res.length})</p>`;
    const markupCount = [count(model.state.search.results)].join('');

    // eslint-disable-next-line no-use-before-define
    homeLink.insertAdjacentHTML('afterend', markupCount);
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
    const nav = document.querySelector('.nav');
    nav.children[1].remove();
    const count = (res) => `<p class="count">Recipe Count(${res.length})</p>`;
    const markupCount = [count(model.state.search.results)].join('');

    homeLink.insertAdjacentHTML('afterend', markupCount);
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

const homeLink = document.querySelector('.home-link');
homeLink.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/AllRecipes-Logo.svg/1200px-AllRecipes-Logo.svg.png" alt="logo picture" class="logo-img" />';
