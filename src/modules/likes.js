import icon from "../../img/icon.svg";

class Likes {
  _parentElement = document.querySelector(".recipe_cards");

  renderLikes() {
    this._parentElement.addEventListener("click", function (e) {
      const likebtn = e.target.closest(".recipe_icon");
      const likeNum = likebtn.nextElementSibling.firstElementChild;
      const num = parseFloat(likeNum.textContent);
      let i = 0;
      if (!likebtn) return;
      if (likebtn.firstElementChild.classList.contains("heart-o")) {
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
