<template>
  <div id="main" class="container is-fluid">
    <h1 class="title is-1">Restaurants List</h1>
    <table class="table is-striped is-fullwidth">
      <thead>
        <th class="restaurant-id">Id</th>
        <th class="restaurant-name">Restaurant name</th>
        <th class="restaurant-actions">Actions</th>
      </thead>
      <tbody>
        <tr v-for="(restaurant, index) in restaurants" :key="restaurant.id">
          <td class="restaurant-id">{{ restaurant.id }}</td>
          <td class="restaurant-name">{{ restaurant.name }}</td>
          <td class="restaurant-actions">
            <nuxt-link class="button is-secondary" :to="`admin/${restaurant.id}`">
              <span class="icon"><i class="fa fa-edit"></i></span>
              <span>Edit</span>
            </nuxt-link>
            <button class="button is-danger" @click="onDeleteClick(index, restaurant.id)">
              <span class="icon"><i class="fa fa-trash"></i></span>
              <span>Delete</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from '@/plugins/firebase'

export default {
  data() {
    return {
      restaurants: []
    }
  },
  created() {
    const response = db.collection('restaurants').get()
    response
      .then((snapshot) => {
        console.log(snapshot)
        snapshot.forEach((doc) => {
          this.restaurants.push({
            id: doc.id,
            ...doc.data()
          })
        })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    onDeleteClick(index, id) {
      this.deleteDocument(id).then(() => {
        this.restaurants.splice(index, 1)
      })
    },
    deleteDocument(id) {
      return db.collection('restaurants').doc(id).delete()
    }
  }
}
</script>

<style scoped>
.restaurant-id {
  width: 16em;
}
.restaurant-name {
  min-width: 16em;
}
.restaurant-actions {
  width: 14em;
}
</style>
