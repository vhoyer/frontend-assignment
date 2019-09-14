<template>
  <component
    :is="tag"
    class="ui-text"
    :class="{
      [`ui-text--${size}`]: size !== 'inherit',
      [`ui-text--${type}`]: type !== 'default',
    }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'UIText',
  props: {
    tag: {
      type: String,
      default: 'span',
    },
    size: {
      type: String,
      default: 'inherit',
      validator: value => [
        'inherit',
        'small',
        'medium',
        'large',
      ].includes(value),
    },
    type: {
      type: String,
      default: 'default',
    },
  },
}
</script>

<style lang="scss" src="./UIText.scss"></style>
