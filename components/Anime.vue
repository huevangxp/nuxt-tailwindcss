<template>
  <div >
    <section class="bg-cover bg-repeat bg-center h-[100vh] flex justify-center" :style="{ backgroundImage: 'url(/card.jpg) ' }">
      <div class="flex items-center ">
        <h1 class="p-10 border text-blue-700 border-gray-50 backdrop-blur-sm rounded-lg hover:backdrop-blur-3xl text-3xl font-bold hover:text-white">This is My Website</h1>
        <!-- <img src="/card.jpg" alt=""> -->
      </div>
    </section>
    <section class="h-[80vh] bg-gray-800 flex justify-evenly">
      <div
        data-aos-delay="3000"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img class="h-[75vh] w-[65vh]" src="/student.png" />
      </div>
      <div
        class="flex items-center"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div>
          <p class="p text-3xl text-center font-bold text-white">
            A student's Guide to Learning from Home
          </p>
          <p class=" text-center font-bold pt-10 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, est?</p>
        </div>
      </div>
    </section>
    <section class="h-[80vh] flex justify-evenly bg-gray-800">
      <div
        class="flex items-center"
        data-aos="fade-in"
        data-aos-duration="1500"
        data-aos-delay="500"
      >
        <div >
          <p class="text-3xl text-center font-bold text-white">
            A student's Guide to Learning from Home
          </p>
          <p class="font-semibold text-[#f2f2f2] pt-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            similique nostrum odit incidunt necessitatibus vitae ducimus
            assumenda animi minima quia consequuntur. Tempore iusto totam
            aperiam, deleniti qui hic rem nisi in repellendus error. Doloribus
            iusto ut
          </p>
        </div>
      </div>
      <div
      class="w-full"
        data-aos="fade-out"
        data-aos-delay="1000"
        data-aos-duration="1500"
        data-aos-anchor-placement="top"
      >
        <img
          class="h-[75vh] w-[65vh]"
          src="https://res.cloudinary.com/dsderm9xw/image/upload/v1622028117/3D%20Illustrations/3d-illustration4_usckww.png"
          alt="3d illustration of boy with a flag"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.text{
  background-color:transparent;
  border:1px solid rgb(239, 0, 0);
  border-radius:20px;
  backdrop-filter: blur(100px);
  padding: 10px;
}
#back{
  background-image: url('./static/card.jpg') no-repeat;
}
</style>