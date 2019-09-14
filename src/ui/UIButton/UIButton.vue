<template>
  <button
    :type="type"
    class="ui-button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
}
</script>

<style lang="scss" src="./UIButton.scss"></style>
