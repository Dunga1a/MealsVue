<template>
    <a :href="href"
      target="_blank" 
      class="bg-red-500 hover:bg-red-600 hover:text-white transition-colors py-2 px-4 rounded"
    > 
        <slot></slot>
    </a>
</template>

<script setup>
    const props = defineProps({
        href: String
    })
</script>

<style>

</style>