<template lang="pug">
  #app
    .bg-purple-500.p-4.text-white
      router-link(to="/" class="hover:text-gray-300 font-bold").m-2 Recipes
      router-link(to="/about" class="hover:text-gray-300").m-2 About
    
    router-view
</template>
