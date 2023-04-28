<template>
    <div class="container">
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2"
          >#hluas Nkauj & Nraug</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2"
          >#Hluas Nkauj</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300"
          >#Hluas Nraug</span
        >
      </div>
      <div class="px-2 grid grid-cols-2 md:grid-cols-4 gap-4">
    <template v-for="(data,idx) in user">
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
<div class="my-2 text-center mt-10 mb-3">
  <nav aria-label="Page navigation example">
  <ul class="inline-flex items-center -space-x-px">
    <li>
      <a class="block px-3 py-2 ml-0 leading-tight bg-white border border-gray-800 rounded-l-lg hover:bg-gray-800 hover:text-white " @click="nextPage(id=1)">
        <span class="sr-only">Previous</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
    <li>
      <template v-for="(data, idx) in pages">
        <a class="px-3 py-2 leading-tight text-gray-800 bg-white border border-gray-800 mx-2 hover:bg-gray-800 hover:text-white cursor-pointer " @click="nextPage(data)">{{ data }}</a>
      </template>
    </li>
    <li>
      <a class="block px-3 py-2 leading-tight text-gray-800 bg-white border border-gray-800 rounded-r-lg hover:bg-gray-800 hover:text-white cursor-pointer"  @click="nextPage(id=600)">
        <span class="sr-only">Next</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
  </ul>
</nav>
</div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
          user: [],
        pages:[],
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore.'
      }
    },
    mounted() {
      this.$axios.get('https://api.duabhmoobtojsiab.com/page/1&__a=1')
          .then((data) => {
        console.log(data.data);
              this.user = data.data.items
        this.pages = data.data.pages
      })
    },
    methods: {
        nextPage(id) {
        this.$axios.post(`https://api.duabhmoobtojsiab.com/page/${id}&__a=1`)
            .then((data) => {
              window.scrollTo(0,0)
                this.user = data.data.items
                this.pages = data.data.pages
        })
      },
        detail(id) {
        // alert(id)
        this.$router.push(`/duab/${id}`)
      }
    }
  }
  </script>
  