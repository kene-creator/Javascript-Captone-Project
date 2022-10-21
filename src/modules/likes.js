import icon from '../../img/icon.svg';

class Likes {
  _parentElement = document.querySelector('.recipe_cards');

  renderLikes() {
    this._parentElement.addEventListener('click', (e) => {
      const likebtn = e.target.closest('.recipe_icon');
      const likeNum = likebtn.nextElementSibling.firstElementChild;
      let i = 0;
      if (!likebtn) return;
      if (likebtn.firstElementChild.classList.contains('heart-o')) {
        likebtn.innerHTML = `<use href="${icon}#icon-heart"></use>`;
        likeNum.innerHTML = ++i;
      } else {
        likebtn.innerHTML = `<use href="${icon}#icon-heart-o" class="heart-o"></use>`;
        likeNum.innerHTML = 0;
      }
    });
  }
}
export default new Likes();
