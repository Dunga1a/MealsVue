<template>
    <div class="carousel-container">
      <div class="carousel">
        <slot></slot>
      </div>
      <div class="carousel-nav">
        <button @click="prevSlide">Prev</button>
        <button @click="nextSlide">Next</button>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        currentIndex: 0,
        numSlides: 0,
      };
    },
    methods: {
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.numSlides) % this.numSlides;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.numSlides;
      },
    },
    mounted() {
        this.numSlides = this.$slots.default.length;
        const carousel = this.$el.querySelector(".carousel");
        carousel.style.setProperty("--num-slides", this.numSlides);
        carousel.style.setProperty("--current-index", this.currentIndex);
    },

  };
</script>
  
<style scoped>

.carousel-container {
    position: relative;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(calc(-100% / var(--num-slides) * var(--current-index)));
}

.carousel > * {
  flex: 0 0 100%;
}

.carousel-nav {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 50%;
}

.carousel-nav button {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.carousel-nav button:hover {
  background-color: #0069d9;
}

</style>
  