<template>
   <div>
    <div class="grid grid-cols-4 gap-2 mt-1">
        <template v-for="img in images">
          <img :src="img" alt="" class="rounded-full">
        </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      images: [
        "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
        "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      ],
    };
  },

};
</script>
