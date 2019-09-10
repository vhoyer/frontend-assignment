<template>
  <RouterLink
    v-if="$attrs.to"
    :tag="tag"
    v-bind="$attrs"
    @click.native="$emit('click')"
    #default="{ href, route, navigate, isActive, isExactActive }"
  >
    <component
      :is="tag"
      v-on="$listeners"
      v-bind="{
        ...$attrs,
        href,
      }"
      @click="navigate"
      :class="[classes,{ 'ui-link--active': isActive }]"
    >
      <slot/>
    </component>
  </RouterLink>
  <component
    v-else
    :is="tag"
    :class="classes"
    v-on="$listeners"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'UILink',
  props: {
    tag: {
      type: String,
      default: 'a',
    },
  },
  computed: {
    classes() {
      return 'ui-link'
    },
  },
}
</script>

<style lang="scss" scoped>
.ui-link {
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
