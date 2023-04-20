<template>
   <div>
      <header class="bg-[#081b29] text-white fixed w-full py-2">
         <nav class="pl-4 h-10 pt-2 flex justify-between">
           <div>
            <img 
            class="h-7 w-7"
            src="https://www.freeiconspng.com/uploads/free-apple-icon-png-13.png" alt="profile">
           </div>
           <div>
            <nuxt-link to="/" class="pl-4  pr-4  p-1 hover:outline rounded">Home</nuxt-link>
            <nuxt-link to="/about" class="pl-4 pr-4  p-1 hover:outline rounded">About</nuxt-link>
            <nuxt-link to="/contact" class="pl-4 pr-4  p-1 hover:outline rounded" >Contact</nuxt-link>
         </div>
         <nuxt-link to="/login" class="mr-2">login</nuxt-link>
         </nav>
      </header>
      <main class="pt-[54px]">
         <nuxt/>
      </main>
   </div>
</template>
