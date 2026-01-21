<template>
  <nav
    class="navbar navbar-expand-lg bg-dark fixed-top navbar-dark py-1 px-5"
    style="font-family: 'Segoe UI', Tahoma, Verdana, sans-serif"
  >
    <div class="container-fluid">
      <!-- LOGO -->
      <router-link to="/" class="navbar-brand">
        <img
          src="@/assets/img/lolLogo.png"
          alt="League of Legends Logo"
          style="width: 130px"
        />
      </router-link>

      <!-- TOGGLER -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- NAV CONTENT -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- LEFT MENU PART-->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            v-for="(link, name) in menuItems"
            :key="name"
            class="nav-item"
          >
            <router-link
              :to="link"
              class="nav-link"
              active-class="active"
            >
              {{ name }}
            </router-link>
          </li>
        </ul>

        <!-- CART BUTTON -->
        <CartButton />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CartButton from '@/components/CartButton.vue'

export default defineComponent({
  name: 'NavbarComponent',
  components: {
    CartButton,
  },
  data() {
    return {
      menuItems: {
        Home: '/',
        Summoners: '/summoners',
        Products: '/products',
        FAQ: '/faq',
      },
    }
  },
})
</script>

