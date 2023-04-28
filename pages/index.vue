<template>
  <div class="container">
    <div
      class="bg-gray-800 w-screen h-[80vh] text-white flex items-center justify-evenly px-10"
    >
      <div>
        <h1 class="text-2xl font-bold">
          Zoo siab txhiab to koj tuaj saib teb duab toj siab
        </h1>
        <p class="p-4 w-[80vh]">
          No yog peb hmoob cov tub txhiav hmoob zoo nkauj thiab zoo nraug ...
        </p>
        <p class="p-4 w-[90vh] text-center">
          aliquam ratione nam architecto vitae? Et modi quidem consequatur porro
          sapiente sequi laborum, inventore, est mollitia quibusdam error facere
          saepe fuga tenetur eius! Hic doloribus totam aut inventore a. Atque,
          voluptatibus dolores? In sequi commodi odit aliquam ad quasi quae?
          Amet similique repellendus mollitia quos recusandae libero iure error
          est?
        </p>
      </div>
      <img src="/girl.png" alt="" class="h-[70vh] w-[50vh] shadow-2xl" />
    </div>
    <h1 class="uppercase py-10 mx-10 font-bold text-2xl">los koom kev lom zem nrog peb</h1>
    <div class="px-2 grid grid-cols-2 md:grid-cols-4 gap-4 m-2">
      <template v-for="(data, idx) in user">
        <div
          class="max-w-xs rounded overflow-hidden shadow-sm shadow-gray-300 hover:shadow-2xl hover:shadow-gray-500"
          @click="detail(data.id)"
        >
          <img
            class="w-full h-80 object-cover"
            :src="data.img_url"
            alt="Card"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ data.msg }}</div>
            <div class="md:flex md:justify-between pt-4">
              <p
                class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold"
              >
                Views {{ data.opened }}
              </p>
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
      pages: [],
      id: Math.floor(Math.random() * 700),
    };
  },
  mounted() {
    // console.log(this.id);
    this.$axios
      .get(`https://api.duabhmoobtojsiab.com/page/${this.id}&__a=1`)
      .then((data) => {
        console.log(data.data);
        this.user = data.data.items;
        this.pages = data.data.pages;
      });
  },
  methods: {
    detail(id) {
      this.$router.push(`/duab/${id}`);
    },
  },
};
</script>
