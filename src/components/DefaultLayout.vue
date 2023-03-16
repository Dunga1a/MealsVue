<template>
    <div class="bg-gradient-to-r from-orange-400 to-orange-300 h-full">
      <Navbar/>
      <main>
        <router-view/>
      </main>
    </div>
  </template>
  
  <script setup>
    import Navbar from '../components/Navbar.vue'
  </script>
  
  <style scoped>
  
  </style>