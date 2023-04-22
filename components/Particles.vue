<template>
    <div class="particle-background bg-center h-[100vh] w-full bg-no-repeat bg-cover">
      <vue-particles
        color="#ffffff"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="polygon"
        :particleSize="4"
        :polygon.nb_sides="12"
        linesColor="#ffffff"
        :density.enable="true"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="1"
        :linesDistance="200"
        :moveSpeed="5"
        :hoverEffect="true"
        :hoverEnable='true'
        hoverMode="repulse"
        :clickEffect="true"
        clickMode="push"
        :hide.card="true"
      ></vue-particles>
      <div class="content">
        <div  class="back">
            <h1>
                My Title Here
            </h1>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" outlined>learn more</v-btn>
              <v-btn color="success">learn more</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet aperiam quo dignissimos iusto nobis est molestias blanditiis incidunt alias.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
      
      };
    },
  };
  </script>
  
  <style scoped>
.back{
  background-color:transparent;
  padding:10px;
  border:1px solid rgba(225,225,225,0.5);
  border-radius:20px;
  backdrop-filter: blur(1px);
  color:#fff;

}
.particle-background {

    background-image: url('/sky.jpg');
  }

  .content {
    margin-top: 10%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 1;
    color: white;
    font-family: "Arial", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    text-shadow: 2px 2px 6px #00000060;
  }
  </style>