<template>
  <section class="gallery text-light p-5" id="gallery">
    <div class="container-fluid">
      <div class="row align-items-center">

        <!-- LEFT SIDE: TEXT -->
        <div class="col-md-6 text-start">
          <h3 class="p-2">Maps</h3>
          <p class="px-2">
           The Maps or Fields of Justice are areas where players play champions and battle against one another in order to achieve victory.
While there are different maps for each game mode, some maps have different skin variants based on seasonal
 or story events. The most widely used map for seasonal events is Summoner's Rift, which also features touches
  from the professional play season, such as tournament assets,
the Summoner's Cup, or the one and only annual World Champion.
          </p>
        </div>

        <!-- RIGHT SIDE: CAROUSEL -->
        <div class="col-md-6">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            style="max-width: 100%;"
          >
            <div class="carousel-inner">

              <!-- SLIDE 1 -->
              <div class="carousel-item active">
                <video class="d-block w-100" autoplay loop muted playsinline>
                  <source src="@/assets/videos/lolVideo.mp4" type="video/mp4" />
                </video>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Summoner's Rift</h5>
                  <p>The main battleground where two teams fight.</p>
                </div>
              </div>

              <!-- SLIDE 2 -->
              <div class="carousel-item">
                <video class="d-block w-100" autoplay loop muted playsinline>
                  <source src="@/assets/videos/lolTFT.mp4" type="video/mp4" />
                </video>
                <div class="carousel-caption d-none d-md-block">
                  <h5>Teamfight Tactics</h5>
                  <p>A strategic autobattler game mode.</p>
                </div>
              </div>

              <!-- SLIDE 3 -->
              <div class="carousel-item">
                <video class="d-block w-100" autoplay loop muted playsinline>
                  <source src="@/assets/videos/lolAram.mp4" type="video/mp4" />
                </video>
                <div class="carousel-caption d-none d-md-block">
                  <h5>ARAM</h5>
                  <p>Fast-paced battles on a single lane map.</p>
                </div>
              </div>

            </div>

            <!-- ARROWS -->
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon"></span>
            </button>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon"></span>
            </button>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
