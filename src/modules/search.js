import icon from '../../img/icon.svg';

class Search {
  _parentElement = document.querySelector('.search');

  _errorMessage = 'Opps! Search not found!';

  getQuery() {
    // eslint-disable-next-line no-underscore-dangle
    const query = this._parentElement.querySelector('.search__field').value;
    this.clearInputField();
    // eslint-disable-next-line no-underscore-dangle
    this._parentElement.querySelector('.search__field').blur();
    return query;
  }

  clearInputField() {
    // eslint-disable-next-line no-underscore-dangle
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandler(publisher) {
    // eslint-disable-next-line no-underscore-dangle
    this._parentElement.addEventListener('submit', (e) => {
      e.preventDefault();
      publisher();
    });
  }

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
    document
      .querySelector('.recipe_cards')
      .insertAdjacentHTML('afterbegin', markup);
  }

  // eslint-disable-next-line no-underscore-dangle, class-methods-use-this
  _clear() {
    document.querySelector('.recipe_cards').innerHTML = '';
  }
}
export default new Search();
