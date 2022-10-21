import { TIME_OUT } from './config.js';
import view from './view.js';

export const timeout = (s) => new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error(`Request took too long! Timeout after ${s} second`));
  }, s * 1000);
});

export const getJSON = async (url) => {
  try {
    const res = await Promise.race([fetch(url), timeout(TIME_OUT)]);

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data;
  } catch (err) {
    view.renderError();
    throw err;
  }
};
