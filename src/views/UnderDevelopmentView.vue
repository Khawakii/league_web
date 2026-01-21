<template>
  <div class="under-dev d-flex flex-column justify-content-center align-items-center text-center">
    <img
      src="@/assets/img/Teemo_Render.webp"
      alt="Under Development"
      class="under-dev__image mb-4"
    />

 <h1 class="mb-4">Page Under Development</h1>

    <p class="lead text-white fw-bold mb-4">
      Please check back later!
    </p>

    <RouterLink to="/">
      <button class="btn btn-info px-4">
        Return to Home
      </button>
    </RouterLink>
  </div>
</template>

<style scoped>
</style>
