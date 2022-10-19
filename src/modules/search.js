import icon from "../../img/icon.svg";

class Search {
  _parentElement = document.querySelector(".search");
  _errorMessage = "Opps! Search is not found!";

  getQuery() {
    const query = this._parentElement.querySelector(".search__field").value;
    this.clearInputField();
    this._parentElement.querySelector(".search__field").blur();
    return query;
  }

  clearInputField() {
    this._parentElement.querySelector(".search__field").value = "";
  }

  addHandler(publisher) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      publisher();
    });
  }

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
    document
      .querySelector(".recipe_cards")
      .insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    document.querySelector(".recipe_cards").innerHTML = "";
  }
}
export default new Search();
