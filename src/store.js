import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [
      {
        id: 1,
        title: "My first recipe",
        description: "Que onda como vas hermano",
        ingredients: ["1/4 Cebolla", "Cilantro"],
        process: "you do this and that",
        slug: "my-first-recipe"
      }
    ]
  },
  mutations: {
    ["RECIPE_SAVE"](state, payload) {
      state.recipes.push(payload);
    }
  },
  getters: {
    getRecipeByIdSlug: state => (id, slug) => {
      return state.recipes.find(recipe => {
        return recipe.slug === slug && recipe.id.toString() === id;
      });
    }
  },
  actions: {
    ["RECIPE_SAVE"]({ commit }, payload) {
      commit("RECIPE_SAVE", payload);
    }
  }
});
