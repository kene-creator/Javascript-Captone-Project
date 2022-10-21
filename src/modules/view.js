import icon from '../../img/icon.svg';
import '../styles/style.css';

class View {
  parentEle = document.querySelector('.recipe_cards');

  data;

  errorMessage = 'Check your internet connection and try again!';

  renderError(message = this.errorMessage) {
    const markup = `<div class="error">
    <div>
      <svg>
        <use href="${icon}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;

    this.clear();

    this.parentEle.insertAdjacentHTML('afterbegin', markup);
  }

  // eslint-disable-next-line class-methods-use-this
  generateMarkUp(data, i) {
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
  clear() {
    this.parentEle.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
            <svg>
              <use href="${icon}#icon-loader"></use>
            </svg>
          </div>`;

    this.parentEle.innerHTML = '';
    this.parentEle.insertAdjacentHTML('afterbegin', markup);
  }

  // eslint-disable-next-line consistent-return
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

    this.data = data;
    const markup = this.data.map(this.generateMarkUp).join('');
    this.clear();
    return this.parentEle.insertAdjacentHTML('afterbegin', markup);
  }

  // eslint-disable-next-line class-methods-use-this
  addHandlerRender(publisher) {
    ['load'].forEach((ev) => window.addEventListener(ev, () => {
      publisher();
    }));
  }
}
export default new View();
