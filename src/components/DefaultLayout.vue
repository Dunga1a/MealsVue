<template>
    <div class="bg-gradient-to-r from-orange-400 to-orange-300 h-full">
      <Navbar/>
      <main class="p-10 md:p-10 sm:p-10">
        <router-view/>
      </main>
      <Footer/>
    </div>
  </template>
  
  <script setup>
    import Navbar from '../components/Navbar.vue';
    import Footer from '../views/Footer.vue'
  </script>
  
  <style scoped>
  
  </style>