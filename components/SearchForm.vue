<template>
  <div >
    <input v-model="searchInput" class="input" type="text" :placeholder="placeholder">
    <button @click="actionClick" :class="showLoading ? 'is-loading' : ''" class="button is-light is-inverted">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Input...'
    },
    buttonText: {
      type: String,
      default: 'Send'
    },
    showLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchInput: ''
    }
  },
  methods: {
    actionClick() {
      this.$emit('onActionClick', this.searchInput.trim())
    }
  }
}
</script>

<style scoped>
.input {
  width: 80% !important;
}
</style>
