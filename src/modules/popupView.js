import icon from '../../img/icon.svg';
import comment from './comments.js';

class Popup {
  parentEle = document.querySelector('.recipe_cards');

  renderPopup(data) {
    this.parentEle.addEventListener('click', (e) => {
      const commentBtn = e.target.closest('.recipe_comment');
      const body = commentBtn.parentElement.parentElement.parentElement;

      if (!commentBtn) return;

      data.forEach((obj) => {
        if (commentBtn.id === obj.id) {
          const markup = this.generateMarkUp(obj);
          body.insertAdjacentHTML('beforebegin', markup);
        }
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  renderCloseBtn() {
    const body = document.querySelector('body');
    body.addEventListener('click', (e) => {
      const closeBtn = e.target.closest('.close_icon');

      if (closeBtn) {
        closeBtn.parentElement.remove();
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  renderComment() {
    const body = document.querySelector('body');
    body.addEventListener('click', (e) => {
      const form = e.target.closest('.comment_form');
      const parent = form.parentElement.parentElement;
      const text = form.children[1];
      const textTwo = form.children[2];
      const date = new Date();

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        parent.children[1].innerHTML = 'Thank you for your Comment';
        parent.children[2].innerHTML += `
        <p class="comments_dates">
        (${date.toLocaleDateString()}) <span class="comment_text">${
  text.value
}: ${textTwo.value}</span>
        </p>`;
        form.reset();
        comment.addComment(e);
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  generateMarkUp(data) {
    return `<div class="popup">
    <svg class="close_icon">
    <use href="${icon}#icon-cross" class="heart-o"></use>
  </svg>
    <div class="popup_center">
      <img src="${data.img}" alt="recipe picture" />
      <p class="popup_name">${data.title}</p>
      <div class="popup_publisher">
        <p class="publisher_name">Publisher: <span>${data.publisher}</span></p>
        <p class="publisher_rank">Rank: <span>${Math.floor(
    data.socialRank,
  )}</span></p>
      </div>
    </div>
    <div class="popup_center">
    <p class="popup_name">Comments</p>
    <p class="comments_dates">
        No Comments
        </p>;
        <p class="comments_dates">
        </p>;
        <p class="comments_dates">
      <div class="comments">
        <form action="" class="comment_form">
          <p class="popup_name">Add a Comment</p>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            class="comment_input"
            required
          />
          <textarea
          name="comment"
            placeholder="Enter your Insights"
            class="comment_input"
          ></textarea>

          <button type="submit" class="search__btn comment_btn">Comment</button>
        </form>
      </div>
    </div>
  </div>`;
  }
}

export default new Popup();
