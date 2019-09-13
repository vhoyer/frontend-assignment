<template>
  <RouterLink
    v-if="$attrs.to"
    v-bind="$attrs"
    :tag="tag"
    #default="{ href, route, navigate, isActive, isExactActive }"
  >
    <UIText
      :tag="tag"
      v-bind="{ ...$attrs, href }"
      :class="[staticClasses,{
        'ui-link--active': isActive,
        'ui-link--exact-active': isExactActive,
      }]"
      :style="dynamicStyle"
      v-on="$listeners"
      @click="navigate"
    >
      <slot />
    </UIText>
  </RouterLink>
  <UIText
    v-else
    :tag="tag"
    :class="staticClasses"
    :style="dynamicStyle"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </UIText>
</template>

<script>
export default {
  name: 'UILink',
  props: {
    tag: {
      type: String,
      default: 'a',
    },
    color: {
      type: String,
      default: 'primary-light',
    },
  },
  computed: {
    staticClasses() {
      return 'ui-link'
    },
    dynamicStyle() {
      const style = {}

      if (this.color !== 'inherit') {
        style['--ui-link-color'] = `var(--color-${this.color})`
      }

      return style
    },
  },
}
</script>

<style lang="scss" src="./UILink.scss"></style>
