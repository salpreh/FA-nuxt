<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="imageSrc" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ title }}</p>
          <p class="subtitle is-6"></p>
        </div>
      </div>
      <div class="level">
        <span :class="category ? 'is-light' : 'is-white'" class="tag level-left">{{ category }}</span>
        <button class="fa fa-heart button is-danger is-outlined level-right" @click="addLike"> {{ likeCount }}</button>
      </div>

      <div class="content">
        <slot></slot>
      </div>
      <div class="content">
        <a :href="infoUrl" :class="infoUrl ? '' : 'disabled'" class="button is-info is-outlined">More info</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'imageSrc': {
      type: String,
      default: 'https://bulma.io/images/placeholders/1280x960.png'
    },
    title: String,
    subtitle: String,
    category: String,
    infoUrl: String
  },
  data() {
    return {
      likeCount: 0
    }
  },
  methods: {
    addLike() {
      this.likeCount++
    }
  }
}
</script>

<style scoped>
</style>
