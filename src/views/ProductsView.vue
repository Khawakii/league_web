<template>
  <div class="container mt-5 pt-5 p-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="font">Our Products</h1>
    </div>

    <ProductsComponent
      :products="products"
      @add-to-cart="handleAddToCart"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductsComponent from '@/components/ProductsComponent.vue'
import { useCartStore } from '@/stores/cartStore'

import urf from '@/assets/img/urf.webp'
import cicmic from '@/assets/img/cicmic.webp'
import pengu from '@/assets/img/pengu.webp'

export default defineComponent({
  name: 'ProductsView',

  components: {
    ProductsComponent,
  },

  data() {
    return {
      products: [
       {
          id: 1,
          name: 'Urf plushie',
          description: 'Urf is the best plushie ever made.',
          price: 59.99,
          image: urf,
        },
        {
          id: 2,
          name: 'Cicmic plushie',
          description: 'Cicmic is the best plushie ever made.',
          price: 48.99,
          image: cicmic,
        },
        {
          id: 3,
          name: 'Pengu plushie',
          description: 'Pengu hat. The cutest hat.',
          price: 63.99,
          image: pengu,
        },
        {
          id: 4,
          name: 'Urf plushie XL',
          description: 'Extra large Urf plushie.',
          price: 79.99,
          image: urf,
        },
        {
          id: 5,
          name: 'Cicmic plushie Mini',
          description: 'Small Cicmic plushie for desk.',
          price: 39.99,
          image: cicmic,
        },
        {
          id: 6,
          name: 'Pengu plushie Deluxe',
          description: 'Deluxe edition Pengu plushie.',
          price: 89.99,
          image: pengu,
        },
      ],
    }
  },

  computed: {
    cartStore() {
      return useCartStore()
    },
  },

  created() {
    this.cartStore.initializeCart()
  },

  methods: {
    handleAddToCart(productId: number) {
      const product = this.products.find(p => p.id === productId)
      if (product) {
        this.cartStore.addToCart(product)
      }
    },
  },
})
</script>
