<template>
  <div
    class="ui-card"
    :class="{
      [`ui-card--${padding}`]: padding !== 'none',
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    padding: {
      type: String,
      default: 'none',
      validator: value => [
        'none',
        'small',
        'medium',
        'large',
      ].includes(value),
    },
  },
}
</script>

<style lang="scss" src="./UICard.scss"></style>
