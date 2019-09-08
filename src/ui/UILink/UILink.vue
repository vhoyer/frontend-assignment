<template>
  <RouterLink
    v-if="$attrs.to"
    :tag="tag"
    v-on="$listeners"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <slot />
  </RouterLink>
  <component
    v-else
    :is="tag"
    v-on="$listeners"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'a',
      validator: tag => [
        'a',
        'button',
        'router-link',
      ].includes(tag),
    },
  },
}
</script>
