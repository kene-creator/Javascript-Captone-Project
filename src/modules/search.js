import icon from '../../img/icon.svg';

class Search {
  parentEle = document.querySelector('.search');

  errorMessage = 'Opps! Search not found!';

  getQuery() {
    const query = this.parentEle.querySelector('.search__field').value;
    this.clearInputField();
    this.parentEle.querySelector('.search__field').blur();
    return query;
  }

  clearInputField() {
    this.parentEle.querySelector('.search__field').value = '';
  }

  addHandler(publisher) {
    this.parentEle.addEventListener('submit', (e) => {
      e.preventDefault();
      publisher();
    });
  }

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
    document
      .querySelector('.recipe_cards')
      .insertAdjacentHTML('afterbegin', markup);
  }

  clear() {
    document.querySelector('.recipe_cards').innerHTML = '';
  }
}
export default new Search();
