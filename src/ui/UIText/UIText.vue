<template>
  <component
    :is="tag"
    class="ui-text"
    :class="{
      [`ui-text--${size}`]: size !== 'inherit',
    }"
  >
    <slot/>
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
  },
}
</script>

<style lang="scss" src="./UIText.scss"></style>
