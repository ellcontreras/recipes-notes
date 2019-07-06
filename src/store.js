import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "recipes-notes",
  storage: localStorage
});

export default new Vuex.Store({
  state: {
    recipes: [
      {
        id: 1,
        title: "My first recipe",
        description: "Hello, this is by default bro",
        ingredients: ["1/4 Cebolla", "Cilantro"],
        process: "you do this and that",
        slug: "my-first-recipe"
      }
    ]
  },
  mutations: {
    ["RECIPE_SAVE"](state, payload) {
      state.recipes.push(payload);
    },
    ["RECIPE_DELETE"](state, payload) {
      state.recipes = state.recipes.filter(recipe => {
        return (
          recipe.slug !== payload.slug && recipe.id.toString() !== payload.id
        );
      });
    }
  },
  getters: {
    getRecipeByIdSlug: state => (id, slug) => {
      return state.recipes.find(recipe => {
        return recipe.slug === slug && recipe.id.toString() === id;
      });
    },
    recipes: state => {
      return state.recipes.reverse();
    }
  },
  actions: {
    ["RECIPE_SAVE"]({ commit }, payload) {
      commit("RECIPE_SAVE", payload);
    },
    ["RECIPE_DELETE"]({ commit }, payload) {
      commit("RECIPE_DELETE", payload);
    }
  },
  plugins: [vuexPersist.plugin]
});
