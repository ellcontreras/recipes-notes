import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import RecipesNew from "./views/RecipesNew.vue";
import Recipe from "./views/Recipe.vue";
import RecipesEdit from "./views/RecipesEdit.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/recipes/new",
      name: "recipes_new",
      component: RecipesNew
    },
    {
      path: "/recipes/:id/:slug",
      name: "recipe",
      component: Recipe
    },
    {
      path: "/recipes/edit/:id/:slug",
      name: "recipes_edit",
      component: RecipesEdit
    }
  ]
});
