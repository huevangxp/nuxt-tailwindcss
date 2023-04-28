<template>
   <div class="w-full">
      <header class="bg-[#081b29] text-white fixed w-full py-2 z-50">
         <nav class="pl-4 h-10  flex justify-between">
           <div>
            <img 
            class="h-10 w-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSK464cCX4Zv2AZTbnaoJAgl0VKglIn08eSw&usqp=CAU" alt="profile">
           </div>
           <div class="pt-2">
            <nuxt-link to="/" class="pl-4  pr-4  p-1 hover:outline rounded">Home</nuxt-link>
            <nuxt-link to="/product" class="pl-4 pr-4  p-1 hover:outline rounded" >Duab to saib</nuxt-link>
            <nuxt-link to="/about" class="pl-4 pr-4  p-1 hover:outline rounded">About</nuxt-link>
         </div>
         <nuxt-link to="/login" class="pr-2 pt-2">login</nuxt-link>
         </nav>
      </header>
      <main class="pt-14">
         <nuxt/>
      </main>
   </div>
</template>
