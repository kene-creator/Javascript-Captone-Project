import icon from '../../img/icon.svg';
import '../styles/style.css';

class View {
  _parentEle = document.querySelector('.recipe_cards');

  _data;

  _errorMessage = 'Check your internet connection and try again';

  // eslint-disable-next-line no-underscore-dangle
  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
    <div>
      <svg>
        <use href="${icon}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
    // eslint-disable-next-line no-underscore-dangle
    this._clear();
    // eslint-disable-next-line no-underscore-dangle
    this._parentEle.insertAdjacentHTML('afterbegin', markup);
  }

  // eslint-disable-next-line no-underscore-dangle, class-methods-use-this
  _generateMarkUp(data, i) {
    return `<li class="recipe_card">
        <div class="card_detials">
          <img src="${data.img}" alt="" class="recipe_img" />
          <div class="likes">
            <p class="recipe_name">${data.title}</p>
            <div>
            <svg data-like="${i}" class="recipe_icon">
            <use href="${icon}#icon-heart-o" class="heart-o"></use>
          </svg>
          <p class="likes_num"><span>${Math.ceil(
    Math.random() * 5,
  )}</span> like</p>
            </div>
          </div>
          <div class="links">
            <a href="${data.sourceURL}" class="recipe_link"
              >Directions
              <svg class="recipe_direction">
                <use href="${icon}#icon-arrow-right"></use>
              </svg>
            </a>
            <button href="index.html" class="recipe_link recipe_comment"
             id="${data.id}" >Comments
              <svg class="recipe_direction">
                <use href="${icon}#icon-user"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>`;
  }

  // eslint-disable-next-line no-underscore-dangle
  _clear() {
    // eslint-disable-next-line no-underscore-dangle
    this._parentEle.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
            <svg>
              <use href="${icon}#icon-loader"></use>
            </svg>
          </div>`;

    // eslint-disable-next-line no-underscore-dangle
    this._parentEle.innerHTML = '';
    // eslint-disable-next-line no-underscore-dangle
    this._parentEle.insertAdjacentHTML('afterbegin', markup);
  }

  // eslint-disable-next-line consistent-return
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

    // eslint-disable-next-line no-underscore-dangle
    this._data = data;
    // eslint-disable-next-line no-underscore-dangle
    const markup = this._data.map(this._generateMarkUp).join('');
    // eslint-disable-next-line no-underscore-dangle
    this._clear();
    // eslint-disable-next-line no-underscore-dangle
    this._parentEle.insertAdjacentHTML('afterbegin', markup);
  }

  // eslint-disable-next-line class-methods-use-this
  addHandlerRender(publisher) {
    ['load'].forEach((ev) => window.addEventListener(ev, () => {
      publisher();
    }));
  }
}
export default new View();
