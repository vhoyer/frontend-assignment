<template>
  <button
    :type="type"
    class="ui-button"
  >
    <UIText>
      <slot />
    </UIText>
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
