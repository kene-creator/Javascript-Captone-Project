import { API_URL } from './config.js';
import { getJSON } from './helper.js';
import view from './view.js';

export const state = {
  recipe: {},
  search: {
    results: [],
  },
};

export const loadResult = async (query) => {
  try {
    const data = await getJSON(`${API_URL}${query}`);

    state.search.results = data.recipes.map((rec) => ({
      id: rec.recipe_id,
      title: rec.title,
      publisher: rec.publisher,
      img: rec.image_url,
      sourceURL: rec.source_url,
      socialRank: rec.social_rank,
    }));
  } catch (err) {
    view.renderError();
    throw err;
  }
};
