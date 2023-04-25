<template>
  <div>
    <div
      class="bg-gray-700 h-[80vh] w-full text-white shadow-black shadow-inner"
    >
      <section class="pt-6 pl-40">
        <header class="flex">
          <h1 class="text-4xl">
            <span class="font-semibold italic">Hue</span> Labs
          </h1>
          <div class="pl-10 text-lg mt-4 hidden md:block">
            <nuxt-link
              to="#"
              class="mr-6 pb-4 hover:border-b-2 hover:border-white"
              >About</nuxt-link
            >
            <nuxt-link
              to="#"
              class="mr-6 pb-4 hover:border-b-2 hover:border-white"
              >Explore</nuxt-link
            >
            <nuxt-link
              to="#"
              class="mr-6 pb-4 hover:border-b-2 hover:border-white"
              >Learn</nuxt-link
            >
            <nuxt-link
              to="#"
              class="mr-6 pb-4 hover:border-b-2 hover:border-white"
              >Contact</nuxt-link
            >
          </div>
        </header>
        <div class="flex items-center mt-20">
          <h1 class="text-4xl font-bold">Create, test, innovate, repeat.</h1>
        </div>
        <div class="flex items-center mt-10 w-[50%]">
          <p class="text-lg hidden md:block">
            The future is here. This is the space for our latest creations,
            innovations, and cutting-edge technologies for the greater good.
          </p>
        </div>
        <div class="flex items-center mt-10 w-[50%]">
          <button
            class="bg-white py-2 px-10 text-black hover:border-l-4 hover:border-t-4 hover:border-l-blue-600 hover:border-t-blue-600 hover:border-b-4 hover:border-r-4 font-semibold hover:border-pink-500"
          >
            Explore
          </button>
          <a
            href="#"
            class="ml-10 font-bold hover:border-b-2 hover:border-white"
            >Tour our Projects</a
          >
        </div>
      </section>
    </div>
    <section class="p-20 md:flex">
      <div class="flex-1">
        <img
          class="w-[385px] h-[385px] hover:border-red-600 hover:border-r-8 hover:border-b-8"
          src="https://images.ctfassets.net/s8m4aa37zxb2/9S7WxhSvYs6yI0SumoWOY/6ceae0bfb13795887962e077163c5775/Bitmap17_2x.png"
          alt="iakge"
        />
      </div>
      <div class="flex-1">
        <h1
          class="text-[48px] font-bold hover:border-b-4 w-96 hover:border-black"
        >
          Firefox Reality
        </h1>
        <p class="mt-5">
          Will VR turn the internet upside down? Take Firefox Reality for a spin
          on a virtual reality headst and find out. Meet a T-Rex or make robots
          dance the Cha-Cha on the only internet browser made for VR.
        </p>
        <button
          class="mt-5 border-2 border-black py-2 px-6 hover:border-black hover:border-r-4 hover:border-b-4"
        >
          learn more
        </button>
      </div>
    </section>
    <section class="p-20 md:flex">
     
      <div class="flex-1">
        <h1
          class="text-[48px] font-bold hover:border-b-4 w-96 hover:border-black"
        >
        Common Voice
        </h1>
        <p class="mt-5">
            Experiment with your vocals and make every voice heard. Common Voice is a community project that will help virtual assistants understand people from diverse backgrounds and put expensive voice data at the fingertips of independent creators.


        </p>
        <button
          class="mt-5 border-2 border-black py-2 px-6 hover:border-black hover:border-r-4 hover:border-b-4"
        >
          learn more
        </button>
      </div>
      <div class="flex-1">
        <img
          class="w-[385px] h-[385px] hover:border-red-600 hover:border-r-8 hover:border-b-8"
          src="https://images.ctfassets.net/s8m4aa37zxb2/3AWnRF8wQoU0ckG4GEmIeQ/f17d9ae28802bc12c2243f1f95e6bc0c/Bitmap1_2x.png"
          alt="iakge"
        />
      </div>
    </section>
    <section class="p-20 md:flex">
      <div class="flex-1">
        <img
          class="w-[385px] h-[385px] hover:border-red-600 hover:border-r-8 hover:border-b-8"
          src="https://images.ctfassets.net/s8m4aa37zxb2/45IcqojIo0i2WSM2CoW2E/cd17bc3ec0509bf8935fe4dedc124de9/Bitmap2_2x.png"
          alt="iakge"
        />
      </div>
      <div class="flex-1">
        <h1
          class="text-[48px] font-bold hover:border-b-4 w-96 hover:border-black"
        >
        Hubs by Mozilla
        </h1>
        <p class="mt-5">
            Get together with your nearest or farthest friends on Hubs. Hubs is a coffee shop, a conference room or whatever you want it to be. Build your own virtual space or see why a VR space makes meetings feel more personal.
        </p>
        <button
          class="mt-5 border-2 border-black py-2 px-6 hover:border-black hover:border-r-4 hover:border-b-4"
        >
          learn more
        </button>
      </div>
    </section>
    <section class="h-[100%] w-screen text-white bg-gray-900 p-[100px]">
        <h1 class="text-[56px] font-bold">Mozilla Labs in the News</h1>
        <p class="py-10">See what others are saying about our latest projects and innovations.</p>
        <div class="md:flex md:justify-between">
            <div class="hover:border-2 hover:border-white md:w-[245px] md:h-[420px] hover:rounded">
                <img
                class="h-[163px] w-[244px] p-1"
                 src="https://images.ctfassets.net/s8m4aa37zxb2/6QmA0E9IpqwyQyOk4kMwqY/a2c4931a864aaafa76c8d595221e23f0/Bitmap7_2x.png" alt="">
                 <h1 class="px-1 hover:text-yellow-400">Mozilla Releases Firefox Reality VR Browser for Oculus Go, Daydream Headsets</h1>
                 <p class="px-1 py-1 text-center">sit amet consectetur adipisicing elit. Earum, odio reiciendis quod voluptas architecto, provident saepe expedita quis ducimus perferendis magnam mollitia enim suscipit necessitatibus officiis in est ut nisi?</p>
            </div>
            <div class="hover:border-2 hover:border-white md:w-[245px] md:h-[420px] hover:rounded">
                <img
                class="h-[163px] w-[244px] p-1"
                 src="https://images.ctfassets.net/s8m4aa37zxb2/1o7iNWqmUoygkSUGC02eGA/d13921ac31a71abd578a509be458ed3a/Bitmap8_2x.png" alt="">
                 <h1 class="px-1 hover:text-yellow-400">Mozilla Releases Firefox Reality VR Browser for Oculus Go, Daydream Headsets</h1>
                 <p class="px-1 py-1 text-center">sit amet consectetur adipisicing elit. Earum, odio reiciendis quod voluptas architecto, provident saepe expedita quis ducimus perferendis magnam mollitia enim suscipit necessitatibus officiis in est ut nisi?</p>
            </div>
            <div class="hover:border-2 hover:border-white md:w-[245px] md:h-[420px] hover:rounded">
                <img
                class="h-[163px] w-[244px] p-1"
                 src="https://images.ctfassets.net/s8m4aa37zxb2/2k6BTkMgSswEoOSiQKS48o/d6aaf69c3f4c8b70b3e3c3df440b6c09/VIVE.jpg" alt="">
                 <h1 class="px-1 hover:text-yellow-400">Mozilla Releases Firefox Reality VR Browser for Oculus Go, Daydream Headsets</h1>
                 <p class="px-1 py-1 text-center">sit amet consectetur adipisicing elit. Earum, odio reiciendis quod voluptas architecto, provident saepe expedita quis ducimus perferendis magnam mollitia enim suscipit necessitatibus officiis in est ut nisi?</p>
            </div>
        </div>
    </section>
    <section class="px-[15px] py-[70px] md:flex md:justify-evenly">
        <img 
        class="w-[465px] h-[412px]"
        src="https://images.ctfassets.net/s8m4aa37zxb2/1AVcSoraPugyYCmwAEQsWW/364264f8b37d29aabc91766263d52227/Sign_Up_2x.png" alt="">
        <div class="mt-10">
            <h1 class="text-[24px] font-bold">Get it first.</h1>
            <p class="my-6 w-[342px]">Stay ahead of the curve and sign up for the latest news and updates from Mozilla Labs.</p>
            <p class="text-lg font-bold">Email Address</p>
            <input class="border-2 py-2 w-[342px] px-1 shadow-lg" type="text" placeholder="you@gmail.com"/>
            <div class="flex mt-4">
                <input type="checkbox" label="label" value="value"/>
                <p class=" px-2 w-[342px]">I'm okay with Mozilla handling my info as explained in this <span class="border-b-2 border-black">Privacy Policy</span></p>
            </div>
            <button class=" mt-2 py-2 px-14 font-bold border-black border-2">Sign Up</button>
        </div>
    </section>
  </div>
</template>
