import { COMMENT_API_URL } from "./config.js";

class Comment {
  refreshComment = async function (url) {
    try {
      const container = document.querySelector("body").closest(".comments");
      const res = await fetch(url);

      const data = await res.json();

      data.result.forEach((comment, i) => {
        container.innerHTML += ` <p class="comments_dates">
       ${comment.date}<span class="comment_text">${comment.user}${comment.comment}</span>
      </p>`;
      });

      if (!res.ok) throw new Error(`${data.message} ${res.status}`);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  addComment = async (e) => {
    const date = new Date();
    const response = await fetch(COMMENT_API_URL, {
      method: "POST",
      body: JSON.stringify({
        name: "Captone Project",
        date: `${date.toLocaleDateString()}`,
        user: `${e.target.name.value}`,
        comment: `${e.target.comment.value}`,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return response;
  };
}
export default new Comment();
