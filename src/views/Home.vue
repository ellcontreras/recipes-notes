<template lang="pug">
  div
    h1.text-6xl.text-center.text-gray-700 All recipes
    .bg-gray-200.text-center.p-4.mx-auto.my-6.rounded-lg(v-for="recipe in $store.getters.recipes" class="w-1/3")
      h2.text-2xl {{ recipe.title }}
      p {{ recipe.description }}
      p
        span.font-bold Numero de ingredientes: 
        span {{ recipe.ingredients.length }}

      router-link(:to="`/recipes/${recipe.id}/${recipe.slug}`")
        button.bg-blue-500.p-2.m-2.rounded-lg.text-white(class="hover:bg-blue-700")
          span Go to recipe
</template>
