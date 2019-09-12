<template>
  <RouterLink
    v-if="$attrs.to"
    v-bind="$attrs"
    :tag="tag"
    #default="{ href, route, navigate, isActive, isExactActive }"
  >
    <UIText
      :tag="tag"
      v-on="$listeners"
      v-bind="{ ...$attrs, href }"
      @click="navigate"
      :class="[staticClasses,{
        'ui-link--active': isActive,
        'ui-link--exact-active': isExactActive,
      }]"
      :style="dynamicStyle"
    >
      <slot/>
    </UIText>
  </RouterLink>
  <UIText
    v-else
    :tag="tag"
    :class="staticClasses"
    :style="dynamicStyle"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot/>
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
