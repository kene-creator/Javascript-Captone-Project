import icon from '../../img/icon.svg';

class Likes {
  _parentElement = document.querySelector('.recipe_cards');

  renderLikes() {
    // eslint-disable-next-line no-underscore-dangle
    this._parentElement.addEventListener('click', (e) => {
      const likebtn = e.target.closest('.recipe_icon');
      const likeNum = likebtn.nextElementSibling.firstElementChild;
      const num = parseFloat(likeNum.textContent);
      if (!likebtn) return;
      if (likebtn.firstElementChild.classList.contains('heart-o')) {
        likebtn.innerHTML = `<use href="${icon}#icon-heart"></use>`;
        likeNum.textContent = num + 1;
      } else {
        likebtn.innerHTML = `<use href="${icon}#icon-heart-o" class="heart-o"></use>`;
        likeNum.textContent = num - 1;
      }
    });
  }
}
export default new Likes();
