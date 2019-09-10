<template>
  <component
    :is="tag"
    class="ui-text"
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
  },
}
</script>
