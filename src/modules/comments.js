import { COMMENT_API_URL } from './config.js';

class Comment {
  addComment = async (e) => {
    const date = new Date();
    const response = await fetch(COMMENT_API_URL, {
      method: 'POST',
      body: JSON.stringify({
        name: 'Captone Project',
        date: `${date.toLocaleDateString()}`,
        user: `${e.target.name.value}`,
        comment: `${e.target.comment.value}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response;
  };
}
export default Comment;
