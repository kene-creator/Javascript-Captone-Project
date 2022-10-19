import icon from "../../img/icon.svg";
import "../styles/style.css";

class View {
  _parentEle = document.querySelector(".recipe_cards");
  _data;
  _errorMessage = "Check your internet connection and try again";

  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
    <div>
      <svg>
        <use href="${icon}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
    this._clear();
    this._parentEle.insertAdjacentHTML("afterbegin", markup);
  }

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
          <p class="likes_num"><span>0</span> like</p>
            </div>
          </div>
          <div class="links">
            <a href="${data.sourceURL}" class="recipe_link"
              >Directions
              <svg class="recipe_direction">
                <use href="${icon}#icon-arrow-right"></use>
              </svg>
            </a>
            <a href="index.html" class="recipe_link"
              >Comments
              <svg class="recipe_direction">
                <use href="${icon}#icon-user"></use>
              </svg>
            </a>
          </div>
        </div>
      </li>`;
  }

  _clear() {
    this._parentEle.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
            <svg>
              <use href="${icon}#icon-loader"></use>
            </svg>
          </div>`;

    this._parentEle.innerHTML = "";
    this._parentEle.insertAdjacentHTML("afterbegin", markup);
  }

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._data.map(this._generateMarkUp).join("");
    this._clear();
    this._parentEle.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerRender(publisher) {
    ["load"].forEach((ev) =>
      window.addEventListener(ev, function () {
        publisher();
      })
    );
  }
}
export default new View();
