<template>
  <component
    :is="tag"
    class="ui-text"
    :class="{
      'ui-text--error': error,
      [`ui-text--${size}`]: size !== 'inherit',
      [`ui-text--${variant}`]: variant !== 'default',
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
    variant: {
      type: String,
      default: 'default',
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" src="./UIText.scss"></style>
