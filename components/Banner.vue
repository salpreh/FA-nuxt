<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <slot name="header"></slot>
      <button class="button is-primary" @click="$emit('onShowClick')"> {{ buttonText }} </button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: 'Show'
    }
  }
}
</script>

<style scoped>
.hero {
  margin-bottom: 1em;
}
button {
  margin-top: 1em;
}
</style>
