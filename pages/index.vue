<template>
  <div id="main" class="container is-fluid">
    <h1 class="title is-1 has-text-centered">
      foodAdvisor
    </h1>
    <h2 class="subtitle has-text-centered">
      Restaurant recomendations
    </h2>
    <banner id="banner" :buttonText="showButtonText" @onShowClick="showForm = !showForm">
      <search-form
        slot="header"
        v-if="showForm"
        placeholder="johndoe@nowhere.nop"
        buttonText="Subscribe"
        :showLoading="showLoading"
        @onActionClick="postSubscribeRequest"/>

      <div slot="header" v-else>
        <h2 class="title is-2">Subscribe to our news!</h2>
      </div>
    </banner>
    <div class="columns">
      <div v-for="restaurant in restaurants" :key="restaurant.id" class="column is-one-quarter-widescreen is-one-third-tablet" >
        <restaurant-card
          :title="restaurant.name"
          :category="restaurant.category"
          :info-url="restaurant.slug"
          :image-src="restaurant.imageUrl">
          {{ restaurant.description }}
        </restaurant-card>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button is-primary is-outlined"
        >
          Documentation
        </a>
      </div>
      <div class="column is-narrow">
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button is-outlined"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import RestaurantCard from '@/components/RestaurantCard'
import Banner from '@/components/Banner'
import SearchForm from '@/components/SearchForm'
import restaurantApi from '@/services/api'
import { db } from '@/plugins/firebase'

export default {
  components: {
    RestaurantCard,
    Banner,
    SearchForm
  },
  data() {
    return {
      showForm: false,
      showLoading: false,
      restaurants: []
    }
  },
  computed: {
    showButtonText() {
      return this.showForm ? 'Hide subscribe' : 'Show subscribe'
    }
  },
  methods: {
    postSubscribeRequest(email) {
      this.showLoading = true
      restaurantApi.postSubscribe(email)
        .then((result) => {
          if (result.status === 201) {
            this.showLoading = false
          }
        })
        .catch((error) => {
          console.log(`Error while subscribing. Error code ${error.response.code}`)
          this.showLoading = false
        })
    }
  },
  mounted() {
    this.restaurants = []

    db.collection('restaurants').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.restaurants.push({
            id: doc.id,
            ...doc.data()
          })
        })
      })
  }
}
</script>

<style>
#main {
  margin-top: 1em;
}
</style>
