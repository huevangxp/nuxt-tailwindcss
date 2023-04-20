<template>
    <div class="container">
      <div class="px-6 py-4">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2"
          >#photography</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300 mr-2"
          >#travel</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-300"
          >#winter</span
        >
      </div>
      <div class="px-2 grid grid-cols-4 gap-4">
    <template v-for="(data,idx) in 4">
      <div  class="max-w-xs rounded overflow-hidden shadow-md shadow-gray-500">
        <img class="w-full h-60 object-cover" src="/card.jpg" alt="Card" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Title</div>
          <p class="text-gray-700 text-base">
            {{ String(text).slice(0, 30) }}...
          </p>
          <div class="flex justify-between pt-4">
       <p class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-semibold">$500</p>
       <button class="bg-green-500 px-4 py-1 text-white rounded">Buy</button>
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
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore.'
      }
    },
  }
  </script>
  