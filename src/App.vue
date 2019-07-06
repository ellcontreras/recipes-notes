<template lang="pug">
  #app
    .bg-purple-500.p-4.text-white
      router-link(to="/" class="hover:text-gray-300 font-bold").m-2 Recipes
      router-link(to="/recipes/new" class="hover:text-gray-300").m-2 New Recipe
      router-link(to="/recipes/mine" class="hover:text-gray-300").m-2 My Recipes
    
    router-view
</template>
