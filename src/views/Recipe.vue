<template lang="pug">
    div(class="w-2/3").mx-auto
        p.text-right.p-2.bg-red-600.inline-block.text-white.rounded-lg.my-3.cursor-pointer.mr-1(@click="deleteRecipe" class="hover:bg-red-700") Eliminar
        p.text-right.p-2.bg-yellow-600.inline-block.text-white.rounded-lg.my-3.cursor-pointer(@click="$router.push(`/recipes/edit/${recipe.id}/${recipe.slug}`)" class="hover:bg-yellow-700") Editar
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
  },
  methods: {
    deleteRecipe() {
      this.$store.dispatch("RECIPE_DELETE", {
        id: this.$route.params.id,
        slug: this.$route.params.slug
      });

      this.$router.push("/");
    }
  }
};
</script>
