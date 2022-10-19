import icon from "../../img/icon.svg";

class Popup {
  _parentEle = document.querySelector(".recipe_cards");

  renderPopup(data) {
    this._parentEle.addEventListener("click", (e) => {
      const commentBtn = e.target.closest(".recipe_comment");
      const body = commentBtn.parentElement.parentElement.parentElement;
      console.log(commentBtn.parentElement.parentElement.parentElement);

      if (!commentBtn) return;

      data.forEach((obj) => {
        if (commentBtn.id === obj.id) {
          const markup = this._generateMarkUp(obj);
          body.insertAdjacentHTML("beforebegin", markup);
        }
      });
    });
  }

  renderCloseBtn() {
    const body = document.querySelector("body");
    body.addEventListener("click", (e) => {
      const closeBtn = e.target.closest(".close_icon");

      if (closeBtn) {
        closeBtn.parentElement.remove();
      }
    });
  }

  _generateMarkUp(data) {
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
          data.socialRank
        )}</span></p>
      </div>
    </div>
    <div class="popup_center">
      <p class="popup_name">Comment<span>(0)</span></p>
      <div class="comments">
        <p class="comments_dates">
          12/02/2022: <span class="comment_text">I love this recipe</span>
        </p>
        <form action="" class="comment_form">
          <p class="popup_name">Add a Comment</p>
          <input
            type="text"
            placeholder="Enter your Name"
            class="comment_input"
          />
          <textarea
            placeholder="Enter your Insights"
            class="comment_input"
          ></textarea>

          <button type="submit" class="search__btn">Comment</button>
        </form>
      </div>
    </div>
  </div>`;
  }
}

export default new Popup();
