<template lang="pug">
    div(class="w-1/3").mx-auto.p-6
        h1.text-6xl.text-gray-700.text-center New Recipe
        input.bg-gray-200.p-1.rounded-lg.w-full.my-1(placeholder="Title" v-model="title")
        input.bg-gray-200.p-1.rounded-lg.w-full.my-1(placeholder="Description" v-model="description")
        p.mt-1 Ingredients:
            input.bg-gray-200.p-1.rounded-lg.w-full.my-1(placeholder="Ingredient" v-for="(ingredient, key) in ingredients" v-model="ingredients[key]")
            button.rounded-lg.bg-gray-500.p-1.text-white.mt-2(class="hover:bg-blue-400" @click="ingredients.push('')") Add new ingredient
        
        textarea.bg-gray-200.p-1.rounded-lg.w-full.mt-3.resize-none(placeholder="Process" v-model="process")
        button.rounded-lg.bg-blue-500.p-1.text-white.mt-2(class="hover:bg-blue-600" @click="saveRecipe") Save
</template>

<script>
export default {
  name: "RecipeNew",
  data: () => ({
    title: "",
    description: "",
    ingredients: [""],
    process: ""
  }),
  methods: {
    saveRecipe() {
      let recipe = {
        id:
          this.$store.state.recipes[this.$store.state.recipes.length - 1].id +
          1,
        title: this.title,
        description: this.description,
        ingredients: this.ingredients,
        process: this.process,
        slug: this.title.split(" ").join("-")
      };

      this.$store.dispatch("RECIPE_SAVE", recipe);

      this.$router.push(`/recipes/${recipe.id}/${recipe.slug}`);
    }
  }
};
</script>

