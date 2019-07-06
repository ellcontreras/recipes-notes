<template lang="pug">
    div(class="w-2/3").mx-auto
        h1.text-6xl.text-center {{ recipe.title }}
        p.text-2xl.text-gray-700 {{ recipe.description }}
        hr
        p.text-2xl Ingredientes:
        ul.pl-6.text-gray-700
            li.list-disc(v-for="ingredient in recipe.ingredients")
                p {{ ingredient }}

        hr
        p.text-2xl Procedimiento:
        p.text-gray-700 {{ recipe.process }}
</template>

<script>
export default {
  name: "Recipe",
  data: () => ({
    recipe: []
  }),
  beforeMount() {
    this.recipe = this.$store.getters.getRecipeByIdSlug(
      this.$route.params.id,
      this.$route.params.slug
    );
  }
};
</script>
