import icon from "../../img/icon.svg";
import "../styles/style.css";

class View {
  _parentEle = document.querySelector(".recipe_cards");
  _data;

  _generateMarkUp(data) {
    return `<li class="recipe_card">
        <div class="card_detials">
          <img src="${data.img}" alt="" class="recipe_img" />
          <div class="likes">
            <p class="recipe_name">${data.title}</p>
            <svg class="recipe_icon">
              <use href="${icon}#icon-heart-o"></use>
            </svg>
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
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderError();

    this._data = data;
    const markup = this._data.map(this._generateMarkUp).join("");
    console.log(markup);
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
