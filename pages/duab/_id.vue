<template>
 <div>
    <div class="container md:flex">
    <div
      id="indicators-carousel"
      class="relative w-full md:flex-1 m-2"
      data-carousel="static"
    >
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden md:h-[85vh]">
        <div
          v-for="img in user.files"
          class="duration-700 ease-in-out"
          data-carousel-item="active"
        >
          <img
            :src="img"
            class="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
            alt="..."
          />
        </div>
      </div>
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
    <div class="md:flex-1 m-2 flex items-center">
      <div class="w-full">
        <p class="border-b-2 border-gray-300 py-4 w-full font-bold">{{ user.name === '' ?  'Tsis muaj npe' : user.name }}</p>
        <p class="border-b-2 border-gray-300 py-4 w-full text-2xl font-semibold">{{ user.msg }}</p>
        <p class="border-b-2 border-gray-300 py-4 w-full font-bold"> Neeg saib : <span class="font-bold text-red-500"> {{ user.opened }}</span> Views</p>
        <p class="border-b-2 border-gray-300 py-4 w-full font-bold">
            <template v-for="phone in user.phone">
            Xov tooj : <span class="font-bold text-1xl text-teal-500">{{ phone }}</span>
            </template>
        </p>
        <p class="border-b-2 border-gray-300 py-4 w-full">Hnub tso duab : <span class="font-semibold text-gray-400">{{ user.f_date }}</span></p>
      </div>
    </div>
  </div>
  <div class="px-2 grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
    <template v-for="(data,idx) in user.items">
      <div  class="max-w-xs rounded overflow-hidden shadow-md shadow-gray-500" @click="detail(data.id)">
        <img class="w-full h-80 object-cover" :src="data.img_url" alt="Card" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ data.msg  }}</div>
          <div class="md:flex md:justify-between pt-4">
       <p class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold"> Views {{ data.opened }}</p>
       <p>{{ data.f_date }}</p>
      </div>
    </div>
  </div>
</template>
</div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      user: [],
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  mounted() {
    this.$axios(`https://api.duabhmoobtojsiab.com/duab/${this.id}&__a=1`).then(
      (data) => {
        console.log(data.data);
        this.user = data.data;
      }
    );
    },
    methods: {
        detail(id) {

            this.$axios(`https://api.duabhmoobtojsiab.com/duab/${id}&__a=1`).then(
      (data) => {
        // console.log(data.data);
        window.scrollTo(0,0)

        this.user = data.data;
      }
    );
    }
  }
};
</script>
