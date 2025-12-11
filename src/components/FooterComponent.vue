<template>
  <footer
    class="p-5 bg-black text-white text-center position-relative"
    style="font-family: 'sans-serif'"
  >
    <div class="container-fluid">
      <div class="row align-items-center justify-content-between">
        <div class="col-md p-4">
          <p class="lead">
             Don't try it kids, it's addictive<br />
            Just play Minecraft or smt <i class="bi bi-bootstrap"></i>
          </p>
        </div>

        <div class="col-md">
          <p class="lead">™ & © 2025 Riot Games, Inc.  League of Legends and all related logos, characters,
            names and distinctive likenesses thereof are exclusive property of Riot Games, Inc.  All Rights Reserved.</p>
        </div>

        <div class="col-md">
          <p class="lead">
            "I hate this game"<br />
             "GG RIOT!"<br />
            -Every player ever
          </p>
        </div>

        <div class="col-12">
          <a href="#" class="position-absolute bottom-0 end-0 px-5">
            <i class="bi bi-arrow-up-circle h1 text-white"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent',
})
</script>
