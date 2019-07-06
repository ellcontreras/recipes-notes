<template lang="pug">
    div(class="w-1/3").mx-auto.p-6
        h1.text-6xl.text-gray-700.text-center Edit Recipe
        input.bg-gray-200.p-1.rounded-lg.w-full.my-1(placeholder="Title" v-model="recipe.title")
        input.bg-gray-200.p-1.rounded-lg.w-full.my-1(placeholder="Description" v-model="recipe.description")
        p.mt-1 Ingredients:
            input.bg-gray-200.p-1.rounded-lg.w-full.my-1(placeholder="Ingredient" v-for="(ingredient, key) in recipe.ingredients" v-model="recipe.ingredients[key]")
            button.rounded-lg.bg-gray-500.p-1.text-white.mt-2(class="hover:bg-blue-400" @click="ingredients.push('')") Add new ingredient
        
        textarea.bg-gray-200.p-1.rounded-lg.w-full.mt-3.resize-none(placeholder="Process" v-model="recipe.process")
        button.rounded-lg.bg-blue-500.p-1.text-white.mt-2(class="hover:bg-blue-600" @click="saveRecipe") Save
</template>

<script>
export default {
  name: "RecipeEdit",
  data: () => ({
    recipe: []
  }),
  beforeMount() {
    this.recipe = this.$store.getters.getRecipeByIdSlug(
      this.$route.params.id,
      this.$route.params.slug
    );
  },
  methods: {
    saveRecipe() {
      let recipe = {
        id: this.recipe.id,
        title: this.recipe.title,
        description: this.recipe.description,
        ingredients: this.recipe.ingredients,
        process: this.recipe.process,
        slug: this.recipe.title.split(" ").join("-")
      };

      this.$store.dispatch("RECIPE_EDIT", recipe);

      this.$router.push(`/recipes/${recipe.id}/${recipe.slug}`);
    }
  }
};
</script>

