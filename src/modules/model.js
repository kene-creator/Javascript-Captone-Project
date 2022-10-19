import { API_URL, RES_PER_PAGE } from "./config.js";
import { getJSON } from "./helper.js";

export const state = {
  recipe: {},
  search: {
    results: [],
  },
};

export const loadResult = async function (query) {
  try {
    const data = await getJSON(`${API_URL}${query}`);

    state.search.results = data.recipes.map((rec) => {
      return {
        id: rec.recipe_id,
        title: rec.title,
        publisher: rec.publisher,
        img: rec.image_url,
        sourceURL: rec.source_url,
        socialRank: rec.social_rank,
      };
    });
  } catch (err) {
    throw err;
  }
};
