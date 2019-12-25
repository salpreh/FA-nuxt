<template>
  <div id="main" class="container is-fluid">
    <h1 class="title is-one">New Restaurant</h1>
    <div class="box" id="form">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input v-model="restaurant.name" class="input" type="text" placeholder="My awesome restaurant">
        </div>
      </div>
      <div class="field">
        <label class="label">Slug</label>
        <div class="control">
          <input v-model="restaurant.slug" class="input" type="text" placeholder="my-awesome-restaurant" disabled>
        </div>
      </div>
      <div class="field">
        <label class="label">Image</label>
        <div class="control">
          <input v-model="restaurant.imageUrl" class="input" type="text" placeholder="https://...">
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input v-model="restaurant.description" class="input" type="text" placeholder="My restaurant is...">
        </div>
      </div>
      <div class="field">
        <label class="label">Address</label>
        <div class="control">
          <input v-model="restaurant.address" class="input" type="text" placeholder="C/ Nowere, 12">
        </div>
      </div>
      <div class="field">
        <label class="label">Cities</label>
        <div class="select">
          <select v-model="restaurant.city">
            <option :selected="restaurant.city === '-'">-</option>
            <option v-for="city in cities" :key="city" :selected="restaurant.city === city">{{ city }}</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">Categories</label>
        <div class="select">
          <select v-model="restaurant.category">
            <option :selected="restaurant.category === '-'">-</option>
            <option v-for="category in categories" :key="category" :selected="restaurant.category === category">{{ category }}</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label class="label">About</label>
        <textarea v-model="restaurant.text" class="textarea" placeholder="In my restaurant..."></textarea>
      </div>
      <div id="buttons" class="has-text-centered">
        <button @click="onSaveClick" class="button is-primary">Save</button>
        <button @click="onCancelClick" class="button is-danger">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/plugins/firebase'
export default {
  data() {
    return {
      restaurant: {
        name: '',
        slug: '',
        imageUrl: '',
        description: '',
        address: '',
        city: '-',
        category: '-',
        text: ''
      },
      cities: [],
      categories: []
    }
  },
  created() {
    this.cities = [
      'Barcelona',
      'Madrid',
      'Valencia'
    ]
    this.categories = [
      'burger',
      'brunch',
      'italian',
      'coffe shop',
      'launch',
      'beers'
    ]
  },
  watch: {
    slug() {
      this.restaurant.slug = this.slug
    }
  },
  computed: {
    slug() {
      return this.restaurant.name
        .toLowerCase()
        .replace(/[\s_-]/g, '-')
    }
  },
  methods: {
    onSaveClick() {
      db.collection('restaurants').add(this.restaurant)
        .then((response) => {
          console.log('Saved')
          console.log(response)
          // this.cleanForm()
        })
        .catch((error) => {
          console.log('Error on saving')
          console.log(error)
        })
    },
    onCancelClick() {
      console.log('Cancel!')
    },
    cleanForm() {
      this.restaurant = {
        name: '',
        slug: '',
        imageUrl: '',
        description: '',
        address: '',
        city: '-',
        category: '-',
        text: ''
      }
    }
  }
}
</script>

<style scoped>
#buttons {
  margin-top: 1.5em;
}
#buttons > button {
  margin-left: 0.8em;
}
</style>
