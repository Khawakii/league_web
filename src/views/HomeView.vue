<script setup lang="ts">
import Top3Players from '../components/Top3Players.vue'
import GallerySection from "@/components/GallerySection.vue";
</script>

<template>
  <div>
    <section class=" text-dark p-5 text-center"  style="background-color: #E6E6E6;">
      <div class="container p-5">
        <div class="d-sm-flex align-items-center justify-content-between" >
          <div>
            <h1>Choose your champion!</h1>
            <p class="lead my-4">
             Whether you like to dive straight into the fray, support your teammates, or something in between,
              there’s a spot for you on the Rift.
            </p>
             <router-link to="/playnow">
              <button class="btn btn-info">Play now!</button>
            </router-link>

            <router-link to="/discover">
              <button class="btn btn-warning">Discover your champion!</button>
            </router-link>

          </div>
          <img
            class="img-fluid d-none d-sm-block"
            style="width: 40%"
            src="@/assets/img/Akali.png"
            alt="Join us"
          />
        </div>
      </div>
    </section>

   <section  class="rift_div py-4">
  <div class="container">
    <!-- Quote -->
    <div class="card mb-5">
      <div class="card-header text-center">
        Quote
      </div>
      <div class="card-body text-center">
        <blockquote class="blockquote mb-0">
          <p>"Pain is temporary, victory is eternal." </p>
        </blockquote>
        <figcaption class="blockquote-footer mt-2">
          Probably some <cite title="Source Title">LOL Addict</cite>
        </figcaption>
      </div>
    </div>
    <!-- Quote end-->

    <!-- Top Players -->
  <div class="text-center my-5">
  <h2 class="mb-4">Top 3 League of Legends Players</h2>
  <Top3Players />
</div>
  </div>
  </section>


<!-- Gallery-->
<GallerySection />
<!-- Gallery end-->




  </div>
</template>
